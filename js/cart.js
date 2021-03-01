window.Cart = {
    API_BASE_URL: "http://localhost:8085",

    getProducts: function () {
        $.ajax({
            url: Cart.API_BASE_URL + "/carts/" + 1,
            method: "GET",
        }).done(function (response) {
            console.log(response);

            Cart.displayProducts(response.products);
        })
    },

    displayProducts: function (products) {
        var allProductsHtml = "";

        products.forEach(product => allProductsHtml += Cart.getProductHtml(product));

        $(".shop_table.cart tbody").html(allProductsHtml);
    },

    getProductHtml: function (product) {
        return `<tr class="cart_item">
         <td class="product-remove">
             <a title="Remove this item" class="remove" href="#">×</a> 
         </td>

         <td class="product-thumbnail">
             <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src="img/product-thumb-2.jpg"></a>
         </td>

         <td class="product-name">
             <a href="single-product.html">${product.name}</a> 
         </td>

         <td class="product-price">
             <span class="amount">$${product.price}</span> 
         </td>

         <td class="product-quantity">
             <div class="quantity buttons_added">
                 <input type="button" class="minus" value="-">
                 <input type="number" size="4" class="input-text qty text" title="Qty" value="1" min="0" step="1">
                 <input type="button" class="plus" value="+">
             </div>
         </td>

         <td class="product-subtotal">
             <span class="amount">$${product.price}</span> 
         </td>
         </tr>`

    },
};

Cart.getProducts();