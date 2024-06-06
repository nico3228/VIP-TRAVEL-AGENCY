window.addEventListener("load", function() {
 const btn= document.getElementById('apply-btn');
   btn.addEventListener('click', aggiungiAeroporto);
  });

function aggiungiAeroporto(){
  let selectedAirportOption = document.getElementById('airports').options[document.getElementById('airports').selectedIndex];
  let selectedAirport = selectedAirportOption.textContent;
  document.getElementById('service-offer-title').textContent = 'Service offer in: ' + selectedAirport;
}