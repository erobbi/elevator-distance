function elevatorDistance(array) {
  let d = 0;
  for (let i = 0; i < array.length - 1; i++) {
    d = d + Math.abs( array[ i ] - array[ i + 1 ] );
  }
  return d
}
