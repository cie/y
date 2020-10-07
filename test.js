const y = require(".");
const { safeLoad, safeDump } = require("js-yaml");
const fs = require("fs");
const assert = require("assert").strict;
const tests = safeLoad(fs.readFileSync("tests.y").toString());
tests.forEach(({ input, expect }) => {
  it(`processes\n${safeDump(input)}`, () => {
    let result;
    try {
      result = y(input);
    } catch (e) {
      assert.deepEqual({ [e.constructor.name]: e.message }, expect);
      return;
    }
    assert.deepEqual(result, expect);
  });
});
