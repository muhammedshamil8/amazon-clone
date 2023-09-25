export const cart = [];

export function addToCart(productId) {
     let matchingIteam;
     
     cart.forEach((cartIteam) => {
          if (productId === cartIteam.productId) {
               matchingIteam = cartIteam;
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

