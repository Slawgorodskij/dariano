document.addEventListener('DOMContentLoaded', () => {

    const formDate = document.querySelectorAll('.block-forms__border_date');
    const blockDate = document.querySelector('.block-date');
    const content = document.querySelector('.block-date__calendar');
    const cellMonth = document.querySelector('.block-date__month-name');
    const cellYear = document.querySelector('.block-date__year');
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    const date = new Date();
    const currYear = date.getFullYear();
    const currMonth = date.getMonth();

    let chosenDate,
        elemForm;

// запись месяца и года

    cellMonth.innerText = months[currMonth];
    cellYear.innerText = currYear;

// вывод дней месяца

    const renderMonth = () => {

        const dayItems = [];
        const indexMonth = months.indexOf(cellMonth.innerText);
        const countDay = new Date(cellYear.innerText, indexMonth + 1, 0).getDate();
        const countDayPreviousMonth = new Date(cellYear.innerText, indexMonth, 0).getDate();
        const weekDayStart = new Date(cellYear.innerText, indexMonth, 1).getDay();
        const weekDayFinish = new Date(cellYear.innerText, indexMonth, countDay).getDay();
        const blockDate = document.querySelector('.block-date__day');

        if (weekDayStart === 0) {
            const dayStart = +countDayPreviousMonth - 6;
            for (let i = 1; i <= 6; i++) {
                dayItems.push(`<span class="block-date__day_item block-date__day_color">${dayStart + i}</span>`);
            }
        } else {
            const dayStart = +countDayPreviousMonth - weekDayStart + 1
            for (let i = 1; i < weekDayStart; i++) {
                dayItems.push(`<span class="block-date__day_item block-date__day_color">${dayStart + i}</span>`);
            }
        }

        for (let i = 1; i <= countDay; i++) {
            dayItems.push(`<span class="block-date__day_item">${i}</span>`);
        }

        if (weekDayFinish !== 0) {
            for (let i = 1; i <= 7 - weekDayFinish; i++) {
                dayItems.push(`<span class="block-date__day_item block-date__day_color">${i}</span>`);
            }
        }

        blockDate.innerText = '';
        for (let item of dayItems) {
            blockDate.insertAdjacentHTML('beforeend', item)
        }
        dateSelection();
    }


    document.querySelector('.block-date__next').addEventListener('click', () => {
        const indexMonth = months.indexOf(cellMonth.innerText)
        if (indexMonth === 11) {
            cellMonth.innerText = months[0]
            cellYear.innerText = +(cellYear.innerText) + 1;
        } else {
            cellMonth.innerText = months[indexMonth + 1]
        }
        renderMonth()
    })

    document.querySelector('.block-date__previous').addEventListener('click', () => {
        const indexMonth = months.indexOf(cellMonth.innerText)
        if (indexMonth === 0) {
            cellMonth.innerText = months[11]
            cellYear.innerText = +(cellYear.innerText) - 1;
        } else {
            cellMonth.innerText = months[indexMonth - 1]
        }
        renderMonth()
    })


    formDate.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            elemForm = event.currentTarget.querySelector('.block-forms__elem');
            event.currentTarget.classList.add('block-forms__border_active');
            elemForm.innerText = '';
            elemForm.classList.add('block-forms__elem_active');
            blockDate.classList.add('open');
            content.style.maxHeight = content.scrollHeight + 'px';
            dateSelection();
        })
    })

    const dateSelection = () => {
        const dayMonth = document.querySelectorAll('.block-date__day_item');
        dayMonth.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                blockDate.classList.remove('open');
                content.style.maxHeight = null;
                chosenDate = event.currentTarget.innerText;
                renderDate();
            })
        })
    }

    const renderDate = () => {
        let indexMonth = months.indexOf(cellMonth.innerText) + 1;

        if (chosenDate < 10) {
            chosenDate = 0 + String(chosenDate)
        }

        if (indexMonth < 10) {
            indexMonth = 0 + String(indexMonth)
        }

        elemForm.innerText = `${chosenDate}\\${indexMonth}\\${cellYear.innerText}`;
    }

    renderMonth()
})