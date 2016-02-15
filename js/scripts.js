$(document).ready(function() {
  $("form#match").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var meal = $("input#meal").val()
    var activity = $("input#activity").val()
    var beach = $(input#activity)/val()


    if (gender === "Male") {
      if (age < 35) {
      $('#alaska').show();
      }
      if ((36 < age) && (age < 50)) {
      $('#tikal').show();
      }
      if (age > 50) {
      $('#vietnam').show();
      }
    }


     event.preventDefault();
  });
});


// $(document).ready(function() {
//   $("form#insurance").submit(function(event) {
//     var age = parseInt($("input#age").val());
//     var gender = $("select#gender").val();
//
//     var quote = (100 - age) * 3;
//
//     $("#rate").empty().append(quote);
//     $("#quote").show();
//
//     event.preventDefault();
//   });
// });
