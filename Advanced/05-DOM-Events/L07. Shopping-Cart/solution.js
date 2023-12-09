function solve() {

   let products = [];
   let sum = 0;

   let buttons = document.querySelectorAll('.add-product');
   let buttonsArr = Array.from(buttons);
   buttonsArr.forEach(button => button.addEventListener('click', add));
   let textArea = document.getElementsByTagName('textarea')[0];

   let checkoutButton = document.querySelector('.checkout');
   checkoutButton.addEventListener('click', finish);

   function add(e) {
      let product = e.target.parentNode.parentNode;
      let productName = product.querySelector('.product-title').textContent;
      let productPrice = Number(product.querySelector('.product-line-price').textContent);

      if (!products.includes(productName)) {
         products.push(productName);
      }

      sum += productPrice;
      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
   }

   function finish(e) {
      textArea.textContent += `You bought ${products.join(', ')} for ${sum.toFixed(2)}.`
      buttonsArr.forEach(button => button.disabled = true);
      checkoutButton.disabled = true;
   }

} 