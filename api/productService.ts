const API_URL = 'https://6819db9a1ac115563506bd6e.mockapi.io/bikes';

export interface Product {
  id: string;
  name: string;
  price: number;
  status: 'còn hàng' | 'hết hàng';
  image: string;
  description?: string;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Không thể tải danh sách sản phẩm');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Lỗi không xác định');
  }
}

export async function getProductById(id: string): Promise<Product> {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Không thể tải thông tin sản phẩm');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Lỗi không xác định');
  }
}

