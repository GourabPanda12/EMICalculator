 $(document).ready(function() {

$("#calculateBtn").click(function () { 
        
       
    var loanAmount = parseFloat($('#loanAmount').val());
    var interestRate = parseFloat($('#interestRate').val());
    var period = parseInt($('#period').val());

    var rate = (interestRate /12) / 100;
    var emi = (loanAmount * rate * Math.pow(1+rate, period)) / (Math.pow(1+rate, period) - 1);

    var Totalpayment = emi * period;
    var totalinterest = Totalpayment - loanAmount;
     
    $("#EMI").val(emi.toFixed(0));
    $("#TotalInterest").val(totalinterest.toFixed(0));
    $("#TotalPayment").val(Totalpayment.toFixed(0));

         
     var remainingBalance = loanAmount;
     for (var month = 1; month <= period; month++) {
         var interestComponent = remainingBalance * rate;
         var principalComponent = emi - interestComponent;
         remainingBalance -= principalComponent;

        
         $('#Schedule tbody').append(
             '<tr>' +
             '<td>' + month + '</td>' +
             '<td>' + emi.toFixed(0) + '</td>' +
             '<td>' + principalComponent.toFixed(0) + '</td>' +
             '<td>' + interestComponent.toFixed(0) + '</td>' +
             '<td>' + remainingBalance.toFixed(0) + '</td>' +
             '</tr>'
         );
     }
    });

});
