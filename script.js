/* Stegen
Ett tärningsspel där användaren ska kasta 1st tärning. Vid första kastet 
ska målet vara 1. Om 1 ej fås, ska man försöka igen. Hur många kast för att komma upp till/klara 6? */

function throwDice() {
    return Math.floor(Math.random() * 6 + 1);

    let goal = 1;
    let nmbrOfThrows = 0;

    while (goal < 7) {
        let dice = Math.floor(Math.random() * 6 + 1);
        console.log('Du kastade ' + dice);
        nmbrOfThrows++;
        if (dice === goal) {
            goal++;
            console.log('Snyggt! Det blev rätt!');
        }

    }
    console.log('Grattis du vann på ' + nmbrOfThrows + ' antal kast!');

}
//throwDice()


/* Knock out
Spelet har 2st tärningar.
Du som spelare väljer ett “knock out number” – antingen 6, 7, 8, eller 9.
Du som spelare väljer också vilken poäng som skall uppnås för att spelet skall avslutas.
Spelaren kastar båda tärningarna. Anteckna varje kasts resultat.
Om spelaren kastar något utav "knock out numbers" ges minuspoäng */

function knockOut() {

    let knockOutNumber = parseInt(window.prompt('Välj ett nummer mellan 6 och 9'));
    let goal = window.prompt('Välj en siffra som är målet');
    let sum = 0;
    let throws = 0;

    while (sum < goal) {
        let diceOne = Math.floor(Math.random() * 6) + 1;
        let diceTwo = Math.floor(Math.random() * 6 + 1);
        let diceThrow = diceOne + diceTwo;
        throws++;
        console.log('Du har kastat ' + diceThrow)
        if (diceThrow === knockOutNumber) {
            sum -= diceThrow;
            console.log('Du lyckades få ' + knockOutNumber + ' och får därför minuspoäng. Du har nu ' + sum + ' poäng');
        } else if (diceThrow !== knockOutNumber) {
            sum += diceThrow;
            console.log('Du har nu ' + sum + ' poäng')
        }

    }
    console.log('Du har kastat ' + throws + ' gånger och är klar med spelet!');
}
//knockOut()

/* 

let score = 0;
let knockOutNmbr = 0;
let goal = 0;
let isInputApproved = false;

while(!isInputApproved) {
    knockOutNmbr = window.prompt('Ange ett nummer mellan 6 och 9');
    if(knockOutNmbr < 6 || knockOutNmbr > 9) {
        window.alert('Du måste ange ett tal mellan 6 och 9');
    } else {
        goal = window.prompt('Ange ett mål! (större än 0)');
        if(goal <= 0) {
            window.alert('Du måste ange ett mål som är större än 0');
        } else {
            isInputApproved = true;
        }
    }
}

while(score < goal) {
    let diceOne = Math.floor(Math.random() * 6 + 1);
    let diceTwo = Math.floor(Math.random() * 6 + 1);
    let sum = diceOne + diceTwo;
    console.log('Du kastade ' + diceOne + 'och ' + diceTwo + 'summan var ' + sum);

    if(sum ===knockOutNmbr) {
        score -= poäng;
    } else if {
        score += sum;
    }
    console.log('Din totala poäng är nu ' + sum )
}

*/


/* Going to boston
 Spelet har 3st tärningar.
Kasta tärningarna och spara tärningen med högsta värdet.
Kasta de kvarvarande 2 och spara tärningen med högsta värdet.
Kasta sista tärningen och summera samtliga tre tärningar.
Spelaren med högst summerat värde vinner. Max poäng är 18.
*/

function goingToBoston() {

    let numOfDices = 3;
    let playerScore = [0, 0];

    for (let player = 0; player < playerScore.length; player++) {
        for (let i = numOfDices; i > 0; i--) {
            let highestRolledDice = 0;
            for (let j = 0; j < i; j++) {

                let rolledDice = Math.floor(Math.random() * 6 + 1);

                highestRolledDice = highestRolledDice < rolledDice ? rolledDice : highestRolledDice;
                /* 
                if(highestRolledDice < rolledDice){
                    highestRolledDice = rolledDice;
                }
                */
                console.log(`Tärningen fick: ${rolledDice}`);
            }

            playerScore[player] += highestRolledDice;
            console.log('Spelaren fick ' + highestRolledDice + ' poäng!');
        }

    }

    console.log('');
    for (let player = 0; player < playerScore.length; player++) {
        console.log(`Spelare ${player + 1}: ${playerScore[player]} poäng`);
    }

}
// goingToBoston()



