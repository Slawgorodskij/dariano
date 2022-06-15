const arraySlice = (arrayData, num = 1) => {
    const dataCount = document.querySelector('.block-filters__count_active').dataset.count;
    let startRender = (num - 1) * dataCount;
    let endRender = startRender + dataCount;

    return arrayData.slice(startRender, endRender);
}