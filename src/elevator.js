const building = document.querySelector('.js-building');

function isFloor(element) {
  return element.classList.contains('js-floor');
}

function activateBtn(floor) {
  floor.querySelector('.js-floor-btn')?.classList.add('active');
}

function deactivateBtn(floor) {
  floor.querySelector('.js-floor-btn')?.classList.remove('active');
}

if (building) {
  building.addEventListener('click', (event) => {
    const isFloorBtn = event.target.classList.contains('js-floor-btn');
    if (!isFloorBtn && !isFloor(event.target)) {
      return;
    }

    const elevator = document.querySelector('.js-elevator');
    if (!elevator) {
      const message = `
        Простите за неудобство.
        Похоже, в шахте нет кабины лифта
        (для меня это тоже странно звучит).

        Если возможно, воспользуйтесь 
        лестницей, пожалуйста. Также можно 
        обновить страницу и попробовать 
        вызвать лифт ещё раз.

        Связаться с обслуживающей компанией: 
        elevator@elushnikova.dev
      `;
      throw new ReferenceError(message);
    }

    const btn = event.target;
    const floor = btn.closest('.js-floor');
    const isMoving = JSON.parse(elevator.dataset.moving);
    if (isMoving) {
      return;
    }

    const msPerFloor = 500; // ms
    const floorsToTravel = Math.abs(elevator.dataset.floor - floor.dataset.num);
    const duration = msPerFloor * floorsToTravel;
    const prevFloor = building.querySelector(
      `[data-num="${elevator.dataset.floor}"]`,
    );
    prevFloor.classList.remove('current');
    floor.classList.add('current');
    elevator.style.transitionDuration = `${duration}ms`;
    elevator.style.setProperty('--floor-num', floor.dataset.num);
    elevator.dataset.moving = true;
    elevator.dataset.floor = Number(floor.dataset.num);
    setTimeout(() => {
      elevator.dataset.moving = false;
    }, duration);
  });

  building.addEventListener('mousedown', (event) => {
    if (!isFloor(event.target)) return;
    activateBtn(event.target);
  });

  building.addEventListener('mouseup', (event) => {
    if (!isFloor(event.target)) return;
    deactivateBtn(event.target);
  });

  building.addEventListener('touchstart', (event) => {
    if (!isFloor(event.target)) return;
    activateBtn(event.target);
  });

  building.addEventListener('touchend', (event) => {
    if (!isFloor(event.target)) return;
    deactivateBtn(event.target);
  });
}
