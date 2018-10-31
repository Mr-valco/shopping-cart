$(document).ready(function () {
    // Here we are provided an initial array of projects.
    // Use this array to dynamically create items on the screen.
    const itemList = [
        {
            category: 'Weapon',
            name: 'ace of spades',
            img: src = './assets/images/ace.jpg'
        },
        {
            category: 'Weapon',
            name: 'jade rabbit',
            img: src = './assets/images/jade.jpg'
        },
        {
            category: 'Weapon',
            name: 'mida multy tool',
            img: src = './assets/images/mida.jpg'
        },
        {
            category: 'Gear',
            name: 'skullfort',
            img: src = './assets/images/scull.jpg'
        },
        {
            category: 'Gear',
            name: 'sunbreakers',
            img: src = './assets/images/sun.jpg'
        },
        {
            category: 'Gear',
            name: 'roket',
            img: src = './assets/images/rocket.jpg'
        },
        {
            category: 'Consumables',
            name: 'xp boost',
            img: src = './assets/images/xp.jpg'
        },
        {
            category: 'Consumables',
            name: 'token boost',
            img: src = './assets/images/token.jpg'
        },
        {
            category: 'Consumables',
            name: 'treasure map',
            img: src = './assets/images/treasure.jpg'
        }
    ];

    const dupeFind = function (itemName, ID) {
        let cart = $('#cart');
        let items = $(`.forremove`);

        console.log(items.length);
        for (let i = 0; i <= items.length; i++) {
            if ($(`#item-${ID}`).attr('src') === itemName) {
                alert(itemName + ' Item already exists in cart!');
                break;
            } else {
                let incartItem = $(`<img class=" p-3 m-2 forremove btn btn-outline-danger" alt="${itemList[ID].name}" src="${itemList[ID].img}" id="item-${ID}"></img>`);
                cart.append(incartItem);

                $(`#item-${ID}`).on('click', function () {
                    this.remove();
                });
                break;
            }

        }

    }

    //item list
    const render = function () {

        for (let i = 0; i < itemList.length; i++) {

            const itemBtn = $(`<img class=" p-3 m-2 btn btn-warning product ${itemList[i].category} item-${i}">`);
            itemBtn.attr('item-name', itemList[i].name);
            itemBtn.text(itemList[i].name);
            itemBtn.attr('src', itemList[i].img);
            $('#items').append(itemBtn);
            $(`.item-${i}`).on('click', function () {
                dupeFind(itemList[i].img, i);
            });

        }
    }
    render();

    //filter
    for (let i = 0; i < itemList.length; i++) {
        $(`#${itemList[i].category}`).on('click', function () {
            $('.product').hide();
            $(`.${itemList[i].category}`).show();
        });
    }

    //all the categories
    $('#all').on('click', function () {
        $('.product').show();
    });

    //clear
    const clear = function () {
        $('#cart').empty();
    }
    $('#clear').on('click', clear);

    //remove
    const removeItem = function () {
        $(this).remove();

    }
    // $('#cart').on('click', '.forremove', removeItem);


});