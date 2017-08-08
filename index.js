function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  let namedFunction = function asdf() {
    console.log("asdf")
  }
  return namedFunction
}

function returnsAnAnonymousFunction() {
  return () => console.log("Anonymous function")
}
