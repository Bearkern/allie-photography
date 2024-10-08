module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 100, // 每行文字數量達 100 字元就換到新的一行
  semi: true, // 每個語句的結尾需要分號
  singleQuote: true, // 字串使用單引號，而不是雙引號
  trailingComma: 'all', // 如 Object、Array 內的元素不需要尾隨逗號
  endOfLine: 'auto', // 結尾換行符號
};