/* Sten, sax och påse */
function stenSaxPase() {

    let computer = ['sten', 'sax', 'påse'];
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        let played = window.prompt('Sten, Sax, Påse');

        if (played === 'sten' || played === 'sax' || played === 'påse') {
            console.log('Du spelade ' + played);

            let num = Math.floor(Math.random() * 3)
            console.log('Datorn spelade ' + computer[num])

            if (played === computer[num]) {
                console.log('oavgjort!');
            } else if (
                (played === 'sten' && computer[num] === 'sax') ||
                (played === 'sax' && computer[num] === 'påse') ||
                (played === 'påse' && computer[num] === 'sten')
            ) {
                console.log('Grattis, fortsätt kämpa.')
                playerScore++
            } else {
                console.log('Datorn vann denna omgång, försök igen.')
                computerScore++
            }

        } else {
            console.log('Du måste välja sten, sax eller påse')
        }
    }

    if (playerScore > computerScore) {
        window.alert('Grattis du vann spelet!')
        console.log('Grattis du vann spelet!')
    } else {
        window.alert('Trist... datorn vann spelet.')
        console.log('Trist... datorn vann spelet.')
    }

}
//stenSaxPase()



/*
Fizz buzz
Loopa igenom hundra nummer och om:
Numret är dividerbart med 3, skriv ut "Fizz"
Numret är dividerbart med 5, skriv ut "Buzz"
Numret är dividerbart med 3 och 5, skriv ut "FizzBuzz" */

function fizzBuzz() {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}
/* fizzBuzz()



/* Högt eller lågt
Fråga användaren efter ett tal mellan 1 och 100. 
Programmet ska ha ett hemligt tal sparat. 
Det ska fortsätta fråga användaren till dess att 
användaren gissar det hemliga talet. 
Om man gissade för högt eller för lågt så ska det
skrivas ut, så att användaren har en rimlig chans att
klara det.*/

function hiOrLow() {

    let secretNmbr = Math.floor(Math.random() * 100 + 1);
    let gissning = 0;
    let antalGissningar = 0;

    while (secretNmbr !== gissning) {
        gissning = parseInt(window.prompt('Gissa ett nummer mellan 1 och 100'))
        antalGissningar++
        if (gissning > secretNmbr) {
            window.alert('Tyvärr, du gissade för högt!')
        } else if (gissning < secretNmbr) {
            window.alert('Tyvärr, du gissade för lågt!')
        }
    }
    window.alert('Du lyckades! Rätt nummer var ' + secretNmbr + '. Det tog ' + antalGissningar + ' antal försök!')
}
//hiOrLow()



/* Söka efter likheter mellan ord
Fråga användaren efter två ord, och kontrollera därefter hur många 
bokstäver som förekommer på samma plats i båda orden. */

function likheter() {

    let wordOne = window.prompt('ord ett: ')
    let wordTwo = window.prompt('ord två: ')

    for (let i = 0; i < wordOne.length; i++) {
        if (wordOne[i] === wordTwo[i]) {
            window.alert(wordOne[i] + '  är lika  ')
        } else if (wordOne[i] !== wordTwo[i]) {
            window.alert(wordOne[i] + ' och ' + wordTwo[i] + '  är olika  ')
        }
    }

    if (wordOne.length !== wordTwo.length) {
        window.alert('Orden måste vara lika långa')
    }
}
/*likheter()*/

function jamforaOrd() {
    let wordOne = window.prompt('Skriv ett ord');
    let wordTwo = window.prompt('Skriv ett annat ord med lika många bokstäver som det första ordet');
    let likheter = 0;

    if (wordOne === wordTwo) {
        window.alert('Du skrev samma ord två gånger! Skriv olika ord, tönt!');
    } else if (wordOne.length === wordTwo.length) {
        for (let i = 0; i < wordOne.length; i++) {
            if (wordOne[i] === wordTwo[i]) {
                likheter++;
            }
        }
        window.alert('Det finns ' + likheter + ' likheter i orden');
    } else {
        window.alert('Orden är inte lika långa, så det går inte att jämföra dem');
    }
}
// jamforaOrd() 