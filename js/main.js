addEventListener('DOMContentLoaded', function () {

  const itemsContainer = document.querySelector('.items');
  console.log('Items container:', itemsContainer);

  const prevButton = document.querySelector('.prev');
  console.log('Previous button:', prevButton);

  const nextButton = document.querySelector('.next');
  console.log('Next button:', nextButton);

  const overlay = document.querySelector('.overlay');
  console.log('Overlay element:', overlay);

  const titleElement = document.querySelector('.title');
  console.log('Title element:', titleElement);

  const textElement = document.querySelector('.text');
  console.log('Text element:', textElement);

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
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
  ];

  // Milestone 0: Creazione del markup statico
  console.log('Creating static markup');
  images.forEach((imageData, index) => {
    const item = document.createElement('div');
    item.classList.add('item');
    if (index === 0) {
      item.classList.add('active');
    }

    const image = document.createElement('img');
    image.src = imageData.image;
    image.alt = '';

    item.appendChild(image);
    itemsContainer.appendChild(item);
  });

  const items = document.querySelectorAll('.item');
  console.log('Items:', items);

  function showItem(index) {
    if (index < 0 || index >= items.length) {
      return;
    }

    items.forEach((item, i) => {
      item.classList.remove('active');
      if (i === index) {
        item.classList.add('active');
        titleElement.textContent = images[i].title;
        textElement.textContent = images[i].text;
      }
    });
  }

  prevButton.addEventListener('click', function () {
    console.log('Clicked on previous button');
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = items.length - 1;
    }
    showItem(currentIndex);
  });

  nextButton.addEventListener('click', function () {
    console.log('Clicked on next button');
    currentIndex++;
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
    showItem(currentIndex);
  });

  // Milestone 1: Popolazione dinamica del carosello
  console.log('Showing initial item');
  showItem(currentIndex);

  // Milestone 2: Ciclo infinito del carosello
  function handleKeyboardNavigation(event) {
    console.log('Pressed key:', event.key);
    if (event.key === 'ArrowLeft') {
      console.log('Pressed left arrow key');
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = items.length - 1;
      }
      showItem(currentIndex);
    } else if (event.key === 'ArrowRight') {
      console.log('Pressed right arrow key');
      currentIndex++;
      if (currentIndex >= items.length) {
        currentIndex = 0;
      }
      showItem(currentIndex);
    }
  }

  document.addEventListener('keydown', handleKeyboardNavigation);
});
