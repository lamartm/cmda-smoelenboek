## Meesterproef
In deze module van de minor Web Design & Development maken we in samenwerking met CMD Amsterdam een online smoelenboek. 

### Voorkant
Homepagina <br/>
<img width="810" alt="versie4" src="https://user-images.githubusercontent.com/99180082/175385225-50c1ab9c-deed-46ce-9de3-1d85023dcefa.png">

<details>
<summary>Homepagina + detailpagina</summary>
 
https://user-images.githubusercontent.com/99180082/175385249-a7c78627-b01a-4a19-aa35-fd0520acc507.mov

</details>

<details>
<summary>Scrollfunctie</summary>

https://user-images.githubusercontent.com/99180082/175385271-8254c073-d96a-4504-b4b2-8e18bff147a3.mov 
 
</details>

<details>
<summary>Zoekfunctie zoeken</summary>

https://user-images.githubusercontent.com/99180082/175385281-e35c74d1-84c3-4b8f-b271-fd0bc25efc88.mov

</details>

<details>
<summary>Zoekfunctie A t/m Z</summary>

https://user-images.githubusercontent.com/99180082/175385292-ae5564ba-f47b-4048-9baa-ed0aac3830e7.mov

</details>

<details>
<summary>Zoekfunctie vakgebied</summary>

https://user-images.githubusercontent.com/99180082/175385298-e7187509-5c20-420a-97f4-d5ab89a5be72.mov

</details>
 
### Beschrijving
Het CMD Smoelenboek is, zoals de naam al zegt, een online smoelenboek. Waar tot vorig jaar fysieke foto's hingen op de derde verdieping in de gang, is er nu een online application waar in één oogopslag alle docenten van CMD te vinden zijn. De application heeft als doel om docenten en studenten met elkaar te kunnen verbinden. In het CMD Smoelenboek is dit naar voren gekomen door middel van alle docenten weer te geven op één scherm en door middel van het klikken op een docent, meer informatie over die persoon te weten te komen. Bij de application zijn de volgende userstory's gebruikt: 

1. Docent opzoeken <br/>
Als student, wil ik snel een naam bij een gezicht kunnen vinden, zodat ik weet hoe mijn docent er uitziet/ook al weer heet.

2. Connectie met docent maken <br/>
Als docent, wil ik snel meer weten over collega’s, zodat ik interessantere connecties weet te leggen.

3. Profiel kunnen wijzigen <br/>
Als docent, wil ik eenvoudig mijn profiel kunnen wijzigen, zodat ik dat niet op honderd verschillende plekken hoef te doen.

Voor het ophalen van data wordt gebruik gemaakt van een headless CMS-systeem genaamd Prismic:
https://prismic.io/

Hieruit worden de, zelfgemaakte, volgende onderdelen opgehaald:
- uid;
- teacherpic;
- teachername;
- email;
- vakken;
- beschrijving;
- hobbies;
- specialiteiten;
- beschikbaarheid;
- easteregg;
- easteregg2.

