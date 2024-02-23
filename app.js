document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  images.forEach((image) => {

    image.addEventListener("click", () => { 

      images.forEach(otherImage => {
        if (otherImage !== image) {
          otherImage.classList.remove('effect');
        }
      });
      console.log("clicked");

      image.classList.toggle("effect");

    });
  });
});
