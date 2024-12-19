// script.js

// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
  }
  
  // Функция для изменения цвета фона
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  // Функция для переключения видимости элемента
  function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
  }
  
  // Функция для обработки параметра utm_term
  function handleUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('h1');
    
    if (utmTerm && h1Element) {
      h1Element.textContent = utmTerm;
    }
  }
  
  // Функция для вывода текущего времени
  function logCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    console.log(time);
  }
  
  // Функция для сброса цвета фона
  function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
  }
  
  // Вызов функции showMessage сразу после определения
  showMessage("Скрипт загружен!");
  
  // Вызов функции logCurrentTime
  logCurrentTime();
  
  // Обработчик события DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    // Вызов функции handleUtmTerm
    handleUtmTerm();
    
    // Сброс цвета фона перед изменением
    resetBackgroundColor();
    
    // Изменение цвета фона
    changeBackgroundColor('Lavender');
    
    // Переключение видимости элемента с классом .content
    toggleVisibility('.content');
  });