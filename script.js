document.addEventListener("DOMContentLoaded", function () {
  const textArray = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, corporis?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, corporis?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, corporis?",
  ];

  let arrayIndex = 0;
  let textIndex = 0;

  function type() {
    const currentText = textArray[arrayIndex];
    document.getElementById("typewriter-text").textContent = currentText.slice(
      0,
      textIndex
    );
    textIndex++;

    if (textIndex > currentText.length) {
      textIndex = 0;
      arrayIndex = (arrayIndex + 1) % textArray.length;
    }
  }

  setInterval(type, 100);
});
