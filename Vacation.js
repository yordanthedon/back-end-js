function vacantion(array){
    let number = parseInt(array[0]);
    let group = array[1];
    let day = array[2];

    ticket = 0;
    if (group === "Students"){
        if (day === "Friday"){
            ticket = 8.45;
        } else if (day === "Saturday"){
            ticket = 9.80;
        } else if (day === "Sunday"){
            ticket = 10.46;
        }
    } else if (group === "Business"){
        if (day === "Friday"){
            ticket = 10.90;
        } else if (day === "Saturday"){
            ticket = 15.60;
        } else if (day === "Sunday"){
            ticket = 16;
        }
    } else if (group === "Regular"){
        if (day === "Friday"){
            ticket = 15;
        } else if (day === "Saturday"){
            ticket = 20;
        } else if (day === "Sunday"){
            ticket = 22.50;
        }
    }

    totalPrice = number * ticket;

    if (group === "Students" && number >= 30){
        totalPrice *= 0.85;
    } else if (group === "Business" && number >= 100){
        totalPrice = totalPrice - (ticket * 10);
    } else if (group === "Regular" && (number >= 10 && number <= 20)){
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}