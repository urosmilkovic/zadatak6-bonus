var slider = document.querySelector(".slider");
var pageView = document.querySelector(".sl-lower-content-pageview");
var money = document.querySelector(".sl-lower-content-money");
var discount = false;

document.querySelector(".sl-switch").addEventListener("click", () => {
  var dot = document.querySelector(".switch").classList.toggle("active");
  if (dot == true) discount = true;
  else discount = false;
  sliderBar();
});

slider.oninput = () => {
  sliderBar();
};

var sliderBar = () => {
  var val = slider.value;
  var pmon;
  switch (val) {
    case "0":
      pageView.innerText = `10k PAGEVIEWS`;
      pmon = `$${(8 * (discount ? 0.75 : 1)).toFixed(2)}`;
      money.innerHTML = `${pmon}<span>/ month</span>`;
      break;
    case "1":
      pageView.innerText = `50k PAGEVIEWS`;
      pmon = `$${(12 * (discount ? 0.75 : 1)).toFixed(2)}`;
      money.innerHTML = `${pmon}<span>/ month</span>`;
      break;
    case "2":
      pageView.innerText = `100k PAGEVIEWS`;
      pmon = `$${(16 * (discount ? 0.75 : 1)).toFixed(2)}`;
      money.innerHTML = `${pmon}<span>/ month</span>`;
      break;
    case "3":
      pageView.innerText = `500k PAGEVIEWS`;
      pmon = `$${(24 * (discount ? 0.75 : 1)).toFixed(2)}`;
      money.innerHTML = `${pmon}<span>/ month</span>`;
      break;
    case "4":
      pageView.innerText = `1m PAGEVIEWS`;
      pmon = `$${(36 * (discount ? 0.75 : 1)).toFixed(2)}`;
      money.innerHTML = `${pmon}<span>/ month</span>`;
      break;
  }
};

sliderBar();
