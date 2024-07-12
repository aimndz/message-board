const textInput = document.querySelector("#text-input");
const textCount = document.querySelector("#text-count");
const userInput = document.querySelector("#user-input");

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  // Validate username
  if (userInput.value.trim() === "") {
    showError(
      userInput,
      "Don't be shy, tell us who you are! <br> ( Anonymously? )"
    );
    isValid = false;
  } else {
    hideError(userInput);
  }

  // Validate message
  if (textInput.value.trim() === "") {
    showError(
      textInput,
      "Don't leave this message box hanging. <br> Share your thoughts!"
    );
    isValid = false;
  } else {
    hideError(textInput);
  }

  if (isValid) {
    form.submit();
  }
});

const usernameContainer = document.querySelector("#username-container");
const messageContainer = document.querySelector("#message-container");

function showError(inputElement, message) {
  let errorElement = inputElement.parentElement.querySelector(".error-message");

  if (inputElement === userInput) {
    errorElement = usernameContainer.querySelector(".error-message");
  } else {
    errorElement = messageContainer.querySelector(".error-message");
  }

  if (!errorElement) {
    errorElement = document.createElement("p"); // Create the element first
    errorElement.classList.add("error-message");

    if (inputElement === userInput) {
      usernameContainer.appendChild(errorElement);
    }

    if (inputElement === textInput) {
      messageContainer.appendChild(errorElement);
    }
  }

  errorElement.innerHTML = message; // Now you can set the text content
}

function hideError(inputElement) {
  const errorElement = inputElement.nextElementSibling;
  if (errorElement && errorElement.classList.contains("error-message")) {
    errorElement.remove();
  }
}

const maxCount = 180;
let currentLength = 0;

// Text Count Indicator
textInput.addEventListener("input", () => {
  if (textInput.value.length > maxCount) {
    textInput.value = textInput.value.slice(0, maxCount);
  }

  currentLength = textInput.value.length;
  textCount.textContent = `${currentLength} / ${maxCount}`;
  textCount.style.color = currentLength >= maxCount ? "#FF0000" : "white";
});

userInput.addEventListener("input", () => {
  if (userInput.value.length > maxCount) {
    userInput.value = userInput.value.slice(0, userInput.maxLength);
  }
});
