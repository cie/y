const ID = (x) => x;
const EVAL = {
  object(x, env, eval) {
    if (x === null) return null;
    const key = Object.keys(x)[0];
    if (!(key in env)) throw new ReferenceError(`${key} is not defined`);
    return env[key](x, env, eval);
  },
  string(x, env, eval) {
    return env[x];
  },
};
module.exports = (x, env = require("./builtins.js")) =>
  (EVAL[typeof x] || ID)(x, env, eval);
