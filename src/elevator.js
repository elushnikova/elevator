const building = document.querySelector('.js-building');

if (building) {
  building.addEventListener('click', (event) => {
    const isFloorBtn = event.target.classList.contains('js-floor-btn');
    const isFloor = event.target.classList.contains('js-floor');
    if (!isFloorBtn && !isFloor) {
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

    const duration = 1000; // ms
    elevator.style.transitionDuration = `${duration}ms`;
    elevator.dataset.moving = true;
    elevator.dataset.floor = Number(floor.dataset.num);
    setTimeout(() => {
      elevator.dataset.moving = false;
    }, duration);
  });
}
