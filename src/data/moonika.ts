/** Author notes from Freelo project 555974, task 26874394; adapted without plot spoilers. */
export const moonika = {
  title: 'Moonika',
  author: 'Marek Stojka',
  release: '2027',
  introduction: 'Moonika vzniká v té části mého světa, která není veselá. Ve smutku a temnějších pocitech, kterým dávám prostor ve svém psaní.',
  quotes: [] as { text: string; source?: string }[],
  reviews: [] as { text: string; author: string; source?: string; url?: string }[],
  annotation: 'Dívka s nadpřirozenými schopnostmi vypráví příběh, který prožila. Nezůstává ale jen u vyprávění — obrací se přímo na vás. Moonika pracuje s rozhovorem se čtenářem a s pocity, které v něm příběh vyvolává. Spíš než klasická kniha je to experiment s tím, jak blízko k vám může vyprávění přijít.' as string | null,
  excerpt: null as { title: string; paragraphs: string[] } | null,
  authorNote: 'Mooniku pojímám spíše jako experiment než klasickou knihu. Důležitý je pro mě rozhovor se čtenářem a práce s jeho pocity. Přemýšlím také o netradiční vazbě, limitovaných edicích i klasické verzi do knihovny. Konkrétní podobu ještě připravuji.',
};

/** Layout-only samples: never present these as manuscript excerpts or real reviews. */
export const moonikaPreviewQuotes = [
  { text: 'Některé věci v nás zůstávají, i když už z nich zbyl jen popel.' },
  { text: 'Ticho není prázdné. Jen v něm všechno slyšíš jinak.' },
  { text: 'Nejtěžší bylo vrátit se tam, odkud jsem nikdy neodešel.' },
];
export const moonikaPreviewReviews = [
  { text: 'Nejvíc na mě zapůsobilo to, co zůstává nevyřčené. Atmosféra se pomalu usazuje a nepouští ani po poslední stránce.', author: 'Ukázkový čtenářský ohlas', source: 'Text pouze pro návrh' },
  { text: 'Tiché, temné a velmi osobní. Kniha, u které jsem měl potřebu některé věty číst dvakrát.', author: 'Ukázková krátká recenze', source: 'Text pouze pro návrh' },
];
