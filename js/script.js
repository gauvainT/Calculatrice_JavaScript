'use strict'

var localAmmount1 = "";
var localAmmount2 = "";
var operateur ="";

$( document ).ready(function() {
    // Handler for .ready() called.
    $("button").click(function(){
        if(operateur.length == 0 && localAmmount2.length == 0 ){
            switch (this.id) {
                case 'number':
                    localAmmount1 += $(this).attr("value");
                    $("#result").html(localAmmount1);
                break;
                case 'operation':
                    if(localAmmount1.length==0){
                        localAmmount1 += $(this).attr("value");
                    }
                    else{
                        localAmmount1 = parseFloat(localAmmount1);
                        operateur = this.value;
                    }
                break;
                case 'result':
                        $("#result").html("Vous n'avez saisie qu'une valeur");
                break;
            };
        }
        else{
            switch (this.id) {
                case 'number':
                    localAmmount2 += $(this).attr("value");
                    $("#result").html(localAmmount2);
                break;
                case 'operation':
                    if(localAmmount2.length==0){
                        localAmmount2 += $(this).attr("value");
                    }
                    else{
                        localAmmount2 = parseFloat(localAmmount2);
                        $("#result").html("Vous avez déja saisie un opérateur");
                    }
                break;
                case 'result':
                    localAmmount2 = parseFloat(localAmmount2);
                    switch(operateur){
                        case '+':
                             $("#result").html(localAmmount1+localAmmount2);
                             localAmmount1 = localAmmount1+localAmmount2;
                        break;
                        case '-':
                            $("#result").html(localAmmount1-localAmmount2);
                            localAmmount1 = localAmmount1-localAmmount2;
                        break;
                        case '/':
                            if(localAmmount2 == 0){
                                $("#result").html("Division par 0 impossible");
                            }
                            else{
                                $("#result").html(localAmmount1/localAmmount2);
                                localAmmount1 = localAmmount1/localAmmount2;
                            }
                        break;
                        case '*':
                            $("#result").html(localAmmount1*localAmmount2);
                            localAmmount1 = localAmmount1*localAmmount2;
                        break;
                    }
                break;
            };
        }
    })
  });
