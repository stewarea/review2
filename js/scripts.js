$(document).ready(function() {
  $("form#match").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (gender === "Male") {
      if (age < 35) {
      $('#lily').show();
      }
      if ((36 < age) && (age < 50)) {
      $('#pike').show();
      }
      if (age > 50) {
      $('#doris').show();
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
