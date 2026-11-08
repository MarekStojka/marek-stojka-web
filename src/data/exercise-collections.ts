import { creativeExercises, type CreativeExercise } from './creative-exercises';

interface ExerciseCollection {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  icon: 'story' | 'network' | 'spark' | 'book' | 'draw' | 'compass';
  matches: (exercise: CreativeExercise) => boolean;
  first: string[];
}

// Editorial selections for the versions described on this site. An exercise can
// belong to several selections; durations always use the same data as its detail.
const collections: ExerciseCollection[] = [
  {
    id: 'pro-jednotlivce', title: 'Pro jednotlivce', subtitle: 'Když tvoříte sami', icon: 'story',
    intro: 'Vlastní tempo a prostor pro soustředění. Tato zadání zvládnete od začátku do konce sami.',
    matches: exercise => exercise.audience.includes('solo'),
    first: ['tricet-kruhu', 'psani-bez-zastaveni', 'kresleni-bez-pohledu', 'nahodne-slovo', 'rande-s-tvorivosti'],
  },
  {
    id: 'pro-skupiny', title: 'Pro skupiny', subtitle: 'Ve dvou i s celým týmem', icon: 'network',
    intro: 'Sdílejte nápady, navazujte na druhé a tvořte společně. Konkrétní počet lidí najdete vždy v detailu.',
    matches: exercise => exercise.audience.includes('group'),
    first: ['ano-a', 'tiche-predavani-napadu', 'tajemna-spolecna-kresba', 'sam-ve-dvou-vsichni', 'brainstorming'],
  },
  {
    id: 'rychlovky', title: 'Rychlovky', subtitle: 'Do 15 minut včetně', icon: 'spark',
    intro: 'Krátká pauza, rozehřátí před tvorbou nebo malý úkol na každý den. Včetně času na závěrečné zamyšlení.',
    matches: exercise => exercise.minutes <= 15,
    first: ['jine-vyuziti-cihly', 'jeden-souvisly-tah', 'snehova-koule-ze-slov', 'deset-a-dalsich-deset', 'ano-a'],
  },
  {
    id: 'pro-psani', title: 'Pro psaní', subtitle: 'Slova, příběhy a fantazie', icon: 'book',
    intro: 'Rozepsat se, objevit nečekanou zápletku nebo změnit styl. Začněte jednou větou a sledujte, kam vás zavede.',
    matches: exercise => exercise.group === 'psani',
    first: ['psani-bez-zastaveni', 'fantasticka-dvojice', 'co-kdyby', 'zakazane-pismeno', 'jedna-prihoda-pet-stylu'],
  },
  {
    id: 'pro-kresleni', title: 'Pro kreslení', subtitle: 'Obraz, tvar a materiál', icon: 'draw',
    intro: 'Zkoumejte čáry, skládejte obrazy a měňte obyčejné tvary. Nejde o dokonalý obrázek, ale o to zkusit nový postup.',
    matches: exercise => exercise.group === 'obraz' || ['tricet-kruhu', 'osm-napadu-za-osm-minut', 'tajemna-spolecna-kresba', 'pribeh-peti-symboly'].includes(exercise.slug),
    first: ['kresleni-bez-pohledu', 'tricet-kruhu', 'nakreslete-prazdno', 'kolaz-protikladu', 'tajemna-spolecna-kresba'],
  },
  {
    id: 'pro-hledani-reseni', title: 'Pro hledání řešení', subtitle: 'Když potřebujete jiný pohled', icon: 'compass',
    intro: 'Přineste konkrétní otázku nebo rozpracovaný nápad. Hledejte jiné možnosti, prověřte předpoklady a vyzkoušejte další krok.',
    matches: exercise => ['scamper', 'nahodne-slovo', 'spojte-dva-svety', 'kombinacni-skrinka', 'myslenkova-mapa', 'vymysleni-s-omezenim', 'provokace-po', 'sest-myslicich-klobouku', 'vejir-moznosti', 'musi-to-tak-byt', 'jak-bychom-mohli', 'inspirace-z-jineho-oboru', 'napad-jako-komiks', 'brainstorming', 'tiche-predavani-napadu', 'sam-ve-dvou-vsichni', 'jak-to-pokazit', 'reseni-jako-scenka', 'pribeh-peti-symboly', 'slozte-silnejsi-napad', 'premysleni-rukama'].includes(exercise.slug),
    first: ['jak-bychom-mohli', 'scamper', 'sest-myslicich-klobouku', 'musi-to-tak-byt', 'premysleni-rukama'],
  },
];

export const exerciseCollections = collections.map(({ matches, first, ...collection }) => {
  const matching = creativeExercises.filter(matches);
  const priorities = new Map(first.map((slug, index) => [slug, index]));
  return {
    ...collection,
    exercises: matching.sort((a, b) => (priorities.get(a.slug) ?? first.length) - (priorities.get(b.slug) ?? first.length)),
  };
});
