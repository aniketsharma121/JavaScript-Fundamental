// function for cut the fruit in pieces.
function cutFruitInpieces(fruit) {
    return fruit * 4;
}
// Fruit Processor 
const fruitProcessor = function (apple, banana) {
    // Function calling to other function 
    const applePieces = cutFruitInpieces(apple);
    const bananaPieces = cutFruitInpieces(banana);
    const juice = `Juice with ${applePieces} pieces of the apple and ${bananaPieces} pieces of the banana`;
    return juice;
}
console.log(fruitProcessor(2, 3));
