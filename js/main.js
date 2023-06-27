window.addEventListener('DOMContentLoaded', function() {
  const itemsContainer = document.querySelector('.items');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  const images = [
    {
      image: 'img/01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text:
        "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts, and chaos.",
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text:
        "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
  ];

  images.forEach((imageData, index) => {
    const item = document.createElement('div');
    item.classList.add('item');
    if (index === 0) {
      item.classList.add('active');
    }

    const image = document.createElement('img');
    image.src = imageData.image;
    image.alt = '';

    const title = document.createElement('h2');
    title.textContent = imageData.title;

    const text = document.createElement('p');
    text.textContent = imageData.text;

    item.appendChild(image);
    item.appendChild(title);
    item.appendChild(text);
    itemsContainer.appendChild(item);
  });

  const items = document.querySelectorAll('.item');

  function showItem(index) {
    if (index < 0 || index >= items.length) {
      return;
    }

    items.forEach((item, i) => {
      item.classList.remove('active');
      if (i === index) {
        item.classList.add('active');
      }
    });
  }

  prevButton.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = items.length - 1;
    }
    showItem(currentIndex);
  });

  nextButton.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
    showItem(currentIndex);
  });

  showItem(currentIndex);
});
