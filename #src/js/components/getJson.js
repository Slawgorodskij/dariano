/**
 * Делает запрос информации, получает сведения,
 * присваивает arrayData информацию полученную из "базы"
 * инициирует выполнение функции renderPage() передав в неё
 */
const getJson = (address, arrayData) => {
    fetch(address)
        .then((response) => response.json())
        .then((data) => {
            for (let list of data) {
                arrayData.push(list);
            }
            renderTable(data);
        })
        .catch((error) => {
            console.log(error);
        });
};