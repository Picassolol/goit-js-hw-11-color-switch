const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const startBtnRef = document.querySelector('button[data-action="start"]');
  const stopBtnRef = document.querySelector('button[data-action="stop"]');
  const bodyRef = document.body;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function starterRandomColor () {
    startBtnRef.setAttribute('disabled', 'true');

    const timerId = setInterval(()=> {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
      } ,1000)

      function stoperRandomColor () {
        startBtnRef.removeAttribute('disabled');
        stopBtnRef.removeEventListener('click', stoperRandomColor);
        clearInterval(timerId);
    }

      stopBtnRef.addEventListener('click', stoperRandomColor);
  }

  startBtnRef.addEventListener('click', starterRandomColor);