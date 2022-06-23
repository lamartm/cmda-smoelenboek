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
Mo

### Overdracht 
Hoe installeren/klaarzetten 

Hoe werkt prismic/accounts aanmaken

Hoe fullscreen voor optimaal gebruik


### Link naar wikis
De product biografie en reflectie op eigen niveau zijn individueel beschreven. Hieronder staan de links naar beide wiki's om meer over de individuele processen te lezen.

[Mohamed](https://github.com/lamartm/cmda-smoelenboek/wiki) <br/>
[Mitzy](https://github.com/Mitzyyy/cmda-smoelenboek/wiki)

### Gedaan en wenslijst
- [x] Homepagina maken <br/>
- [x] De application installeren op een online web server (Heroku) <br/>

### Licentie
[GNU GPLv3](LICENSE)

### Bronnen 
- Mozilla. (2022a, april 5). scroll-snap-type - CSS: Cascading Style Sheets | MDN. Geraadpleegd op 1 juni 2022, van (https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)
- Mozilla. (2022b, mei 31). Element.scrollLeft - Web APIs | MDN. Geraadpleegd op 1 juni 2022, van (https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft)
- Stack Overflow. (2019, 16 augustus). CSS Scroll Snap Points with navigation (next, previous) buttons. Geraadpleegd op 1 juni 2022, van (https://stackoverflow.com/questions/57518428/css-scroll-snap-points-with-navigation-next-previous-buttons)
