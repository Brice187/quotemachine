$.ajaxSetup({
  cache: false
});

$(document).ready(function() {
  $("#getMessage").click(function() {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      $("#message").html(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
    });
    setTimeout("this", 1000);
  });
});
