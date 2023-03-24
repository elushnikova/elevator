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
        Sorry for the inconvenience. 
        The elevator cabin seems to be missing
        (yes, that sounds weird for me too).

        Please, use stairs, if possible.
        Otherwise, try reloading the page 
        and calling elevator again.

        You can contact maintenance team
        at elevator@elushnikova.dev
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
