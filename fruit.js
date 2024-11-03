function cart(arr){
    let food = arr[0];
    let grams = arr[1];
    let price = arr[2];

    let kg = grams / 1000.0;

    let money = kg * price;

    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${food}.`)
}