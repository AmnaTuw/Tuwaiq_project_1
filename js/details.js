let iceCreams = [{

        'name': 'chocleate iceCream',
        'price': 8,
        'img': '../img/image_from_ios(20).jpg'
    },

    {

        'name': 'Citrus Tosset Latin Lemon',
        'price': 10,
        'img': '../img/image_from_ios(21).jpg'
    },

    {

        'name': 'Strawberries',
        'price': 16,
        'img': '../img/image_from_ios(11).jpg'
    },

    {

        'name': 'Mixed mango and chocolate',
        'price': 20,
        'img': '../img/image_from_ios(16).jpg'
    },
    {

        'name': 'pistachio',
        'price': 8,
        'img': '../img/image_from_ios(17).jpg'
    },
    {

        'name': 'Mint Chocolate Chip',
        'price': 13,
        'img': '../img/image_from_ios(22).jpg'
    },

];








$('#addChocoIce').click(() => {
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    if (cart == null) {
        const newCart = [];
        newCart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(newCart))
    } else {
        cart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }
})
$('#addpistachio').click(() => {
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    if (cart == null) {
        const newCart = [];
        newCart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(newCart))
    } else {
        cart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }
})

$('#addlemon').click(() => {
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    if (cart == null) {
        const newCart = [];
        newCart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(newCart))
    } else {
        cart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }
})
$('#addmixed').click(() => {
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    if (cart == null) {
        const newCart = [];
        newCart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(newCart))
    } else {
        cart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }
})
$('#addChip').click(() => {
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    if (cart == null) {
        const newCart = [];
        newCart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(newCart))
    } else {
        cart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }
})
$('#addStrawberries').click(() => {
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    if (cart == null) {
        const newCart = [];
        newCart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(newCart))
    } else {
        cart.push({
            name: iceCreams[0].name,
            price: iceCreams[0].price
        })
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }
})





// $(document).ready(function(){

// let name =sessionStorage.getItem('name');
// console.log(name);
// let IceCream =getIceCream(name)
// console.log(IceCream)
// $('card-title').text(name)
// })

const items = function (name, price, image, qyt) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.qyt = qyt;
}

$('#addChocoIce').click(function () {
    const name = $('#addChocoIceCard .card-text').text();
    const price = $('#addChocoIceCard .price').text();
    const image = $('#addChocoIceCard .card-img-top').attr('src');
    const qyt = 1;

    let newItem = new items(name, price, image, qyt);
    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));

    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        //find if there is an item with name Cappuccino
        const resulte = selectedItems.find((item) => item.name === name);
        if (resulte) {
            const result = {
                name: resulte.name,
                price: resulte.price,
                image: resulte.image,
                qyt: ++resulte.qyt
            }
            selectedItems.splice(selectedItems.indexOf(resulte), 1, result)
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        } else {
            selectedItems.push(newItem);
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }
        //then only add one to its quantity
        //otherwise push the item
    }

    const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems'));

    $('.cart-items-container').html("");
    cardItems.forEach(element => {
        $('.cart-items-container').append(
            `<div class="row">
            <div class="col">
              <img src="${element['image']}" height="100px" width="100px">
            </div>
            <div class="col">
              <div class="row">
              ${element['name']}
              </div>
              <div class="row">
              ${element['price']}
              </div>
              <div class="row">
                    ${element['qyt']}
                </div>
            </div>
            <hr>
          </div>`)
    });
});