// let display = document.getElementById('display');

// let buttons =Array.from(document.getElementsByClassName('button'));

// buttons.map( button => {
//     button.addEventListener('click' , (e) => {
//         switch(e.target.innerText)
//         {
//             case 'C':
//                 display.innerText= '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText=eval(display.innerText);

//                 }catch{
//                     display.innerText='Error!';
//                 }
                
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });
$(document).ready(function(){
    $('#one').click(function(){
        document.forms.display.value += 1;
    });
    $('#two').click(function(){
        document.forms.display.value += 2;
    });
    $('#three').click(function(){
        document.forms.display.value += 3;
    });
    $('#four').click(function(){
        document.forms.display.value += 4;
    });
    $('#five').click(function(){
        document.forms.display.value += 5;
    });
    $('#six').click(function(){
        document.forms.display.value += 6;
    });
    $('#seven').click(function(){
        document.forms.display.value +=7;
    });
    $('#eight').click(function(){
        document.forms.display.value += 8;
    });
    $('#nine').click(function(){
        document.forms.display.value += 9;
    });
    $('#zero').click(function(){
        document.forms.display.value += 0;
    });
    $('#plus').click(function(){
        document.forms.display.value += '+';
    });
    $('#minus').click(function(){
        document.forms.display.value += '-';
    });
    $('#mul').click(function(){
        document.forms.display.value += '*';
    });
    $('#div').click(function(){
        document.forms.display.value += '/';
    });
    $('#dot').click(function(){
        document.forms.display.value += '.';
    });
    $('#dot').click(function(){
        document.forms.display.value += '.';
    });
    $('#equal').click(function(){
        if(display.value == ""){
            document.forms.display.value="invalid";
            document.getElementById("center").style.borderColor="red";
        }
        else{
            document.forms.display.value=eval(document.forms.display.value);
            document.forms.display.value=eval(document.forms.display.value);
        }
    });
    $('#clear').click(function(){
        document.forms.display.value = "";
    });
    $('#plus').click(function(){
        $('.button').click(function(){
   
            if((display.value =="+1")||(display.value =="+2")||(display.value =="+3")||(display.value =="+4")||(display.value =="+5")||(display.value =="+6")||(display.value =="+7")||(display.value =="+8")||(display.value =="+9"))
            {
               
                document.forms.display.value="invalid";
                document.getElementById("center").style.borderColor="red";
            }
            else{
                document.getElementById("center").style.borderColor="green";

            }
            
        });
});
});

var number = 1212
var numberString = number.toString();