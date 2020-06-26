var pokemonList = [
    {
        name: 'Bulbasaur',
        height: .7,
        types: ['grass', 'poison'],
        abilities: ['Chlorophyll', 'Overgrow']
    },
    {
        name: 'Charmander',
        height: .6,
        types: ['fire'],
        abilities: ['Blaze', 'Solar-power']
    },
    {
        name: 'Squirtle',
        height: .5,
        types: ['water'],
        abilities: ['Rain-dish', 'Torrent']
    },
    {
        name: 'Blastoise',
        height: 5.03,
        types: ['water'],
        abilities: ['Torrent']
    }
]


document.write('<hr>')


pokemonList.forEach(function(pokemon){
    if (pokemon.height > 1){
        document.write('<div class="pokemon-container">' + pokemon.name + ' (height ' + pokemon.height + ')' + ' Wow that\'s big!' + '</div>')
    } else {
            document.write('<div class="pokemon-container">' + pokemon.name + ' (height ' + pokemon.height + ')' + '</div>')
        }
})

// for (i = 0; i < pokemonList.length; i++){
//    if (pokemonList[i].height > 1){
//     document.write('<div>' + pokemonList[i].name + ' (height ' + pokemonList[i].height + ')' + ' Wow that\'s big!' + '</div>')
// } else {
//         document.write('<div>' + pokemonList[i].name + ' (height ' + pokemonList[i].height + ')' + '</div>')
//     }
// }










// for (i = 0; i < length.pokemonList; i++){
//     if (pokemonList[i].height > 1){
//      document.write('<div>' + JSON.stringify(pokemonList[i].name) + '(' + JSON.stringify(pokemonList[i].height) + ')' + ' Wow that\'s big!' + '</div>')
//  } else {
//          document.write('<div>' + JSON.stringify(pokemonList[i].name) + '(' + JSON.stringify(pokemonList[i].height) + ')' + '</div>')
//      }
//  }