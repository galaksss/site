// 1. Найдите заголовок H1 на странице и измените его текст на "Добро пожаловать на наш сайт!".
const h1 = document.querySelector('h1');
if (h1) {
    h1.textContent = "Добро пожаловать на мой сайт!";
}
// 2. Измените цвет текста заголовка H2 на красный.
const h2 = document.querySelector('h2');
if (h2) {
    h2.style.color = "red";
}

// 3. Найдите и измените текст первого параграфа на "Это новый текст параграфа.".
const firstParagraph = document.querySelector('p');
if (firstParagraph) {
    firstParagraph.textContent = "Это новый текст параграфа.";
}

// 4. Скрыть встроенное видео, установив его стиль display на none.
const iframe = document.querySelector('iframe');
if (iframe) {
    iframe.style.display = "none";
}