import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const base = new URL('../', import.meta.url);
const metadata = JSON.parse(readFileSync(new URL('package.json',base),'utf8'));
if (readFileSync(new URL(metadata.icon,base)).length > 256 * 1024) throw new Error('Plugin icon must not exceed 256 KiB');
let css = readFileSync(new URL('src/theme.css',base),'utf8');
for (const name of ['spring.webp','chibi.jpg','spring-shoulder-bow.png','blue-butterfly.png','flower-watercolor.png']) {
 const mime = name.endsWith('.png') ? 'image/png' : name.endsWith('.webp') ? 'image/webp' : 'image/jpeg';
 css = css.replaceAll(`ASSET:${name}`,`data:${mime};base64,${readFileSync(new URL('assets/'+name,base)).toString('base64')}`);
}
const source = readFileSync(new URL('src/client.js',base),'utf8');
mkdirSync(new URL('lib/',base),{recursive:true});
writeFileSync(new URL('lib/client.js',base),`window.__ModuleLoader__.load({id:'dsh-client-ui-skin-ayaka-frost',factory:()=>{\nconst CSS=${JSON.stringify(css)};\n${source}\nreturn {apply,inject:['layout']};\n}});\n`);
console.log('Built Ayaka skin with packaged, offline artwork.');






