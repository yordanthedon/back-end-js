function heores(array){
    let heroes = [];

    array.forEach(heroData =>{
        let [heroname, heroLevel, heroItems] = heroData.split(' / ');
        heroLevel = Number(heroLevel);

        heroes.push({name: heroname, level: heroLevel, items: heroItems});
    })

    heroes.sort((a,b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}