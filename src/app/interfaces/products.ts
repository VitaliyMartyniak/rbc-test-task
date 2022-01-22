export interface Product {
  name: string,
  price: number,
  customerRating: number,
  picture: 'phone' | 'tv' | 'appliance' | 'game',
  type: ProductType,
  longDescription: string,
  reviews: [],
  id: number,
  countInCart?: number
}

export type ProductType = 'phones' | 'TVs' | 'appliances' | 'games'

export interface Price {
  range: [number, number] | [number, string],
  viewValue: string,
  checked: boolean,
}
