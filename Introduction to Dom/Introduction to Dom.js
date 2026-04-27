//Il dom(Document Object Model) è una rappresentazione ad albero di un documento HTML. Non è parte di JavaScript, ma è un'API(strumenti a nostri disposizione) che i browser implementano per permettere agli sviluppatori di interagire con il contenuto della pagina web. Il DOM consente di accedere e manipolare gli elementi HTML, i loro attributi e il loro contenuto.


//Il DOM è composto da diversi tipi di nodi:

//Document node: nodo radice che rappresenta l'intero documento HTML, rappresentato dall'oggetto document, punto di acceso principale al DOM.
//Element node: rappresenta un elemento HTML, come <div>, <p>, <a>, ecc. Possono avere attributi e nodi figli.
//Text node: rappresenta il testo all'interno di un elemento HTML. Non possono avere nodi figli, ma possono avere spazi bianchi e a capo.
//Attribute node: rappresenta un attributo di un elemento HTML, come id, class, href, ecc. Non sono nodi figli degli elementi, ma sono associati a essi. 
//Comment node: rappresenta un commento all'interno del documento HTML. Non sono visibili nella pagina web, ma possono essere utili per gli sviluppatori per annotare il codice.


//L'oggetto document è il punto di accesso principale al DOM. 


//Il document è la radice dell'albero DOM e rappresenta l'intero documento HTML. Attraverso l'oggetto document, è possibile accedere a tutti gli elementi, attributi e nodi del documento. 


//Il DOM è un ponte tra :
//HTMl statico e rappresentazione dinamica della pagina 
//Css statico a stili applicati agli elementi
//JavaScript a interrattività e manipolazione del contenuto della pagina.

//Senza il DOM, JavaScript non potrebbe interagire con la pagina web in modo dinamico, come:
//Cambiare il contenuto di una pagina senza ricaricarla
//Rispondere a eventi come click, hover, ecc, fatti dell'utente
//Creare animazioni e effetti visivi e in generale interfacce dinamiche 
//Validare e inviare moduli
//Creare applicazioni web complesse e interattive.



//Lezione in una frase: Javascript non lavora su HTML ma sul DOM.