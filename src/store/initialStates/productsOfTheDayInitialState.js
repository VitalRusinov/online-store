import Santa_Trinita from './pictures/lamps/Santa_Trinita.png';
import Moonseat from './pictures/chairs/Moonseat.png';
import WENDY from './pictures/tables/WENDY.png';


export const productsOfTheDayInitialState = {
  entries: [
    {
      id: 'lamp_01',
      image: Santa_Trinita,
      product: 'Лампа настольная',
      name: 'Santa Trinita',
      article: 'GNM001',
      color: 'lavender',
      description: 'Функциональная дизайнерская лампа для создания максимально комфортного освещения',
      designer: 'Benjamin Moor',
      size: {
        height: '60см'
      },
      price: 150000
    },
    {
      id: 'chair_01',
      image: Moonseat,
      product: 'Кресло',
      name: 'Moonseat',
      article: 'CHR001',
      color: 'lazure',
      description: 'Кресло с изгибами, напоминающими лунные световые дорожки',
      designer: 'Elara Moonshadow',
      size: {
        height: '100см',
        width: '70см'
      },
      price: 90000
    },
    {
      id: 'table_01',
      image: WENDY,
      product: 'Высокий стол',
      name: 'WENDY',
      article: 'TBL001',
      color: 'lavender',
      description: 'Высокий стол для максимально удобного сидения за ним',
      designer: 'Elara Moonshadow',
      size: {
        height: '70см',
        width: '120см'
      },
      price: 150000
    }    
  ]
}