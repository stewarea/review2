$(document).ready(function() {
  $("form#match").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var meal = $("select#meal").val()
    var activity = $("select#activity").val()
    var beach = $("select#beach").val()


    if ((meal === "crab") && (activity === "hiking" || "museum" || "eating") && (beach === "dig")) {
      $('#alaska').show();
      }

    if ((meal === "broth") && (activity === "museum") && (beach === "relax")) {
      $('#tikal').show();
      }

    if ((meal === "beans") && (activity === "eating") && (beach === "sand")) {
      $('#vietnam').show();
      }


     event.preventDefault();
  });
});
