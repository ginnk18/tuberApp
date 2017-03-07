function Anim() {



// Verical Slider
var $row = $('.vertical-slider__item'),
    $container = $('.vertical-slider');
    currentMarginTop = 0,
    itemHeight = $row.height(),
    rowsNr = $row.length,
    maxPadd = (rowsNr-1) * itemHeight;
console.log(itemHeight);

function setHeight() {
  console.log(itemHeight);
  $('.text-slider__dynamic').css({
    'height' : itemHeight
  });

}

function animateSlider () {
  //setInterval(moveRows,2000);
  setHeight();
  function moveRows () {
      $container.animate({
    'margin-top' : currentMarginTop - itemHeight
  },500);
  currentMarginTop -= itemHeight;
      }
  if (currentMarginTop == -(maxPadd)) {
     $container.css({
    'margin-top' : 0
  })
    currentMarginTop = 0;
   // moveRows();
  } else {
    moveRows();
  }
}

function automateSlider (interval) {
  setInterval(animateSlider,interval);
}

automateSlider(3000);

};

export default Anim;
