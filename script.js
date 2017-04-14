//Simple script to retrieve data from the OMDB API
$(document).ready(function() {

  var API = "http://www.omdbapi.com/?";

  var title = "";
  var year = "";
  var id = "";

  //Construct request and call apiCall()
  function titleSearch()
  {
    title = $('#title').val();
    year = $('#year').val();

    var string = API;

    if(title != "")
    {
      string = string + "t=" + title;
      if(year != "")
      {
        string = string + "&y=" + year;
      }
      apiCall(string);
    }
    else
    {
      $("#results").html("Results:");
      $("#results").append("<p>ERROR: Title Required</p>");
    }
    
  }

  //Construct request and call apiCall()
  function idSearch()
  {
    id = $('#id').val();

    var string = API;

    if(id != "")
    {
      string = string + "i=" + id;
      apiCall(string);
    }
    else
    {
      $("#results").html("Results:");
      $("#results").append("<p>ERROR: ID Required</p>");
    }

  }

  //Given a request string, apiCall(string) uses .getJSON to retrieve
  //data from the OMDB API and updates the HTML document
  function apiCall(string)
  {
    $.getJSON(string, function(data) {
      //$("#demo").append("<p>getJSON</p>");
      //console.log(data);
      $("#results").html("Results:");

      if(data.Response == "True")
      {
        $("#results").append("<p>Title: " + data.Title + "</p>");
        $("#results").append("<p>Year: " + data.Year + "</p>");
        $("#results").append("<p>Rated: " + data.Rated + "</p>");
        $("#results").append("<p>Released: " + data.Released + "</p>");
        $("#results").append("<p>Runtime: " + data.Runtime + "</p>");
        $("#results").append("<p>Genre: " + data.Genre + "</p>");
        $("#results").append("<p>Director: " + data.Director + "</p>");
        $("#results").append("<p>Writer: " + data.Writer + "</p>");
        $("#results").append("<p>Actors: " + data.Actors + "</p>");
        $("#results").append("<p>Plot: " + data.Plot + "</p>");
        $("#results").append("<p>Language: " + data.Language + "</p>");
        $("#results").append("<p>Country: " + data.Country + "</p>");
        $("#results").append("<p>Awards: " + data.Awards + "</p>");
        $("#results").append("<p>Poster: " + data.Poster + "</p>");
        $("#results").append("<p>Metascore: " + data.Metascore + "</p>");
        $("#results").append("<p>imdbVotes: " + data.imdbVotes + "</p>");
        $("#results").append("<p>imdbRating: " + data.imdbRating + "</p>");
        $("#results").append("<p>imdbID: " + data.imdbID + "</p>");
        $("#results").append("<p>Type: " + data.Type + "</p>");
        $("#results").append("<p>DVD: " + data.DVD + "</p>");
        $("#results").append("<p>BoxOffice: " + data.BoxOffice + "</p>");
        $("#results").append("<p>Production: " + data.Production + "</p>");
        $("#results").append("<p>Website: " + data.Website + "</p>");
        $("#results").append("<p>Response: " + data.Response + "</p>");
      }
      else
      {
        $("#results").append("<p>ERROR: No Match Found</p>");
      }
    });
    //$("#demo").append("<p>apiCall</p>");
  }

  //When the "titleSearch" button is clicked, call titleSearch()
  $("#main > #search > #titleSearch").click(titleSearch);

  //When the "idSearch" button is clicked, call idSearch()
  $("#main > #search2 > #idSearch").click(idSearch);

});

