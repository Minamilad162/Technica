// Ensure iOS/Safari sharing metadata and SEO links use the live official domain.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {allRoutes} from '../src/data.js';
const publicOrigin='https://technicaconsult.com';
const dist=path.resolve('dist');
function content(relative){return fs.readFileSync(path.join(dist,relative),'utf8')}
for(const route of allRoutes){
 const file=route==='/'?'index.html':path.join(route.slice(1),'index.html');
 const html=content(file);
 const canonical=publicOrigin+(route==='/'?'/':route+'/');
 assert.ok(html.includes('<link rel="canonical" href="'+canonical+'"/>'),'Incorrect canonical in '+file);
 assert.ok(html.includes('<meta property="og:url" content="'+canonical+'"/>'),'Incorrect og:url in '+file);
 assert.ok(!/chatgpt\.site|nimblehippo128/i.test(html),'Preview domain in '+file);
}
const sitemap=content('sitemap.xml'),robots=content('robots.txt');
assert.ok(sitemap.includes('<loc>'+publicOrigin+'/</loc>'),'Homepage missing from sitemap');
assert.ok(!/chatgpt\.site|nimblehippo128/i.test(sitemap),'Preview domain in sitemap');
assert.ok(robots.includes('Sitemap: '+publicOrigin+'/sitemap.xml'),'Incorrect robots sitemap URL');
assert.ok(!/chatgpt\.site|nimblehippo128/i.test(robots),'Preview domain in robots');
console.log('PASS: '+allRoutes.length+' canonical/share URLs, sitemap and robots use '+publicOrigin);
