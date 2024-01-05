(function ($) {
  "use strict";

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      $this.find(".dropdown-menu").removeClass("show");
    }
  );
})(jQuery);

const menuButton = document.querySelector(".menuButton");
const svg = document.querySelector(".svgArrow");

menuButton.addEventListener("click", () => {
  svg.classList.toggle("fa-chevron-down");
});

// fetching data
const data = JSON.parse(data).Items;
const carosel = document.querySelector(".cards-carosel");

carosel.innerHTML = `${data.map(function (item) {
    return `<div class="card">
	<img
	  src="${item.ImageUrl}"
	  class="card-img-top"
	  alt="..."
	/>
	<div class="card-body">
	  <h5 class="card-title">${item.Name}</h5>
	</div>
  </div>`;
  })
  .join("")}`;
