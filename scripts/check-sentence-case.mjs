import assert from 'node:assert/strict';
import * as catalogue from '../src/catalogue.js';
import * as data from '../src/data.js';
import * as learning from '../src/learning-catalogue.js';

const listKeys=new Set(['outputs','scope','inputs']);
let total=0;
const violations=[];
const visited=new WeakSet();
function walk(value,where){
  if (!value || typeof value !== 'object' || visited.has(value)) return;
  visited.add(value);
  if(Array.isArray(value)){value.forEach((v,i)=>walk(v,where+'['+i+']'));return;}
  for(const [key,child] of Object.entries(value)){
    if(listKeys.has(key) && Array.isArray(child)) {
      child.forEach((item,i)=>{
        if(typeof item!=='string') return;
        total++;
        if(/^\s*[a-z]/.test(item)) violations.push(where+'.'+key+'['+i+']: '+item);
      });
    }
    walk(child,where+'.'+key);
  }
}
walk(catalogue,'catalogue');
walk(data,'data');
walk(learning,'learning');
assert.equal(violations.length,0,'All list items must use sentence case:\n'+violations.join('\n'));
console.log('PASS: '+total+' service list items start with uppercase or technical acronyms.');
