import React from 'react';
import {renderToString} from 'react-dom/server';
import fs from 'node:fs';
import path from 'node:path';
import {Site} from '../.ssr/main.js';
import {allRoutes,services,details,industries,programmes,detailPath} from '../src/data.js';
const root=path.resolve('dist');
// The SPA shell has a default canonical for hosts which do not run prerender.
// Drop it here so each generated route receives exactly one route-specific canonical/og:url.
const shell=fs.readFileSync(path.join(root,'index.html'),'utf8').replace(/<link rel="canonical" href="https:\/\/technicaconsult\.com\/"\/>/g,'').replace(/<meta property="og:url" content="https:\/\/technicaconsult\.com\/"\/>/g,'');
const manifest=JSON.parse(fs.readFileSync('.openai/hosting.json','utf8'));
// TECHNICA CONSULT public canonical host; never use the preview/staging domain.
const origin='https://technicaconsult.com';
const titles={'/':'Engineering, Process Safety & Competency','/about':'About Us','/services':'Our Expertise','/industries':'Industries','/learning':'Professional Learning & Development','/learning/programmes':'Learning Programmes','/learning/corporate':'Corporate Learning','/resources':'Resources','/resources/company-overview':'Company Overview','/certificates':'Certificates','/energy-optimization':'Energy Optimization','/services/energy-optimization':'Energy Optimization','/software-solutions':'Software Solutions','/services/learning-competency':'Professional Learning & Development','/services/learning-competency/competency-frameworks':'Competency Frameworks & Assessment Support','/contact':'Contact','/privacy':'Privacy Notice','/terms':'Website Terms'};
const descriptions={};
for(const s of services){titles['/services/'+s.slug]=s.name;descriptions['/services/'+s.slug]=s.description}
for(const d of details){titles[detailPath(d)]=d.name;descriptions[detailPath(d)]=d.summary}
for(const i of industries){titles['/industries/'+i.slug]=i.name;descriptions['/industries/'+i.slug]=i.description}
for(const p of programmes){titles['/learning/programmes/'+p.slug]=p.name;descriptions['/learning/programmes/'+p.slug]=p.description}
function escape(s){return s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')}
let linkCount=0;
for(const route of [...allRoutes,'/404']){
 const html=renderToString(React.createElement(Site,{initialPath:route}));
 if(/&lt;\/?(?:br|div|span|strong|h[1-6]|p)(?:\s|\/|&gt;)/i.test(html))throw new Error(`Visible HTML markup in ${route}`);
 if(!html.includes('<h1'))throw new Error(`No h1 in ${route}`);
 for(const m of html.matchAll(/href="([^"#]*)"/g)){
  const href=m[1].split('?')[0];
  if(href.startsWith('/')&&!allRoutes.includes(href)&&!fs.existsSync(path.join(root,href.slice(1))))throw new Error(`Broken link ${m[1]} in ${route}`);
  linkCount++;
 }
 const title=escape((titles[route]||'Page Not Found')+' — TECHNICA CONSULT');
 const description=escape(descriptions[route]||'Specialist engineering, process safety, management systems and competency development for industrial organisations.');
 const canonical=origin+(route==='/'?'/':route+'/');
 const output=shell.replace('<div id="root"></div>',`<div id="root">${html}</div>`).replace(/<title>.*?<\/title>/,`<title>${title}</title>`).replace(/<meta name="description" content="[^"]*"\/>/,`<meta name="description" content="${description}"/>`).replace('</head>',`<link rel="canonical" href="${canonical}"/><meta property="og:url" content="${canonical}"/><meta property="og:title" content="${title}"/><meta property="og:description" content="${description}"/><meta property="og:type" content="website"/><meta property="og:image" content="${origin}/assets/industrial-vibrant.webp"/><meta name="twitter:card" content="summary_large_image"/><link rel="icon" href="/assets/favicon.png" type="image/png"/>${route==='/404'?'<meta name="robots" content="noindex"/>':''}</head>`);
 const out=route==='/404'?path.join(root,'404.html'):path.join(root,route.slice(1),'index.html');
 fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,output);
}
const sitemap=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${allRoutes.map(r=>`<url><loc>${origin}${r==='/'?'/':r+'/'}</loc></url>`).join('')}</urlset>`;
fs.writeFileSync(path.join(root,'sitemap.xml'),sitemap);
fs.writeFileSync(path.join(root,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n');
fs.writeFileSync(path.join(root,'_redirects'),'/* /index.html 200\n');
console.log(`PASS: prerendered ${allRoutes.length} pages and 404; validated ${linkCount} links. Site ${manifest.project_id}`);
