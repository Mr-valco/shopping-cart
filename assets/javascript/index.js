$(document).ready(function () {
    // Here we are provided an initial array of projects.
    // Use this array to dynamically create items on the screen.
    const itemList = [
        {
            category: 'Weapon',
            name: 'shotweapon'
        },
        {
            category: 'Weapon',
            name: 'hand canon'
        },
        {
            category: 'Weapon',
            name: 'Scout Rifle'
        },
        {
            category: 'Gear',
            name: 'helmet'
        },
        {
            category: 'Gear',
            name: 'Chest Peace'
        },
        {
            category: 'Gear',
            name: 'Boots'
        },
        {
            category: 'Gear',
            name: 'Gloves'
        },
        {
            category: 'Consumables',
            name: 'Tree of Coins'
        },
        {
            category: 'Consumables',
            name: 'XP Boost'
        },
        {
            category: 'Consumables',
            name: 'Shards'
        }
    ];

    const dupeFind = function (itemName, ID) {
        const cart = $('#cart');
        const items = $(`.item-${ID}`);

        for (let i = 0; i < cart.length; i++) {
            if (items.text() === itemName) {
                alert('Item already exists in cart!');

            } else {
                cart.append(`<button class="item-${ID} btn btn-outline-danger"></button>`);
                items.text($(this).attr("item-name"));
                $(`.item-${ID}`).on('click', function () {
                    // Removes the button from the shopping cart.
                    $(`.item-${ID}`).remove();
                });
            }

        }

    }

    //item list
    const render = function () {

        for (let i = 0; i < itemList.length; i++) {

            const itemBtn = $(`<button class=" product ${itemList[i].category} item-${i}">`);
            itemBtn.attr('item-name', itemList[i].name);
            itemBtn.text(itemList[i].name);
            $('#items').append(itemBtn);
            $(`.item-${i}`).on('click', function () {
                dupeFind(itemList[i].name, i);
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

    //add to cart
    const appendItem = function () {
        const item = $('<button class="btn btn-outline-danger" id="item">');
        item.text($(this).attr("item-name"));
        $('#cart').append(item);
    }
    $('#items').on('click', '.product', appendItem);

    //clear
    const clear = function () {
        $('#cart').empty();
    }
    $('#clear').on('click', clear);

    //remove
    const removeItem = function () {
        $(this).remove();
    }
    $('#cart').on('click', '#item', removeItem);




});