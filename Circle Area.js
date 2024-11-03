function area(input){
    let result = typeof(input);

    if (result === "number"){
        circle = Math.pow(input, 2) * Math.PI;
        console.log(circle.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we received a ${result}.`)
    }
}