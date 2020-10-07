- input: 0
  expect: 0
- input:
    and: 3
  expect: 3
- input: null
  expect: null
- input:
    +:
      - 5
      - 3
  expect: 8
- input:
    quote:
      x: 3
      y: 5
  expect:
    ReferenceError: quote is not defined
