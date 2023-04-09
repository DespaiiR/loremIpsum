let burger = function () {
    let activeBurger = document.querySelector('.header__burger');
    let activeNav = document.querySelector('.header__nav');
    activeBurger.addEventListener('click', function() {
        activeBurger.classList.toggle('active');
        activeNav.classList.toggle('active');
    });
}
burger();

let select = function () {
    let selectHeader = document.querySelectorAll('.form-select__header');
    let selectItem = document.querySelectorAll('.form-select__item')
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });
    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });
    function selectToggle() {
        this.parentElement.classList.toggle('form-select_focus');
    }
    function selectChoose() {
        let text = this.innerText;
        let select = this.closest('.form-select')
        let currentText = select.querySelector('.form-select__current');
        currentText.innerText = text;
        select.classList.remove('form-select_focus')
    }
}
select();

let range = function () {
    let rangeInput = document.querySelector('.range__input');
    let rangeValue = document.querySelector('.range__header-value');
    rangeValue.innerHTML = rangeInput.value;
    rangeInput.oninput = function() {
        rangeValue.innerHTML = this.value;
    } 
}
range()
