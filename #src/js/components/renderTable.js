/**
 * Принимает сведения и создает строку таблицы
 * @param {object} item
 * @returns HTML-код строки таблицы
 */
const renderStringMyOrder = (item) => {
    return `<tr class="table__string">
        <td class="table__cell table__cell_border table__cell_order">
        <label>
                <input hidden type="checkbox" name="order" id="${item.id}">
                <div class="checkbox-fake checkbox-fake_mr-15">
                    <svg class="checkbox-fake__icon" width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M11.8821 0H10.8542C10.7101 0 10.5733 0.069892 10.4851 0.189485L4.42212 8.30162L1.51488 4.41096C1.4709 4.35199 1.41485 4.3043 1.35092 4.27149C1.28699 4.23867 1.21686 4.22157 1.14578 4.22148H0.11788C0.0193548 4.22148 -0.0350549 4.34107 0.0252369 4.42184L4.05302 9.81129C4.24125 10.0629 4.603 10.0629 4.7927 9.81129L11.9748 0.198804C12.0351 0.119593 11.9806 0 11.8821 0Z"
                              fill="white"/>
                    </svg>
                </div>
            </label>
        ${item.id}
        </td>
        <td class="table__cell table__cell_border cell__status">${item.status}</td>
        <td class="table__cell table__cell_border cell__client">${item.client}</td>
        <td class="table__cell table__cell_border cell__phone">${item.phone}</td>
        <td class="table__cell table__cell_border cell__address">${item.address}</td>
        <td class="table__cell table__cell_border cell__order">${item.order}</td>
        <td class="table__cell table__cell_border cell__date">${item.date}</td>
        <td class="table__cell table__cell_border cell__note">${item.note}</td>
        <td class="table__cell table__cell_border cell__reserve">       
             <svg class="table__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14 0H6C2.691 0 0 2.691 0 6V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H14C17.309 20 20 17.309 20 14V6C20 2.691 17.309 0 14 0ZM18 14C18 16.206 16.206 18 14 18H2V6C2 3.794 3.794 2 6 2H14C16.206 2 18 3.794 18 6V14Z"
                          fill="#DCCDCB"/>
                    <path d="M5 12.987V14.986H6.999L12.528 9.464L10.53 7.466L5 12.987ZM13.47 8.522L11.472 6.522L12.995 5L14.995 6.999L13.47 8.522Z"
                          fill="#DCCDCB"/>
             </svg>
        </td>
    </tr>`;
};

/**
 * Принимает сведения и создает строку таблицы
 * @param {object} item
 * @returns HTML-код строки таблицы
 */
const renderStringOrder = (item) => {
    return `<tr class="table__string">
        <th class="table__cell_checkbox">
            <label>
                <input hidden type="checkbox" name="order" id="${item.id}">
                <div class="checkbox-fake">
                    <svg class="checkbox-fake__icon" width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M11.8821 0H10.8542C10.7101 0 10.5733 0.069892 10.4851 0.189485L4.42212 8.30162L1.51488 4.41096C1.4709 4.35199 1.41485 4.3043 1.35092 4.27149C1.28699 4.23867 1.21686 4.22157 1.14578 4.22148H0.11788C0.0193548 4.22148 -0.0350549 4.34107 0.0252369 4.42184L4.05302 9.81129C4.24125 10.0629 4.603 10.0629 4.7927 9.81129L11.9748 0.198804C12.0351 0.119593 11.9806 0 11.8821 0Z"
                              fill="white"/>
                    </svg>
                </div>
            </label>
        </th>
        <th class="table__cell table__cell_border cell__nomenclature">${item.nomenclature}</th>
        <th class="table__cell table__cell_border cell__opening">${item.opening}</th>
        <th class="table__cell table__cell_border table__cell_article">${item.article}</th>
        <th class="table__cell table__cell_border table__cell_name">${item.name}</th>
        <th class="table__cell table__cell_border table__cell_nowrap">${item.quantity}</th>
        <th class="table__cell table__cell_border table__cell_nowrap">${item.price}</th>
        <th class="table__cell table__cell_border table__cell_nowrap">${item.discount}</th>
        <th class="table__cell table__cell_border table__cell_nowrap">${item.amount}</th>
        <th class="table__cell table__cell_border cell__purchase-price">${item.purchasePrice}</th>
    </tr>`;
};
/**
 * Принимает сведения и создает строку таблицы
 * @param {object} item
 * @returns HTML-код строки таблицы
 */
