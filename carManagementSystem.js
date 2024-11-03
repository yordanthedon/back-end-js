function solve(cars) {

    function getCarsByBrand(brand) {
        return cars.filter(car => car.brand.toLowerCase() === brand.toLowerCase());
    }


    function addCar(id, brand, model, year, price, inStock) {

        const newCar = { id, brand, model, year, price, inStock };

        cars.push(newCar);
        return cars;
    }


    function getCarById(id) {

        const car = cars.find(car => car.id === id);

        return car ? car : `Car with ID ${id} not found`;
    }


    function removeCarById(id) {

        const index = cars.findIndex(car => car.id === id);

        if (index === -1) {
            return `Car with ID ${id} not found`;
        }
        cars.splice(index, 1);
        return cars;
    }


    function updateCarPrice(id, newPrice) {

        const car = cars.find(car => car.id === id);

        if (!car) {
            return `Car with ID ${id} not found`;
        }
        car.price = newPrice;
        return cars;
    }


    function updateCarStock(id, inStock) {

        const car = cars.find(car => car.id === id);
        
        if (!car) {
            return `Car with ID ${id} not found`;
        }
        car.inStock = inStock;
        return cars;
    }

    return {
        getCarsByBrand,
        addCar,
        getCarById,
        removeCarById,
        updateCarPrice,
        updateCarStock
    };
}