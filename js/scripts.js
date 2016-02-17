$(document).ready(function() {
  $("form#match button").click(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var meal = $("select#meal").val();
    var activity = $("select#activity").val();
    var beach = $("select#beach").val();


    $(".result").hide();

    if ((gender === "null") || (meal === "null") || (activity === "null") || (beach === "null")) {
      alert("Please fill out all of the questions.");
    }
    else {
      if ((meal === "crab") && (activity === "hiking" || "museum" || "eating") && (beach === "dig" || "relax" || "sand")) {
        $('#alaska').show();
        }

      if ((meal === "broth") && (activity === "hiking" || "museum" || "eating") && (beach === "dig" || "relax" || "sand")) {
        $('#tikal').show();
        }

      if ((meal === "beans") && (activity === "hiking" || "museum" || "eating") && (beach === "dig" || "relax" || "sand")) {
        $('#vietnam').show();
        }
    }

     event.preventDefault();
  });
});
