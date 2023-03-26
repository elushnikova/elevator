# Elevator

This is a simplified model of an elevator written in HTML, CSS, and JavaScript. It's a proof of concept for student task and a source of screenshots/casts for task description.

## How to run
Open [elevator.elushnikova.dev](https://elevator.elushnikova.dev/) to see the result.

If you want to run it locally, clone the repository and open `index.html` in your browser.

## Task steps
1. Mark up building and elevator. Store information in data attributes.

2. Style building and elevator. Try to work mobile first. Add CSS transitions.

3. Handle elevator requests. Ensure that elevator does finish at the requested floor before accepting another request.

4. Generate building with custom number of floors. Generate markup and adjust style rules via JS, if necessary.

5. Publish! Deploy! Share! I love [Netlify](https://www.netlify.com/) — it's quite handy and allows to automatically deploy your latest commits.

This is the entire scope of [my little project](https://elevator.elushnikova.dev/) for now.

### What's next?
If you want to improve project and have time for that, here are some ideas:

- Write unit tests — I prefer Jest. My code here needs refactoring before doing so.

- Add queue for requests. If elevator is already moving, add new requests to the queue. Yay, algorithms!

- For each request, add a character to enter elevator on selected floor. Character requests random floor, and exits on desired floor. Yay, overcrowding and more algorithms :D

- Add more elevators. Make them move in parallel. Yay, parallelism and concurrency >:D

...I think that's enough for now. Have fun!

Please, let me know if you have any questions or want to show something you've done — I'll be happy to hear from you.

<!-- markdownlint-disable-next-line no-inline-html -->
Sincerely,<br />
Lena Lushnikova.
