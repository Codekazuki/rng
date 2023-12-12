const number = document.querySelector(".number");
const button = document.querySelector(".button");
const message = document.querySelector(".message");

const generateNumber = () => {
  const generatedNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = generatedNumber;
  styleNumber();
};
button.addEventListener("click", generateNumber);
const styleNumber = () => {
  if (number.innerHTML > 5) {
    number.style.color = "red";
  } else {
    number.style.color = "green";
  }
};
generateNumber();
const changeMessage = () => {
  if (number.innerHTML > 5) {
    message.innerHTML = "Message is going up";
  }
};
message.addEventListener("", changeMessage);
