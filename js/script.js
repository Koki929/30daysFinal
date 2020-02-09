// drawer
$(document).ready(function() {
    $('.drawer').drawer();
});
$(function() {
    $('.hamburger, .drawer-overlay, .drawer-menu-item').click(function() {
      $('.bar1, .bar2, .bar3, .header-section').toggleClass('open');
    })
});