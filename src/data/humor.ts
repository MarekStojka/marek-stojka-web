export const humorBooks = [
 { id:'autokatastrofa',title:'Autokatastrofa',href:'#autokatastrofa',link:'O knize',color:'#b63870' },
 { id:'all-demente',title:'All Demente',href:'#all-demente',link:'O knize',color:'#3c4ac0' },
 { id:'hospovidky',title:'Hospovídky',href:'#hospovidky',link:'O knize',color:'#087b6c' },
 { id:'s-rande',title:'(S)Rande',href:'#s-rande',link:'O knize',color:'#872ea5' },
] as const;


/** Working web copy adapted from the author's descriptions in Freelo project 555974. */
export const humorBookDetails:Record<string,{annotation:string;note?:string;volumes?:{title:string;description:string}[]}>= {
 'autokatastrofa':{annotation:'Povídky o autě, životě a kocourovi. Autokatastrofa hledá humor v příbězích, které si každodennost píše po svém.'},
 's-rande':{annotation:'Divadelní hra o šíleně absurdním rande. Setkání, které rozhodně nepoběží podle běžného seznamovacího scénáře.'},
 'all-demente':{
  annotation:'Vesnice, parta kluků a punkový způsob života. Vztahy a velké problémy jednoho malého světa, který si dokáže zkomplikovat i docela obyčejný víkend.',
  volumes:[
   {title:'P(i)lot',description:'Stavba plotu, která se nedaří. Během jediného víkendu se místo ní zvrtne osud hned několika lidem.'},
   {title:'Provázka',description:'Dívka z vesnice vyráží do města. Trochu se v něm ztratí, něco prožije a nakonec se vrací do své vesničky.'},
  ],
 },
 hospovidky:{annotation:'Příběhy z hospody vyprávěné jako pohádky. Hospovídky spojují hospodský svět s pohádkovou formou.',note:'Ilustrace jsou plánované ve spolupráci s Vojtěchem Dolanou.'},
};
