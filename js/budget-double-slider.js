const slider = document.getElementById('budget-double-slider');

  noUiSlider.create(slider, {
    start: [1000, 5000],
    connect: true,
    range: {
      'min': 0,
      'max': 12000
    },
    step: 1,
    tooltips: [true, true],
    format: {
      to: value => `$${Math.round(value)}`,
      from: value => Number(value.replace('$', ''))
    }
  });