
let slider = document.getElementById('slider');
let value1 = document.getElementById('value-1');
let value2 = document.getElementById('value-2');

noUiSlider.create(slider, {
    start: [20, 80], // Начальные значения ползунков
    connect: true, // Соединение между ползунками
    range: { // Диапазон значений слайдера
        'min': 0,
        'max': 700
    }
});

slider.noUiSlider.on('update', function (values, handle) {
    if (handle === 0) {
        value1.innerHTML = values[handle];
    } else {
        value2.innerHTML = values[handle];
    }
});

