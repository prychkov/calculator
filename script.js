window.addEventListener('DOMContentLoaded', function() {

    // Calc

    let persons = document.querySelectorAll('.counter-block-input')[0], // получаем 1-ый инпут на странице с указанным классом
        restDays = document.querySelectorAll('.counter-block-input')[1], // получаем 2-ый инпут на странице с указанным классом
        place = document.getElementById('select'), // получаем выпадаюший элмент (select) с выбором (option) вариантов
        totalValue = document.getElementById('total'), // получаем элмент, где будет выводиться информация о итоговой стоимости
        personsSum = 0, // создаем переменную в которую будет записано колличество людей (0 это стартовое значение)
        daysSum = 0,    // создаем переменную в которую будет записано колличество дней
        total = 0;  // создаем переменную в которую будет записано вычисленная сумма необходимых денег для поездки

    totalValue.innerHTML = 0; // выводим 0 на странице

    persons.addEventListener('change', function() {
        personsSum = +this.value; // чез контекст вызова (this) получаем value у persons, на котором происходит событие change и записываем в переменную personsSum
        total = (daysSum + personsSum) * 4000; // производим математические операции и записываем значение в total
        
        if (restDays.value == '' || persons.value == '') { // проверяем свойства значения переменных, если путые value,
            totalValue.innerHTML = 0;   // то записываем 0
        } else {
            totalValue.innerHTML = total; // или выводим в поле окончательной стоимости значение переменной total
        }
    });

    restDays.addEventListener('change', function() { // все тоже самое, что выше, только для переменной restDays
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
   
    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
    // выше используем промежуточную переменную, чтобы не потерять данные с total, если передавать само значение total
    // то оно бы умножалось на значение value, которое содержиться в option дочернего элемента select, т.е. при постоянном
    //  переключении option, переменная total постоянно бы увеличивалась на значение option и итоговая сумма получилась бы не верная 
    // this.options - обращаемся к элементу option на котором происходит событие change,
    // далее [this.selectedIndex] обращаемся к тому элементу, который был выбран (HTMLSelectElement.selectedIndex показывает
    // порядковый номер первого выбранного элемента <option>. Значение -1 означает, что ни один из элементов не выбран) и
    // получаем значение value этого элемента
});