const renderStringOrderStatus = (item) => {
    return `<tr>
        <td class="table__cell table__cell_first table-order-status__cell_text table-order-status__cell_text_first cell__nomenclature">${item.nomenclature}</td>
        <td class="table__cell table-order-status__cell_text cell__opening">${item.opening}</td>
        <td class="table__cell table-order-status__cell_text table__cell_article">${item.article}</td>
        <td class="table__cell table-order-status__cell_text table__cell_name">${item.name}</td>
        <td class="table__cell table-order-status__cell_text table__cell_nowrap">${item.quantity}</td>
        <td class="table__cell table-order-status__cell_text table__cell_nowrap">${item.price}</td>
        <td class="table__cell table-order-status__cell_text table__cell_nowrap">${item.discount}</td>
        <td class="table__cell table-order-status__cell_text table__cell_nowrap">${item.amount}</td>
        <td class="table__cell table-order-status__cell_text cell__purchase-price">${item.purchasePrice}</td>
        <td class="table__cell  cell__status">${item.status}</td>
    </tr>`;
};

/**
 * Принимает сведения и создает строку таблицы
 * @param {object} item
 * @returns HTML-код строки таблицы
 */
const renderTableMyOrder = (item) => {
    return `<div class="table-mobile__string">
       <div class="table-mobile__row table-mobile-order__row"> 
            <div class="table__cell_checkbox table-mobile__checkbox">
                <label>
                    <input hidden type="checkbox" name="order" id="${item.id}">
                       <div class="checkbox-fake">
                           <svg class="checkbox-fake__icon" width="12" height="10" viewBox="0 0 12 10" fill="none">
                              <path d="M11.8821 0H10.8542C10.7101 0 10.5733 0.069892 10.4851 0.189485L4.42212 8.30162L1.51488 4.41096C1.4709 4.35199 1.41485 4.3043 1.35092 4.27149C1.28699 4.23867 1.21686 4.22157 1.14578 4.22148H0.11788C0.0193548 4.22148 -0.0350549 4.34107 0.0252369 4.42184L4.05302 9.81129C4.24125 10.0629 4.603 10.0629 4.7927 9.81129L11.9748 0.198804C12.0351 0.119593 11.9806 0 11.8821 0Z"
                              fill="white"/>
                           </svg>
                       </div>
                </label>
            </div>
            <p class="table-mobile-order__cell_title_font">Выбрать</p>
       
            <div class="table__cell_checkbox table-mobile__checkbox">
                <label>
                    <input hidden type="checkbox" name="order" id="${item.id}">
                       <div class="checkbox-fake">
                           <svg class="checkbox-fake__icon" width="12" height="10" viewBox="0 0 12 10" fill="none">
                              <path d="M11.8821 0H10.8542C10.7101 0 10.5733 0.069892 10.4851 0.189485L4.42212 8.30162L1.51488 4.41096C1.4709 4.35199 1.41485 4.3043 1.35092 4.27149C1.28699 4.23867 1.21686 4.22157 1.14578 4.22148H0.11788C0.0193548 4.22148 -0.0350549 4.34107 0.0252369 4.42184L4.05302 9.81129C4.24125 10.0629 4.603 10.0629 4.7927 9.81129L11.9748 0.198804C12.0351 0.119593 11.9806 0 11.8821 0Z"
                              fill="white"/>
                           </svg>
                       </div>
                </label>
            </div>
            <svg class="table-mobile-order__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14 0H6C2.691 0 0 2.691 0 6V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H14C17.309 20 20 17.309 20 14V6C20 2.691 17.309 0 14 0ZM18 14C18 16.206 16.206 18 14 18H2V6C2 3.794 3.794 2 6 2H14C16.206 2 18 3.794 18 6V14Z"
                          fill="#DCCDCB"/>
                    <path d="M5 12.987V14.986H6.999L12.528 9.464L10.53 7.466L5 12.987ZM13.47 8.522L11.472 6.522L12.995 5L14.995 6.999L13.47 8.522Z"
                          fill="#DCCDCB"/>
                </svg>
            <p class="table-mobile-order__cell_title_font">Изменить</p>
       </div>
       
       
        <td class="table__cell table__cell_border cell__serial-number"><input type="checkbox" name="#" id="${item.id}">${item.id}</td>
        <td class="table__cell table__cell_border cell__status">${item.status}</td>
        <td class="table__cell table__cell_border cell__client">${item.client}</td>
        <td class="table__cell table__cell_border cell__phone">${item.phone}</td>
        <td class="table__cell table__cell_border cell__address">${item.address}</td>
        <td class="table__cell table__cell_border cell__order">${item.order}</td>
        <td class="table__cell table__cell_border cell__date">${item.date}</td>
        <td class="table__cell table__cell_border cell__note">${item.note}</td>
        <td class="table__cell table__cell_border cell__reserve">img</td>

            
         <div class="table-mobile__row table-mobile-order__row"> 
        <p class="table-mobile__cell_title table-mobile-order__cell_title">№</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.id}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Статус</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.status}</p>       
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">ФИО клиента</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.client}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Телефон</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.phone}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Адрес</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.address}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Сумма заказа</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.order}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Дата</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.date}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Примечание</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.note}</p>
         </div>
<!--         <div class="table-mobile__row table-mobile-order__row">-->
<!--        <p class="table-mobile__cell_title table-mobile-order__cell_title"></p>-->
<!--        <p class="table-mobile__cell_text table-mobile-order__cell_text"></p>-->
<!--         </div>-->
</div>`
}

