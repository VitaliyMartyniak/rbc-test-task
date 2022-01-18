export interface Product {
  name: string,
  price: number,
  customerRating: number,
  picture: 'phone' | 'tv' | 'appliance' | 'game',
  type: 'phones' | 'TVs' | 'appliances' | 'games',
  longDescription: string,
  reviews: [],
}
