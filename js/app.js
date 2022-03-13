"use strict";

function setProgress(index) {
  var calc = (index + 1) / $slider.slick('getSlick').slideCount * 100;
  $progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc);
  $progressBarLabel.text(calc + '% completed');
}

var $slider = $('.pagesSlider');
var $progressBar = $('.progress');
var $progressBarLabel = $('.slider__label');
$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  setProgress(nextSlide);
});
$slider.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  prevArrow: $('.pagesSlider-prev'),
  nextArrow: $('.pagesSlider-next'),
  responsive: [{
    breakpoint: 1348,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 1056,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }]
});
setProgress(0);

function doSearchResult() {
  var input, filter, ul, li, a, i;
  var searchResult = document.querySelector('.search-result-header'),
      searchResultClose = document.querySelector('.search-result-close-header'),
      searchInputBtn = document.querySelector('.search-input-btn');
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.querySelector('.search-result__list-header');
  li = ul.querySelectorAll('li');

  if (input.value.length > 1) {
    searchResult.classList.add('active');
    searchResultClose.classList.add('active');
    searchInputBtn.classList.add('active');
  }

  searchResultClose.addEventListener('click', function () {
    input.value = '';
    searchResult.classList.remove('active');
    searchResultClose.classList.remove('active');
    searchInputBtn.classList.remove('active');
  });
  window.addEventListener('click', function () {
    input.value = '';
    searchResult.classList.remove('active');
    searchResultClose.classList.remove('active');
    searchInputBtn.classList.remove('active');
  });
}

function toTop() {
  $("body, html").animate({
    scrollTop: 0
  }, 1000);
}

var baseScrollTop = function baseScrollTop() {
  var btnTop = document.querySelector('.mobile-up');
  btnTop.addEventListener('click', function () {
    btnTop.classList.add('active');
    setTimeout(function () {
      btnTop.classList.remove('active');
    }, 100);
  });

  var btnReveal = function btnReveal() {
    if (window.scrollY >= 400) {
      btnTop.classList.add('is-visible');
    } else {
      btnTop.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', btnReveal);
};

baseScrollTop();