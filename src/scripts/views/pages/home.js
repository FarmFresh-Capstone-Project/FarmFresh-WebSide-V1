import '../components/dashboard-home';
import TheFarmDbSource from '../../data/thefarmdb-source'; // Pastikan path ke TheFarmDbSource benar

const Home = {
  async render() {
    return `
      <dashboard-home></dashboard-home>
    `;
  },

  async afterRender() {
    await loadItemsFromApi();
    updateDateTime();

    async function loadItemsFromApi() {
      try {
        const items = await TheFarmDbSource.listProducts();

        const totalItemsElement = document.querySelector(".item-container .texts-container h2");
        if (totalItemsElement) {
          totalItemsElement.textContent = items.length;
        }
      } catch (error) {
        console.error("Error fetching items from API:", error);
        alert("Failed to load items. Please try again later.");
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
  },
};

export default Home;
