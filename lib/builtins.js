module.exports = {
  "+": ({ "+": els }, env, y) => els.reduce((a, b) => a + y(b, env), 0),
  and: ({ and: value }, env, y) => y(value, env),
  quote: ({ quote: value }, env, y) => value,
  lambda: ({ lambda: param, ...block }, env, y) => (arg) =>
    y(block, { ...env, [param]: arg }),
  call: ({ call: fn, with: arg }, env, y) => y(fn, env)(arg),
};
