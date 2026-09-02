export const cart = [];


function addtoCart(productId) {
  let matchingItem;
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
        });

      if (matchingItem) {
        matchingItem.quantity = +1;
      } else {
        cart.push({
        productId: productId,
        quantity: 1
      });
    }
}
