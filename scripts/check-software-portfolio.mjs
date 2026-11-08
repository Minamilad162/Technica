import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {softwareApplications} from '../src/data.js';
const expected=['ORBIT LOTO','ORBIT PTW','ORBIT RISK','ORBIT SIMOPS','ORBIT INSIGHT','ORBIT FIELD'];
assert.deepEqual(softwareApplications.filter(x=>x.suite==='orbit').map(x=>x.name),expected);
assert.equal(softwareApplications.length,11);
assert.equal(new Set(softwareApplications.map(x=>x.id)).size,11);
assert.equal(softwareApplications.find(x=>x.id==='hse-insight')?.name,'ORBIT INSIGHT');
assert.equal(softwareApplications.find(x=>x.id==='moc-rfc')?.name,'Orbit MOC');
for(const a of softwareApplications){
 for(const key of ['name','category','description','problem','value','icon','color','visual'])assert.ok(a[key],'Missing '+key+' on '+a.id);
 assert.ok(fs.existsSync(path.join('public',a.visual.replace(/^\//,''))),'Missing artwork for '+a.id);
}
console.log('PASS: TC ORBIT modules, existing solutions, stable anchors and artwork');
