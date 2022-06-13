//Функции для тестирования возможности добавления классов при валидации.
if (document.querySelector('.login')) {
    const loginForm = document.querySelector('.login-form');
    const loginFormInput = document.querySelectorAll('.login-form__input');
    const btnEntrance = document.querySelector('.login-form__button');
    const loginFormError = document.querySelector('.login-form__error_inactive');

    const addError = () => {
        btnEntrance.addEventListener('click', () => {
            loginForm.classList.add('login-form_error');
            loginFormInput.forEach((elemInput) => {
                elemInput.classList.add('login-form__input_error');
                if (document.querySelector('.login-form__input_mb-50')) {
                    elemInput.classList.remove('login-form__input_mb-50');
                }
            })
            loginFormError.classList.remove('login-form__error_inactive');
        });
    };

    const testValidation = () => {
        loginFormInput.forEach((elemInput) => {
            elemInput.addEventListener('input', (event) => {
                if (elemInput.validity.valid) {
                    elemInput.classList.add('login-form__input_change');
                }
            })
        })
    }


    addError();
    testValidation();
}


