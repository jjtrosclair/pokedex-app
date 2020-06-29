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
        //declare functions using function keyword, then return them as key value pairs, using the same name for both keys and values

        function add(item){
           pokemonList.push(item);

        }

        function getAll(){
            return pokemonList;
        }

        function addListItem(pokemon) {
            var $pokemonUl = document.querySelector('.pokemon-ul');
            var $listItem = document.createElement('li');
            var $button = document.createElement('button');
            $button.innerText = pokemon.name + ' (height): ' + pokemon.height + "m";
            $button.classList.add('pokedex-container');
            $listItem.appendChild($button);
            $pokemonUl.appendChild($listItem);
        }

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem
          };

})();


pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});


// if (pokemon.height > 1){
//     document.write.$pokemonUl('<div class="pokemon-container">' + pokemon.name + ' (height ' + pokemon.height + ')' + ' Wow that\'s big!' + '</div>')
// } else {
//         document.write.$pokemonUl('<div class="pokemon-container">' + pokemon.name + ' (height ' + pokemon.height + ')' + '</div>')
//     }










