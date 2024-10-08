import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended, // Стандартные правила ESLint для JS
  pluginReact.configs.flat.recommended, // Стандартные правила для React
  {
    plugins: {
      prettier: prettierPlugin, // Подключаем Prettier как плагин
    },
    rules: {
      "prettier/prettier": "error", // Использование правил Prettier
      "react/prop-types": "off", // Отключение проверки prop-types
      "react/react-in-jsx-scope": "off", // Отключение требования импорта React
    },
  },
  prettierConfig, // Подключаем Prettier для отключения конфликтующих правил
];
