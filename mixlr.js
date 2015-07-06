"use strict";

const getUserData = function(userID) {
  var URL         = "https://api.mixlr.com/users/" + userID;
  var mixlrAPI    = new XMLHttpRequest()
  var container   = document.getElementById("status-container");

  mixlrAPI.open("GET", URL, false);
  mixlrAPI.send();

  var userData   = JSON.parse(mixlrAPI.responseText.trim());
  var liveStatus = userData["is_live"]? "online" : "offline" ;

  container.classList.add(liveStatus);
}
