/** Author-approved category wording. Biographical details remain working copy. */
export const authorFaces = [
  {
    id: 'temnota', title: 'Umím děsit', anchor: 'tvar-temnota',
    description: 'Píšu hororové a psychologické příběhy. Zajímají mě temné světy, postavy pod tlakem a otázky, na které není příjemné odpovídat.',
    note: 'Do téhle části patří i připravovaná kniha Moonika.',
    href: '/temnota', linkLabel: 'Přečíst si příběhy',
  },
  {
    id: 'absurdita', title: 'Mám rád humor', anchor: 'svet-absurdita',
    description: 'Humorné příběhy, pohádky a slovní hříčky. Pracuji tu s ironií, nečekanými situacemi a nápady, které se záměrně neřídí běžnou logikou.',
    note: 'Prostor pro lehčí a trochu drzejší polohu mého psaní.',
  },
  {
    id: 'napady', title: 'Jsem kreativec', anchor: 'koncept',
    description: 'Reklamní koncepty, kampaně a slogany. Zajímá mě, jak z pozorování nebo jedné věty vznikne nápad, který může nést celou komunikaci.',
    note: 'Tady bude místo pro konkrétní ukázky a myšlenky, ze kterých vznikly.',
  },
  {
    id: 'experimenty', title: 'Rád experimentuji', anchor: 'experiment',
    description: 'Zkouším vlastní aplikace, AI a automatizace. Na malých digitálních projektech si ověřuji, co se stane, když nápad dostane skutečnou podobu a někdo ho začne používat.',
    note: 'Prostor pro rozpracované nástroje a věci, které se teprve učím stavět.',
  },
] as const;

export const authorProfile = {
  name: 'Marek Stojka',
  introduction: 'Píšu příběhy, vymýšlím reklamní nápady a stavím vlastní digitální projekty.',
  biography: [
    'Na webu ukazuji, co tvořím, jak nad svou prací přemýšlím a co právě vzniká.',
  ],
  // Only populate with real, user-supplied experience. Never invent years or clients.
  experience: [] as { title: string; description: string; period?: string }[],
};

export const authorServices = [
  { title: 'Dodám kvalitní čtení', description: 'Knihy a příběhy, do kterých se dá ponořit.' },
  { title: 'Vymyslím reklamu', description: 'Od první myšlenky ke konceptu kampaně.' },
  { title: 'Vytvořím brand', description: 'Název, charakter a nápad, který drží značku pohromadě.' },
  { title: 'Nakreslím banner nebo tištěnou grafiku', description: 'Digitální bannery i grafika pro tisk.' },
  { title: 'Napíšu slogan', description: 'Krátká věta, která vystihne podstatu.' },
  { title: 'Naučím vás myslet kreativně', description: 'Společně procvičíme nové úhly pohledu a práci s nápady.' },
] as const;
