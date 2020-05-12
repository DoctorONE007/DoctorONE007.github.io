var minN = 3;
var maxN = 8;
var minR = 2;
var maxR = 30;


var solutionExpr = "\\sqrt[ndegree]{rnumber}  (cos(\\frac{xnumber}{ynumber}\\pi) +  i  sin(\\frac{xnumber}{" +"ynumber}\\pi)) ";
var mainTableStrings = ["x^ndegree = rnumber","x^ndegree = rnumber  \\frac{\\sqrt{3}}{2} + \\frac{1}{2}i","x^ndegree = rnumber  \\frac{1}{2} + \\frac{\\sqrt{3}}{2}i","x^ndegree = rnumber i","x^ndegree = rnumber  -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i","x^ndegree = rnumber  -\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i","x^ndegree = -rnumber","x^ndegree = rnumber  -\\frac{\\sqrt{3}}{2} - \\frac{1}{2}i","x^ndegree = rnumber  -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i","x^ndegree = -rnumber i","x^ndegree = rnumber  \\frac{1}{2} - \\frac{\s\qrt{3}}{2}i","x^ndegree = rnumber  \\frac{\\sqrt{3}}{2} - \\frac{1}{2}i"];
var realTypeList = [0, 6];
var complexTypeList = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];





function getrandomexp(arr){
   var size = arr.length;
   var ind = Math.floor(Math.random() * size);
    return arr[ind];
}


function getrandomn(){
    return Math.floor(Math.random() * maxN) + minN;
}


function getrandomr(){
    return Math.floor(Math.random() * maxR) + minR;
}

function getrandom(arrtype){
    if (arrtype == 0){
        var arr = realTypeList;
    }
    else{
        var arr = complexTypeList;
    }

    var l = getrandomexp(arr);
    var n = getrandomn();

    var r = getrandomr();
    while (Math.pow(Math.floor(Math.pow(r, 1 / n)), n) == r){
        r = getrandomr();
    }
    
    var rtn = [l, n, r];
    return rtn;

}








function getexpression( l, n, r){
       var latexString = mainTableStrings[l];
      
        if (l % 3 != 0){
            
            if (r % 2 != 0){
                latexString = latexString.replace("\\frac{1}{2}", "\\frac{"+r+"}{2}");
                 
                latexString = latexString.replace("\\frac{", "\\frac{" + r + "");
                latexString = latexString.replace("rnumber ", "");
                latexString = latexString.replace("\\frac{\\sqrt{3}}{2}", "\\frac{"+String(r)+"\\sqrt{3}}{2}");
                
            }
            else{
                r = r / 2;
                latexString = latexString.replace("\\frac{\\sqrt{3}}{2}", String(r) + "\\sqrt{3}");
                latexString = latexString.replace("\\frac{1}}{2}", String(r) + " \\sqrt{3}");
                latexString = latexString.replace("\\frac{1}{2}", String(r));
                latexString = latexString.replace("rnumber", "");
            }
        }
        else{
            latexString = latexString.replace("rnumber","{"+r+"}");
           
        }
            
        latexString = latexString.replace("ndegree", "{"+n+"}");
        latexString = latexString.replace(String(r)+String(r), String(r));
        return String(latexString);
}
   
    function addsection(params){
        
        var contents = '';
        for (let i = 1; i < 2; i++) {
            l=params[i][0];
            n=params[i][1];
            r=params[i][2];
            //contents.push("\item");
            contents+=(getexpression(l, n, r));
          }
          
          

          return contents;
          document.getElementById("gen").innerHTML += `<div id="generatedl" style="margin-bottom: 5px"></div>`;
        katex.render(contents, document.getElementById(`generatedl`));
          

        
    }






    
    function getexpression2( l, n, r, k){
       var latexString = solutionExpr;
        latexString = latexString.replace("ndegree", n);
        latexString = latexString.replace("{rnumber}", r);
        var numerator=l + 12 * k;
        var denominator=6 * n;
        //frac = Fraction(l + 12 * k, 6 * n)

        if (numerator == 0)
            latexString = latexString.replace("\\frac{xnumber}{ynumber}\\pi", "0");
        else if (numerator == 1 && denominator == 1)
            latexString = latexString.replace("\\frac{xnumber}{ynumber}", "");
        else if (numerator == 1){
            latexString = latexString.replace("\\frac{xnumber}{ynumber}\\pi", "\\frac{\\pi}{ynumber}")
            latexString.replace("ynumber", "{"+denominator+"}");
        }
        else if(denominator == 1){
            latexString = latexString.replace(r+"\\frac{xnumber}{ynumber}\\pi", "xnumber\\pi");
            latexString.replace("xnumber", "{"+numerator+"}");
        }
        latexString = latexString.replace("ynumber", denominator);
        latexString = latexString.replace("xnumber", numerator);
        latexString = latexString.replace("ynumber", denominator);
        latexString = latexString.replace("xnumber", numerator);
        return latexString;

}
    function solution( params){
        var contents = [];
        
        for (let i = 1; i < 2; i++) {
            l=params[i][0];
            n=params[i][1];
            r=params[i][2];
            var tmoContent = [];
            for (let k = 0; k < n; k++) {
                tmoContent.push(getexpression2(l, n, r, k));
        }
          //  contents.extend(Document.wraptoenumerate(tmoContent, "{})".format(i + 1)));
          

    }
        return tmoContent;
    }


















