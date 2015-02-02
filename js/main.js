'use strict';

$(document).ready(function() {
  $('#title1').click(function() {
    $('#list1').slideToggle('fast');
  });
  $('#title2').click(function() {
    $('#list2').slideToggle('fast');
  });
  $('#title3').click(function() {
    $('#list3').slideToggle('fast');
  });
  $('#title4').click(function() {
    $('#list4').slideToggle('fast');
  });
  $('#myCarousel').carousel();
});

