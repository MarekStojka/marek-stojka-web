// Original rounded paint fingers; shared by page edges and the entry pour.
const fingers=[{x:90,w:34,d:.6},{x:208,w:48,d:1},{x:340,w:28,d:.46},{x:446,w:56,d:.84},{x:590,w:32,d:.58},{x:700,w:46,d:.95},{x:826,w:30,d:.45},{x:936,w:58,d:.78},{x:1080,w:34,d:1},{x:1198,w:48,d:.56},{x:1340,w:30,d:.88}];
export function paintEdge(base:number,depth:number){
 let path=`M0 -100H1440V${base}`;
 for(const f of [...fingers].reverse()){
  const right=f.x+f.w/2,left=f.x-f.w/2,bottom=base+depth*f.d,radius=f.w/2;
  path+=`H${right+18}Q${right} ${base} ${right} ${base+18}V${Math.max(base+18,bottom-radius)}Q${right} ${bottom} ${f.x} ${bottom}Q${left} ${bottom} ${left} ${Math.max(base+18,bottom-radius)}V${base+18}Q${left} ${base} ${left-18} ${base}`;
 }
 return path+'H0Z';
}
