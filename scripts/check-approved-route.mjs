import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const root=process.cwd();
const read=p=>readFileSync(resolve(root,p),'utf8');
const source=read('src/main.jsx');
assert.ok(source.includes('function ApprovedCoursesSection()'),'ApprovedCoursesSection missing');
assert.ok(source.includes("d.slug==='accredited-approved-programmes'&&<ApprovedCoursesSection/>"),'Route integration missing');
assert.ok(source.includes('<div className="approved-accreditation-heading"><h3>Accreditation</h3></div>'),'Shared accreditation heading missing');
assert.ok(source.includes('<div className="approved-courses-heading"><h3>IOSH Approved Courses</h3></div>'),'Shared IOSH heading missing');
assert.ok(!source.includes('className="approved-course-pill"'),'Duplicate per-card IOSH badge still present');
for(const file of ['iosh-approved-provider-5268.webp','iasp-nasp.webp'])assert.ok(existsSync(resolve(root,'public/assets/approvals',file)),'Missing logo '+file);
const htmlPath=resolve(root,'dist/learning/accredited-approved-programmes/index.html');
if(existsSync(htmlPath)){
 const html=read('dist/learning/accredited-approved-programmes/index.html');
 assert.equal((html.match(/class="approved-accreditation-heading"/g)||[]).length,1,'Accreditation heading should appear once');
 assert.equal((html.match(/class="approved-courses-heading"/g)||[]).length,1,'IOSH Approved Courses heading should appear once');
 assert.equal((html.match(/class="approved-accreditor-card"/g)||[]).length,2,'Two accreditation logos expected');
 assert.equal((html.match(/class="approved-course-card"/g)||[]).length,2,'Two IOSH course cards expected');
 assert.equal((html.match(/class="approved-course-pill"/g)||[]).length,0,'Repeated IOSH card pills found');
 assert.ok(html.includes('<h4>Leading Safely with TECHNICA CONSULT</h4>'),'Leading Safely heading not found');
 assert.ok(html.includes('<h4>Managing Safely® course with TECHNICA CONSULT</h4>'),'Managing Safely heading not found');
}
console.log('PASS approved programmes: single section headings; two logos; two course cards without duplicated IOSH badges');
