
// -------------------------------------------------TIme Changing Telling-------------------------------

function refreshTime() {
  var refresh = 1000; // Refreash the time every 1 second or 1000 miliseconds
  mytime = setTimeout("currentTime()", refresh);
}

function currentTime() {
  var ct = new Date();
  var newTime = ct.getHours() + ":" + ct.getMinutes() + ":" + ct.getSeconds();
  document.getElementById("display_ct").innerHTML = newTime;
  refreshTime();
}

