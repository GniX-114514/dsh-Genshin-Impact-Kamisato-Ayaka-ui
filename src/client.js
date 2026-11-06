function apply(ctx) {
 const body=document.body;
 const original=body.getAttribute('data-ayaka-frost');
 const style=document.createElement('style');
 style.dataset.ayakaOwned='style';style.textContent=CSS;
 const scene=document.createElement('div');
 scene.className='ayaka-scene';scene.setAttribute('aria-hidden','true');
 let disposed=false;
 const cleanup=()=>{
  if(disposed)return;disposed=true;style.remove();scene.remove();
  if(body.getAttribute('data-ayaka-frost')==='') {
   if(original===null)body.removeAttribute('data-ayaka-frost');
   else body.setAttribute('data-ayaka-frost',original);
  }
 };
 ctx.effect(()=>cleanup,'ayaka-frost: appearance lifecycle');
 try {document.head.append(style);body.prepend(scene);body.setAttribute('data-ayaka-frost','');}
 catch(error){cleanup();throw error;}
}
