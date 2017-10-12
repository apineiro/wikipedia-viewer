$(document).ready(function() {
  $("#searchButton").keypress(function(event) {
    var x = event.keyCode;
    if (x == 13) {
      event.preventDefault(); 
      searchWiki ();    
    } 
  });
});

function searchWiki () {
  var searchWiki = document.getElementById("searchButton").value;
  var jsonUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&utf8=&format=json&redirects=return&search="';
  jsonUrl += searchWiki;
  jsonUrl += '"&callback=?';
  $.getJSON(jsonUrl, function(data) {

    if (typeof data[1][1] != 'undefined') {

      var html = "<table>";
      var results = [];
      var urls = [];
      var row;
      for (i = 0; i < 10; i++) {
        urls[i] = data[3][i];
        results[i] = '<b>' + data[1][i] + '</b><br>' + '<a href="' + urls[i] + '"  target="_blank">' + data[2][i] + '</a><br><br>';
        html += "<tr>";
        html += "<td>" + results[i] + "</td>";
        html += "</tr>";
      }
      html += "</table>";
      $("#wiki-results").html(html);

    } else {

      html = "<h2><b>Incorrect search. Please try again...</b></h2>";
      $("#wiki-results").html(html);

    }

    document.getElementById("searchButton").value = '';

  });

}
