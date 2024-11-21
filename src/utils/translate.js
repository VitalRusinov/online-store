const translateProp = (prop) => {
  switch (prop) {
    case 'height':
      return 'Высота';
    case 'width':
      return 'Ширина';
    default:
      return `Нужно внести это значение в список: ${prop}`;
  }
};

const translateColor = (color) => {
  switch (color) {
    case 'green':
      return 'Зелёный';

    case 'lazure':
      return 'Лазурный';

    case 'orange':
      return 'Оранжевый';

    case 'pink':
      return 'Розовый';

    case 'lavender':
      return 'Лаванда';

    case 'blue':
      return 'Синий';

    case 'lime':
      return 'Лаймовый';

    default:
      return `Нужно внести это значение в список: ${color}`;
  }
};

export { translateProp, translateColor };
