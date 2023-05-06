const operations= ()=>{
    return new Promise((resolve, reject)=>{

        // area for entering the operands and operators
        let preview= document.getElementsByClassName("preview")[0];

        // area for displaying the result
        let resultArea= document.getElementsByClassName("value")[0];


        // all the button selected using their ID
        let zero= document.getElementById("0");
        let one= document.getElementById("1");
        let two= document.getElementById("2");
        let three= document.getElementById("3");
        let four= document.getElementById("4");
        let five= document.getElementById("5");
        let six= document.getElementById("6");
        let seven= document.getElementById("7");
        let eight= document.getElementById("8");
        let nine= document.getElementById("9");
        let dbzero= document.getElementById("00");
        let decimal= document.getElementById("decimal");
        let plus= document.getElementById("plus");
        let minus= document.getElementById("minus");
        let multiply= document.getElementById("multiply");
        let divide= document.getElementById("divide");
        let percentile= document.getElementById("percentile");
        let clr= document.getElementById("clear");
        let del= document.getElementById("delete");
        let equalsto= document.getElementById("eval");

        // a variable for storing the digit last entered in the display area
        let previous= "";
        // a variable for storing the first operand in the expression
        let firstOperand= null;
        // a variable for storing the second operand in the expression
        let secondOperand= null;
        // a variable for telling which operator is used
        let operator= null;
        //  a variable for storing the result of the expression
        let answer= null;

        zero.addEventListener('click',()=>{
            previous= previous+zero.innerHTML;
            preview.innerHTML= previous;
        })

        one.addEventListener('click', ()=>{
            previous= previous+one.innerHTML;
            preview.innerHTML= previous;
        })

        two.addEventListener('click', ()=>{
            previous= previous+two.innerHTML;
            preview.innerHTML= previous;
        })

        three.addEventListener('click', ()=>{
            previous= previous+three.innerHTML;
            preview.innerHTML= previous;
        })

        four.addEventListener('click', ()=>{
            previous= previous+ four.innerHTML;
            preview.innerHTML= previous;
        })

        five.addEventListener('click', ()=>{
            previous= previous+ five.innerHTML;
            preview.innerHTML= previous;
        })

        six.addEventListener('click', ()=>{
            previous= previous+six.innerHTML;
            preview.innerHTML= previous;
        })

        seven.addEventListener('click', ()=>{
            previous= previous+seven.innerHTML;
            preview.innerHTML= previous;
        })

        eight.addEventListener('click', ()=>{
            previous= previous+ eight.innerHTML;
            preview.innerHTML= previous;
        })

        nine.addEventListener('click', ()=>{
            previous= previous+nine.innerHTML;
            preview.innerHTML= previous;
        })

        dbzero.addEventListener('click', ()=>{
            previous= previous+dbzero.innerHTML;
            preview.innerHTML= previous;
        })

        decimal.addEventListener('click', ()=>{
            previous= previous+decimal.innerHTML;
            preview.innerHTML= previous;
        })

        plus.addEventListener('click', ()=>{
            firstOperand= Number.parseInt(previous);
            previous= previous+ plus.innerHTML;
            preview.innerHTML= previous;
            operator= "+";
        })

        minus.addEventListener('click', ()=>{
            firstOperand= Number.parseInt(previous);
            previous= previous+ minus.innerHTML;
            preview.innerHTML= previous;
            operator= "-";
        })

        multiply.addEventListener('click', ()=>{
            firstOperand= Number.parseInt(previous);
            previous= previous+multiply.innerHTML;
            preview.innerHTML= previous;
            operator= "*";
        })

        divide.addEventListener('click', ()=>{
            firstOperand= Number.parseInt(previous);
            previous= previous+ divide.innerHTML;
            preview.innerHTML= previous;
            operator= "/";
        })

        percentile.addEventListener('click', ()=>{
            firstOperand= Number.parseInt(previous);
            previous= previous+ percentile.innerHTML;
            preview.innerHTML= previous;
            operator= "%";
        })

        // clr: clears the whole expression in the display area
        clr.addEventListener('click', ()=>{
            previous= "";
            preview.innerHTML= "";
            if (preview.innerHTML===""){
                resultArea.innerHTML= previous;
            }
        })

        // del: deletes the last character of the expression
        del.addEventListener('click', ()=>{
            let newPrev= previous.replace(previous.slice(previous.length-1), '');
            previous= newPrev;
            preview.innerHTML= previous;
            if (preview.innerHTML===""){
                resultArea.innerHTML= previous;
            }
        })

        equalsto.addEventListener('click', ()=>{
            let secondOp= previous;
            secondOperand= Number.parseInt(secondOp.split(operator)[1]);
            
            if (operator==="+"){
                answer= firstOperand + secondOperand;
                resultArea.innerHTML= answer;
            }
            else if (operator==="-"){
                answer= firstOperand - secondOperand;
                resultArea.innerHTML= answer;
            }
            else if (operator==="*"){
                answer= Number.parseFloat(firstOperand) * Number.parseFloat(secondOperand);
                resultArea.innerHTML= Number.parseFloat(answer);
            }
            else if (operator==="/"){

                answer= Number.parseFloat(firstOperand) / Number.parseFloat(secondOperand);
                resultArea.innerHTML= Number.parseFloat(answer);
            }
            else if (operator==="%"){
                answer= firstOperand % secondOperand;
                resultArea.innerHTML= answer;
            }
        })

        resolve(101);
    })
}

let a= operations();
a.then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
})