document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.querySelectorAll('.accordion');

    accordion.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            const self = event.currentTarget;
            const control = self.querySelector('.accordion__control');
            const content = self.querySelector('.accordion__content');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        })
    })
})