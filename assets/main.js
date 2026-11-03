/* Shared helpers and stage table, moved unchanged from the single-page site. */
const $ = (s, r=document) => r.querySelector(s), $$ = (s, r=document) => [...r.querySelectorAll(s)];
const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const NS = "http://www.w3.org/2000/svg";
function el(tag, attrs, parent){ const e=document.createElementNS(NS,tag); for(const k in attrs) e.setAttribute(k,attrs[k]); if(parent) parent.appendChild(e); return e; }
function txt(p,x,y,s,a={}){ const t=el("text",Object.assign({x,y,fill:"var(--ink2)","font-size":"12"},a),p); t.textContent=s; return t; }
const esc = s => String(s??"").replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pct = v => v==null ? "–" : Math.round(v*100)+"%";
function usd(k){ const v=k*1000; return v>=1e9?"$"+(v/1e9).toFixed(1)+"B":v>=1e6?"$"+(v/1e6).toFixed(0)+"M":"$"+(v/1e3).toFixed(0)+"K"; }
function tons(t){ return t>=1e6?(t/1e6).toFixed(1)+"M t":t>=1e3?(t/1e3).toFixed(1)+"k t":Math.round(t)+" t"; }

const tip = $("#tip");
function showTip(html, ev){ tip.innerHTML=html; tip.classList.add("on"); moveTip(ev); }
function moveTip(ev){ const w=tip.offsetWidth, h=tip.offsetHeight; let x=ev.clientX+14, y=ev.clientY+14;
  if(x+w>innerWidth-8) x=ev.clientX-w-14; if(y+h>innerHeight-8) y=ev.clientY-h-14; tip.style.left=x+"px"; tip.style.top=y+"px"; }
function hideTip(){ tip.classList.remove("on"); }
function segInit(group, attr, cb){ $$("button",group).forEach(b=>b.addEventListener("click",()=>{ $$("button",group).forEach(x=>x.setAttribute("aria-pressed",x===b)); cb(b.dataset[attr]); })); }

const STG = [
  {id:"S1",short:"Ores",name:"Ores & concentrates",codes:"2530.90 · 2612.20",col:"--s1",
   what:"Mining output and upstream feedstock, such as Myanmar's shipments to China.",
   noise:"Both codes are catch-all lines, and most of what they hold is not rare earths. Treat S1 as an upper bound."},
  {id:"S2",short:"Oxides",name:"Compounds & oxides",codes:"2846.10 · 2846.90",col:"--s2",
   what:"Separation and refining output, the stage where China's processing lead sits.",
   noise:"Cerium is cheap, so value and weight can tell different stories. Myanmar's mixed carbonates probably enter here."},
  {id:"S3",short:"Metals",name:"Metals",codes:"2805.30",col:"--s3",
   what:"Rare-earth metals, the input to magnet alloys.",
   noise:"Alloys sit in other codes (7202.99, 3606.90) and are kept out of the stages for now."},
  {id:"S4",short:"Magnets",name:"Permanent magnets",codes:"8505.11",col:"--s4",
   what:"NdFeB and SmCo magnets, the high-value stage at the centre of H1 and H3.",
   noise:"Also includes non-rare-earth metal magnets. The EU splits out rare-earth magnets only from 2023."},
  {id:"placebo",short:"Placebo",name:"Ferrite magnets (placebo)",codes:"8505.19",col:"--plc",
   what:"Non-metal magnets, which rare-earth policy does not target.",
   noise:"Should show no breaks at rare-earth policy events. If it does, the break is not about rare earths."}
];

/* Grow embedded same-origin pages (the predictor) to their content height. */
document.querySelectorAll("iframe[data-autosize]").forEach(f => {
  const fit = () => { try { const d = f.contentDocument; if (d && d.documentElement) f.style.height = (d.documentElement.scrollHeight + 4) + "px"; } catch (e) {} };
  f.addEventListener("load", () => { fit(); setInterval(fit, 600); });
});
