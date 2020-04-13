const cartButton = document.querySelector("#cartButton"); 
/* при помощи правой сторны равенства помещаем в константу элемент с идентификатором (# - это идентификатор), с коротрым будем работать. То есть обращаемся к элементу, который имеет id в скобках */
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener('click', function(event) {
    modal.classList.add("is-open");                 /* получаем список классов  у элемента с классом modal и добавить туда свой класс is-open */
});                                                 /* отслеживаем клик по кнопке, addEventListener - свойство, которое отслеживает событие. Мы как бы говорим браузеру - следи за данной кнопкой, слушай что происходит рядом с этой кнопкой, и когда случится какое-то событие, выполни какую-то функцию, в нашем случае - клик по кнопке. В фигурных скобочках показывается, что именно должен сделать браузер при выполнении события */

close.addEventListener('click', function(event) {
    modal.classList.remove("is-open");                 
});
/* получаем список классов  у элемента с классом modal и удаляем оттуда класс is-open, чтобы окно снова закрылось */

new WOW().init();
/* подключили файл wow.min.js */