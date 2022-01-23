export interface Product {
  name: string,
  price: number,
  customerRating: number,
  picture: string,
  type: string,
  longDescription: string,
  reviews: Review[],
  id: number,
  countInCart?: number
}

export interface Review {
  author: string,
  text: string,
  date: string,
}

export interface Price {
  range: [number, number] | [number, string],
  viewValue: string,
  checked: boolean,
}
