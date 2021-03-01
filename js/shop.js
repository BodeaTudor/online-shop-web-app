window.Shop = {

    API_BASE_URL: "http://localhost:8085",

    getProducts: function () {
        $.ajax({
            url: Shop.API_BASE_URL + "/products",
            method: "GET",
        }).done(function (response) {
            console.log(response)
        })
    },
};
Shop.getProducts();