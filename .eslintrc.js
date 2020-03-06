module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-extra-semi": 2, //禁止多余的冒号
    semi: [2, "always"], //语句强制分号结尾
    quotes: [0, "single"], //引号类型 `` "" '
    "space-before-function-paren": [0, "always"] //函数定义时括号前面要不要有空格
  }
};
