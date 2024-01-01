"use strict";

const getAdvice = () => {
  const adviceURL = "https://api.adviceslip.com/advice";

  fetch(adviceURL).then((response) => {
    console.log(response);
  });
};
