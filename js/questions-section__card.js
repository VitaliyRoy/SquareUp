const cards = document.querySelectorAll('.questions-section__card');

cards.forEach(card => {
  const textContainer = card.querySelector('.questions-section__card__additional-text-container');

  card.addEventListener('click', () => {
    cards.forEach(otherCard => {
      if (otherCard !== card && otherCard.classList.contains('active')) {
        const otherTextContainer = otherCard.querySelector('.questions-section__card__additional-text-container');
        
        otherTextContainer.style.height = otherTextContainer.scrollHeight + 'px';
        requestAnimationFrame(() => {
          otherTextContainer.style.height = '0';
        });
        otherCard.classList.remove('active');
      }
    });

    if (card.classList.contains('active')) {
      textContainer.style.height = textContainer.scrollHeight + 'px';
      requestAnimationFrame(() => {
        textContainer.style.height = '0';
      });
      card.classList.remove('active');
    } else {
      textContainer.style.height = textContainer.scrollHeight + 'px';
      card.classList.add('active');
      
      textContainer.addEventListener('transitionend', () => {
        if (card.classList.contains('active')) {
          textContainer.style.height = 'auto';
        }
      }, { once: true });
    }
  });
});