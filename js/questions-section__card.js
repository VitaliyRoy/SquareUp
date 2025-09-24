const cards = document.querySelectorAll('.questions-section__card')

cards.forEach(card => {
  const text = card.querySelector('.questions-section__card__additional-text')

  card.addEventListener('click', () => {
    // Закриваємо всі інші елементи
    cards.forEach(otherCard => {
      if (otherCard !== card && otherCard.classList.contains('active')) {
        const otherText = otherCard.querySelector('.questions-section__card__additional-text')
        otherText.style.height = otherText.scrollHeight + 'px'
        requestAnimationFrame(() => {
          otherText.style.height = '0'
        })
        otherCard.classList.remove('active')
      }
    })

    // Тепер обробляємо поточний елемент
    if (card.classList.contains('active')) {
      text.style.height = text.scrollHeight + 'px'
      requestAnimationFrame(() => {
        text.style.height = '0'
      })
      card.classList.remove('active')
    } else {
      text.style.height = text.scrollHeight + 'px'
      card.classList.add('active')
      text.addEventListener('transitionend', () => {
        if (card.classList.contains('active')) {
          text.style.height = 'auto'
        }
      }, { once: true })
    }
  })
})
