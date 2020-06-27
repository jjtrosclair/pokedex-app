

document.write('<hr>')




var pokemonRepository = (function () {
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

    return {
        add: function(pokemon) {        //returning the two functions as key values
            pokemonList.push(item); //adding the input parameter to the array
            
        },

        getAll: function() {
            return pokemonList;
            
        }
    };
})();


pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height > 1){
        document.write('<div class="pokemon-container">' + pokemon.name + ' (height ' + pokemon.height + ')' + ' Wow that\'s big!' + '</div>')
    } else {
            document.write('<div class="pokemon-container">' + pokemon.name + ' (height ' + pokemon.height + ')' + '</div>')
        }
});




// pokemonList.forEach(function(pokemon){
//     if (pokemon.height > 1){
//         document.write('<div class="pokemon-container">' + pokemon.name + ' (height ' + pokemon.height + ')' + ' Wow that\'s big!' + '</div>')
//     } else {
//             document.write('<div class="pokemon-container">' + pokemon.name + ' (height ' + pokemon.height + ')' + '</div>')
//         }
// });











