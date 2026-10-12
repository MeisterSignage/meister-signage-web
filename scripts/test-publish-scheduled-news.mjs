import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const script=fileURLToPath(new URL('./publish-scheduled-news.mjs',import.meta.url));
const root=await mkdtemp(path.join(tmpdir(),'news-publish-test-'));
try {
 const dir=path.join(root,'content/news');await mkdir(dir,{recursive:true});
 const mock=path.join(root,'clock.mjs');await writeFile(mock,"Date.now=()=>Date.parse('2026-10-13T07:00:00.000Z');\n");
 for(const [slug,date,status,extra] of [
  ['import-due','2026-10-13T07:00:00.000Z','scheduled','share_social: false'],
  ['regular-due','2026-10-13T06:59:00.000Z','scheduled',''],
  ['future','2026-10-13T07:00:01.000Z','scheduled','share_social: false'],
  ['draft','2026-10-12T00:00:00.000Z','draft',''],
 ]) await writeFile(path.join(dir,slug+'.md'),`---\nslug: "${slug}"\ndate: "${date}"\nstatus: ${status}\n${extra}\n---\n\nOriginal text\n`);
 const output=path.join(root,'output');
 function run(){const result=spawnSync(process.execPath,['--import',mock,script],{cwd:root,env:{...process.env,GITHUB_OUTPUT:output},encoding:'utf8'});assert.equal(result.status,0,result.stderr);}
 run();
 for(const slug of ['import-due','regular-due'])assert.match(await readFile(path.join(dir,slug+'.md'),'utf8'),/^status: published$/m);
 assert.match(await readFile(path.join(dir,'future.md'),'utf8'),/^status: scheduled$/m);
 assert.match(await readFile(path.join(dir,'draft.md'),'utf8'),/^status: draft$/m);
 assert.equal(await readFile(output,'utf8'),'published_slugs=regular-due\n');
 await writeFile(output,'');run();assert.equal(await readFile(output,'utf8'),'published_slugs=\n');
 console.log('PASS: due-date boundary, future/draft protection, no duplicate social delivery, idempotence.');
} finally {await rm(root,{recursive:true,force:true});}
