module.exports = {
  "+": ({ "+": els }, env, eval) => els.reduce((a, b) => a + eval(b, env), 0),
  and: ({ and: value }, env, eval) => eval(value, env),
};
