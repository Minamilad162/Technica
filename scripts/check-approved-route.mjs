import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const root=process.cwd();
const read=p=>readFileSync(resolve(root,p),'utf8');
const source=read('src/main.jsx');
assert.ok(source.includes('function ApprovedCoursesSection()'),'ApprovedCoursesSection missing');
assert.ok(source.includes("d.slug==='accredited-approved-programmes'&&<ApprovedCoursesSection/>"),'Route integration missing');
assert.ok(source.includes('<div className="approved-accreditation-heading"><h3>Accreditation</h3></div>'),'Shared heading missing');
for(const file of ['iosh-approved-provider-5268.webp','iasp-nasp.webp'])assert.ok(existsSync(resolve(root,'public/assets/approvals',file)),'Missing logo '+file);
const htmlPath=resolve(root,'dist/learning/accredited-approved-programmes/index.html');
if(existsSync(htmlPath)){
 const html=read('dist/learning/accredited-approved-programmes/index.html');
 assert.equal((html.match(/class="approved-accreditation-heading"/g)||[]).length,1);
 assert.equal((html.match(/class="approved-accreditor-card"/g)||[]).length,2);
 assert.ok(html.includes('IOSH Approved Leading Safely with TECHNICA CONSULT'));
 assert.ok(html.includes('IOSH Approved Managing Safely® course with TECHNICA CONSULT'));
}
console.log('PASS approved programme route: component, two logos, shared Accreditation title');
