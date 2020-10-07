const ID = (x) => x;
const EVAL = {
  object(x, env, y) {
    if (x === null) return null;
    const key = Object.keys(x)[0];
    if (!(key in env)) throw new ReferenceError(`${key} is not defined`);
    return env[key](x, env, y);
  },
  string(x, env, y) {
    return env[x];
  },
};
const y = (x, env = require("./builtins.js")) =>
  (EVAL[typeof x] || ID)(x, env, y);

module.exports = y;
