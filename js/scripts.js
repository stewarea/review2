$(document).ready(function() {
  $("#again").hide();
  $("form#match button").click(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var meal = $("select#meal").val();
    var activity = $("select#activity").val();
    var beach = $("select#beach").val();


    $(".result").hide();

    if ((gender === "null") || (meal === "null") || (activity === "null") || (beach === "null")) {
      alert("Please fill out all of the questions.");
        $("form.match").show();
          $("#again").hide();
    }
    else {
      $('#match').hide();
      $("#again").show();
      if ((meal === "crab") && (activity === "hiking" || "museum" || "eating") && (beach === "dig" || "relax" || "sand")) {
        $('#alaska').show();
        }

      else if ((meal === "broth") && (activity === "hiking" || "museum" || "eating") && (beach === "dig" || "relax" || "sand")) {
        $('#tikal').show();
        }
      else {
      // if ((meal === "beans") && (activity === "hiking" || "museum" || "eating") && (beach === "dig" || "relax" || "sand")) {
        $('#vietnam').show();
        }
    }
    $("#again").click(function(event) {
      $(".result").hide();
        $("form#match").show();
          $("#again").hide();

    });
     event.preventDefault();
  });
});