function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function randomInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let form = document.querySelector('form');
let submitButton = document.querySelector('.submit-button');
//submitButton.disabled = true;
let key;
let varCount;

form.onclick = function() {
    //submitButton.disabled = false;
    key = document.querySelector('.key-field');
    varCount = document.querySelector('.count-field');
    Math.seedrandom(key.value);
}

form.onsubmit = function(evt) {
    evt.preventDefault();
    document.getElementById("rightwindow").innerHTML = ``;
    
    for (let i = 0; i < parseInt(varCount.value); ++i) {
        
        var params = [getrandom(0), getrandom(1)];
        
        var content = addsection(params);
        var sol =solution(params);
        
        content = content.replace("sqrt", "\\sqrt");
        content = content.replace("frac", "\\frac");
        content = content.replace("\\\\", "\\");
        content = content.replace("\\\\", "\\");
      

        document.getElementById("rightwindow").innerHTML += `
        <p>
        </div> Задание ${i+1}:<p>
        
        <div id="generated${i}" style="margin-bottom: 5px;text-align: center;"></div>
        
		<p align="center">Ответ к заданию ${i+1}:</p> <hr>
		
		`;


          let div2 = document.createElement('div2');
        div2.className = "alert";
        div2.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
        document.body.append(div2);





       // document.getElementById("gen").innerHTML += `<div id="generated${i}" style="margin-bottom: 5px"></div>`;
       katex.render(content, document.getElementById(`generated${i}`));
       
       for (let t = 0; t < sol.length; ++t) {
       //document.getElementById("gen").innerHTML += `<div id="ans${i}${t}" style="margin-bottom: 5px"></div>`;

       document.getElementById("rightwindow").innerHTML += `<div id="answer${i}${t}" style="margin-bottom: 5px;  text-align: center; "></div>
       <hr>
       `;

       katex.render(sol[t], document.getElementById(`answer${i}${t}`));
       }


       
    }
    for (let question = 0; question < 20; ++question) {
        // находим элемент, в который будем рендерить формулу
        var el = document.getElementById("formula2");
        
        // вызываем метод библиотеки для отображения формулы
       // katex.render("c = \\iint{a^2 + b^2}", el);
        //document.getElementById("gen").innerHTML += `<div id="generated${question}" style="margin-bottom: 5px"></div>`;
      //  katex.render("\\pi=\\frac c d", document.getElementById(`generated${question}`));
        
        }
    
        
        Math.seedrandom(key.value);
        
        


        
        











    Math.seedrandom(key.value);
}
  







    
    
    
    
