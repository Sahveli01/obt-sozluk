import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';
const S={baslangic:[90,200],orta:[150,320],ileri:[150,320]};
const kat=process.argv[2]||null;
let n=0,b=0;
for(const d of (await readdir('src/content/terimler')).sort()){
  const m=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(await readFile(path.join('src/content/terimler',d),'utf8'));
  if(!m)continue; const fm=parse(m[1]); if(fm.status==='stub')continue;
  if(kat&&fm.category!==kat)continue; n++;
  const g=m[2];
  const k=g.replace(/^##.*$/gm,'').replace(/```[\s\S]*?```/g,'').replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g,'$2').replace(/\[\[([^\]]+)\]\]/g,'$1').split(/\s+/).filter(x=>/\p{L}|\p{N}/u.test(x)).length;
  const [a,u]=S[fm.level]??[0,9999];
  const h=[...g.matchAll(/^##\s+(.+)$/gm)].map(x=>x[1].trim());
  const sor=[];
  if(k<a)sor.push(`kısa(${k}<${a})`); if(k>u)sor.push(`uzun(${k}>${u})`);
  if(!fm.short||fm.short.length>160)sor.push('short');
  if(h[0]!=='Nedir?')sor.push('ilk başlık≠Nedir?');
  if(fm.status!=='taslak')sor.push('status');
  if(!fm.related||fm.related.length<2)sor.push('related<2');
  if(sor.length){b++;console.log('X',d.replace('.md',''),'—',sor.join(', '));}
}
console.log(`${n} terim, ${b} kural dışı.`);
