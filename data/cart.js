export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
     cart = [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2
     }, {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1
     }
     ];
};



function saveToStorage() {
     localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
     let matchingIteam;
     const quanitySelecter = document.querySelector(`.js-quantity-selector-${productId}`).value;

     cart.forEach((cartIteam) => {
          if (productId === cartIteam.productId) {
               matchingIteam = cartIteam;
          };
     });
     if (matchingIteam) {

          matchingIteam.quantity += Number(quanitySelecter);

     } else {
          cart.push({
               productId: productId,
               quantity: Number(quanitySelecter)
          })
     };
     saveToStorage();
}
export function removeFromCart(productId) {
     const newCart = [];

     cart.forEach((cartIteam) => {
          if (cartIteam.productId !== productId) {
               newCart.push(cartIteam);
          }
     });
     cart = newCart;
     saveToStorage();
};
export function calculateCartQuantity() {


     let cartQuantity = 0;

     cart.forEach((cartIteam) => {
          cartQuantity += cartIteam.quantity;
     });
     return cartQuantity
};
export function updateQuantity(productId, NewQuantity) {

     let matchingItem;
     cart.forEach((cartIteam) => {
          if (cartIteam.productId === productId) {
               matchingItem = cartIteam;

          }
     });
     matchingItem.quantity = NewQuantity

     saveToStorage();



};