/**
 * Принимает сведения и создает строку таблицы
 * @param {object} item
 * @returns HTML-код строки таблицы
 */
const renderTableOrder = (item) => {
    return `<div class="table-mobile__string">
       <div class="table-mobile__row table-mobile-order__row"> 
            <div class="table__cell_checkbox table-mobile__checkbox">
                <label>
                    <input hidden type="checkbox" name="order" id="${item.id}">
                       <div class="checkbox-fake">
                           <svg class="checkbox-fake__icon" width="12" height="10" viewBox="0 0 12 10" fill="none">
                              <path d="M11.8821 0H10.8542C10.7101 0 10.5733 0.069892 10.4851 0.189485L4.42212 8.30162L1.51488 4.41096C1.4709 4.35199 1.41485 4.3043 1.35092 4.27149C1.28699 4.23867 1.21686 4.22157 1.14578 4.22148H0.11788C0.0193548 4.22148 -0.0350549 4.34107 0.0252369 4.42184L4.05302 9.81129C4.24125 10.0629 4.603 10.0629 4.7927 9.81129L11.9748 0.198804C12.0351 0.119593 11.9806 0 11.8821 0Z"
                              fill="white"/>
                           </svg>
                       </div>
                </label>
            </div>
        <p class="table-mobile-order__cell_title_font">Выбрать</p>
        <p></p>
         </div>
         <div class="table-mobile__row table-mobile-order__row"> 
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Номенклатура</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.nomenclature}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Проем</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.opening}</p>       
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Артикул</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.article}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Наименование</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.name}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Кол - во</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.quantity}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Цена</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.price}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Скидка</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.discount}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Сумма</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.amount}</p>
         </div>
         <div class="table-mobile__row table-mobile-order__row">
        <p class="table-mobile__cell_title table-mobile-order__cell_title">Цена закупки</p>
        <p class="table-mobile__cell_text table-mobile-order__cell_text">${item.purchasePrice}</p>
         </div>
</div>`
}

/**
 * Принимает сведения и создает строку таблицы
 * @param {object} item
 * @returns HTML-код строки таблицы
 */
