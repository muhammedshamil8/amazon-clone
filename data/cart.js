export const cart = [];

export function addToCart(productId) {
     let matchingIteam;
     cart.forEach((iteam) => {
          if (productId === iteam.productId) {
               matchingIteam = iteam;
          };
     });
     if (matchingIteam) {
          matchingIteam.quantity += 1;
     } else {
          cart.push({
               productId: productId,
               quantity: 1
          })
     };
}

