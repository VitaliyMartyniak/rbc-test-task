export interface Product {
  name: string,
  price: number,
  customerRating: number,
  picture: 'phone' | 'tv' | 'appliance' | 'game',
  type: ProductType,
  longDescription: string,
  reviews: [],
}

export type ProductType = 'phones' | 'TVs' | 'appliances' | 'games'

export interface Price {
  value: [number, number] | [number, string],
  viewValue: string,
  checked: boolean,
}
