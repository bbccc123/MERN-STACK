function addDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export function calcPrices(orderItems) {
  const itemsPrice = orderItems.reduce(
    (acc, item) => acc + (item.discount_price * 100 * item.qty) / 100,
    0
  );

  const shippingPrice = itemsPrice > 150000 ? 0 : 30000;

  const taxPrice = 0.15 * itemsPrice;

  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  return {
    itemsPrice: addDecimals(itemsPrice),
    shippingPrice: addDecimals(shippingPrice),
    taxPrice: addDecimals(taxPrice),
    totalPrice: addDecimals(totalPrice),
  };
}
