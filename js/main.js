'use strict';

$(document).ready(function() {
  $('#title1').click(function() {
    $('#title1 h5').toggleClass('arrow-up arrow-down');
    $('#list1').slideToggle('fast');
  });
  $('#title2').click(function() {
    $('#title2 h5').toggleClass('arrow-up arrow-down');
    $('#list2').slideToggle('fast');
  });
  $('#title3').click(function() {
    $('#title3 h5').toggleClass('arrow-up arrow-down');
    $('#list3').slideToggle('fast');
  });
  $('#title4').click(function() {
    $('#title4 h5').toggleClass('arrow-down arrow-up');
    $('#list4').slideToggle('fast');
  });
  $('#myCarousel').carousel();
});

