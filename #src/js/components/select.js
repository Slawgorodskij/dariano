document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelectorAll('.select');
    select.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            const self = event.currentTarget;
            const header = self.querySelector('.select__header');
            const current = self.querySelector('.select__current');
            const content = self.querySelector('.select__body');
            const itemContent = self.querySelectorAll('.select__item');

            self.classList.toggle('active');
            header.classList.add('select__header_active');
            // current.innerText = '';
            current.classList.add('select__current_active');

            itemContent.forEach((elem) => {
                elem.addEventListener('click', (event) => {
                    current.innerText = event.currentTarget.innerText;
                })
            })

            if (self.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        })
    })
})