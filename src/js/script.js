import { isMobile } from './functions';

import { myModules } from './modules';
// Константы
const CARDS_TO_SHOW = 3; // Кількість відображених карточок
let displayedCards = 0; // Лічильник відображених карточок

// Ф-ція рендеру карточок
async function displayCards() {
  const blogItems = document.getElementById('blogItems');
  const items = await fetchData();

  // Рлказуємо перші 3 (або менше ящко їх менше 3)
  const itemsToShow = items.slice(0, CARDS_TO_SHOW);
  renderCards(itemsToShow, blogItems);

  // Збільшуємо лічильник відображених карток
  displayedCards = CARDS_TO_SHOW;

  // Додаємо обробник на кнопку "View More"
  const viewMoreButton = document.querySelector('.blog__view-more');
  viewMoreButton.addEventListener('click', () => {
    const remainingItems = items.slice(
      displayedCards,
      displayedCards + CARDS_TO_SHOW
    );

    renderCards(remainingItems, blogItems);

    displayedCards += remainingItems.length;

    // Якщо більше карток в базі немає то не відображаємо кнопку
    if (displayedCards >= items.length) {
      viewMoreButton.style.display = 'none';
    }
  });

  // Якщо карток одразу менше 3 то не показуємо кнопку
  if (items.length <= CARDS_TO_SHOW) {
    viewMoreButton.style.display = 'none';
  }
}

// Ф-ція рендеру карток
function renderCards(items, container) {
  items.forEach(item => {
    const tags = Object.keys(item.tags)
      .map(
        tag => `<a href="${item.tags[tag]}" class="item-blog__tag">${tag}</a>`
      )
      .join('');

    const card = `
      <article class="blog__item item-blog">
          <a href="${item.url}" class="item-blog__image-ibg">
              <img src="${item.image}" alt="Image">
          </a>
          <div class="item-blog__date">${item.date}</div>
          <h4 class="item-blog__title">
              <a href="${item.url}" class="item-blog__link-title">${item.title}</a>
          </h4>
          <div class="item-blog__text">
              <p>${item.text}</p>
          </div>
          <div class="item-blog__tags">
              ${tags}
          </div>
      </article>`;

    container.innerHTML += card; // Додаємо картку в список
  });
}

// Ф-ція загрузки карточок з бази cards.json

async function fetchData() {
  try {
    const response = await fetch('data/cards.json');
    if (!response.ok) {
      throw new Error('Ошибка загрузки данных');
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Ошибка:', error);
    return [];
  }
}

// Виклик ф-ції для їх відображення
displayCards();
