import API_ENDPOINT from '../globals/api-endpoint';

class TheFarmDbSource {
  static async listProducts() {
    const response = await fetch(API_ENDPOINT.LIST_PRODUCTS);
    const products = await response.json();
    return products;
  }

  static async addProduct(productData) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_PRODUCT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error('Failed to add product.');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  }

  async getSales() {
    const response = await fetch(API_ENDPOINT.SALES, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Pastikan Anda menyimpan token di localStorage
      }
    });
    const responseJson = await response.json();
    return responseJson; // Asumsikan response sudah sesuai dengan struktur data checkout di Firebase
  }
}

export default TheFarmDbSource;