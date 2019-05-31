module.exports = function main(inputs) {
  //{distance:1,parkTime:5}
  let distance = inputs.distance;
  let parkTime = inputs.parkTime;
  let price;
  if (distance <= 2) {
    price = 6 + parkTime * 0.25;
  } else if (distance > 2 && distance <= 8) {
    price = 6 + (distance - 2) * 0.8 + parkTime * 0.25;
  } else if (distance > 8) {
    price = 6 + (distance - 8) * 0.8 * 1.5 + 6 * 0.8 + parkTime * 0.25;
  }
  return Math.round(price);
};
