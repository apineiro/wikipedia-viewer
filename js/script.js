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

    /*    var result = data;
      var resultText = data[1][1];
      var resultDesc = data[2][1];
      var resultUrl = data[3][1];
      console.log(result);
      console.log(resultText);
      console.log(resultDesc);
      console.log(resultUrl); */
/*        var results = [];
        var urls = [];
        var table = document.getElementById("wiki-results");
        var row, cell1;
        for (i = 0; i < 10; i++) {
          results[i] = data[1][i] + "\n";
          results[i] += data[2][i] + "\n";
          urls[i] = data[3][i];
          row  = table.insertRow(i);
          cell1 = row.insertCell(0);
          cell1.innerHTML = results[i];
          $("div.results-wiki").html(cell1.innerHTML);
          console.log(results[i]);
          console.log(urls[i]); */

/*        var html = "<table>";
        var results = [];
        var urls = [];
        var row;
        for (i = 0; i < 10; i++) {
          results[i] = data[1][i] + "\n";
          results[i] += data[2][i] + "\n";
          urls[i] = data[3][i];
          html += "<tr>";
          html += "<td>" + results[i] + "</td>";
          html += "</tr>";
        }
        html += "</table>";
        $("div.results-wiki").html(html); */

/*        var results = [];
        var urls = [];
        var table = document.getElementById("wiki-results");
        var row, cell1;
        for (i = 0; i < 10; i++) {
          results[i] = data[1][i] + "\n";
          results[i] += data[2][i] + "\n";
          urls[i] = data[3][i];
          row  = table.insertRow(i);
          cell1 = row.insertCell(0);
          cell1.innerHTML = results[i];
          $("#wiki-results").html(cell1.innerHTML);
          console.log(results[i]);
          console.log(urls[i]); */
