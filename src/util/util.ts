import { Content } from "../interfaces/Cases";

export const toAbsoluteUrl = (pathname: string) => process.env.PUBLIC_URL + pathname

export function calcShuffle(caseArray: Content[]) {
      const newArray: Content[] = [];
      caseArray.forEach((i) => {
            for (let index = 0; index < i.possibility; index++) {
                  newArray.push(i);
            }
      });
      let currentIndex = newArray.length,
            randomIndex;

      while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [newArray[currentIndex], newArray[randomIndex]] = [
                  newArray[randomIndex],
                  newArray[currentIndex],
            ];
      }

      return newArray;
}
export function shuffle(caseArray: Content[]) {
      let currentIndex = caseArray.length,
            randomIndex;

      while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [caseArray[currentIndex], caseArray[randomIndex]] = [
                  caseArray[randomIndex],
                  caseArray[currentIndex],
            ];
      }

      return caseArray;
}

const colors = {
      clip: "rgba(30, 40, 50, 1)",
      default: "hsla(0,0%,56.1%,.3)",
      lightblue: "rgba(84,202,227,.3)",
      blue: "rgba(41,88,255,.3)",
      purple: "rgba(121,58,255,.6)",
      pink: "rgba(255,71,170,0.6)",
      red: "rgba(252,53,40,0.5)",
      yellow: "rgba(255,148,22,0.5)",
}
export const randomColor = () => {
      const keys = Object.values(colors)
      const color = keys[Math.floor(Math.random() * keys.length)]
      return color

}