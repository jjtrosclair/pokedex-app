var pokemonRepository = (function () {
  var pokemonList = [];

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  function add(item) {
    pokemonList.push(item);

  }

  function getAll() {
    return pokemonList;
  }

  function showDetails(item) {
    loadDetails(item).then(function () {

      var modalContainer = document.querySelector('#modal-container');

      
        // Clear all existing modal content
        modalContainer.innerHTML = '';
        //create the second div
        var modal = document.createElement('div');
        modal.classList.add('modal');

        //adding the new modal content

        var modalCloseButton = document.createElement('button');
        modalCloseButton.classList.add('modal-close');
        modalCloseButton.innerText = 'Close';
        modalCloseButton.addEventListener('click', hideModal);
       

        var modalTitle = document.createElement('h1');
        modalTitle.innerText = item.name;
        modalTitle.classList.add('modal-title');

        var modalHeight = document.createElement('p');
        modalHeight.innerText = 'Height: ' + item.height + 'm';

        var modalTypes = document.createElement('p');
        modalTypes.innerText = 'Types: ' + item.types;

        var modalImage = document.createElement('img');
        modalImage.src = item.imageUrl;
        modalImage.classList.add('modal-image');

        modal.appendChild(modalCloseButton);
        modal.appendChild(modalTitle);
        modal.appendChild(modalImage);  
        modal.appendChild(modalHeight);
        modal.appendChild(modalTypes);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');

        // to close the modal using the escape key (checking if the modal is open)

        window.addEventListener('keydown', (e) => {
          var modalContainer = document.querySelector('#modal-container');
          if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
          }
        })

        // to close the modal by clicking outside of the modal

        modalContainer.addEventListener('click', (e) => {
          // also triggered when clicking INSIDE the modal but the modalContainer is the overlay around the modal div
          var target = e.target;
          if (target === modalContainer) {
            hideModal();
          }
        })
       

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
    $button.addEventListener('click', function (event) {
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
      item.types = details.types.map(function(pokemon) { // .map turns the [object, object] into the actual names of the types...Map is a collection of elements where each element is stored as a Key, value pair.
        return pokemon.type.name;
      })
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


  function hideModal() {
    var modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible'); }

})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});