const renderTableOrderStatus = (item) => {
    return `<div class="table-mobile__row table-mobile-order-status__row"> 
        <p class="table-mobile__cell_title table-mobile-order-status__cell_title">Номенклатура</p>
        <p class="table-mobile__cell_text table-mobile-order-status__cell_text">${item.nomenclature}</p>
         </div>
         <div class="table-mobile__row table-mobile-order-status__row">
        <p class="table-mobile__cell_title table-mobile-order-status__cell_title">Проем</p>
        <p class="table-mobile__cell_text table-mobile-order-status__cell_text">${item.opening}</p>       
         </div>
         <div class="table-mobile__row table-mobile-order-status__row">
        <p class="table-mobile__cell_title table-mobile-order-status__cell_title">Артикул</p>
        <p class="table-mobile__cell_text table-mobile-order-status__cell_text">${item.article}</p>
         </div>
         <div class="table-mobile__row table-mobile-order-status__row">
        <p class="table-mobile__cell_title table-mobile-order-status__cell_title">Наименование</p>
        <p class="table-mobile__cell_text table-mobile-order-status__cell_text">${item.name}</p>
         </div>
         <div class="table-mobile__row table-mobile-order-status__row">
        <p class="table-mobile__cell_title table-mobile-order-status__cell_title">Кол - во</p>
        <p class="table-mobile__cell_text table-mobile-order-status__cell_text">${item.quantity}</p>
         </div>
         <div class="table-mobile__row table-mobile-order-status__row">
        <p class="table-mobile__cell_title table-mobile-order-status__cell_title">Цена</p>
        <p class="table-mobile__cell_text table-mobile-order-status__cell_text">${item.price}</p>
         </div>
         <div class="table-mobile__row table-mobile-order-status__row">
        <p class="table-mobile__cell_title table-mobile-order-status__cell_title">Скидка</p>
        <p class="table-mobile__cell_text table-mobile-order-status__cell_text">${item.discount}</p>
         </div>
         <div class="table-mobile__row table-mobile-order-status__row">
        <p class="table-mobile__cell_title table-mobile-order-status__cell_title">Сумма</p>
        <p class="table-mobile__cell_text table-mobile-order-status__cell_text">${item.amount}</p>
         </div>
         <div class="table-mobile__row table-mobile-order-status__row">
        <p class="table-mobile__cell_title table-mobile-order-status__cell_title">Цена закупки</p>
        <p class="table-mobile__cell_text table-mobile-order-status__cell_text">${item.purchasePrice}</p>
         </div>
         <div class="table-mobile__row table-mobile-order-status__row table-mobile-order-status__row_color">
        <p class="table-mobile__cell_title table-mobile-order-status__cell_title">Статус</p>
        <p class="table-mobile-order-status__cell_text-size">${item.status}</p>
    </div>`
}

/**
 * dataset.count содержит информацию о количестве строк на странице
 * @param {object} list
 *
 */
const renderTable = (list) => {
    let tableOrders, tableOrdersMobile, myOrderList, renderList, renderListMobile;

    if (document.querySelector('.table-my-order')) {
        tableOrders = document.querySelector('.table-my-order');
        myOrderList = list.map((item) => renderStringMyOrder(item));
        renderList = arraySlice(myOrderList);
        tableOrders.innerHTML = `<tr class="table__string">
            <th class="table__cell table__cell_title cell__serial-number">№</th>
            <th class="table__cell table__cell_title cell__status">Статус</th>
            <th class="table__cell table__cell_title cell__client">ФИО клиента</th>
            <th class="table__cell table__cell_title cell__phone">Телефон</th>
            <th class="table__cell table__cell_title cell__address">Адрес</th>
            <th class="table__cell table__cell_title cell__order">Сумма заказа</th>
            <th class="table__cell table__cell_title cell__date">Дата</th>
            <th class="table__cell table__cell_title cell__note">Примечание</th>
            <th class="table__cell table__cell_title cell__reserve"></th>
        </tr>`
    }

    if (document.querySelector('.table-order')) {
        tableOrders = document.querySelector('.table-order');
        renderList = list.map((item) => renderStringOrder(item));
    }

    if (document.querySelector('.table-order-status')) {
        tableOrders = document.querySelector('.table-order-status');
        renderList = list.map((item) => renderStringOrderStatus(item));
    }

    if (document.querySelector('.table-mobile-my-order')) {
        tableOrdersMobile = document.querySelector('.table-mobile-my-order');
        myOrderList = list.map((item) => renderTableMyOrder(item));
        renderListMobile = arraySlice(myOrderList);
        tableOrdersMobile.innerHTML = '';
    }

    if (document.querySelector('.table-mobile-order')) {
        tableOrdersMobile = document.querySelector('.table-mobile-order');
        renderListMobile = list.map((item) => renderTableOrder(item));
    }

    if (document.querySelector('.table-mobile-order-status')) {
        tableOrdersMobile = document.querySelector('.table-mobile-order-status');
        renderListMobile = list.map((item) => renderTableOrderStatus(item));
    }

    for (let order of renderList) {
        tableOrders.insertAdjacentHTML('beforeend', order);
    }

    if (document.querySelector('.table-mobile')) {
        for (let order of renderListMobile) {
            // console.log('test')
            tableOrdersMobile.insertAdjacentHTML('beforeend', order);
        }
    }

    tableColor()
};