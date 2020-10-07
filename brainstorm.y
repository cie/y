import:
  Wikiapi: wikiapi
macro:
  defn:

//: Line comment
//:
  an entire block: commented out
  from: 1
  //: this is interesting
  to: 100
const:
  w:
    new:
      Wikiapi: 'https://hu.wiktionary.org/w/api.php'
export default:
  function:
    
const:
  sqr:
    function: x
    *:
      - x
      - x
  x: 12
  k:
    quote:
      x: 52
      y: 4
      z: 6
  z:
    quote: Hello world

const:
  let:
    maybe:
      monad:
        if:
          nullish?: b
        then: undefined
        else:
          f: b
        
        