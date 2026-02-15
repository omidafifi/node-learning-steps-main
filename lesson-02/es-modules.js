export default "string fpr Test";
// module.exports = "String for test";
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
module.exports = {
  subtract,
  add,
};

export { subtract, add };
