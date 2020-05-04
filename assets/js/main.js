$( function() {

  var totalMonth,
      totalDay,
      totalYear,
      moneyBox,
      accumulation,
      spend;

  $("input").keyup(function () {

      //income inputs

    var incomeSalary = +$("#income-salary").val(),
      incomeFreelance = +$("#income-freelance").val(),
      incomeExtra1 = +$("#income-extra-1").val(),
      incomeExtra2 = +$("#income-extra-2").val();

      //costs inputs

    var costsFlat = +$("#costs-flat").val(),
      costsHouse = +$("#costs-house-services").val(),
      costsTransport = +$("#costs-transport").val(),
      costsCredit = +$("#costs-credit").val();

    var incomeMonth = incomeSalary + incomeFreelance + incomeExtra1 + incomeExtra2;
    var costsMonth = costsFlat + costsHouse + costsTransport + costsCredit;

    $("#total-month").val(incomeMonth - costsMonth);
    totalMonth = $("#total-month").val();

    calculation ();

  });
  
  function calculation () {
    $('#accumulation').val(((totalMonth - (totalMonth - moneyBox * totalMonth / 100))).toFixed(0));
        accumulation = +$('#accumulation').val();

    $("#spend").val((totalMonth - accumulation).toFixed(0));
    spend = +$("#spend").val();

    $("#total-day").val((spend / 30).toFixed(0));
    totalDay = +$("#total-day").val();

    $("#total-year").val((accumulation * 12).toFixed(0));
    totalYear = +$("#total-year").val();
  }

    

    $( "#slider-range" ).slider({
      range: "min",
      value: 0,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#percent" ).val(ui.value + " %");
        moneyBox = +($( "#percent" ).val().replace(" %", ""));
        calculation ();
      }
    });

    $( "#percent" ).val( $("#slider-range").slider("value") + " %" );

});