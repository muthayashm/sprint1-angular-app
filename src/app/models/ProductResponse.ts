interface ProductResponse {
  id: number;
  name: string;
  description: string;
  imageLink: string;
  price: number;
  category: string;
  discount: number;
  isNew: boolean;
}

export interface Response {
  products: ProductResponse[];
}
