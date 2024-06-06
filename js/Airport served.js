window.addEventListener("load", function() {
  const countries = ['Italy', 'France', 'Netherlands', 'Portugal', 'Spain', 'Germany', 'Greece'];

  const input = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');


  input.addEventListener('input', function() {
    const query = input.value.toLowerCase();
    const matchingCountries = countries.filter(function(country) {
      return country.toLowerCase().startsWith(query);
    });

    if (query.length > 0) {
      renderSuggestions(matchingCountries);
    } else {
      suggestions.innerHTML = '';
    }
  });

  function renderSuggestions(matchingCountries) {
    suggestions.innerHTML = '';
    matchingCountries.forEach(function(country) {
      const suggestion = document.createElement('p');
      suggestion.textContent = country;
      suggestion.addEventListener('click', function() {
        input.value = country;
        suggestions.innerHTML = ''; 
      });
      suggestions.appendChild(suggestion);
    });
  }

  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const query = input.value.toLowerCase();

    if (countries.includes(query.charAt(0).toUpperCase() + query.slice(1))) {
      window.location.href = query.charAt(0).toUpperCase() + query.slice(1) + '.html';
    } else {
      alert("Nessun risultato trovato per la tua ricerca.");
    }
  });
});

