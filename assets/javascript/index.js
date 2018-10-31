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
        const items = $(`#item-${ID}`);

        for (let i = 0; i < cart.length; i++) {
            if (items.text() === itemName) {
                alert( itemName + ' Item already exists in cart!');

            } else {
                const incartItem = $(`<button class=" forremove btn btn-outline-danger" id="item-${ID}">${itemName}</button>`);
                $('#items').on('click', '.product', function () {
                    cart.append(incartItem);
                    
                });
                    // Removes the item from the  cart.
                    $(`#item-${ID}`).remove();

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

    //clear
    const clear = function () {
        $('#cart').empty();
    }
    $('#clear').on('click', clear);

    //remove
    const removeItem = function () {
        $(this).remove();
    }
    $('#cart').on('click', '.forremove', removeItem);




    //old code 
    //add to cart - old
    /* const appendItem = function () {
        const item = $('<button class="btn btn-outline-danger" id="item">');
        item.text($(this).attr("item-name"));
        $('#cart').append(item);
    }
    $('#items').on('click', '.product', appendItem); */


});