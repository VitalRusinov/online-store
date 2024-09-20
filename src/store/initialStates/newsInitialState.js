import news_1 from './pictures/news/news_1.png';
import news_2 from './pictures/news/news_2.png';
import news_3 from './pictures/news/news_3.png';

export const newsInitialState = {
  entries: [
    {
      id: '01',
      author: 'Laura Busche',
      name: {
        str_1: 'Новая',
        str_2: 'коллекция',
        str_3: 'кресел',
      },
      date: {
        day: '14',
        month: 'января',
        year: '2023',
      },
      readingTime: {
        count: 3,
        measurement: 'мин'
      },
      image: news_1,
    },
    {
      id: '02',
      author: 'Laura Busche',
      name: {
        str_1: 'Световой',
        str_2: 'дизайн',
        str_3: 'в интерьере',
      },
      date: {
        day: '14',
        month: 'января',
        year: '2023',
      },
      readingTime: {
        count: 3,
        measurement: 'мин'
      },
      image: news_2,
    },
    {
      id: '03',
      author: 'Laura Busche',
      name: {
        str_1: 'Как выбрать',
        str_2: 'шкаф',
        str_3: 'в спальню',
      },
      date: {
        day: '14',
        month: 'января',
        year: '2023',
      },
      readingTime: {
        count: 3,
        measurement: 'мин'
      },
      image: news_3,
    },
  ]
}
