'use strict';

// CICLO FOR

/*
- variabile i = 1 come punto di partenza
- limite alla variabile, quindi minore uguale 100
- crescita della variabile, quindi i++
*/

for (let i = 1; 1 <= 100; i++)

    // questo ciclo dovrà avere delle condizioni
    // impostiamo la struttura if {} else {}

    { 
        if ((i % 3) === 0 && (i % 5) === 0)
        {console.log('FizzBuzz');}
    
        /* con && le due condizioni di i vengono connesse
        quindi FizzBuzz verrà stampato in console
        solo se le condizioni saranno uguali a zero */

        else if ((i % 5) === 0)
        {console.log('Buzz');}

        /* qui andiamo a dare ad i un valore
        che equivale a tutti i multipli (%) di 5
        e questo valore verrà poi sovrascritto da Buzz */

        else if ((i % 3) === 0)
        {console.log('Fizz');}

        /* qui andiamo a dare ad i un valore
        che equivale a tutti i multipli (%) di 3
        e questo valore verrà poi sovrascritto da Fizz */

        else
        {console.log(i);}

        /* se tutte le condizioni sopra non vengono
        rispettate, allora stampa semplicemente il valore
        numerico incrementale di i */

    }