import fs from 'node:fs';
import path from 'node:path';
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)])}
if(fs.existsSync('public/assets/service-visuals'))throw new Error('Retired vector artwork must not be included in this photographic release.');
let count=0;
for(const file of files('public/assets')){
 const ext=path.extname(file).toLowerCase();if(!['.png','.webp','.jpg','.jpeg'].includes(ext))continue;
 const b=fs.readFileSync(file);let valid=b.length>=32;
 if(ext==='.webp')valid=valid&&b.toString('ascii',0,4)==='RIFF'&&b.toString('ascii',8,12)==='WEBP'&&b.readUInt32LE(4)+8===b.length;
 if(ext==='.png')valid=valid&&b.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))&&b.subarray(-12,-8).readUInt32BE()===0&&b.toString('ascii',b.length-8,b.length-4)==='IEND';
 if(ext==='.jpg'||ext==='.jpeg')valid=valid&&b[0]===255&&b[1]===216&&b.subarray(Math.max(0,b.length-128)).includes(Buffer.from([255,217]));
 if(!valid)throw new Error(`Empty, incomplete or invalid image: ${file}`);count++;
}
console.log(`PASS: ${count} raster assets have valid signatures and complete containers.`);
