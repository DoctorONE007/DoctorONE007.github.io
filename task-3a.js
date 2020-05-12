
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let form = document.querySelector('form');
let submitButton = document.querySelector('.submit-button');
//submitButton.disabled = true;
let key;
let varCount;
//var Fraction = require('fraction.js');
form.onclick = function () {
    //submitButton.disabled = false;
    key = document.querySelector('.key-field');
    varCount = document.querySelector('.count-field');
    Math.seedrandom(key.value);
}

form.onsubmit = function (evt) {
    evt.preventDefault();
    document.getElementById("rightwindow").innerHTML = ``;

    for (let i = 0; i < parseInt(varCount.value); ++i) {
        for(let z=0;z<4;z++){
        var com1 ;
            var com2;
            var com12 ;
            var com22;
            var endprob1="";
        for (let k = 0; k < 2; k++) {
            var chfirst = "";
            if ((Math.floor(Math.random() * 2)) == 0) {
                chfirst = "-";
            }
            var x = 10;
            var y = 1;
            var sqr = [3, 5, 7];
            while (x >= y) {
                x = Math.floor(Math.random() * 10) + 1;
                y = Math.floor(Math.random() * 10) + 1;
            }

            var chsecond = "";
            if ((Math.floor(Math.random() * 2)) == 0) {
                chsecond = "-";
            }
            else {
                chsecond = "+";
            }

            var flag = 0;
            var m;
            if ((Math.floor(Math.random() * 2)) == 0) {
                flag = 1;
                var sq = sqr[Math.floor(Math.random() * 3)];
                m = sq;
                while (m == sq) {
                    m = Math.floor(Math.random() * 10) + 1;
                }
            }
            else {
                var notsq = Math.floor(Math.random() * 10) + 1;
                m = notsq;
                while (notsq >= m) {
                    notsq = Math.floor(Math.random() * 10) + 1;
                    m = Math.floor(Math.random() * 10) + 1;
                }
            }


            var problem = "";
            problem += "\\left(";
            problem += chfirst;
            if (y != 1) {
                problem += "\\frac {" + x + "}" + " {" + y + "}";
            }
            else {
                problem += x;
            }

            problem += chsecond;
            if (flag == 0) {
                if (m != 1) {
                    problem += "\\frac {" + notsq + "}" + " {" + m + "}";
                }
                else {
                    problem += notsq;
                }
            } else {
                if (m != 1) {
                    problem += "\\frac {" + "\\sqrt{" + sq + "}" + "}" + " {" + m + "}";
                }
                else {
                    problem += "\\sqrt{" + sq + "}";
                }
            }
            problem += "i";
            problem += "\\right)";

            

if(k==0){
             com1 = x / y;
           
            if (flag == 0) {
                com2 = notsq / m;
                if (chsecond == "-")
                    com2 *= (-1);
                    if (chfirst == "-")
                    com1 *= (-1);
            } else {
                com2 = Math.sqrt(sq) / m;
                if (chsecond == "-")
                    com2 *= (-1);
                    if (chfirst == "-")
                    com1 *= (-1);
            }
        }
        if(k==1){
            com12 = x / y;
            
           if (flag == 0) {
               com22 = notsq / m;
               if (chsecond == "-")
                   com22 *= (-1);
                   if (chfirst == "-")
                   com12 *= (-1);
           } else {
               com22 = Math.sqrt(sq) / m;
               if (chsecond == "-")
                   com22 *= (-1);
                   if (chfirst == "-")
                   com12 *= (-1);
           }
       }
       endprob1+=problem;
       if(k==0){

        if(z==0){
       endprob1+="+";
        }
        if(z==1){
            endprob1+="-";
             }
             if(z==2){
                endprob1+="*";
                 }
                 if(z==3){
                    endprob1+="/";
                     }
    }
        }
        document.getElementById("rightwindow").innerHTML += `
        <p>
        </div> Задание ${i + 1}.${z}:<p>
        
        <div id="generated${i}${z}" style="margin-bottom: 5px"></div>
        
		<p align="center">Ответ к заданию ${i + 1}.${z}:</p> <hr>
		
		`;
        
        //document.getElementById("gen").innerHTML += `<div id="generated${i}" style="margin-bottom: 5px"></div>`;
        katex.render(endprob1, document.getElementById(`generated${i}${z}`));

        if(z==1){
            com22*=(-1);
            com12*=(-1);
        }

        var a = math.complex(com1, com2);
        var b = math.complex(com12, com22);
        if(z==0||z==1)
        var res = math.add(a, b);
        if(z==2)
        var res =math.multiply(a, b);
        if(z==3){
b=math.pow(b,-1);
var res =math.multiply(a, b);


        }


        var str = String(res);
        str.slice(0, -1);
        var ch ;
        if (str[0] == "-") {
            ch = "-";
            str = str.substr(1);
        }
        else ch = "+";

        var res3 = str.split(" ");


        var x1 = new Fraction(parseFloat(res3[0]));
        var resx1 = x1.toFraction(true);

        var resx2 = res3[1];
        var x3 = new Fraction(parseFloat(res3[2]));
        var resx3 = x3.toFraction(true);

        var resend1 = String(resx1).split(" ");
        var resend3 = String(resx3).split(" ");
        if (resend1.length == 2) {
            var s = resend1[1].split("/");
            resx1 = String(resend1[0] * s[1] + parseFloat(s[0])) + "/" + String(s[1]);
        }
        if (resend3.length == 2) {
            var s = resend3[1].split("/");
            resx3 = String(resend3[0] * s[1] + parseFloat(s[0])) + "/" + String(s[1]);
        }

        var sol = "";
        sol += ch;
        sol += "\\frac {" + String(resx1).split("/")[0] + "}" + "{" + String(resx1).split("/")[1] + "}";
        sol += resx2;
        sol += "\\frac {" + String(resx3).split("/")[0] + "}" + "{" + String(resx3).split("/")[1] + "}"
        sol += "i";

        document.getElementById("rightwindow").innerHTML += `<div id="answer${i}${z}" style="margin-bottom: 5px;  text-align: center; "></div>
<hr>
`;
        //document.getElementById("gen").innerHTML += `<div id="ans${i}" style="margin-bottom: 5px"></div>`;
        katex.render(sol, document.getElementById(`answer${i}${z}`));
      


    }

    }



    Math.seedrandom(key.value);

    var a = math.complex(2, 3);   // Complex 2 + 3i
    var b = math.complex('4 - 2i');
    var t = math.add(a, b);


   














    Math.seedrandom(key.value);
}











