/** Time state is independent of the visitor's timezone; timestamps are absolute. */
export function meetingCountdown(now:number,start:number,end=NaN){
 const total=Math.max(0,Math.ceil((start-now)/1000));
 return {
  days:Math.floor(total/86400), hours:Math.floor(total%86400/3600), minutes:Math.floor(total%3600/60), seconds:total%60,
  state:now<start?'upcoming':Number.isFinite(end)?(now<end?'ongoing':'ended'):'started',
  running:now<start||(Number.isFinite(end)&&now<end),
 } as const;
}
