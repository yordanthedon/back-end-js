function solve(product, quantity){
    let price;
    if (product === "coffee"){
        price = 1.5;
    } else if (product === "water"){
        price = 1;
    } else if (product === "coke"){
        price =1.4;
    } else if (product === "snacks"){
        price = 2;
    }
    let finalSum = price * quantity;

    console.log(finalSum.toFixed(2))
}