### Link naar live demo 
[CMD Smoelenboek](https://smoelenboek-cmd.herokuapp.com/)

### Inhoudsopgave
* [Installeren](#installeren)
* [Gebruik en kenmerken](#gebruik-en-kenmerken)
* [Debriefing](#debriefing)
* [Probleem definitie](#probleem-definitie)
* [Oplossing](#oplossing)
* [Uitleg code](#uitleg-code)
* [Overdracht](#overdracht)
* [Link wikis](#link-wikis)
* [Gedaan en wenslijst](#gedaan-en-wenslijst)
* [Licentie](#licentie)
* [Bronnen](#bronnen)

### Installeren
- Open de terminal in jouw code editor 
- Gebruik de terminal en clone deze repo 
```
git clone https://github.com/lamartm/cmda-smoelenboek.git
```
- Installeer de gebruikte packages
```
npm install
```
- Start de server
```
npm start
```
- Open de localhost in de browser
```
http://localhost:3000/
```

### Gebruik en kenmerken
Via de API wordt de informatie van de docenten opgehaald en in beeld gebracht. Als eerste wordt de automatische datum weergegeven met legenda. Hieronder staan de docenten weergegeven waar middel een flip geklikt kan worden voor de eerste informatie. Mocht er meer informatie gelezen willen worden dan kan er geklikt worden op 'meer'. Deze button leidt naar de detailpage. Via een andere button kan er weer terug worden gegaan naar de homepage. Verder op de homepage kan er middel de scrollbuttons omhoog of omlaag gedrukt worden. Bij het ingedrukt houden kan er sneller over de pagina gescrold worden. Ook voor als de gebruiker niet bij de bovenste rij met docenten kan komen, kan je door scrollen totdat je er wel bijkomt. Daarna zijn er meerdere filterfuncties te vinden onder het filtermenu. Middels de zoekbalk kan er gezocht worden op bijvoorbeeld hele namen, middels de a t/m z op één letter die in de naam voor komt en middels de vakgebieden voor een specifieke vak. Tot slot zijn er meerdere animaties te vinden om de gebruiker een plezierige ervaring te bieden (deze moet je zelf zoeken, mocht je dit willen weten :-)).

### Debriefing 
Om de opdracht duidelijk voor ogen te krijgen, is er een debriefing gemaakt. Ook is deze naar de opdrachtgever gestuurd om de opdracht officieel te kunnen starten. Hieronder is de debriefing te zien. 

<details>
<summary>Show!</summary>
1. Contactgegevens
Organisatie:
CMD Amsterdam

Product Owner:
Vasilis van Gemert
v.van.gemert@hva.nl
Postbus 2721, 1000 CS Amsterdam

Datum aanvraag:
23 mei 2022

Datum oplevering:
23 juni 2022

2. Achtergrondinformatie
Communication and Multimedia Design (CMD) is een ontwerp-opleiding voor digital interactive design waarbij studenten leren ontwerpen en realiseren van digitale interactieve oplossingen die optimaal aansluiten bij de behoeften van de gebruikers. CMD is een opleiding van de Hogeschool van Amsterdam. De Unique selling points zijn onder andere interaction design, visual design en techniek. Ook horen hierbij de vakdocenten die een goed netwerk hebben en die recente ontwikkelingen vertalen naar het gehele onderwijsprogramma.

3. Opdrachtomschrijving
Een smoelenboek waarin alle docenten van de opleiding CMD digitaal en interactief te zien zijn. Waarbij je moet kunnen klikken op een foto waaruit meer informatie over de docent te vinden is. Het zou leuk zijn als hier niet alleen contactgegevens te zien zijn maar ook persoonlijke informatie om ook andere specialiteiten te kunnen delen met elkaar. De data moet kunnen worden beheerd en ontsloten in een CMS-systeem en gekoppeld worden aan een bestaande API. Dit zodat de docenten hun eigen profiel kunnen updaten.

Uitdaging:
CMD Amsterdam wil een digitaal en interactief smoelenboek met (exclusieve) informatie per docent met beheer via een CMS-systeem gekoppeld aan een API om docenten/collega's beter te leren kennen en eventueel specialiteiten met elkaar te kunnen delen.

4. Aanleiding
De reden voor aanvraag is dat het fysieke smoelenboek (met foto's van docenten in de gang van de medialounge) is gestopt. Ook zijn er inmiddels meerdere collega's bijgekomen waardoor dit fysiek te groot zou worden. Daarentegen zijn er zoveel nieuwe gezichten waarbij het handig zou zijn om gezichten bij namen te kunnen vinden, voor bijvoorbeeld een eerste ontmoeting.

5. Doelstelling
Een interactief smoelenboek dat voor iedereen te gebruiken valt met als extra aandachtspunt bij het gebruik van blinde mensen en mensen in een rolstoel.

6. Oplevering
Een digitaal en interactief smoelenboek-website met (exclusieve) informatie van alle docenten van CMD Amsterdam. De data kan worden ontsloten en beheerd in een CMS systeem. Het exacte product is dus een interactieve website, waarbij de CMD huisstijl wordt gehanteerd.

7. Randvoorwaarden
Niet bij de oplevering inbegrepen:
Fotograferen van docenten (dit wordt uiteindelijk door de persoon zelf beheerd).

Planning project:
Week 1: Onderzoek, brainstorm en CMS-systeem met API
Week 2: Eerste iteratie product
Week 3: Tweede iteratie product
Week 4: Derde iteratie product
Week 5: Oplevering product

Noodzakelijk start project:
De content, data voor het CMS-systeem (foto, naam, contactgegevens en specialiteiten).

Systemen, technieken en expertise:
CMS-systeem met gekoppelde API.

Specificaties/eisen:
Data moet kunnen worden ontsloten en beheerd in een CMS systeem.

Externe obstakels:
Geen database van de docenten aan CMD Amsterdam.

8. Gebruikers van het eindresultaat
De website is uiteindelijk bedoeld voor docenten en studenten aan de opleiding CMD van de Hogeschool van Amsterdam. Het doel wat zij willen bereiken heeft vele mogelijkheden. Zo kun je denken aan als student snel een naam willen vinden bij een gezicht kunnen vinden of als docent snel meer te weten komen over collega’s, zodat er interessantere connecties te leggen valt. De meningen over het digitaal smoelenboek zijn verdeeld met daarbij vooral het aspect op de extra informatie (specialiteiten), niet iedere docent is het hiermee eens dit te willen delen. Voor dit product dus een extra uitdaging.

9. Relatie met andere projecten
Eventueel met de website van CMD Amsterdam.
</details>

### Probleem definitie
Vasilis van Gemert wilt voor CMD Amsterdam een online smoelenboek met de mogelijkheid dat docenten extra informatie over zichzelf kunnen delen om ook op andere vlakken met elkaar te kunnen connecten. Ook moet het voor studenten zichtbaar zijn om een gezicht bij een naam te kunnen vinden. Tot vorig jaar hingen er fysieke foto's en er zijn inmiddels zoveel nieuwe docenten dat dit fysiek te groot wordt. Het doel is daarom om een interactief en digitaal smoelenboek op te richten waarbij alle docenten met z'n allen op een heel groot scherm zichtbaar zijn. Je moet kunnen klikken op een foto en dan meer info kunnen lezen over de persoon. Tenslotte zou het fijn zijn als het gekoppeld is aan een bestaande API zodat docenten hun eigen profiel kunnen updaten.

### Oplossing 
algemeen: groot scherm, user story's 

Design keuzes:
- scroll button
- filters groepering 
- navigatie links 
- usability space 
- AZ filter
- Zoek filter
- Vakgebied filter  
- Flip 
- Automatische datum met legenda
- Animaties 
- detail
- data 

### Uitleg code 
#### Home page layout
De homepage layout werkt door data op te halen die we krijgen van de Prismic CMS. Alle data hier kan je gelijk gebruiken, alleen de dagen waren wat lastig. Je krijgt namelijk een object met alle dagen van de week en als property value hiervan true of false (wat aangeeft of de docent op die dag beschikbaar is). Om dit naar een string om te zetten zodat ik dit kan gebruiken heb ik het volgende gedaan:

```javascript
<% const {teacherpic, teachername, vakken, beschrijving, hobbies, beschikbaarheid, email, specialiteiten} = teacher.data %>
<% const dagen = Object.keys(beschikbaarheid[0]).reduce((currentResult, key) => {
    beschikbaarheid[0][key] === true && (currentResult[key] = beschikbaarheid[0][key]);

    return currentResult;
}, {}); %> 

<% const dagenArray = Object.keys(dagen) %> 
<% const dagenCapital = dagenArray.map(d => d.charAt(0).toUpperCase() + d.substr(1)) %>
<% const dagenString = dagenCapital.join(', '); %>
```
Uit het eerste object (beschikbaarheid[0] check naar alle dagen die "true" als value hebben, zo ja worden die returned. Van dit dagen object maak ik een array (dagenArray) en hiervan ga ik er weer doorheen om elke dag een hoofdletter te geven (dagenCapital). Als laatst voeg ik elke element binnen de array samen door ze toe te voegen met join() (dagenString). Hierdoor kreeg ik de dagen string die ik nodig had.

De content bepaal ik door te kijken of de dag van vandaag (die ik ophaal van de server) een false value heeft binnen de docent data die ik momenteel gebruik binnen de forEach:
```javascript
<% if(beschikbaarheid[0][currentDate] === false) { %> 
```
Zo ja laat ik de docenten zien die er niet zijn met een grijs kleur op de "article" en "img":

```html
<article class="teacher bck-grey">
  <div class="card__face card__face--front">
    <img src="<%- teacherpic.url %>" class="pic-size unavailable"/>
    <h1 class="teacher-name"><%- teachername.length == 0 ? "None" : teachername[0].text %></h1>
   </div>

   <div class="card__face card__face--back">
    <h1 class="teacher-name"><%- dagenString === "" ? "None" : `Beschikbaar op: ${dagenString}` %></h1>
    <a href="<%= encodedURL %>" class="teacher-link"><button class="button-detail">Meer</button></a>
   </div>
</article>
```
Zo niet laat ik de docenten zien die beschikbaar zijn. Dit is in principe dezelfde stukje code die je hierboven ziet, alleen zonder de grey classes.

De encodedURL variabel die je hierboven ook zit is een variabel waarin ik een link maar naar een detail page van de docent in kwestie. Ik gebruik dan de docenten naam die is opgegeven binnen deze string. Dit doe ik ook zodat ik in mijn server kan kijken naar deze string wanneer de gebruiker een connectie met de detail pagina van de docent probeert te maken. Hierdoor weet ik welke docent het is, en kan ik een request naar prismic maken om deze data te krijgen:

```javascript
<% const encodedURL = "/detail/" + (teachername.length == 0 ? "" : teachername[0].text).replace(/\s+/g, '-').toLowerCase() %>
```

#### Boven en beneden buttons
Om ervoor te zorgen dat wanneer de gebruiker op een van de buttons klikt dat de pagina naar boven of beneden gaat, hebben we de volgende functie toegevoegd. Dit zorgt ervoor dat de pagina met een x aantal pixels naar boven of naar beneden gaat. :
```javascript
downButton.addEventListener("click", (element) => {
  document.querySelector("html").scrollBy({
    top: 180,
    behavior: "smooth",
  });
});
```

#### Filters
Alle filters heb ik in een partial opgeslagen. We hebben in totaal drie filters gebruikt. Een filter waarin je kan typen voor de docent die je zoekt. Een filter om alfabetisch te zoeken naar een docent, en een filter waarop je naar docenten kan zoeken met een bepaalde specialiteit. Voor elk van deze filters heb ik aparte filter classes gemaakt die allemaal display: none; tonen. Dit deed ik zodat ik meerdere filters tegelijk actief kon krijgen.

##### Alfabetische filter
Voor de alfabetische filter heb ik een array gemaakt waarin de alfabet zit:
 ```javascript
 const alphabet = 
["A", "B", "C", "D", "E", "F", "G",
"H", "I", "J", "K", "L", "M", "N",
"O", "P", "Q", "R", "S", "T", "U",
"V", "W", "X", "Y", "Z" ];
```
Ik loop door deze array heen en voor elk letter maak ik een input element aan:
 
```javascript
alphabet.forEach((letter) => {
  const addInput = alphabetField.appendChild(newInput.cloneNode(true));
  const addLabel = alphabetField.appendChild(newLabel.cloneNode(true));

  addLabel.setAttribute("class", "letterLabel");
  addLabel.setAttribute("for", letter);
  addLabel.textContent = letter;

  addInput.setAttribute("class", "letterInput");
  addInput.setAttribute("type", "radio");
  addInput.setAttribute("id", letter);
  addInput.setAttribute("name", "alphabet");
  addInput.setAttribute("value", letter);
});
```
 
Als je op een van deze inputs klikt, vuur ik een functie af. Binnen deze functie check ik eerst of de gebruiker op de "All" input heeft geklikt. Zo ja, haal ik van elk element de filterAlphabet class af. Zo niet, pak ik de naam van elk element en check ik of de voor- of achternaam overeenkomt met de letter die geselecteerd is. Als dit klopt haal ik hiervan de filterAlphabet class weg, zo niet voeg ik die toe:

```javascript 
function filterOnAlphabet(d) {
  if (d.target.value === "All") {
    filtered.style.display = "none";
    Array.from(specialtyTeacher).forEach((element) => {
      element.classList.remove("filterAlphabet");
    });
  } else {
    filtered.style.display = "initial";
    Array.from(specialtyTeacher).forEach((element) => {
      const names = element.innerText.trim().toLowerCase().split(" ");
      if (
        names[0].startsWith(d.target.value.toLowerCase()) ||
        names[1].startsWith(d.target.value.toLowerCase())
      ) {
        element.classList.remove("filterAlphabet");
      } else {
        element.classList.add("filterAlphabet");
      }
    });
  }

  checkForSelectedFilters();
}
```
##### Specialiteit filter
Voor de specialiteit filter heb ik een functie die checkt welke specialiteit is gekozen. Eerst haal ik van alle checkboxes binnen de specialiteit filter de checkboxes die geselecteerd zijn. De namen van deze checkboxes (wat dus de specialiteiten zijn) stop ik in de array specialties. Als specialties leeg is, wat betekent dat de gebruiker niks heeft gekozen, dan haal ik de filterSpecialty weg van alle elementen. Zo niet, dan check ik voor elke element of ze de specialiteiten die gekozen zijn bevatten binnen hun "data-value" attribute. Als dit het geval is haal ik de filterSpecialty class weg, zodat je alleen de elementen kan zien die overeenkomen met de gekozen specialiteiten.

```javascript
const filterOnSpecialty = (e) => {
  const checkedBoxes = document.querySelectorAll(
    "input[name=specialty]:checked"
  );

  let specialties = [];

  checkedBoxes.length === 0
    ? (filtered3.style.display = "none")
    : (filtered3.style.display = "initial");

  checkForSelectedFilters();

  checkedBoxes.forEach((d) => {
    specialties.push(d.value.toLowerCase());
  });

  specialties.length === 0
    ? specialtyTeacher.forEach((specialty) => {
        specialty.classList.remove("filterSpecialty");
      })
    : specialtyTeacher.forEach((specialty) => {
        specialties.some((d) =>
          specialty.getAttribute("data-value").includes(d)
        )
          ? specialty.classList.remove("filterSpecialty")
          : specialty.classList.add("filterSpecialty");
      });
};

checkBoxes.forEach((d) => {
  d.addEventListener("click", filterOnSpecialty);
});
```
##### Zoek filter
Voor de zoek filter maak ik gebruik van een script genaamd simple-keyboard. Hierdoor kon ik een on screen keyboard toevoegen, waardoor mensen met een touchscreen de site kunnen gebruiken. Ik toon de keyboard alleen wanneer de gebruiker de zoek filter geselecteerd heeft, en laat het verdwijnen wanneer ze ervan weg klikken:

```javascript
searchInput.addEventListener("click", (d) => {
  keyboardBackground.style.display = "initial";
  keyboardSimple.style.display = "initial";
});

keyboardBackground.addEventListener("click", (d) => {
  keyboardBackground.style.display = "none";
  keyboardSimple.style.display = "none";
});

document.getElementById("search-teacher").addEventListener("submit", (d) => {
  d.preventDefault();
  keyboardBackground.style.display = "none";
  keyboardSimple.style.display = "none";
});
```
Buiten dit heb ik ook een andere script gebruikt gemaakt mark.js. Hierdoor kan ik live wanneer de gebruiker zit te typen de letters markeren van de gefilterde elementen die overeenkomen met wat de gebruiker heeft getypt:
```javascript
function performMark() {
  let keyword = searchInput.value;

  markInstance.unmark({
    done: function () {
      markInstance.mark(keyword);
    },
  });
}
```
Wanneer de gebruiker typt loop ik door elke element heen en check ik of het ergens de woorden heeft die de gebruiker heeft getypt. Wanneer dit het geval is, laat ik alleen de elementen zien die hiermee overeenkomen, en markeer ik de gedeeltes binnen die elementen die getypt zijn door de gebruiker:

```javascript
function onChange(input) {
  document.querySelector(".input").value = input;
  input === ""
    ? (filtered1.style.display = "none")
    : (filtered1.style.display = "initial");

  checkForSelectedFilters();
  performMark();

  Array.from(specialtyTeacher).forEach((element) => {
    if (element.innerText.toLowerCase().includes(input.toLowerCase())) {
      element.classList.remove("filterText");
    } else {
      element.classList.add("filterText");
    }
  });
}
```

#### Animaties
##### Filters
Er zijn een aantal animaties voor wanneer de gebruiker op een button klikt, voornamelijk de filters. Wat we in principe doen is elke keer wanneer de gebruiker op een van de filters klikt, checken naar welke value de animation property heeft. Als het geen animation property heeft of een animation property waarin er een animatie is dat het element buiten het beeld zet, dan voegen we een animatie toe die het element toont. 

```javascript
filterButton.style.animation =
    filterStyles.getPropertyValue("animation") ===
      "0s ease 0s 1 normal none running none" ||
    filterStyles.getPropertyValue("animation") === removeElement("FilterButton")
      ? showElement("FilterButton")
      : removeElement("FilterButton");
```
Je ziet hier dat we een functie terug geven. Deze functie returned een string met daarin de animatie naar keus:

```javascript
const showElement = (element) => {
  return `1s ease-in-out 0s 1 normal forwards running show${element}ToScreen`;
};

const removeElement = (element) => {
  return `1s ease-in-out 0s 1 normal none running remove${element}FromScreen`;
};
```

De code was hiervoor best lang en niet erg duidelijk, dus ik had het korter gemaakt door van de strings een functie te maken.

Om ervoor te zorgen dat wanneer een gebruiker een andere filter klikt dat de elementen van deze filters niet boven elkaar komen, check ik of de andere filters getoond worden door een animation, zo ja animeer ik ze weg van het scherm:

```javascript
if (
    alphabetField.style.animation === showElement("Alphabet") &&
    searchInput.style.animation === showElement("Search")
  ) {
    searchInput.style.animation = removeElement("Search");
  }

  if (
    alphabetField.style.animation === showElement("Alphabet") &&
    specialties.style.animation === showElement("Specialties")
  ) {
    specialties.style.animation = removeElement("Specialties");
  }
```

##### Easter egg
Wanneer je op de detail page zit kan je op de naam van de docent 3x klikken waardoor je een animatie triggered. We regelde de animatie hier binnnen Javascript door de .animate() method te gebruiken die JS heeft.

Hier zijn de animaties zelf en de timing functions die erbij horen om de animaties te laten werken. Ook zie je nog een count variabel, deze wordt gebruikt om te berekenen hoe vaak de gebruiker heeft geklikt:
```javascript
let count = 0;

const extraImgMoving = [
  { right: "0%", top: "7%", opacity: "0%" },
  { right: "-27%", top: "-6%", opacity: "100%" },
];

const extraImg2Moving = [
  { right: "0%", top: "7%", opacity: "0%" },
  { right: "-27%", top: "25%", opacity: "100%" },
];

const extraImgTiming = {
  duration: 800,
  iterations: 1,
  fill: "forwards",
};

const titleShaking = [
  { transform: "rotate(-5deg)" },
  { transform: "rotate(5deg)" },
  { transform: "rotate(-5deg)" },
  { transform: "rotate(0deg)" },
];

const titleTiming = {
  duration: 800,
  iterations: 1,
};
```
Wanneer de gebruiker op de naam klikt, animeer ik de naam door het te laten shaken en de count met + 1 te veranderen. Wanneer de count gelijk is aan 3 animeerik de easter egg:

```javascript
teacherName.addEventListener("click", () => {
  count++;
  teacherName.animate(titleShaking, titleTiming);

  if (count === 3) {
    imgAnimation.animate(extraImgMoving, extraImgTiming);
    imgAnimation2.animate(extraImg2Moving, extraImgTiming);
  }
});
```
#### Idle
Wanneer de gebruiker niet interacteert met het scherm, moeten we ervoor zorgen dat geselecteerde filter weggaan en wouden we ook een idle animation toevoegen.
Ik doe dit door middel van timeouts te zetten op de pagina die een functie runt na x aantal seconden. Deze timeouts sla ik op in een array (resetTimeout en clearFilters). Buiten dit heb ik ook een variabel die aangeeft of er gescrolled is (scrolled) en een variabel waarin ik de animations delay opsla (count):
```javascript
let resetTimeout = [];
let clearFilters = [];

let count = 0;
let scrolled = true;
```
Wanneer er gescrolled of geklikt wordt runt de stopAnimation functie. Binnen deze functie check ik eerst of scrolled  gelijk is aan true. Als dit waar is dan clear ik alle setTimeouts binnen de resetTimeout en clearFilters array. Hierna push ik een timeout om alle filters te clearen. Deze timeout moet na een minuut de functie runnen. Vervolgens push ik in de resetTimeout array meerdere timeouts die voor elke docent element moet runnen. Binnen deze timeouts voeg ik een animatie toe die het element laat bewegen. Om ervoor te zorgen dat er een wave achtige animatie komt, zorg ik ervoor dat er voor elke opeenvolgende element +500 komt in de count variabel. Deze count variabel is namelijk de animation delay die wordt toegevoegd. Elke keer als de functie runt verander ik de count variabel naar 0. Als laatst zorg ik ervoor dat de stopAnimation functie om de 5 seconden wordt gerunned, door de scrolled variabel naar true te zetten met een setTimeout van 5 seconden. Ik doe dit omdat de scroll event op een pagina heel erg vaak wordt gerunned. Door een timeout van 5 seconden te zetten, voer ik de functie alleen om de 5 seconden uit:

```javascript

window.addEventListener("scroll", stopAnimation);
document.body.addEventListener("mousedown", stopAnimation);
window.addEventListener("load", stopAnimation);

function stopAnimation() {
  if (scrolled === true) {
    scrolled = false;
    count = 0;

    resetTimeoutFunc(clearFilters);
    clearFilters.push(
      setTimeout(() => {
        all.checked = true;
        filtered1.style.display = "none";
        filtered2.style.display = "none";
        filtered3.style.display = "none";
        filtered4.style.display = "none";

        Array.from(checkBoxes).forEach((element) => {
          element.checked = false;
        });

        Array.from(specialtyTeacher).forEach((element) => {
          element.classList.remove("filterAlphabet");
          element.classList.remove("filterSpecialty");
        });

        searchInput.value = "";
      }, 10000)
    );

    resetTimeoutFunc(resetTimeout);
    adjustAnimations();

    function adjustAnimations() {
      Array.from(specialtyTeacher).forEach((element, index) => {
        element.style.animation = "none";

        resetTimeout.push(
          setTimeout(() => {
            count += 200;
            element.style.animation = `8.8s linear ${count}ms infinite alternate alternateWave`;
          }, 60000)
        );
      });
    }

    setTimeout(() => {
      scrolled = true;
    }, 5000);

    function resetTimeoutFunc(d) {
      d.forEach((timeout) => {
        clearTimeout(timeout);
      });
    }
  }
}
```
We hebben er ook voor gezorgd dat als er geen interactie is op de detail pagina na een minuut, je terug gestuurd wordt naar de homepage:
```javascript
function redirect() {
  window.location.href = "/";
}
var initial = setTimeout(redirect, 60000);
document.addEventListener("click", test);
window.addEventListener("scroll", test);

function test(event) {
  clearTimeout(initial);
  initial = setTimeout(redirect, 60000);
}
```



### Overdracht 
Je kan het project installeren door het volgende te doen: [Installeren](#installeren)

Wanneer je het project op je systeem naar keuze hebt staan, en vervolgens de data wilt veranderen om een docent toe te voegen of aanpassingen te maken, moet je eerst inloggen via https://prismic.io/dashboard/login

Zodra je in de repository zit kan je linksaan op "Documents" om naar alle ingevulde docenten te kijken, of een toe te voegen:
![image](https://user-images.githubusercontent.com/55801193/175422960-8da452d3-4f96-481b-938c-f920e7897fba.png)

Zodra je hier bent krijg je het volgende scherm te zien:
![image](https://user-images.githubusercontent.com/55801193/175423026-d1573055-523c-4331-ad44-478b96afe1a1.png)

Hier kan je of op een van de ingevulde docenten klikken en de data hierin veranderen, of een nieuwe profiel toevoegen door rechtsboven op "Create new" te klikken:
![image](https://user-images.githubusercontent.com/55801193/175423147-67e9caca-a5b1-44ff-a380-1240e225265f.png)

Het aanpassen en toevoegen van een docent werkt in principe hetzelfde, je kan de beschikbare velden invullen/aanpassen en zodra je klaar bent moet je rechts boven op "Save" klikken:
![image](https://user-images.githubusercontent.com/55801193/175423333-aa347157-3698-4bbd-bab5-976c883f6429.png)

Dan op "Publish" klikken:
![image](https://user-images.githubusercontent.com/55801193/175423396-8bf84597-849c-463f-ac83-151ff0cc2dd6.png)

Hier krijg je dan een side menu waarin je het gelijk kan publishen, of op een latere datum:
![image](https://user-images.githubusercontent.com/55801193/175423469-87b67845-e218-4d33-b20d-6ec548c56905.png)

Zodra je dit hebt gedaan weet je nu hoe je een profiel kan toevoegen of aanpassen.

Als laatst geef ik als tip om je browser window op fullscreen te zetten wanneer je het beeld toont op een groter scherm. Hierdoor komen meer elementen in beeld en is het ook makkelijker te gebruiken.

### Link naar wikis
De product biografie en reflectie op eigen niveau zijn individueel beschreven. Hieronder staan de links naar beide wiki's om meer over de individuele processen te lezen.

- [Mohamed](https://github.com/lamartm/cmda-smoelenboek/wiki) <br/>
- [Mitzy](https://github.com/Mitzyyy/cmda-smoelenboek/wiki)

### Gedaan en wenslijst
- [x] Headless CMS systeem opzetten (Prismic) <br/>
- [x] Data maken en ophalen <br/>
- [x] Homepagina <br/>
- [x] Detailpagina <br/>
- [x] Scrollfunctie <br/>
- [x] Ruimte toevoegen om bovenste rij naar onder te scrollen <br/>
- [x] Automatische datum toevoegen <br/>
- [x] Legenda maken <br/>
- [x] Filtermenu <br/>
- [x] Filteropties zoals zoekbalk of a t/m z <br/>
- [x] Verschillende animaties toevoegen <br/>
- [x] Installeren op een online web server (Heroku) <br/>
- [ ] Visueel maken van beschikbaarheid <br/>
- [ ] Focusstate aanpassen naar ronde vorm bij scrollen <br/>
- [ ] Animatie eastereggs verschillende richtingen op laten gaan <br/>
- [ ] Detailpage verder uitbreiden <br/>
- [ ] Inlogsysteem verder uitbreiden <br/>

### Licentie
[GNU GPLv3](LICENSE)

### Bronnen 
- Mozilla. (2022a, april 5). scroll-snap-type - CSS: Cascading Style Sheets | MDN. Geraadpleegd op 1 juni 2022, van (https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)
- Mozilla. (2022b, mei 31). Element.scrollLeft - Web APIs | MDN. Geraadpleegd op 1 juni 2022, van (https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft)
- Stack Overflow. (2019, 16 augustus). CSS Scroll Snap Points with navigation (next, previous) buttons. Geraadpleegd op 1 juni 2022, van (https://stackoverflow.com/questions/57518428/css-scroll-snap-points-with-navigation-next-previous-buttons)
- M. (2022). GitHub - Mitzyyy/Drag-en-drop-lijst: In deze module van de minor Web Design & Development leer ik om een website te ontwerpen en bouwen voor echte mensen met behulp van gebruikerstesten en een interactive design proces. GitHub. Geraadpleegd op 8 juni 2022, van (https://github.com/Mitzyyy/Drag-en-drop-lijst)
- W3Schools. (2022). Window setTimeout() Method. Geraadpleegd op 8 juni 2022, van (https://www.w3schools.com/jsref/met_win_settimeout.asp)
- W3Schools. (2022a). HTML DOM Document addEventListener() Method. Geraadpleegd op 15 juni 2022, van (https://www.w3schools.com/jsref/met_document_addeventlistener.asp)
- Meracle. (2022). Attention Required! | Cloudflare. CodePen. Geraadpleegd op 15 juni 2022, van (https://codepen.io/meracle/pen/OJWQpVR)
- W3Schools. (2022a). How To Create a Flip Card with CSS. Geraadpleegd op 15 juni 2022, van (https://www.w3schools.com/howto/howto_css_flip_card.asp)
