
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let form = document.querySelector('form');
let submitButton = document.querySelector('.submit-button');
let key;
let varCount;
form.onclick = function () {
    key = document.querySelector('.key-field');
    varCount = document.querySelector('.count-field');
    Math.seedrandom(key.value);
}

form.onsubmit = function (evt) {
    evt.preventDefault();
    document.getElementById("rightwindow").innerHTML = ``;

    for (let i = 0; i < parseInt(varCount.value); ++i) {
        var res=0.000006;
        while(Math.abs(res)<0.00001){
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
        
            var notsq = Math.floor(Math.random() * 10) + 1;
            m = notsq;
            while (notsq >= m) {
                notsq = Math.floor(Math.random() * 10) + 1;
                m = Math.floor(Math.random() * 10) + 1;
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

        var time = Math.floor(Math.random() * (10 - 5)) + 5;
        problem += "^" + "{" + time + "}";
        var text = `
        <p>
        </div> Задание ${i + 1}:<p>
        
        <div id="generated${i}" style="margin-bottom: 5px;text-align: center;"></div>
        <div class="block">
        <h5 class="extremum-click"><div align="center">Ответ к заданию ${i + 1}: </div></h5>
		<hr>
		<div class="extremum-slide">
		`;

       

        var com1 = x / y;
        var com2;
        if (flag == 0) {
            com2 = notsq / m;
            if (chsecond == "-")
                com2 *= (-1);
        } else {
            com2 = Math.sqrt(sq) / m;
            if (chsecond == "-")
                com2 *= (-1);
        }

        var a = math.complex(com1, com2);
         res = math.pow(a, time);

        var str = String(res);
        if(str[str.length-1]!="i"||(str[str.length-2]+str[str.length-1])==" i" ){
            i--;
            break;
        }
      
        str.slice(0, -1);

        if (str[0] == "-") {
            var ch = "-";
            str = str.substr(1);
        }
        else ch = "+";

        var res3 = str.split(" ");
        var x1 = new Fraction(parseFloat(res3[0]));
        var resx1 = x1.toFraction(true);

        var resx2 = res3[1];
        var x3 = new Fraction(parseFloat(res3[2]));
        var resx3 = x3.toFraction(true);
        if((parseFloat(res3[0])<0.00001)){
            res= parseFloat(res3[0]);
            i--;
            break;  
        }
        if((parseFloat(res3[2])<0.00001)){
            res= parseFloat(res3[2]);
            i--;
            break;
        }
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

if(parseFloat(String(resx1).split("/")[0])>10000 ||parseFloat(String(resx1).split("/")[1])>10000||parseFloat(String(resx3).split("/")[0])>10000||parseFloat(String(resx3).split("/")[1])>10000){
i--;
break;
}

        var sol = "";
        sol += ch;
        sol += "\\frac {" + String(resx1).split("/")[0] + "}" + "{" + String(resx1).split("/")[1] + "}";
        sol += resx2;
        sol += "\\frac {" + String(resx3).split("/")[0] + "}" + "{" + String(resx3).split("/")[1] + "}"
        sol += "i";

        text += `<div id="answer${i}" style="margin-bottom: 5px;  text-align: center; "></div>
       <hr>
       `;
       text += `
       </div>
       </div>
       `;
       document.getElementById("rightwindow").innerHTML+=text;
       katex.render(problem, document.getElementById(`generated${i}`));
        katex.render(sol, document.getElementById(`answer${i}`));

        
        
    }
}
    $(".extremum-click").text(function() {
        $(this).siblings(".extremum-slide").slideToggle("fast");
      });
      $(".extremum-click").click(function () {
        $(this).siblings(".extremum-slide").slideToggle("fast");
      });
    Math.seedrandom(key.value);
    Math.seedrandom(key.value);
}











