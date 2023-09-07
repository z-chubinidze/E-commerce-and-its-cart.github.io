// search bar wisible
var serc = document.getElementById("search");

function sear() {
    serc.style.display = "block";
}


// axios

var row = document.getElementById("row");


axios.get("https://fakestoreapi.com/products").then(function (responce) {
    const products = [];
    responce.data.forEach((product, index) => {
        if (products.length < 6) {
            products.push(product)

            //create cols
            var col = document.createElement("div");
            col.classList.add("col-12")
            col.classList.add("col-md-6")
            col.classList.add("col-lg-4")
            row.appendChild(col);
            //end cols

            //create product boxes
            var box = document.createElement("div")
            col.appendChild(box)
            box.classList.add("product-box")

            var imageBox = document.createElement("div");
            box.appendChild(imageBox);
            imageBox.classList.add("image-box")
            imageBox.style.backgroundColor = "rgba(246, 246, 246, 1)"

            // create a new images
            var img = document.createElement("img");

            // Create a new attribute object
            var src = document.createAttribute("src");

            // Set the name of the attribute
            src.name = "src";

            // Set the value of the attribute
            src.value = product.image;
            img.attributes.setNamedItem(src);
            imageBox.appendChild(img)
            img.classList.add("img-2")
            img.style.width = "95%";
            img.style.height = "280px";

            var shopCart = document.createElement("div")
            imageBox.appendChild(shopCart);
            shopCart.classList.add("shop-cart")


            // create a new image for shop-cart
            var img2 = document.createElement("img");
            img2.src = './images/Shopping Cart.png'
            shopCart.appendChild(img2)

            var atr = shopCart.setAttribute('onclick', 'add()');

            var wishList = document.createElement("div");
            imageBox.appendChild(wishList);
            wishList.classList.add("wish-list")
            // create a new image for wishList
            var img3 = document.createElement("img");
            img3.src = './images/heart.png'
            wishList.appendChild(img3)


            var priceBox = document.createElement("div");
            box.appendChild(priceBox);
            priceBox.classList.add("price-box")

            var poductName = document.createElement("h5");
            priceBox.appendChild(poductName);
            poductName.classList.add("poductName")
            poductName.innerText = product.title;

            var img4 = document.createElement("img")
            img4.src = './images/stars.png';
            priceBox.appendChild(img4)
            img4.style.marginBottom = "12px"

            var prices = document.createElement("div");
            priceBox.appendChild(prices);
            prices.classList.add("prices");

            if (index < 5) {
                let span1 = document.createElement("span")
                prices.appendChild(span1);
                span1.innerText = "$300.00";
                span1.style.textDecorationLine = "line-through";
                span1.classList.add("span-1")

                let span2 = document.createElement("span");
                prices.appendChild(span2);
                span2.innerText = "$" + product.price;
                span2.classList.add("span-2")
            } else if (index = 6) {
                let span2 = document.createElement("span");
                prices.appendChild(span2);
                span2.innerText = "$" + product.price;
                span2.classList.add("span-2")
            }




        }

    })

})

// caunter 


var i = 0
var caunter = document.getElementById("count");
var caunter2 = document.getElementById("count2");
caunter.innerText = "0"
function add() {
    i++
    caunter.textContent = i;
    caunter2.textContent = i;
}
