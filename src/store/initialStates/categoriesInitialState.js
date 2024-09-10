import mirrors from './pictures/categories/mirrors.png';
import lamps from './pictures/categories/lamps.png';
import chairs from './pictures/categories/chairs.png';
import tables from './pictures/categories/tables.png';

export const categoriesInitialState = {
  entries: [
    {
      id: 'category_01',
      image: mirrors,
      name: {
        firstLine: 'Напольные',
        secondLine: 'зеркала',
      },
      categoryIdent: 'mirrors',
    },
    {
      id: 'category_02',
      image: lamps,
      name: {
        firstLine: 'Торшеры',
        secondLine: 'и лампы',
      },
      categoryIdent: 'lamps',
    },
    {
      id: 'category_03',
      image: chairs,
      name: {
        firstLine: 'Кресла',
        secondLine: 'и стулья',
      },
      categoryIdent: 'chairs',
    },
    {
      id: 'category_04',
      image: tables,
      name: {
        firstLine: 'Столы',
        secondLine: 'и тумбы',
      },
      categoryIdent: 'tables',
    },
  ]
}
