
/*  L'utente clicca su un bottone

    -seleziono elemento della dom
    -aggiungo l'addeventlistener con la funzione anonima 
    
    -tutto quello che scrivo nella funzione sarà generato dopo il click */
    const buttonEl=document.querySelector('button');
    buttonEl.addEventListener('click', function(){
        /* il bottone genererà una griglia di gioco quadrata.
            -seleziono l'elemento container della dom
            -utilizzo il ciclo for
            -aggiungo i 100 div con classe square */
        const containerEl= document.querySelector('.container');
        for(i=1; i<=100; i++){
            //Ogni cella ha un numero progressivo, da 1 a 100 "${i}".
            const squareEl = document.createElement('div');
            squareEl.className='square';
            squareEl.innerText=(i);
            containerEl.insertAdjacentElement('beforeend', squareEl);
            
            
            
            /* Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
            -seleziono la squareEl e aggiungo addeventlistener
            -con il this aggiungo la classe */
            
            squareEl.addEventListener('click', function active(){
                this.classList.toggle('active')
                console.log(this.innerText)
                randomBombsNumber(1, 16)
                if (bombsArray.includes(this)){
                    console.log('ciao')
                }
                return this
            })
        }


        
    })


/* 
    Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione:
**nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */



/* creo la funzione per generare 16 numeri casuali da 1 a 100 senza ripetizione
    -function
    -while
    -if */
    let bombsArray=[]
    function randomBombsNumber(min, max) {
    
    while (bombsArray.length!==16){
    const bomb = Math.floor(Math.random() * (max - min + 1) ) + min;
    /* console.log(bomb) */
    /* return bombs */
    if (!bombsArray.includes(bomb)) {
        bombsArray.push(bomb)
        console.log(bombsArray) 
        
    }
    }
    return bombsArray
  }
  /* randomBombsNumber(1, 100) */
  
/*  */