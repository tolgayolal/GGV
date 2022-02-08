
export interface ICase {
  _id: Id;
  name: string;
  price: number;
  image: string;
  contents: Content[];
  oldPrice: Price;
}

export interface Content {
  possibility: number;
  id: number
  item: string
  color: Color
  collection: string
  itemPhoto: string
}

export interface Possibility {
  '$numberInt': string;
}

interface Price {
  '$numberDouble': string;
}

interface Id {
  '$oid': string;
}
export enum Color {
  default = 'default',
  lightblue = 'lightblue',
  blue = "blue",
  purple = "purple",
  pink = "pink",
  red = "red",
  yellow = "yellow"

}

export const ColorObj = {
  clip: "rgba(30, 40, 50, 1)",
  default: "hsla(0,0%,56.1%,.3)",
  lightblue: "rgba(84,202,227,.3)",
  blue: "rgba(41,88,255,.3)",
  purple: "rgba(121,58,255,.6)",
  pink: "rgba(255,71,170,0.6)",
  red: "rgba(252,53,40,0.5)",
  yellow: "rgba(255,148,22,0.5)"
}