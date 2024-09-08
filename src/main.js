// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)

window['FLS'] = true;
import './scss/main.scss';

import * as mainFunctions from './js/functions.js';

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
// mainFunctions.isWebp();

/* Додавання класу touch для HTML якщо браузер мобільний */
// mainFunctions.addTouchClass();

/* Додавання loaded для HTML після повного завантаження сторінки */
// mainFunctions.addLoadedClass();

/* Модуль для роботи з меню (Бургер) */
mainFunctions.menuInit();

/* Форматування чисел */
// import './libs/wNumb.min.js';

/*
Модуль "Спойлери"
Документація: https://template.fls.guru/template-docs/modul-spojlery.html
Сніппет (HTML): spollers
*/
// mainFunctions.spollers();

/*
Модуль "Таби"
Сніппет (HTML): tabs
*/
// mainFunctions.tabs();

/*
Модуль "Таби"
Сніппет (HTML): hzt
*/
// mainFunctions.horizontTabs();

/*
Модуль "Показати ще"
Документація: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сніппет (HTML): showmore
*/
// mainFunctions.showMore();

/*
Модуль "До/Після"
Сніппет (HTML): ba
*/
// import './js/libs/beforeafter.js';

/*
Модуль "Ефект хвиль"
*/
// mainFunctions.rippleEffect();

/*
Модуль "Кастомний курсор"
Документация:
Сниппет (HTML):
*/
// mainFunctions.customCursor(true);

// ================================================================

/* Динамічний адаптив */
import './js/dynamic_adapt.js';

/* 
Модуль "Попапи"
Сніппет (HTML): pl, pop
*/
// import './js/popup.js';

/* Модуль паралаксу мишею */
// import './js/libs/parallax-mouse.js';

// =================================
// ФОРМИ
// =================================

import * as myForms from './js/forms/forms.js';

/* Робота з полями форми */
/*
myForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/

/* Надсилання форми */
// myForms.formSubmit();

/* Модуль форми "кількість" */
// myForms.formQuantity();

/* Модуль зіркового рейтингу */
// myForms.formRating();

/* Модуль роботи з select. */
// import './js/libs/select.js';

/* Модуль роботи з календарем */
// потрібно встановити залежність npm i js-datepicker
// import './js/forms/datepicker.js';

// Робота зі слайдером (Swiper) =======================================================================
/*
Налаштування підключення плагіна слайдера Swiper та нових слайдерів виконується у файлі js/files/sliders.js
Документація плагіна: https://swiperjs.com/
Сніппет(HTML): swiper
*/
// import './js/sliders.js';

// Модулі роботи з прокручуванням сторінки ==============================================================
/*
Зміна дизайну скроллбару
потрібно встановити залежність npm i simplebar
Документація по роботі у шаблоні: У HTML додаємо до блоку атрибут data-simplebar
Сніппет(HTML): 
*/
// import './js/scroll/simplebar.js';

// Ліниве (відкладене) завантаження картинок
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// npm i vanilla-lazyload
// import './js/scroll/lazyload.js';

// Спостерігач за об'єктами з атрибутом data-watch
// import './js/libs/watcher.js';

// Модуль поекранної прокрутки
// import './js/libs/fullpage.js';

// Модуль паралаксу
// import './js/libs/parallax.js';

// Функції роботи скролом =============================================================================
import * as myScroll from './js/scroll/scroll.js';

// Плавна навігація по сторінці
// myScroll.pageNavigation();

// Функціонал додавання класів до хедеру під час прокручування
// myScroll.headerScroll();

// Модуль анімація цифрового лічильника
// myScroll.digitsCounter();
