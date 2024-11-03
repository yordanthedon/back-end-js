function cooking(arr){
    let number = parseInt(arr[0]);
    const operations = arr.slice(1);

    for (let operation of operations){
        switch (operation){
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number = number * 0.8;
                console.log(number);
                break;
        }
    }
}