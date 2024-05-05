'use strict';

/* creo una costante collegata con il primo elemento
dalla classe griglia */

const grid = document.querySelector('div.griglia');

// CICLO FOR

/*
- variabile i = 1 come punto di partenza
- limite alla variabile, quindi minore uguale 100
- crescita della variabile, quindi i++
*/

for (let i = 1; 1 <= 100; i++)

    {   
        /* imposto una costante per creare un div
        che fungerà da cella per incasellare i numeri, una box */

        const div = document.createElement('div');

        // questo ciclo dovrà avere delle condizioni
        // impostiamo la struttura if {} else {}

        if ((i % 3) === 0 && (i % 5) === 0)
        {
            console.log('FizzBuzz');

            /*durante la stampa, la proprietà append
            aggiungerà alla fine sia una cella div
            sia una stringa di testo FizzBuzz*/

            div.append('FizzBuzz');
            grid.append(div);
        }
    
        /* con && le due condizioni di i vengono connesse
        quindi FizzBuzz verrà stampato in console
        solo se le condizioni saranno uguali a zero */

        else if ((i % 5) === 0)
        {
            console.log('Buzz');

            /*durante la stampa, la proprietà append
            aggiungerà alla fine sia una cella div
            sia una stringa di testo Buzz*/

            div.append('Buzz');
            grid.append(div);
        }

        /* qui andiamo a dare ad i un valore
        che equivale a tutti i multipli (%) di 5
        e questo valore verrà poi sovrascritto da Buzz */

        else if ((i % 3) === 0)
        {
            console.log('Fizz');
        
            /*durante la stampa, la proprietà append
            aggiungerà alla fine sia una cella div
            sia una stringa di testo Fizz*/

            div.append('Fizz');
            grid.append(div);
        }

        /* qui andiamo a dare ad i un valore
        che equivale a tutti i multipli (%) di 3
        e questo valore verrà poi sovrascritto da Fizz */

        else
        {
            console.log(i);

            /*durante la stampa, la proprietà append
            aggiungerà alla fine sia una cella div */

            div.append(i);
            grid.append(div);
        }

        /* se tutte le condizioni sopra non vengono
        rispettate, allora stampa semplicemente il valore
        numerico incrementale di i */

    }