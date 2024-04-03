"use strict";

const getAdvice = () => {
  const adviceURL = "https://api.adviceslip.com/advice";

  fetch(adviceURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then((data) => {
      let adviceID = data.slip.id;
      let advice = data.slip.advice;
      document.getElementById("adviceNumber").innerHTML = "Advice #" + adviceID;
      document.getElementById("advice").innerHTML = '"' + advice + '"';
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};

window.onload = () => {
  getAdvice();
};
