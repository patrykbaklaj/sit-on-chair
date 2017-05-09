document.addEventListener("DOMContentLoaded", function(){

  // menu, które ma być schowane
  var hidenList = document.querySelector("div.hiden__menu");
  // przycisk, który powoduje chowanie/wyświetlanie
  var aboutCompany = document.querySelector("ul.menu li:first-child");
  // funkcja, która powoduje wyświetlanie subMenu
  aboutCompany.addEventListener("mouseover", function() {

    hidenList.style.display="block";
  });

  // chowanie subMenu
  aboutCompany.addEventListener("mouseout", function() {
    //dodać opóźnienie czasowe
    window.setTimeout(function() {
      hidenList.style.display="none";
    }, 2500);

  });

  // przewijanie zdjęć
  // lewa strzałka
  var leftArrow = document.querySelector(".arrow__left");
  // prawa strzałka
  var rightArrow = document.querySelector(".arrow__right");
  // zdjęcia
  var photos = document.querySelectorAll(".img img");
  var index = 0;

  photos[index].classList.remove("invisible");

  leftArrow.addEventListener("click", function() {
    photos[index].classList.add("invisible");
    index--;
    if(index === -1) {
      index = photos.length - 1;
    }
    photos[index].classList.remove("invisible");
  });

  rightArrow.addEventListener("click", function(){
    photos[index].classList.add("invisible");
    index++;
    if(index === photos.length) {
      index = 0;
    }
    photos[index].classList.remove("invisible");
  });

  // chowanie tekstu
  var hideDivs = document.querySelectorAll("div.images__content");
  for (var i = 0; i < hideDivs.length; i++) {
    hideDivs[i].parentElement.addEventListener("mouseover", function () {
      this.firstElementChild.classList.add("invisible");
    });
  }
  for (var i = 0; i < hideDivs.length; i++) {
    hideDivs[i].parentElement.addEventListener("mouseout", function () {
      this.firstElementChild.classList.remove("invisible");
    });
  }

  // drop down list

  // strzałki
  var arrows = document.querySelectorAll(".list_arrow");
  // pola
  var textSpans = document.querySelectorAll(".list_label");

  // przypisanie zdarzenia do strzałek
  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function() {
      if(this.nextElementSibling.style.display === "block") {
        this.nextElementSibling.style.display="none";
      } else {
        this.nextElementSibling.style.display="block";
      }
    });
  }
    // przypisanie zdarzenia do pól wyboru
  for (var i = 0; i < textSpans.length; i++) {
    textSpans[i].addEventListener("click", function() {
      if(this.nextElementSibling.nextElementSibling.style.display === "block") {
        this.nextElementSibling.nextElementSibling.style.display="none";
      } else {
        this.nextElementSibling.nextElementSibling.style.display="block";
      }
    });
  }


  // summary_panel - wypełnianie

  // tablica do obliczenia sumy zamówienia
  var priceTable = [0, 0, 0, 0];

  // pola wyboru typu krzesła
  var type = document.querySelectorAll("#type>li");
  // przypisanie tekstu pola wyboru do rodzaju krzesła w summary_panel
  var typeTitle = document.querySelector(".panel_left h4.title");
  var typePrice = document.querySelector("#type_price");
  for (var i = 0; i < type.length; i++) {
    type[i].addEventListener("click", function() {
      // przypisanie typu krzesła
      typeTitle.innerHTML = this.innerHTML;
      // przypisanie ceny
      typePrice.innerHTML = this.getAttribute("price");
      priceTable[0] = parseInt(typePrice.innerHTML);
      countSum(priceTable);
      this.parentElement.style.display="none";
    });
  }

  // przypisanie pola wyboru koloru
  var colors = document.querySelectorAll("#colors>li");
  // przypisanie koloru w summary_panel
  var colorTitle = document.querySelector("span.color");
  var colorPrice = document.getElementById("color_price");
  for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function() {
      // przypisanie koloru
      colorTitle.innerHTML = this.innerHTML;
      colorPrice.innerHTML = this.getAttribute("price");
      priceTable[1] = parseInt(colorPrice.innerHTML);
      countSum(priceTable);
      this.parentElement.style.display="none";
    });
  }

  // przypisanie pola wyboru tkaniny
  var fabric = document.querySelectorAll("#fabric>li");
  // przypisanie tkaniny w summary_panel
  var fabricTitle = document.querySelector("span.pattern");
  var fabricPrice = document.getElementById("fabric_price");
  for (var i = 0; i < fabric.length; i++) {
    fabric[i].addEventListener("click", function() {
      fabricTitle.innerHTML = this.innerHTML;
      fabricPrice.innerHTML = this.getAttribute("price");
      priceTable[2] = parseInt(fabricPrice.innerHTML);
      countSum(priceTable);
      this.parentElement.style.display="none";
    });
  }

  // przypisanie checkbox - koszt transportu
  var transport = document.getElementById("transport");
  // przypisanie ceny kosztu transportu do summary_panel
  var transportTitle = document.querySelector("span.transport");
  var transportPrice = document.getElementById("tansport_price");
  transport.addEventListener("change", function() {
    if (transport.checked) {
      transportTitle.innerHTML = "Transport";
      transportPrice.innerHTML = this.getAttribute("data-transport-price");
      priceTable[3] = parseInt(transportPrice.innerHTML);
      countSum(priceTable);
    } else {
      transportTitle.innerHTML = "";
      transportPrice.innerHTML = null;
      priceTable[3] = null;
      countSum(priceTable);
    }

  });

  // przypisanie sumy w summary_panel
  var sumText = document.querySelector("div.sum strong");


  function countSum(toAdd) {
    var sumValue = 0;
    for (var i = 0; i < toAdd.length; i++) {
      sumValue += toAdd[i];
    }
    sumText.innerHTML = sumValue;
  }

  // przypisanie zdarzenia do przycisku zamawiam
  var buttonOrder = document.querySelector(".green_button");
  buttonOrder.addEventListener("click", function() {
    window.alert("Wartość zamówienia: " + sumText.innerHTML + " zł");
  });

});
