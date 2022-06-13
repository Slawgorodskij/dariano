const buttonOperation = (nameButton, nameModal) => {
    nameButton.addEventListener('click', () => {
        nameModal.classList.remove('modal_inactive')
        nameModal.classList.remove('modal_opacity')
    })

    document.querySelectorAll('.modal__btn_remove').forEach((event) => {
        event.addEventListener('click', () => {
            nameModal.classList.add('modal_opacity');
            setTimeout(() => {
                nameModal.classList.add('modal_inactive')
            }, 1100);
        })
    })

}


if (document.querySelector('.button-delete')) {
    const modalDelete = document.querySelector('.modal-delete');
    const buttonDelete = document.querySelector('.button-delete')
    buttonOperation(buttonDelete, modalDelete);
}

if (document.querySelector('.button-exit')) {
    const modalExit = document.querySelector('.modal-exit');
    const buttonExit = document.querySelector('.button-exit')
    buttonOperation(buttonExit, modalExit);
}


if (document.querySelector('.button-quit')) {
    const modalQuit = document.querySelector('.modal-quit');
    const buttonQuit = document.querySelector('.button-quit')
    buttonOperation(buttonQuit, modalQuit);
}


if (document.querySelector('.button-stock')) {

    const modalStock = document.querySelector('.modal-stock');
    const wrapperModal = document.querySelector('.modal__wrapper_opacity');

    document.querySelector('.button-stock').addEventListener('click', () => {
        modalStock.classList.remove('modal_inactive')
        modalStock.classList.remove('modal_opacity')
    })

    document.querySelector('.icon-cross').addEventListener('click', () => {
        modalStock.classList.add('modal_opacity');
        setTimeout(() => {
            modalStock.classList.add('modal_inactive')
        }, 1100);
    });
    wrapperModal.addEventListener('click', (event) => {

        console.log(event.target)
        if (event.target === wrapperModal) {
            modalStock.classList.add('modal_opacity');
            setTimeout(() => {
                modalStock.classList.add('modal_inactive')
            }, 1100);
        }
    });
}