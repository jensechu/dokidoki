"use strict";

const getUserData = function(userID) {
  const URL       = "https://api.mixlr.com/users/" + userID;
  let mixlrAPI    = new XMLHttpRequest()
  let container   = document.getElementById("status-container");

  mixlrAPI.open("GET", URL, false);
  mixlrAPI.send();

  let userData   = JSON.parse(mixlrAPI.responseText.trim());
  let liveStatus = userData["is_live"]? "online" : "offline" ;

  container.classList.add(liveStatus);
}
