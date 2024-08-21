let partyLocation = "GARDEN"; // As the message might change.
const shiftValue = 3; // Since the shift value remains constant throughout.
let encryptedMessage = "  "; // This will change when we encode the message with the original party location.
let decryptedMessage = " "; // This will change when we decode the encrypted message to reveal the party location.
let isPartySafe = false; // Hopefully, this doesn't change.
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let encryptingBtn = document.querySelector(".encrypting-btn");
let decryptingBtn = document.querySelector(".decrypting-btn");
let textArea = document.querySelector(".secert-message-box");
let displayBox = document.querySelector(".display-box");
let decryptingBox = document.querySelector(".orginal-text");

// function for turning a message into encrypted
function turnIntoEncrypted(message, shiftValue) {
  for (let i = 0; i < message.length; i++) {
    let messageEl = message[i];

    // check if the element of message is a letter of maybe lowercase or upper case
    if (alphabet.includes(messageEl.toUpperCase())) {
      let isLowerCase = messageEl === messageEl.toLowerCase();
      let currentIndexOfMessageEl = alphabet.indexOf(messageEl.toUpperCase());
      // ciphered the message and moved the letters
      let cipheredIndexOfMessageEl =
        (currentIndexOfMessageEl + shiftValue) % 26;
      let cipheredMessageEl = alphabet[cipheredIndexOfMessageEl];

      // Maintain the original case of the letter
      encryptedMessage += isLowerCase
        ? cipheredMessageEl.toLocaleLowerCase()
        : cipheredMessageEl;
    } else {
      // non-letter characters remain the same
      encryptedMessage += messageEl;
    }
  }
  return encryptedMessage;
}

turnIntoEncrypted(encryptedMessage, shiftValue);

// function for decrypting the message

//functions for DOM manipulation

encryptingBtn.addEventListener("click", function () {
  displayBox.style.display = "block";
  message = textArea.value;
  let encrptedValue = turnIntoEncrypted(message, shiftValue);
  displayBox.innerText = encrptedValue;
  textArea.value = "";
});

decryptingBtn.addEventListener("click", function () {
  displayBox.style.display = "none";
  decryptingBox.style.display = "block";
  let decryptingValue = turnIntoEncrypted(encryptedMessage, 26 - shiftValue);
  decryptingBox.innerText = decryptingValue;
});

// practice
