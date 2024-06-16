import '../components/history-menu';
import TheFarmDbSource from '../../data/thefarmdb-source';

const History = {
  async render() {
    return `
      <history-menu></history-menu>
    `;
  },

  async afterRender() {
    await loadSalesDataFromApi();

    async function loadSalesDataFromApi() {
      try {
        const sales = await TheFarmDbSource.getSales(); // Memanggil fungsi API untuk mendapatkan data penjualan
        
        // Update total penjualan
        const totalSalesElement = document.querySelector(".order-count .texts-container h2");
        if (totalSalesElement) {
          totalSalesElement.textContent = sales.length;
        }

        // Update data di tabel
        const tableBodyElement = document.querySelector(".order-table table");
        if (tableBodyElement) {
          const rows = sales.map((sale, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${sale.customer.name}</td>
              <td>${sale.items.length}</td>
              <td>${sale.total}</td>
              <td>${sale.shipping.name}</td>
              <td>${sale.shipping.address}</td>
            </tr>
          `).join('');
          
          // Mengisi tabel dengan baris data penjualan
          tableBodyElement.querySelector('tbody').innerHTML = rows;
        }
      } catch (error) {
        console.error("Error fetching sales data from API:", error);
        alert("Failed to load sales data. Please try again later.");
      }
    }
  },
};

export default History;
