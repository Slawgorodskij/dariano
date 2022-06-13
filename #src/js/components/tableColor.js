/*
* Применил функцию, в связи с тем, что при динамическом построении таблицы
* классическое tr:nth-child(2n){background-color: var(--color-white);}
* не срабатывает.
*/
const painting = (tableString, nameSelector) => {
    for (let i = 0; i < tableString.length; i++) {
        if (i % 2 !== 0) {
            tableString[i].classList.add(nameSelector)
        }
    }
}

const tableColor = () => {
    const tableString = document.querySelectorAll('.table__string');
    const tableStringMobile = document.querySelectorAll('.table-mobile__string');

    if (tableString) {
        painting(tableString, 'table__string_color');
    }

    if (tableStringMobile) {
        painting(tableStringMobile, 'table-mobile__string_color');
    }

}


