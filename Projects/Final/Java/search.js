
function DoSearch() {
  var Flag = 0;
 
  if (document.ToolBox.SearchOption[0].checked==true) {
    var Flag = 1;
    var Engine = document.ToolBox.SearchOption[0].value;
    var Query = document.ToolBox.SearchBox.value;
    var locName = "http://www.google.com/search?hl=en&q=";
      if (Query == "") {
        alert("Please enter a search term");
        return;
      }
    location.href = (locName + Query)
  }
 
  if (document.ToolBox.SearchOption[1].checked==true) {
    var Flag = 1;
    var Engine = document.ToolBox.SearchOption[1].value;
    var Query = document.ToolBox.SearchBox.value;
    var locName = "http://search.yahoo.com/search?p=";
      if (Query == "") {
        alert("Please enter a search term");
        return;
      }
    location.href = (locName + Query)
  }
 
  if (document.ToolBox.SearchOption[2].checked==true) {
    var Flag = 1;
    var Engine = document.ToolBox.SearchOption[2].value;
    var Query = document.ToolBox.SearchBox.value;
      if (Query == "") {
        alert("Please enter a search term");
        return;
      }
    var searchPage = "<HTML>";
      searchPage += "\n";
      searchPage += "<FRAMESET ROWS=\"50%,50%\">";
      searchPage += "\n";
      searchPage += "<FRAME SRC=\"http://www.google.com/search?hl=en&q=" + Query + "\">";
      searchPage += "\n";
      searchPage += "<FRAME SRC=\"http://search.yahoo.com/search?p=" + Query + "\">";
      searchPage += "\n";
      searchPage += "</FRAMESET>";
      searchPage += "\n";
      searchPage += "</HTML>";
      document.write(searchPage);
  }
 
  if (Flag == 0) {
    alert("Please select a search engine");
  }
}
 