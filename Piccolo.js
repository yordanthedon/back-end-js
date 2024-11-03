function valet(carList) {
    let parking = [];
    for (const car of carList) {
        let [action, carPlate] = car.split(', ');
        if (action == 'IN' && !parking.includes(carPlate)) {
            parking.push(carPlate);
        } else if (action == 'OUT' && parking.includes(carPlate)) {
            parking.splice(parking.indexOf(carPlate), 1);
        }
    }
    if (parking.length > 0) {
        for (const car of parking.sort((a, b) => a.localeCompare(b))) {
            console.log(car);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
}