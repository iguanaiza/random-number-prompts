function zgadnijLiczbe() {
    let randomNumber = Math.round(Math.random()*10);

    let inputData = parseInt(prompt("Spróbuj odgadnąć liczbę od 1 do 10. Masz 5 prób!\nWprowadź liczbę:"));
        
    for (let i=1; i<6; i++) {

        if (randomNumber === inputData && i<6) {
            alert(`Gratulacje! Odgadłaś za ${i} razem!`);
            if (confirm("Jeszcze raz?")) {
                zgadnijLiczbe();
            }
            break;
        }

        else if (inputData < randomNumber && i<5) {
            inputData = parseInt(prompt(`Niestety! Spróbuj ponownie.\nPodana przez Ciebie liczba jest mniejsza o ${randomNumber-inputData}.\nPróba ${i+1}/5.`));
        }
                
        else if (inputData > randomNumber && i<5) {
            inputData = parseInt(prompt(`Niestety! Spróbuj ponownie.\nPodana przez Ciebie liczba jest większa o ${inputData-randomNumber}.\nPróba ${i+1}/5.`));
        }

        else if (i === 5){
            alert("Niestety - przegrałaś.");
            if (confirm("Jeszcze raz?")) {
                zgadnijLiczbe();
            }
            break;
        }

        else if (confirm("Wprowadź liczbę, nie tekst.")){
            i--;
            inputData = parseInt(prompt(`Wprowadź liczbę.\nPróba ${i+1}/5.`));
        }

        else break;
    }
}

zgadnijLiczbe();
