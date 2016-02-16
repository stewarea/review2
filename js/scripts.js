$(document).ready(function() {
  $("form#match").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var meal = $("select#meal").val()
    var activity = $("select#activity").val()
    var beach = $("select#beach").val()


    if ((meal === "crab") && (activity === "hiking" || "museum" || "eating") && (beach === "dig" || "relax" || "sand")) {
      $('#alaska').show();
      }

    if ((meal === "broth") && (activity === "hiking" || "museum" || "eating") && (beach === "dig" || "relax" || "sand")) {
      $('#tikal').show();
      }

    if ((meal === "beans") && (activity === "hiking" || "museum" || "eating") && (beach === "dig" || "relax" || "sand")) {
      $('#vietnam').show();
      }

    if ((gender === "null") || (meal === "null") || (activity === "null") || (beach === "null")) {
        alert("Please fill out all of the questions.")
        }

     event.preventDefault();
  });
});
