document.addEventListener('DOMContentLoaded', (event) => {

    loadItemsFromStorage();
    updateDateTime();

    function loadItemsFromStorage() {
        var items = JSON.parse(localStorage.getItem("items")) || [];
        
        var totalItemsElement = document.querySelector(".item-container .texts-container h2");
        if (totalItemsElement) {
            totalItemsElement.textContent = items.length;
        }
    }
  
    function updateDateTime() {
      var currentDateElement = document.getElementById("currentDay");
      var currentTimeElement = document.getElementById("currentTime");
  
      if (currentDateElement && currentTimeElement) {
        var currentDate = new Date();
        
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var formattedDate = currentDate.toLocaleDateString('en-US', options);
        var formattedTime = currentDate.toLocaleTimeString('en-US');
  
        currentDateElement.textContent = formattedDate;
        currentTimeElement.textContent = formattedTime;
      }
  
      setTimeout(updateDateTime, 1000);
    }
});
