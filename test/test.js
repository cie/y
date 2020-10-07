const y = require("../lib");
const { safeLoad, safeDump } = require("js-yaml");
const fs = require("fs");
const assert = require("assert").strict;
const tests = safeLoad(fs.readFileSync(__dirname + "/tests.yaml").toString());
runTests("tests", tests);
function runTests(name, t) {
  if ("input" in t) {
    it(name, () => {
      let result;
      try {
        result = y(t.input);
      } catch (e) {
        assert.deepEqual({ [e.constructor.name]: e.message }, t.expect);
        return;
      }
      assert.deepEqual(result, t.expect);
    });
  } else {
    describe(name, () => {
      Object.entries(t).forEach(([name, u]) => runTests(name, u));
    });
  }
}
