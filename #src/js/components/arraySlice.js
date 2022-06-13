const arraySlice = (arrayData, num = 1) => {
    console.log(arrayData)
    const dataCount = document.querySelector('.block-filters__count_active').dataset.count;
    let startRender = (num - 1) * dataCount;
    let endRender = startRender + dataCount;

    let readyList = arrayData.slice(startRender, endRender)

    return readyList;
}