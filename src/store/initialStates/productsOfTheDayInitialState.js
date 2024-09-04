import Santa_Trinita from './pictures/lamps/Santa_Trinita.png';
import Lunaris from './pictures/mirrors/Lunaris.png';
import WENDY from './pictures/tables/WENDY.png';


export const productsOfTheDayInitialState = {
  lamp_01: {
    image: Santa_Trinita,
    product: 'Лампа настольная',
    name: 'Santa Trinita',
    article: 'GNM001',
    color: 'Лаванда',
    description: 'Функциональная дизайнерская лампа для создания максимально комфортного освещения',
    designer: 'Benjamin Moor',
    size: {
      height: '60см',
    },
    price: 150000,
  },
  mirror_01: {
    image: Lunaris,
    product: 'Зеркало напольное',
    name: 'Lunaris',
    article: 'MIR001',
    color: 'Лаванда',
    description: 'Зеркало с лунными узорами, излучающее мягкое ночное сияние',
    designer: 'Elara Moonshadow',
    size: {
      height: '160см',
    },
    price: 150000,
  },
  table_01: {
    "image": WENDY,
    "product": "Высокий стол",
    "name": "WENDY",
    "article": "TBL001",
    "color": "Лаванда",
    "description": "Высокий стол для максимально удобного сидения за ним",
    "designer": "Elara Moonshadow",
    "size": {
      "height": "70см",
      "width": "120см"
    },
    "price": 150000
  },
}