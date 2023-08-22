window.onload = () => {
  // === load the dynamic content inside the page ===

  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // set category name to corresponding label
      document.querySelectorAll(".skill-category").forEach((element, index) => {
        element.innerText = data[index].category;
      });

      // set skill score to corresponding label
      document.querySelectorAll(".skill-score").forEach((element, index) => {
        element.innerText = data[index].score;
      });

      // set skill svg to corresponding image
      document.querySelectorAll(".skill-icon").forEach((element, index) => {
        element.src = data[index].icon;
      });
    });
};
