const minFloors = 2;
const maxFloors = 10;
const defaultFloors = 3;
const form = document.forms.namedItem('rebuild');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let count = event.target.elements.namedItem('floors')?.value;
    if (count < minFloors || count > maxFloors) {
      count = defaultFloors;
    }

    const building = document.querySelector('.js-building');

    while (building.firstChild) {
      building.removeChild(building.firstChild);
    }

    for (let i = 1; i <= count; i += 1) {
      const floor = document.createElement('div');
      floor.classList.add('floor', 'js-floor');
      floor.setAttribute('data-num', i);

      const floorNum = document.createElement('span');
      floorNum.classList.add('floor-num');
      floorNum.append(i);

      const floorBtn = document.createElement('button');
      floorBtn.classList.add('floor-btn', 'js-floor-btn');
      floorBtn.type = 'button';

      floor.appendChild(floorNum);
      floor.appendChild(floorBtn);

      building.appendChild(floor);
    }

    const shaft = document.createElement('div');
    shaft.classList.add('elevator-shaft');

    const cabin = document.createElement('div');
    cabin.classList.add('elevator-cabin', 'js-elevator');
    cabin.setAttribute('data-floor', 1);
    cabin.setAttribute('data-moving', false);

    shaft.appendChild(cabin);
    building.appendChild(shaft);
  });
}
