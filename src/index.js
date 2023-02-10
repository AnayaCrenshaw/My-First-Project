function subscribe() {
    let name = prompt("what is your name?");
    let email = prompt("what is your email address?");
    if (name === "") {
        alert(`please enter a name`);
      } else {
alert(`thank you ${name} we will be in touch!`);
      }
}

let subscribeButton = document.querySelector("button");

subscribeButton.addEventListener("click", subscribe);
