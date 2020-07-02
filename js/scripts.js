var pokemonRepository = (function () {
    var pokemonList = [];

    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
        

        function add(item){
           pokemonList.push(item);

        }

        function getAll(){
            return pokemonList;
        }

        function showDetails(item) {
            loadDetails(item).then(function () {
              console.log(item);
            });
          }


        function addListItem(pokemon) {
            var $pokemonUl = document.querySelector('.pokemon-ul');
            var $listItem = document.createElement('li');
            var $button = document.createElement('button');
            $button.innerText = pokemon.name;
            $button.classList.add('pokedex-container');
            $listItem.appendChild($button);
            $pokemonUl.appendChild($listItem);
            $button.addEventListener('click', function(event) {
                showDetails(pokemon);
            });
        }

        function loadList() {
            return fetch(apiUrl).then(function (response) {
              return response.json();
            }).then(function (json) {
              json.results.forEach(function (item) {
                var pokemon = {
                  name: item.name,
                  detailsUrl: item.url
                };
                add(pokemon);
              });
            }).catch(function (e) {
              console.error(e);
            })
          }

          function loadDetails(item) {
            var url = item.detailsUrl;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (details) {
              // Now we add the details to the item
              item.imageUrl = details.sprites.front_default;
              item.height = details.height;
              item.types = details.types;
            }).catch(function (e) {
              console.error(e);
            });
          }

        

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails
          };

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
  });




// if (pokemon.height > 1){
//     document.write.$pokemonUl('<div class="pokemon-container">' + pokemon.name + ' (height ' + pokemon.height + ')' + ' Wow that\'s big!' + '</div>')
// } else {
//         document.write.$pokemonUl('<div class="pokemon-container">' + pokemon.name + ' (height ' + pokemon.height + ')' + '</div>')
//     }










