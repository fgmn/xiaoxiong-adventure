/* Rules shared by the browser and dependency-free Node tests. */
(function(root){'use strict';
const KEY='little-bear-adventure-v1';
const TIMELINE=['receive','read','draft','mute','wait'];
const LINKS=[['phone','timeline'],['draft','cup'],['ticket','notebook']];
const defaults=()=>({version:1,case:{room:0,found:[],drawer:false,timeline:false,cup:false,ticket:false,deductions:[],confronted:[],completed:false},factory:{cleared:[],level:0,module:false,listened:false,secrets:[],deaths:0},shop:{served:[],stamps:0,repeats:0,closed:false},after:{walk:50,found:[],theme:'moon',frame:'cream',gallery:[],furniture:[]},letterRead:false});
function hydrate(raw){const s=defaults();if(!raw||raw.version!==1)return s;for(const k of ['case','factory','shop','after'])if(raw[k]&&typeof raw[k]==='object')Object.assign(s[k],raw[k]);for(const [k,fields] of Object.entries({case:['found','deductions','confronted'],factory:['cleared','secrets'],shop:['served'],after:['found','gallery','furniture']}))for(const f of fields)if(!Array.isArray(s[k][f]))s[k][f]=[];s.letterRead=raw.letterRead===true;s.case.room=Math.max(0,Math.min(2,Number(s.case.room)||0));s.factory.level=Math.max(0,Math.min(2,Number(s.factory.level)||0));s.shop.stamps=Math.max(0,Number(s.shop.stamps)||0);return s;}
const uniqueAdd=(a,v)=>{if(!a.includes(v))a.push(v);};
const timelineOK=a=>a.length===5&&a.every((v,i)=>v===TIMELINE[i]);
const deduction=(a,b)=>LINKS.findIndex(p=>p.includes(a)&&p.includes(b)&&a!==b);
function chapterDone(s,k){if(k==='detective')return s.case.completed&&[0,1,2].every(i=>s.case.confronted.includes(i))&&s.case.timeline&&s.case.cup&&s.case.ticket;if(k==='factory')return [0,1,2].every(i=>s.factory.cleared.includes(i))&&s.factory.module&&s.factory.listened;if(k==='shop')return ['tea','cookie','gift'].every(i=>s.shop.served.includes(i));return false;}
const canLetter=s=>['detective','factory','shop'].every(k=>chapterDone(s,k));
const overlap=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
function packingOK(items){return items.length===4&&new Set(items.map(i=>i.id)).size===4&&items.every((a,i)=>Number.isInteger(a.x)&&Number.isInteger(a.y)&&a.x>=0&&a.y>=0&&a.x+a.w<=4&&a.y+a.h<=3&&items.every((b,j)=>i===j||!overlap(a,b)));}
const TEA_RECIPES=[['红茶','牛奶','蜂蜜'],['绿茶','牛奶','蜂蜜'],['红茶','燕麦奶','草莓']];
function teaOK(chosen,recipe,fill,stirs){return chosen.length===3&&chosen.every((v,i)=>v===recipe[i])&&fill>=68&&fill<=84&&stirs>=4;}
const cookieOK=(mix,temp,elapsed)=>mix.flour===2&&mix.butter===1&&mix.sugar===1&&temp>=175&&temp<=185&&elapsed>=6&&elapsed<=9;
function place(items,piece,x,y){const p={...piece,x,y};if(x<0||y<0||x+p.w>4||y+p.h>3||items.some(i=>i.id!==p.id&&overlap(p,i)))return null;return [...items.filter(i=>i.id!==p.id),p];}
function safeLayout(items){return items.filter(x=>x&&typeof x.id==='string').slice(0,12).map(x=>({id:x.id,x:Math.max(5,Math.min(85,Number(x.x)||50)),y:Math.max(20,Math.min(82,Number(x.y)||50)),r:[0,90,180,270].includes(x.r)?x.r:0}));}
const api={KEY,defaults,hydrate,uniqueAdd,TIMELINE,LINKS,timelineOK,deduction,chapterDone,canLetter,overlap,packingOK,TEA_RECIPES,teaOK,cookieOK,place,safeLayout};root.BearRules=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
