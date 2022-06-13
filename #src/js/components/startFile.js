const orderList = [];
let address;
if (document.querySelector('.table-order')) {
    address = '../data/order.json';
    getJson(address, orderList);
}

if (document.querySelector('.table-my-order')) {
    const blockCount = document.querySelectorAll('.block-filters__count');
    address = '../data/myOrders.json';

    blockCount.forEach((elem) => {

        elem.addEventListener('click', () => {
            blockCount.forEach((elemNew) => {
                if (elemNew.classList.contains('block-filters__count_active')) {
                    elemNew.classList.remove('block-filters__count_active');
                }
            })
            elem.classList.add('block-filters__count_active');

            getJson(address, orderList);
        })
    })

    getJson(address, orderList);
}

if (document.querySelector('.table-order-status')) {
    address = '../data/order.json';

    getJson(address, orderList);
}