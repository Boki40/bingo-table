import CountDownRule from "../../components/CountDownRule";
import RandomSip from "../../components/RandomSip";
import RuleTimer from "../../components/RuleTimer";
import SpotifyLink from "../../components/SpotifyLink";
import { Game } from "../../types/game";
import FlagGame from "../../components/FlagGame";

export const mandatoryGames: Game[] = [
  {
    cimke: "Játék",
    szoveg:
      "Akiknél szerepel ez a szám, egyezzenek meg és válasszanak egyet az alábbiak közül:",
    customComponent: () => <RandomSip />,
  },
  {
    cimke: "Zászló",
    szoveg:
      "Aki a számmal rendelkező játékosok küzül először kitalálja, hogy melyik ország zászlaja ez, mentesül az ivás alól, a többiek [k] kortyot isznak.",
    customComponent: () => <FlagGame />,
  },
];

export const games: Game[] = [
  {
    cimke: "Feladat",
    szoveg:
      "2 körig minden kérdésre válaszolnod kell, és ha megtagadod a választ, minden kérdésnél [k] kortyot iszol!",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={2}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Zászló",
    szoveg:
      "Ha a számokkal rendelkező játékosok közül senki sem tudja, hogy melyik zászló ez, akkor [k] kortyot isznak.",
    customComponent: () => <FlagGame />,
  },
  {
    cimke: "Zászló",
    szoveg:
      "Ha a számmal nem rendelkező játékosok közül valaki kitalálja, hogy melyik zászló ez, akkor a számmal rendelkező játékosok [k] kortyot isznak.",
    customComponent: () => <FlagGame />,
  },
  {
    cimke: "Játék",
    szoveg:
      "A számot birtoklók közül válasszon egyet az, aki a legfiatalabb (az eredmény nem csak arra vonatkozik aki választ):",
    customComponent: () => <RandomSip />,
  },
  {
    cimke: "Játék",
    szoveg:
      "A számot birtoklók közül válasszon egyet az, aki a legidősebb (az eredmény nem csak arra vonatkozik aki választ):",
    customComponent: () => <RandomSip />,
  },
  {
    cimke: "Játék",
    szoveg:
      "A számot birtoklók közül válasszon egyet az, aki a legkevesebbet itta eddig (az eredmény nem csak arra vonatkozik aki választ):",
    customComponent: () => <RandomSip />,
  },
  {
    cimke: "Feladat!",
    szoveg:
      "Ha van nálad cigi, annyi kortyot iszol ahány szál van nálad! (maximum 8)",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Igyál [k] kortyot, miközben a tőled balra ülő játékos a füledbe suttog.",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Csukd be a szemed és próbálj felismerni minden játékost az illatáról! Igyál [k] kortyot, ha nem sikerül.",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány játékos alacsonyabb nálad!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány játékos barnább nálad!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány játékos fehérebb nálad!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány játékos idősebb nálad!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány játékos fiatalabb nálad!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány játékos magasabb nálad!",
  },
  {
    cimke: "Feladat",
    szoveg: "Vegyél le valamilyen ruhát magadról, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Válassz valakit, akivel bemutatsz egy lassú táncot a kezeddel a másik seggén! Ha az illető visszautasítja, mindketten [k] kortyot isztok!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Akiknél ez a szám szerepel, egyezzenek meg, hogy kinek osztanak ki [k] kortyot.",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Nézz farkasszemet a tőled jobbra ülővel. Ha veszítesz, [k] kortyot iszol.",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      'Olvasd fel hangosan az első találatot a "bocsánat" szóra az üzenetek között, vagy igyál [k] kortyot!',
  },
  {
    cimke: "Feladat",
    szoveg:
      'Olvasd fel hangosan az első találatot a "hiányzol" szóra az üzenetek között, vagy igyál [k] kortyot!',
  },
  {
    cimke: "Feladat",
    szoveg:
      'Olvasd fel hangosan az első találatot a "lyuk" szóra az üzenetek között, vagy igyál [k] kortyot!',
  },
  {
    cimke: "Feladat",
    szoveg:
      'Olvasd fel hangosan az első találatot a "szex" szóra az üzenetek között, vagy igyál [k] kortyot!',
  },
  {
    cimke: "Feladat",
    szoveg:
      "3 másodperced van, hogy megmondd hányan vannak a teremben. Ha elhibázod, [k] kortyot iszol!",
  },
  {
    cimke: "Feladat",
    szoveg: "5 perced van befejezni az italod!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Adj két percre korlátlan hozzáférést a tőled balra ülőnek a Facebookodhoz, vagy igyál [k] kortyot!",
  },

  {
    cimke: "Feladat",
    szoveg: "Csinálj 3 táncmozdulatot, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Csinálj 6 guggolást, és mindegyik között igyál egy kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Csinálj valamit, amit a tőled balra ülő mond neked. Ha elutasítod, [k] kortyot iszol.",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Csukd be a szemed! Ha elmondod kinek mi van a poharában!. Ha nem sikerül, [k] kortyot iszol.",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Csukd be a szemed, majd mondd meg a melletted ülők cipőjének a színét, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Csukd be a szemed, majd mondd meg a melletted ülők szeme színét, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Engedd meg a tőled jobbra ülőnek, hogy elküldjön egy snapet a telefonodról. Ha visszautasítod, igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Felelsz, mersz vagy iszol [k] kortyot? A tőled balra ülő tehet fel egy kérdést neked!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Fuss körbe a teremben mint egy haldokló csirke, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Fuss körbe mint egy disznó, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Grimaszolj miközben valaki készít rólad egy képet, majd igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Guggolj 40-et, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "5 körig csendben kell maradnod, vagy húzd le az italod!",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={5}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Ha dohányzol, dobj el egy cigit a kukába vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 One Direction dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="4AK6F7OLvEQ5QYCBNiQWHq?si=A7Plgvv2Rl-LT6-uR1s6Iw" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 Azariah dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="6EIriUxo7vznEgJtTDlXpq?si=aphDFOwjRdm7-iZsDKuL_A" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 Avril Lavigne dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="0p4nmQO2msCgU4IF37Wi3j?si=8g86lk_eQieSgWUF6udyZA" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 Lady Gaga dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="1HY2Jd0NmPuamShAr6KMms?si=KEvzJpmDRUicMiXXWjUfZQ" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 Lagzi Lajcsi dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="2S9AJNRuoVw1Gn3I1n6Y65?si=xKTKfWzxRqOw00q6y-HH-Q" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 Linkin Park dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="6XyY86QOPPrYVGvF9ch6wz?si=tk5b7ls1RpqUq0_72fC4tA" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 Carson Coma dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="1q7g5SBAxtjizS3Vcof6Y6?si=7iTeIO9ISqSaYNOO-NWDbQ" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 Zámbó Jimmy dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="7pZH7c4HbKE0ONErpw9cjP?si=buLvHftNQlG5ySyOeEUZjA" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 SP dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="5k2dnlbkrNTacsiUCfnkky?si=7b2bb5f9db7c4bcf" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 Selena Gomez dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="0C8ZW7ezQVs4URX5aX7Kqx?si=9b29a8f683ed4396" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 Twenty One Pilots dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="3YQKmKGau1PzlVlkL1iodx?si=4234cda1ad9b4760" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mondd el 3 Imagine Dragons dal címét, vagy igyál [k] kortyot.",
    customComponent: () => (
      <SpotifyLink artistId="53XhwfbYqKCa1cC15pYq2q?si=e9bf2099ef4742d9" />
    ),
  },
  {
    cimke: "Feladat",
    szoveg:
      "Ha nem tudod a tőled jobbra ülő mindegyik nevét, akkor iszol [k] kortyot.",
  },
  {
    cimke: "Feladat",
    szoveg: "Hívd meg egy barátodat most a buliba, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Akiknél szerepel ez a szám, játszanak egymás között hüvelykujj párbajt. A vesztesek [k] kortyot isznak!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Igyál [k] kortyot. Tőled jobbra mindenki mindig eggyel kevesebbet iszik, amíg el nem éritek a nullát.",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot ahány üres pohár van az asztalon!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány nagybácsid van!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány nagynénid van!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány nem üres pohár van az asztalon!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány pohár italt megittál már.",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahányszor dobtak!",
  },
  {
    cimke: "Feladat",
    szoveg: "Imitálj egy kígyót 5 másodpercig, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Imitálj egy teknőst 5 másodpercig, vagy igyál [k] kortyot.",
  },
  {
    cimke: "Feladat",
    szoveg:
      "A tőled balra ülő játékos annyi kortyot itathat veled, amennyit szeretne, és ő tartja a poharat!",
  },
  {
    cimke: "Feladat",
    szoveg: "Jelölj ismerősnek 10 embert Facebookon, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Játszd le a legutóbb hallgatott szám elejét a mobilodon. Ha a többség nem szereti, akkor innod kell [k] kortyot.",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Kortyolj egyet az italodból a kezeid használata nélkül. Sok sikert!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Kérdezz valami nehezet hangosan. Ha valaki tudja a választ, [k] kortyot iszol.",
  },
  {
    cimke: "Feladat",
    szoveg:
      'Küldd el valakinek hogy "Szeretlek", akit a tőled balra ülő választ, vagy igyál [k] kortyot! (más nem lehet az üzenetben)',
  },
  {
    cimke: "Feladat",
    szoveg:
      "Küldj egy pajkos üzenetet valakinek, akit a tőled jobbra ülő választ, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Lájkold az első 15 bejegyzés Facebookon, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Meséld el az eddigi legromantikusabb tettedet, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Mond el az utolsó film címét amit moziban láttál! Annyi kortyot iszol, ahányan látták rajtad kívül.",
  },
  {
    cimke: "Feladat",
    szoveg: "Találd ki a jobb oldaladon ülő korát vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Mondd el az ábécét visszafelé hibátlanul, 20 másodpercen belül, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Mondd el mindenkinek a keresztnevét és a korát! ahányszor hibázol, annyiszor [k] kortyot iszol.",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Mondd meg a tőled jobbra ülő csillagjegyét, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Mondd meg a tőled balra ülő kedvenc színét, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Mondj egy viccet, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Mondj el egy vicces történetet az egyik játékosról, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Mondj mindenkihez egy erősséget, és igyál is mindegyik mellé!",
  },
  {
    cimke: "Feladat",
    szoveg: "Mondj mindenkihez egy gyengeséget, és igyál is mindegyik mellé!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Mondj valamit amit még SOHA nem csináltál. Ha valaki már igen, igyál [k] kortyot.",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Mosolyogj egy percig megállás nélkül. [k] kortyot iszol ha abbahagyod idő előtt!",
    customComponent: () => <RuleTimer minutes={1} />,
  },
  {
    cimke: "Feladat",
    szoveg:
      "Mosolyogj négy körig megállás nélkül. [k] kortyot iszol ha abbahagyod idő előtt!",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={4}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Mutasd meg az utolsó öt képet a mobilodon vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Mutass be egy robot táncot, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Mutass meztelen képeket a mobilodon, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Nyald meg a tőled balra ülő kezét, vagy igyál [k] kortyot.",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány fehér ruhát viselsz!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány fekete ruhát viselsz!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Igyál annyi kortyot, ahány pohár ital már elfogyott a társaságban!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány pohár italt megittatok már összesen.",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány szingli ember van az asztalnál!",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány testvéred van.",
  },
  {
    cimke: "Feladat",
    szoveg: "Igyál annyi kortyot, ahány vörös ruhát viselsz!",
  },
  {
    cimke: "Feladat",
    szoveg: " Igyál [k] kortyot, ha nincs rajtad vörös ruha!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Sorold fel a tőled balra ülő legalább 3 exét, vagy igyál [k] kortyot.",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Tegyél ki egy képet Facebookra, amit a többi játékos választ, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Ugorj 40-et, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Állj kézen, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Énekelj egy Justin Bieber dalrészletet, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Írj egy hozzászólást az első bejegyzéshez amit meglátsz Facebookon, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Felállva és egyenes lábakkal érintsd meg a lábujjaid, vagy igyál [k] kortyot.",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Akinek nagyobb a tenyere azok közül akiknél szerepel ez a szám, az [k] kortyot iszik.",
  },
  {
    cimke: "Feladat",
    szoveg: "Érintsd meg az orrodat a nyelveddel, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Igyál [k] kortyot, ha nyitva hagyod az ajtót, amikor otthon kimész WC-re!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Tessék komoly képet vágni! 3 körig nem mosolyoghatsz, vagy [k] kortyot iszol.",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={3}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Felállni!",
    szoveg:
      "Aki utolsónak állt fel azok közül akiknél szerepel ez a szám, az [k] kortyot iszik.",
  },
  {
    cimke: "Játék",
    szoveg: "3 körig fel vagy mentve az ivás alól.",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={3}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Nyald meg a könyöked, vagy igyál [k] kortyot.",
  },
  {
    cimke: "Feladat",
    szoveg: "Mondj egy inspiráló idézetet, vagy igyál [k] kortyot.",
  },
  {
    cimke: "Játék",
    szoveg:
      "Igyál [k] kortyot, ha szólt már rád tanár órán, mert nem figyeltél vagy beszélgettél!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Válaszd ki a következő dalt! Ha van olyan a társaságban akinek nem tetszik, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Igyál annyi kortyot, ahányféle színű ruhát visel a tőled balra ülő játékos!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Igyon [k] kortyot, a szám birtokában lévő játékosok közül az aki legrégebbóta van párkapcsolatban!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Igyon [k] kortyot, a szám birtokában lévő játékosok közül az aki többet volt szingli!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Tegyél úgy, mintha életed  legfinomabb ételét etted volna meg, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha szerinted cukibb vagy mint a tőled jobbra ülő játékos, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: " 10 után keltél délelőtt? Ha igen, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "10 előtt keltél délelőtt? Ha igen, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál annyi kortyot ahány betű van a keresztnevedben!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál annyi kortyot ahány betű van a vezetéknevedben!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál annyi kortyot ahány betű van az autód márkájának a nevében!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál annyi kortyot, ahány játékos nem ismerősöd Facebookon!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál annyi kortyot, ahány játékos nem ismerősöd Snapchaten!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál annyi kortyot, ahány játékos aludt már nálad!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha 2-nél kevesebb pohárral ittál ma eddig, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha 2-nél több pohárral ittál ma eddig, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha a korod egy páros szám, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha a korod egy páratlan szám, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha a lábaid nincsenek leborotválva, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha a szüleid kidíszítik a házat kívülről karácsonyra minden évben, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha a telefonod a zsebedben van, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha adtál már valakinek több mint 1500 Ft borravalót, igyál ki [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha aludtál már el ülő pozícióban egy klubban, ossz ki [k] kortyot! Ha nem, idd meg te!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha az első aktusod 16 éves korod után történt, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha dobtak már, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha dobtál már valakit telefonon, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha ez az első italod, idd meg a felét!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha fejeztél már be Rubik kocka kirakást, akkor igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha grilleztél már a tőled jobbra ülő játékossal, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha göndör hajad van, igyál [k] kortyot! Ha nem, te iszol!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha hajnali 5 előtt értél haza a legutóbbi bulidból, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha hajnali 6-nál tovább maradtál a legutóbbi bulidban, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha használtad a lift helyett a lépcsőt a héten, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha használtál dezodort mielőtt idejöttél, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha használtál már levelet papír helyett a WC-n, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha hazudtál már a korodról, hogy kapj alkoholt, igyál [k] kortyot!",
  },

  {
    cimke: "Játék",
    szoveg: "Ha hosszú hajad van, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha hánytál már kocsmában vagy szórakozóhelyen, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha hívtad már meg a balra ülő játékost egy házibuliba hozzád, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha húztál már le röviditalokat a balra ülő játékossal, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha ijedtél már meg póktól, ami kisebb volt, mint a körmöd, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha kisebb a lábad, mint a balra ülő játékos lába, akkor igyál [k] kortyot!",
  },

  {
    cimke: "Játék",
    szoveg:
      "Ha követed Kardashian-ék életét vagy valami még rosszabb reality műsort, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha legutóbb otthon vizeltél, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha loptál már boltból, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha lány vagy, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha láttad már, hogy a tőled jobbra ülő játékos lehúz egy röviditalt, igyál [k] kortyot!",
  },

  {
    cimke: "Játék",
    szoveg:
      "Ha már ettél a McDonald's-ban 6000 Ft-nál többért, igyál [k] kortyot!",
  },

  {
    cimke: "Játék",
    szoveg: "Ha már kezdtél verekedést, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha már szartál az iskolában vagy a munkahelyeden, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha már több mint 3 embert dobtál, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha már vezettél idegen országban, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha még nem volt lófarkas frizurád, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha nem szívószállal iszol, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha nem vagy szingli és a pároddal vagy itt, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha nem vettél még 85 ezer forintnál drágább telefont, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha nincs szakállad, igyál [k] kortyot!",
  },

  {
    cimke: "Játék",
    szoveg:
      "Ha néztél már végig baseball, vagy kosármeccset teljesen, igyál [k] kortyot!",
  },

  {
    cimke: "Játék",
    szoveg: "Ha oktattál már valamit diákoknak, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha rendeztél már egy rövid filmet, vagy szerepeltél benne, igyál [k] kortyot!",
  },
  {
    cimke: "Vírus",
    szoveg:
      "Mostantól 5 körig felváltva le kell, hogy ülj és fel kell hogy állj. Ha elfelejted, [k] kortyot iszol!",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={5}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Vírus",
    szoveg:
      "Mostantól 5 körig jelentkezned kell, ha beszélni szeretnél! A többi játékos pedig felszólít! Ha elfelejted, [k] kortyot kell innod!",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={5}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Vírus",
    szoveg:
      "Mostantól 4 körig nem beszélhetsz. Akárhányszor megszólalsz, iszol 2 kortyot.",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={4}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Vírus",
    szoveg:
      "Mostantól 5 körig tilos hozzáérned a hajadhoz vagy az arcodhoz! Minden hozzáérés 2 korty büntetéssel jár!",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={5}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Játék",
    szoveg: "Ha rossz az irányérzéked, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha gördeszkáztál már egy parkban, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha sminkeltél mielőtt idejöttél, igyál [k] kortyot",
  },
  {
    cimke: "Játék",
    szoveg: "Ha szereted a kávét cukor nélkül, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha szundítottál már munkában, vagy órán, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha tömegközlekedéssel jutottál ide, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha vallottál már valakinek szerelmet részegen, igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Egy percig nem pisloghatsz, ha nem sikerül, igyál [k] kortyot!",
    customComponent: () => <RuleTimer minutes={1} />,
  },
  {
    cimke: "Feladat",
    szoveg: "Tedd a lábad a nyakadba, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Rajzolj egy arcot a kezedre, és beszélj azzal a következő 5 körben, vagy igyál minden körben [k] kortyot!",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={5}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Hagyd, hogy valaki kisminkeljen, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Beszélj a következő 3 körben úgy, hogy kilóg a nyelved. Ha nem teszed, minden körben igyál [k] kortyot!",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={3}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Feladat",
    szoveg: "Tegyél egy jégkockát a pólódba, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      'Ordítsd ki az ablakon, hogy "Hétágra süt a nap!", vagy igyál [k] kortyot!',
  },
  {
    cimke: "Feladat",
    szoveg: "Énekelj el egy magyar népdalt, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg: "Énekeld el egy mulatós zene refrénjét, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Játsz a következő 4 körben póló és nadrág nélkül, vagy igyál [k] kortyot!",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={4}
        currentRound={currentRound}
      />
    ),
  },
  { cimke: "Feladat", szoveg: "Igyál meg egy pohár bort 15 másodperc alatt!" },
  {
    cimke: "Feladat",
    szoveg:
      "Borotváld le az egyik srác lábát a szobában, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Hívj fel egy random telefonszámot, és vallj szerelmet neki, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Beszélj megállás nélkül 10 percen át, akármiről, ami eszedbe jut, vagy igyál [k] kortyot minden percben!",
    customComponent: () => <RuleTimer minutes={10} />,
  },
  {
    cimke: "Feladat",
    szoveg:
      "Játszd el a következő 3 körben, hogy az ellenkező nemhez tartozol, vagy igyál minden körben [k] kortyot!",
    customComponent: (activatedInRound: number, currentRound: number) => (
      <CountDownRule
        activatedInRound={activatedInRound}
        activeForNumberOfRounds={3}
        currentRound={currentRound}
      />
    ),
  },
  {
    cimke: "Feladat",
    szoveg:
      "A tőled jobbra ülő játékos itasson meg téged úgy, hogy ő tartja a poharad. Szívószál használata tilos!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "A tőled balra ülő játékos itasson meg téged úgy, hogy ő tartja a poharad. Szívószál használata tilos!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha van olyan barátod, akivel általában idegen nyelven beszélsz, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha vetted már fel a hangod éneklés közben, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha vettél már be szintetikus drogokat, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Ha vezettél már gyorsabban, mint 150 km/h, akkor igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha volt már idén hasmenésed igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha voltál moziban a héten, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha voltál már babysitter, ossz ki [k] kortyot! Ha még nem, igyál!",
  },
  {
    cimke: "Feladat",
    szoveg: "Csinálj 10 fekvőtámaszt, vagy igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha voltál már érintett részeg bunyóban, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Igyál [k] kortyot, ha be tervezed fejezni a bulit 3 előtt! Ha nem, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Igyál [k] kortyot, ha beszéltél már a házasságról vagy a gyerekekről a jelenlegi vagy a volt partnereddel!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha valakit nem kedvelsz a társaságból!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Igyál annyiszor [k] kortyot, ahány magánhangzó van a keresztnevedben!",
  },
  {
    cimke: "Feladat",
    szoveg:
      "Igyál annyiszor [k] kortyot, ahány mássalhangzó van a keresztnevedben!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál annyiszor [k] kortyot, ahány exeddel már nem beszélsz!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál annyiszor [k] kortyot, ahány nyelven be tudsz mutatkozni!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál annyiszor [k] kortyot, ahány országban jártál már!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Igyál annyiszor [k] kortyot, ahány általános iskolás osztálytársaddal még ma is tartod a kapcsolatot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha van tetoválásod, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha szereted a kávét, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha van testvéred, igyál [k] kortyot!",
  },
  { cimke: "Játék", szoveg: "Ha van háziállatod, igyál [k] kortyot!" },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha szereted a horrorfilmeket!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál annyi kortyot, ahány játékos van játékban!",
  },
  { cimke: "Játék", szoveg: "Ha van piercinged, igyál [k] kortyot!" },
  { cimke: "Játék", szoveg: "Ha szereted a csokit, igyál [k] kortyot!" },
  { cimke: "Játék", szoveg: "Ha van jogosítványod, igyál [k] kortyot!" },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha már voltál szerelmes valakibe idén!",
  },
  { cimke: "Játék", szoveg: "Ha szereted a macskákat, igyál [k] kortyot!" },
  { cimke: "Játék", szoveg: "Ha van valami fóbiád, igyál [k] kortyot!" },
  {
    cimke: "Játék",
    szoveg:
      "Igyál annyiszor [k] kortyot, ahány évvel idősebb vagy a legfiatalabb játékostársadnál!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Igyál annyiszor [k] kortyot, ahány évvel fiatalabb vagy a legidősebb játékostársadnál!",
  },
  {
    cimke: "Játék",
    szoveg: "Ha még nem ittál meg két pohárral, igyál [k] kortyot!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha lány vagy.",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha fiú vagy.",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha használod a TikTokot!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha már csináltál képet hírességről!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Igyál annyiszor [k] kortyot, ahány játékost a becenevén szólitasz!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha volt már egyéjszakás kalandod!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Igyon [k] kortyot a játékosok közül, akiknél szerepel ez a szám, akinek a legkevesebb arcszőrzete van!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Igyon [k] kortyot a játékosok közül, akiknél szerepel ez a szám, akinek a legtöbb arcszőrzete van!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha balkezes vagy!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha jobbkezes vagy!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha szőke hajad van!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha barna hajad van!",
  },
  {
    cimke: "Játék",
    szoveg: "Igyál [k] kortyot, ha fekete hajad van!",
  },
  {
    cimke: "Játék",
    szoveg:
      "Aki a legmesszebb lakik innen a számot birtoklók közül, az igyon [k] kortyot.",
  },
  /*

          {
              cimke: "Játék",
              szoveg: "Aki az előbb hozzáért a képernyőhöz, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki csókolta már meg egy barátja testvérét, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki először rámutat a legfiatalabb játékosra, kioszt [k] kortyot.",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Aki először talál egy fehér tárgyat, kioszthat [k] kortyot. Bónusz kortyokat oszthatsz, ha fehér alsónemű van rajtad!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki erősebbet iszik mint %s, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki füvezett már, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki játszott már a Pokemon GO-val, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki játszott már a Super Mario Run-nal, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki követi a Barátok Köztöt, az iszik [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki követi a Jóban Rosszbant, az iszik [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki legfiatalabban kapott telefont, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Aki legközelebb iszik, a dupláját igya annak, amit eredetileg kellene!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki legutóbb hányt alkohol miatt, kioszthat [k] kortyot.",
          },
          {
              cimke: "Játék",
              szoveg: "Aki legutóbb zuhanyzott/fürdött, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki ma már nézte a Facebookját, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Aki magasabb, mint %s, igyon annyi kortyot, ahányszor 5 cm-rel magasabb!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Aki maszturbált már, miközben egy barátja partnerére gondolt, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Aki már hagyta el a bankkártyáját, letiltatta, majd megtalálta pár nappal később, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki még nem fingott a partnere előtt, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki nem használja a Telegramot, az igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki nem használja az Instagramot az igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki nézi a Való Világot, az iszik [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Aki több kapcsolatának vetett már véget %s és %s közül, az kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akik betegek ma, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik csókoltak már meg valakit egy éjszakai klubban, osszanak ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik egy kicsit is flörtöltek miközben kapcsolatban voltak, büntetésképpen igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik egyszemélyes ágyban alszanak ma éjjel, osszanak ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akik franciaágyban alszanak ma éjjel, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik húzták már be a hasukat, hogy vékonyabbnak tűnjenek, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akik ittak az előző szabály miatt, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akik ittak az előző szabály miatt, osszanak ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik már fingottak a partnerükön, igyanak [k] kortyot, még egyet ha nevettetek rajta!",
          },
          {
              cimke: "Játék",
              szoveg: "Akik már fizettek %s&nak alkoholt, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akik már legalább 3 településen éltek, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik már loptak biciklit, igyanak [k] kortyot! (Akkor is, ha csak próbálták)",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik már vettek valamit a boltban csak azért, mert közel volt a kasszához, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik már álmodtak arról, hogy valakivel verekednek, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik nagyon utálják a szájhangokat, vagy a ropogó csontok hangját, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akik nem aktívak Twitteren és Instán, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akik nem fürödtek még ma, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akik nem isznak most töményet, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik nem tudnak vizelni, ha túl sokan vannak körülötte, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik próbálták már leírni a nevüket a vizeletükkel, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik szeretik a hagymát és a májat, kioszthatnak [k] kortyot! Akik nem, azoknak innia kell [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akik szexeltek már a Kocc appnak hála, igyanak [k] kortyot! Szívesen!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akinek a kora páros szám, az küldjön valakinek egy képet magáról vagy igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akinek az asztalon van a telefonja, iszik [k] kortyot.",
          },
          {
              cimke: "Játék",
              szoveg: "Akinek barna haja van, iszik [k] kortyot.",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akinek eszébe jutott, hogy a Koccal játszatok, kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akinek legtöbb van a poharában, iszik [k] kortyot! Húzz bele!",
          },
          {
              cimke: "Játék",
              szoveg: "Akinek nincs Twitter fiókja, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: 'Akinek van "e" betű a keresztnevében, iszik [k] kortyot.',
          },
          {
              cimke: "Játék",
              szoveg: "Androidosok, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ateisták, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Az a játékos aki legutóbb volt akvaparkban, osszon ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Az a játékos igyon [k] kortyot, aki utoljára volt WC-n!",
          },
          {
              cimke: "Játék",
              szoveg: "Az a játékos, aki legközelebb lakik innen, kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Az a játékos, aki legrégebb óta szingli, kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Az a játékos, aki legutóbb volt nyaralni %s és %s közül, kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Az a játékos, aki élete során a legtöbb időt töltötték el egy párkapcsolatban, kioszthatnak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Az a játékos, aki éppen egy hosszú és komoly párkapcsolatban van, kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Az a játékos, akinél a legkisebb bankjegy van, kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Az a játékos, akinél a legnagyobb bankjegy van, kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Az a játékos, akit legtöbbször dobtak %s és %s közül, iszik [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Az utolsó játékos, aki WC-n volt iszik [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Az, aki a játékot elindította a telefonján, kioszthat [k] kortyot.",
          },
          {
              cimke: "Játék",
              szoveg: "Azok a fiúk, aki fizikai munkát végeznek, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Azok a seggfejek, akik már loptak rokontól, isznak [k] kortyot.",
          },
          {
              cimke: "Játék",
              szoveg: "Azok a törpék, akik alacsonyabbak mint %s, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Azok az óriások, akik magasabbak mint %s, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Azok, akik egyedül élnek, igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Azok, akik láttak már két részt az Éjjel-Nappal Budapestből, igyanak [k] kortyot! Igyatok még egyet, ha több is volt 2 résznél! ",
          },
          {
              cimke: "Játék",
              szoveg: "Barna szeműek, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Borpártiak! Igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Csak pároknak: Igyon az a pár [k] kortyot, akik legutóbb veszekedtek!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Csórókáim, ha vannak érmék a zsebedben, kioszthattok 1-[k] kortyot olyanoknak, akiknek nincs.",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Dohányosok, akik megpróbáltak leszokni, de nem sikerült, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Fiúk, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Focirajongók, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha Budapesten jársz egyetemre/iskolába, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha Debrecenben jársz egyetemre/iskolába, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha Győrben jársz egyetemre/iskolába, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha Sopronban jársz egyetemre/iskolába, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha Szegeden jársz egyetemre/iskolába, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha a most viselt öltözéked most van rajtad először, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha a szülinapod páratlan napra esik, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha a szülinapod páros napra esik, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  'Ha az óra épp a 10 többszörösét mutatja (8:00, 8:10 ...), akkor az első, aki azt kiáltja, hogy "Baszki, az űrben hagytam a macskámat!", az kioszthat 10 kortyot!',
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha beszéltél már egy barátodnak a Kocc appról, ossz ki [k] kortyot! Ha még nem, akkor ideje lenne, addig is igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha csaltál már vizsgán, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha eddig többet tanultál, mint %s, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha egészségügyben tanulsz, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha festetted már ki a körmödet, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha hallod, hogy valaki felolvassa ezt a mondatot, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha használtál valaha Floppy lemezt, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha hiszel a szellemekben, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha házibuliban vagytok, mindenki igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha játszottál már sportcsapat igazolt játékosaként, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha kevesebb, mint 50 km-re születtél innen, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha kezdtél már inni délelőtt 10 előtt, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha kommunikációs területen tanulsz, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha késtél a Kocc játék elejéről, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha környezettudományban tanulsz, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha küldtél már szabályötletet a Kocc app készítőjének, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha lyukas a zoknid igyál [k] kortyot, és ha lehet vegyél majd újat...",
          },
          {
              cimke: "Játék",
              szoveg: "Ha ma még nem osztottál ki kortyokat, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha marketinget tanulsz, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: 'Ha mondtad már, hogy "Legyünk barátok!", igyál [k] kortyot!',
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha már 2-nél több iskolai vagy egyetemi sportcsapatban játszottál, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha már maszturbáltál zenevideóra, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha még nem rendeltél ruhát az internetről, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha mérnöki szakon tanulsz, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha nagggyon elcsesztél valamit, mikor legutóbb inni voltál, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha nem fér bele a poharad teteje teljesen a szádba, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha nem házibuliban vagytok, mindenki igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha nem sztriptízeltél még, igyál [k] kortyot! Talán épp itt az ideje!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha nem tudod megfogni a kezed a hátad mögött, úgy, hogy az egyik kezedet felülről, a másikat alulról rakod, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha nyertél már 10 ezer forintnál többet lottón, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha nézted már végig ugyanazt a sorozatot több alkalommal, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha olvasod ezt a mondatot, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha olvastad már el a párod üzeneteit titokban, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha posztoltál már Facebookra állapotot vagy videót részegen, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha részeg voltál tegnap, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha szingli vagy, kioszthatsz [k] kortyot egy játékosnak.",
          },
          {
              cimke: "Játék",
              szoveg: "Ha tudsz programozni, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha több, mint 100 km-re születtél innen, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha van a társaságban olyan ember, akit már több, mint 10 éve ismersz, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha van a társaságban olyan ember, akit már több, mint 5 éve ismersz, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha van aktív HBO GO előfizetésed, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha van aktív Netflix előfizetésed, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha van aktív Spotify előfizetésed, ossz ki [k] kortyot és igyál is [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha veszítettél már el telefont, amit nem is találtál meg, igyál [k] kortyot! Ha még nem, oszd ki a [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha volt már mopeded, vagy robogód, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha volt már nemi betegséged, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha voltál már 3 napig alsónemű nélkül, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha voltál már WC-n a buli kezdete óta, igyál [k] kortyot! Ha még nem, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha voltál már a TV-ben, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha voltál már részeg 3 éjszaka egymás után, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha ébredtél már fel úgy, hogy beszéltél közben, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha éppen te vagy a házigazda, legyél nagylelkű, és ossz ki [k] kortyot a vendégek között!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha érezted már magad okosabbnak egy tanárodnál, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha ünnepnapra esik a születésnapod, fogadj el tőlünk ajándékba [k] kortyot! Egészségedre!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha üzleti, vagy pénzügyi területen tanulsz, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Hajháború! Akinek nem barna a haja, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Hajháború! Akinek nem szőke a haja, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyanak azok a lányok [k] kortyot, akik pisiltek már két autó közé guggolva!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyatok [k] kortyot, ha kaptatok már igazolást orvostól úgy, hogy nem járt volna!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyatok [k] kortyot, ha már vizeltetek virágcserépbe!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyatok [k] kortyot, ha pisiltetek már egy barátotokra!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyatok [k] kortyot, ha voltatok már a Balatonnál!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyatok [k] kortyot, ha voltatok már tengerparton!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon %s és %s közül az, akinek sötétebb az alsóneműje. (Ha nincs rajtad, akkor is iszol.)",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot aki már aludt el tanórán!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon [k] kortyot az a játékos, aki legutóbb vizelt egy zuhanyzóba!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon [k] kortyot az a játékos, akinek először volt Facebook fiókja!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon [k] kortyot az a játékos, akit legutóbb állított meg egy rendőr!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot az, aki előtt a legerősebb ital van!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot az, aki utoljára volt WC-n.",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot az, akinek nincs meg %s telefonszáma!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot mindenki, aki táncolt ma már!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, aki legutóbb nyitott ki egy sört!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, aki utoljára csatlakozott!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, akinek a legtöbb Facebook ismerőse van!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, akinek nem barna vagy kék szeme van!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot ha szingli vagy, [k] kortyot ha párkapcsolatban élsz, [k] kortyot, ha kicsit ennél bonyolultabb...",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha a barátaid már lopták el a ruhádat, és te a vízben maradtál!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha a hátralévő életedet a jelenlegi pároddal fogod tölteni!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha a második lábujjad hosszabb, mint a nagylábujjad!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha a partnered gyakran jobban be van gerjedve, mint te!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha a teremben valaki az exed!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha akár már egy pillanatra hittél a horoszkópodnak! Igyál még egyet ha ez egy hónapnál nem régebben történt!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha aludtál már el moziban egy film közben!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha amerikai filmet láttál utoljára!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha az elmúlt hónapban volt rá példa, hogy nemet mondtál egy barátod meghívására a párod miatt!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha be tudod kapni a nagylábujjad.",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha beszéltél már valamelyik testrészedhez!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha bokszeralsó van rajtad!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha buktál már suliban és évet kellett ismételned!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha buliztál már másnap reggel 9-ig!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha bántad már meg, hogy lefeküdtél valakivel!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha csípett már meg lódarázs!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha egy évnél régebben voltál fogorvosnál!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha előztél már valakit rossz oldalról vezetés közben.",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha estél már le a hintáról, miközben próbáltál egyre magasabbra menni!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha ettél már bogarat!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha fehér zokni van rajtad!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha feküdtél le már egy exeddel szakítás után!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha feküdtél már le egy családból több emberrel!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha feküdtél már le valakivel rossz okból!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha felpróbáltad már a párod alsóneműjét!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha fingottál már csókolózás közben!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha fingottál már nyilvánosan, és még egyet ha nem szándékosan történt!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha fingottál már szex közben!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha gondoltál már arra, hogy plasztikai műtétet csináltatsz!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha gondoltál már rá, hogy kideríted, ki vizelt bele a medencébe!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha gonosz vagy részegen!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha gyakran nézed Jimmy Fallont!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha hackelted már meg egy másik játékos Facebook fiókját!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha hallottad már a párod fingani alvás közben!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha hallottad már ahogy egy rokonod épp szexel!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha hasonlítottad már össze a péniszed méretét (vagy a párodét) máséval!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha használtad az MSN-t!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha használtál már szellemidéző táblát, vagy valami hasonlót!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha hánytál már ki egy ablakon!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha húztad már be a hasad, hogy jobban nézz ki!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha ittál már sört reggelire!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha jelentkeztél már TV-s műsorba!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha játszottál már a Clash of Clans-szal vagy a Clash Royal-lal!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha játszottál már a Honfoglalóval!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha játszottál már valamilyen konzolos játékot %s&val!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha kellett már énekelned az osztályod előtt és a tanár rád szólt, hogy hangosabban énekelj!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha kerestél már kifogást azért, hogy valamelyik játékos bulijába ne kelljen elmenned!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha került már valaki miattad kórházba!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha kitiltottak már kaszinóból, kocsmából vagy klubból! Igyál még egyet, ha még mindig ki vagy tiltva!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha kényeztettél már valakit az asztal alatt!",
          },
          {
              cimke: "Játék",
              szoveg:
                  'Igyál [k] kortyot, ha kértél "kölcsön" pénzt a partneredtől úgy, hogy ő nem tudott róla!',
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha közösültél az elmúlt 48 órában!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha lefeküdnél valakivel 3 millió Ft-ért!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha lefeküdtél már valakivel, akit randi alkalmazás segítségével ismertél meg!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha legutóbb nem voltál szavazni!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha lopta már el egy partnered az egyik barátod!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha lopták már el a biciklidet!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha loptál már valamelyik játékostól!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha loptál már valamelyik játékostól!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha lány vagy és használtad már a párod nadrágját vagy pólóját pizsamának!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha láttad már valamelyik játékost meztelenül!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha láttál már sztriptízt élőben!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha maszturbáltál az elmúlt 3 napban!",
          },
          {
              cimke: "Játék",
              szoveg:
                  'Igyál [k] kortyot, ha mondtad valakinek a héten, hogy "Szeretlek"!',
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha mozdultál már rá egy barátod partnerére!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha már csuktad be a szemed horrorfilm közben, még [k] kortyot, ha egy évnél nem régebben történt.",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha már csókoltál meg valakit a saját nemedből a száján!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha már hamisítottál aláírást!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha már kellet neked újra elmondani a Kocc egyik szabályát, mert nem figyeltél!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha már mondtad gyereknek, hogy a Mikulás vagy a Fogtündér nem létezik! Bunkó...",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha már szexeltél a szüleid ágyában!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha már szexeltél idegennel gumi nélkül!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha már volt lánckarkötőd, belevésve a neveddel!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha még nem láttál egy részt sem a South Parkból!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha még soha nem adtál vért!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha mérted már meg a péniszed (vagy a párodét)!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha nem az igazi neveddel vagy fent Facebookon!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha nem szereted a mostohaanyád!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha nem szoktad megmosni a kezed WC-zés után!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha nem tartod magad szépnek!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha nem vettél semmit ma estére (se ital, se étel)!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha nincs ellenedre fizetni a szexért!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha nincs letöltve a Kocc a telefonodra!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha néha megszagolod a használt ruháid, és úgy döntesz, még egy napra jó lesz!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha némítottál már le feliratos filmet és megpróbáltad szinkronizálni a szöveg alapján!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha nézted meg a héten magad meztelenül a tükörben!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha néztél már edzéses videót!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha néztél már ki tömegközlekedési eszközről az ablakon és úgy tettél mintha nem látnál egy idős embert, hogy ne kelljen átadni a helyedet!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha néztél már meg 3-nál több reality részt egyhuzamban!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha néztél már utána a neten diétáknak, és mégsem álltál neki utána!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha próbáltad már elhitetni a szüleiddel, hogy józan vagy!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha próbáltad már öngyújtóval felgyújtani a fingodat!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha próbáltál már megúszni rendőrségi ellenőrzést!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha randiztál már valakivel, akinek órán papíron üzeneteket küldözgettél!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha rendeltél már salátát gyorsétteremben!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha romantikus volt az utolsó film amit láttál!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha rúgtál már be egyedül!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha sohasem voltál munkanélküli!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha szartál már pottyantós WC-be!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha szeretkeztél már a munkahelyeden!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha szeretkeztél már vízben!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha szerettél már bele a babysitter-edbe!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha szerinted a párodnak fura alakú nemi szerve van!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha szerinted az összes játékos menő!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha szerinted okosabb vagy a tőled jobbra ülőnél!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha szerinted valaki a teremben egyáltalán nem vicces.",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha szerinted valakit a csoportból butának tartasz!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha szerinted valakinek a játékosok közül béna neve van!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha szerkesztetted már a profilképedet, hogy jobban nézzél ki!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha szoktál titokban kínos képeket készíteni a barátaidról!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha szállítottak már le tömegközlekedési eszközről!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha szépnek tartod magad!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha sétáltál már 45 percnél többet, hogy buliból hazaérj!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha találtad már meg a kulcsodat a fürdőben vagy a WC-n!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha találtál már ki ivós játékot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha találtál már ki kifogást, hogy ne kelljen munkába menned!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha tartottad már vissza ahelyett, hogy kimentél volna WC-re, csak mert láttál egy horrorfilmet!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha teljesen meztelenül alszol!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha tettettél már betegséget, hogy lógj a suliból vagy a munkahelyedből!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha tettettél már sírást 16 éves korod után, csak azért, hogy felkeltsd a többiek figyelmét!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha tettél már hamis vallomást a rendőrségen, hogy többet kapj a biztosítótól!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha titkoltad már el a párod elől, hogy maszturbáltál!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha titokban szerelmes vagy az egyik barátodba!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha táncoltál már lassú táncot randizás vagy csók nélkül!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha táncoltál már tükör előtt!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha több mint 10 pár cipőd van!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha több mint két diplomád van!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha töltöttél már 3 napot fürdés nélkül!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha töltöttél már el egy estét valakivel úgy, hogy a fűben feküdtetek és néztétek a csillagokat!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha töltöttél már vakációt egy nagyvárosban!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha törted már össze telefon képernyőjét! Ha még nem, ossz ki [k] kortyot és légy büszke!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha törték már fel a Facebook fiókodat!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha vakuztál már véletlenül, miközben titokban akartál képet készíteni!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha valakinek mondtad már az arcába, hogy csúnya!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha van YouTube csatornád! Ossz ki [k] kortyot, ha több, mint 1000 feliratkozód van!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha vetted már kölcsön a szüleid autóját anélkül, hogy tudtak volna róla!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha vettek már őrizetbe!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha vettél már elő véletlenül egy gumit a tárcádból a nem megfelelő emberek előtt!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha vettél már részt Anonim Alkoholista gyűlésen! Mivel itt vagy, nem hiszem hogy sikerrel jártál...",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha vettél már valamit, amit utána sosem használtál!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha vezettél már ittasan!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha vezettél már rossz irányba egyirányú utcában!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha volt Windows Phoneod!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha volt előkéd, hogy ne edd le magad 12 éves korod után is!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha volt iWiW-ed!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha volt ma már orgazmusod!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha volt myVIP-d!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha volt már a héten erotikus álmod!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha volt már nyári munkád!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha volt már rá példa, hogy a párod engedélyét kérted egy bulihoz!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha volt olyan partnered, akivel kevesebb mint egy napig voltál együtt!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha voltál cserkész!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha voltál már nyaralni baráti körrel (család nélkül)!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha voltál már valakivel párkapcsolatban 16 éves korod után úgy, hogy nem feküdtél le vele!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha változtattad már a hajszínedet!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha zsaroltak már meg a bankkártyáddal!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyál [k] kortyot, ha állított már félre a rendőr vezetés közben!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha általában magadban beszélsz és a keresztneveden szólítod magad!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha ébredtél már valaki ágyában úgy, hogy fogalmad sincs hogy kerültél oda!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha égetted már el a jegyzeteidet egy félév/tanév végén!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál [k] kortyot, ha étteremben mondta már valaki az asztalodtól a pincérnek, hogy rossz volt az étel! +1, ha te voltál az!",
          },
          {
              cimke: "Játék",
              szoveg:
                  'Igyál [k] kortyot, ha úgy köszönsz el a párodtól a telefonban hogy "Szeretlek!"!',
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyál két kortyot, ha már voltál valaha utolsó, mikor tesin csapatot alkottatok!",
          },
          {
              cimke: "Játék",
              szoveg: "Jobbkezes emberek, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Jogsi: Igyál [k] kortyot, ha elsőre sikerült, [k], ha először nem sikerült, [k], ha még nincs jogsid!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ki dohányzott már mióta elkezdődött a buli? [k] korty büntetés a függőknek!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Kopasz fiúk, vagy rövid hajú lányok, eljött a ti időtök. Válasszatok valakit, aki lehúzza az italát.",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Kultúra! Az utolsó játékos, aki elolvasott egy könyvet, az osszon ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Kék szemű emberek, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Le a kockákkal! Aki utoljára nézte a telefonját (a Kocc nem számít), igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "LÁVASZÖRNY! Aki utoljára emeli fel a lábát a padlóról, az iszik [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Lányok, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Macskások, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Mindenki annyi kortyot iszik, ahány baszható ember van a csoportban.",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki annyi kortyot iszik, amennyi évet középsuli óta tanult.",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki igyon annyi kortyot, ahány exe van.",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki, aki alacsonyabb mint %s, [k] kortyot iszik.",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki, aki barnább mint %s, [k] kortyot iszik.",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki, aki fiatalabb mint %s, [k] kortyot iszik.",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki, aki idősebb mint %s, [k] kortyot iszik.",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki, aki magasabb mint %s, [k] kortyot iszik.",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Mindenki, aki nem ismeri egy hónapnál régebb óta %s-t, igyon [k] kortyot és beszélgessen vele mert fasza gyerek!",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki, aki nem olyan részeg mint %s, [k] kortyot iszik",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki, aki nem vegetáriánus, iszik [k] kortyot.",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki, aki részegebb mint %s, [k] kortyot iszik.",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki, aki tangát visel, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  'Mindenki, akinek a keresztnevében van "f" betű, iszik [k] kortyot!',
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki, akinek van tetkója vagy pearcingje, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Mostantól a játék végéig tilos rágyújtani! Ha meg akarod szegni a szabályt, először húzd le az italod!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Nosztalgia! Ha már vesztél össze valakivel úgy, hogy azóta sem találkozol vele, igyál [k] kortyot... +1, ha jobb is így!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot ha van nálad tampon vagy tisztasági betét!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha %s adott már kölcsön neked ruhát!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha %s&val jártatok már közös órára!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha %s&val voltatok már étteremben!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha 4-nél több alkalommal dobtak már!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha a héten már beágyaztál!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha ettél már %s lakásán!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha fehér zokni van rajtad!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha futottál már, hogy mentsd az életed!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha gokartoztál már!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha gyantáztad már valakinek a bikinivonalát!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ossz ki [k] kortyot, ha idegesítetted már fel valamelyik másik játékost!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha játszottál már Warframe-t!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha játszottál már Zelda játékkal!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ossz ki [k] kortyot, ha kettőnél többször szeretkeztél az elmúlt 7 napban!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha maszturbáltál már a munkahelyeden!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ossz ki [k] kortyot, ha már csavartad le a sótartó tetejét és vártad, hogy valaki használni próbálja!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha már jöttél ki moziból a film vége előtt!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha paintballoztál már!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha próbáltad már az Airsoftot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ossz ki [k] kortyot, ha próbáltál már fegyvert készíteni! (csúzli, katapult... stb.)",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha sportoltál már %s&val!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ossz ki [k] kortyot, ha szaltóztál már előre vagy hátra trambulin nélkül!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ossz ki [k] kortyot, ha szexeltél már úgy, hogy egy barátod is a szobában aludt!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha van Nintendo Switch konzolod!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ossz ki [k] kortyot, ha van valakivel a játékosok közül egy különleges kézfogásod!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ossz ki [k] kortyot, ha vannak olyan barátaid, akik inkább hívnak fel, minthogy kétsoros üzenetet írnak! (a játékosoknak is ismerni kell őt)",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ossz ki [k] kortyot, ha vannak olyan barátaid, akik mindig felhívnak amikor idegesek! (a játékosoknak is ismerni kell őt)",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha volt már műtéted!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha voltál már a Disneylandben!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ossz ki [k] kortyot, ha voltál már a szülőhelyedtől messzebb, mint 1000 km!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha voltál már részese autóbalesetnek!",
          },
          {
              cimke: "Játék",
              szoveg: "Ossz ki [k] kortyot, ha öltél már meg halat puszta kézzel!",
          },
          {
              cimke: "Játék",
              szoveg: "Párkapcsolatban élők! Osszatok ki egy embernek [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Szemüvegesek, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "T-Mobile-osok, osszatok ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Telenorosok, osszatok ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Vodások, osszatok ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Válasszátok ki a legmorcosabb játékost! Az illető [k] kortyot iszik!",
          },
          {
              cimke: "Játék",
              szoveg: "Vörös hajúak! Választhattok valakit, aki lehúzza az italát.",
          },
          {
              cimke: "Játék",
              szoveg: "[k] korty mindenkinek!",
          },
          {
              cimke: "Játék",
              szoveg: "iPhone-osok, igyatok [k] kortyot!",
          },
          {
              cimke: "Kezeket fel!",
              szoveg: "Aki utoljára emelte fel a kezét, az iszik [k] kortyot.",
          },
          {
              cimke: "Körjáték",
              szoveg:
                  "Mondjátok sorra, hogy ki milyen sorozatot néz mostanában, akik ugyanazokat nézik, együtt isznak [k] kortyot! %s kezdi!",
          },
          {
              cimke: "Kő-papír-olló",
              szoveg: "%s és %s játszanak, a vesztes [k] kortyot iszik.",
          },
          {
              cimke: "Kő-papír-olló",
              szoveg:
                  "A legidősebb és a legfiatalabb játékos játszik. A vesztes [k] kortyot iszik.",
          },
          {
              cimke: "Selfie Time",
              szoveg:
                  "%s és %s csináljanak egy képet magukról, vicces arcot vágva. Ha nem, akkor [k] korty a büntetés fejenként.",
          },
          {
              cimke: "Öntöde",
              szoveg:
                  "Mindenki itassa a tőle jobbra ülő játékost úgy, hogy ő tartja a poharát! Mindenki igyon [k] kortyot!",
          },
          {
              cimke: "Öntöde",
              szoveg:
                  "Mindenki itassa a tőle balra ülő játékost úgy, hogy ő tartja a poharát! Mindenki igyon [k] kortyot!",
          },
          {
              cimke: "Öntöde",
              szoveg:
                  "Mindenki itassa az általa kiválasztott játékost úgy, hogy ő tartja a poharát! Minden alkalommal, amikor kiválasztottak, [k] kortyot kell innod!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, ha a játék végéig senki nem mondja ki a neved, le kell húznod az italod!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, akinek van valamilyen játékkonzola!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon [k] kortyot, aki bánta már meg valamilyen elektronikai eszköz megvásárlását!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon [k] kortyot, aki játszott már valamilyen Battle Royale játékkal!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon [k] kortyot, aki már több, mint 10 ezer forintot költött számítógépes/konzolos játékokra!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon [k] kortyot, aki vásárolt már valódi pénzért számítógépes játékokban kozmetikai elemeket! Ezt a pénzt alkoholra is költhettétek volna...",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, aki rendszeresen néz Twitch közvetítéseket!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, ha a többiek szerint rendszeresen telefonozol társaságban, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Osszon ki [k] kortyot, aki rendszeresen jár edzeni!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, akin fehér cipő van!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, akin barna cipő van!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, akin fekete cipő van!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon mindenki [k] kortyot, aki még nem ivott ma rövidet! A többiek osszanak ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ossz ki valakinek egyben [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Ha %s és %s játszottak már együtt társasjátékkal, mindketten igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon [k] kortyot az, aki kevesebb mint fél éve jelentkezett be utoljára MyVIP-re. Igen, az még mindig működik.",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, aki nem követi az F1-et!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, aki szereti a focit.",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Mindenki szkanderozik mindenki ellen. Aki a legkevesebbet nyer, az iszik [k] kortyot. Aki a legtöbbet nyer, az kioszt [k] kortyot, de a legkevesebbet nyerőnek nem oszthat. ",
          },
          {
              cimke: "Játék",
              szoveg: "Aki ma bánatában iszik, az igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki kövérnek érzi magát, kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki izmosnak érzi magát, kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki elégedett a külsejével, az igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, mondd meg %s születésnapját, vagy igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot az, aki szokott a politikáról beszélni.",
          },
          {
              cimke: "Játék",
              szoveg: "%s, igyál [k] kortyot, ha tudsz programozni!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, aki szokott Honfoglalózni!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ha szereted a mulatós zenét, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, ha a társaságból mindenkit a barátodnak tartasz, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, aki legközelebb kortyot oszt ki neked, ő is annyi kortyot iszik, mint te!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ha láttad a Mandalorian című sorozatot, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ha láttad a legutóbbi Star Wars filmet, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, ha tettél valamit az elmúlt évben, amit szégyellsz, mondd el, vagy igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki legrégebb óta ismeri %s-t, az kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akin okosóra van, az igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akin okosóra van, az osszon ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ha rendeltél már kínából valamit, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Aki tett idén újévi fogadalmat, az igyon [k] kortyot. Ha már meg is szegte, akkor igyon még [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Aki felejtette már el a szülei születésnapját, igyon [k] kortyot! Nem szép dolog...",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, igyál annyi kortyot, ahányadik hónapban járunk. %s, te pedig ossz ki ennyit!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ossz ki [k] kortyot, ha fogyókúráztál már sikeresen!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, igyál [k] kortyot, ha az elmúlt 4 napban nem voltál edzeni!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot mindenki, aki %s&val szokott edzeni járni!",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, igyál [k] kortyot, ha kiskorodban féltél a fogorvostól! Igyál még [k] kortyot, ha még most is félsz!",
          },
          {
              cimke: "Játék",
              szoveg: "Mindenki, akin nincs alsónemű, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, igyál [k] kortyot, ha a jelenlévők közül mindenkit kedvelsz!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, igyál [k] kortyot, ha ettél ma már húst!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot mindenki, akinek van valamilyen komoly titka!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon mindenki [k] kortyot, akinek van olyan haverja, akit szégyell a szülei előtt!",
          },
          {
              cimke: "Játék",
              szoveg: "%s és %s igyanak [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, mondd el az első benyomásod minden játékosról, vagy igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, igyál [k] kortyot, ha van olyan a társaságban, akit már több, mint 7 éve ismersz. Ez már örök barátság...",
          },
          {
              cimke: "Játék",
              szoveg: "%s, igyál [k] kortyot, ha fizettél már szexért.",
          },
          {
              cimke: "Játék",
              szoveg: "%s, igyál [k] kortyot, ha vettél már valamilyen ajándékot %s&nak.",
          },
          {
              cimke: "Játék",
              szoveg: "Az izmosabb játékos %s és %s közül kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "A vékonyabb játékos %s és %s közül kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, nyald meg a padlót, vagy igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, ha szívesen lefeküdnél a tőled balra ülő játékossal, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, ha szívesen lefeküdnél a tőled jobbra ülő játékossal, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, igyál [k] kortyot, ha feküdtél már le egy héten belül két emberrel!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, igyál [k] kortyot úgy, hogy a pohár ne érjen az ajkadhoz!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ha csinálsz 15 fekvőtámaszt, %s [k] kortyot iszik!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s annyi kortyot iszik, ahány fekvőtámaszt %s itt helyben bemutat!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ha vertek már meg, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, aki a héten látogatott már pornóoldalt!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, számolj el 200-ig hangosan, vagy igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Ha nem először buliztok itt, igyatok [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, ha a játékosok közül mindenkivel ittál már korábban is, ossz ki [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, ha van olyan a játékosok között, akivel korábban nem ittál még, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Aki képzelte már el vagy látta az egyik jelenlévő játékost meztelenül, az igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akin világos alsónemű van, kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Akin sötét alsónemű van, kioszthat [k] kortyot!",
          },
          {
              cimke: "Feladat",
              szoveg:
                  "%s, utánozd, hogy milyen hangot adnak ki az emberek orgazmus közben. Ha nem sikerül igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ha égtél már be a kiszemelted előtt, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ha van bármilyen fétised igyál [k] kortyot!",
          },
          {
              cimke: "Feladat",
              szoveg:
                  "%s, dönts! Ki a perverzebb? %s, vagy %s? A perverz igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ha nem borotválod a bikini vonaladat, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, ha bármelyik jelenlévő játékosnak őrzöl legalább egy titkát, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki nézett már pornót, igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, mondj egy csajozós szöveget egy lánynak. Ha nem tudsz, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, mondj egy pasizós szöveget egy fiúnak. Ha nem tudsz, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Aki használt már Tindert, az igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Aki szerint az idei év rosszabb, mint a tavalyi, az igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Aki szerint az idei év jobb, mint a tavalyi, az igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg: "Osszon ki [k] kortyot, aki tévedt már el!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ha szerinted %s egy támogató barát, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, ha az elmúlt hálrom évben több, mint 2 telefonod volt, igyál [k] kortyot! Ha nem, ossz ki ugyanennyit!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, ha szoktál koccintani ivás előtt, ossz ki [k] kortyot! Igyál [k] kortyot, ha bunkó módon bele szoktál inni előtte az italodba!",
          },
          {
              cimke: "Játék",
              szoveg: "%s, ha a többiek szerint sokat káromkodsz, igyál [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "%s, mondj magadról egy jó tulajdonságot. Aki szerint igazat állítasz magadról, annak innia kell [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akinek olyan márkájú telefonja van, mint amin a játék fut, az kioszthat [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Akinek nem olyan márkájú telefonja van, mint amin a játék fut, az igyon [k] kortyot!",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Mindenki kezdjen el inni. %s hagyhatja először abba az ivást. A többiek csak akkor fejezhetik be, ha a tőlük balra ülő játékos már befejezte az ivást.",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Mindenki kezdjen el inni. %s hagyhatja először abba az ivást. A többiek csak akkor fejezhetik be, ha a tőlük jobbra ülő játékos már befejezte az ivást.",
          },
          {
              cimke: "Játék",
              szoveg:
                  "Igyon [k] kortyot, aki követte vagy követi az Álarcos énekes című műsort!",
          },
          {
              cimke: "Játék",
              szoveg: "Igyon [k] kortyot, aki követi %s Instagram profilját!",
          },
    */
];
