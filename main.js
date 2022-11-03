/* 
!Descrizione:
?Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
?Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
?Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
!Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */

//creare un array vuoto

let array = [];

//creare un generatore di numeri random in un ciclo di 5

for (let i = 0; i < 5; i++){
    let numeriRandom = Math.floor(Math.random() * 20) ;
    array.push(numeriRandom);
    console.log(array);
}

// pushiamo ogni numero generato nell'array
//stampiamo in pagina i 5 numeri generati

document.getElementById('numeri').innerHTML = array;

// utilizziamo il css per far scomparire con il display none


setTimeout(scomparsa, 5000);

function scomparsa(){
    let scompare = document.getElementById('numeri');
    scompare.classList.add("scompare");
}

// fare un ciclo di 5 prompt e con relativo push in un altro array sottoforma di funzione

let array2 = [];

setTimeout(domanda, 5500);

function domanda(){

    for (let i = 0; i < 5; i++){
        let richiesta = prompt('inserisci i numeri uno alla volta e schiaccia ok');
        array2.push(richiesta);
        console.log(array2);
    }

    document.getElementById('risposta').innerHTML = 'la tua risposta è stata:' + ' ' + array2;
    document.getElementById('soluzione').innerHTML = 'la soluzione era:' + ' ' + array;
    
   /*  let esitov = vittoria;
    let esitos = sconfitta; */

    /* if (array == array2){
        esitov.innerHTML = 'HAI VINTO';
    } else(array != array2);{
        esitos.innerHTML = 'HAI PERSO';
    } */
}

/* if (array==array2){
    alert("valori uguali");
} else if (array!=array2){
    document.getElementById('esitos').innerHTML = 'HAI PERSO :(';
}else{
    document.getElementById('esitos').innerHTML = '';
} */

// fare degli if e stampare se hai vinto o perso con i numeri inseriti e la soluzione
