
// //////the first part of task7-1

    enterThreeNumbers = () => {
    let number1 = document.querySelector('.number1').value;
    let number2 = document.querySelector('.number2').value;
    let number3 = document.querySelector('.number3').value;
    
    let maxNumber = Math.max( number1, number2, number3);
    let minNumber = Math.min(number1, number2, number3);

    console.log("Input is: " , number1 , number2 , number3);
    console.log("max elements: " , maxNumber);
    console.log("min elements: " , minNumber);
}

// /////////the second part of task7-1

        enterTheChar = () => {  
        let char = document.querySelector('.vowelletter').value;
        char=char.toLowerCase();
        if (char =='a' || char=='e' || char=='o' ||char =='i' ||char=='u' ){
            console.log("Input:" , char)
            console.log("Output :vowel")
        }
        else{
            console.log("Input:" , char)
            console.log("Output : constant")
        }
    }

// ////////////the third part of task7-1

        enterMultiNumber = () =>{
            let num = document.querySelector('.multnumber').value;
            let text = " ";
            for(let i = 0 ; i < 13 ; i++) {
                let mlnum = num * i;
                text = text +" " + mlnum;
            }
            console.log("Input :" , num);
            console.log("Output : " , text) ;


}

/////////////////the fourth part of task7-1

        enterNumberBetween = () => {
            let betweenNumber = document.querySelector('.betweennumber').value;
            let text2 = " ";

            for (let i = 2 ; i < betweenNumber ; i+=2 ){
                text2 = text2 +" " + i;
            }
            console.log (text2);
        }

/////////////the fifth part of task7-1
        
        enterYourMark = () => {
            let markNumber1 = parseInt(document.querySelector('.num1').value);
            let markNumber2 = parseInt(document.querySelector('.num2').value);
            let markNumber3 = parseInt(document.querySelector('.num3').value);
            let markNumber4 = parseInt(document.querySelector('.num4').value);
            let markNumber5 = parseInt(document.querySelector('.num5').value);
            let sum = markNumber1 + markNumber2 + markNumber3 + markNumber4 + markNumber5 ;
            let avg = (sum / 5);
            let percentage = ( (avg * 100 ) / 100 );
            
            console.log("Input : - Enter mark of five subject =" , markNumber1 , markNumber2 , markNumber3 , markNumber4 , markNumber5 );
            console.log("Output : Total Number =" , sum );
            console.log("Output : The Average =" , avg );
            console.log("Output : The Percentage =" , percentage );
        }

/////////////the sixth part of task7-1

        enterYourAverage = () => {
            let physicNumber1 = parseInt(document.querySelector('.Physic').value);
            let chemistryNumber2 = parseInt(document.querySelector('.Chemistry').value);
            let biologyNumber3 = parseInt(document.querySelector('.Biology').value);
            let mathematicsNumber4 = parseInt(document.querySelector('.Mathematics').value);
            let computerNumber5 = parseInt(document.querySelector('.Computer').value);
            let sum = physicNumber1 + chemistryNumber2 + biologyNumber3 + mathematicsNumber4 + computerNumber5 ;
            let avg = (sum / 5);
            let percentage = ( (avg * 100 ) / 100 );
            let Grade;
            if( percentage >= 90 ) {
                Grade="A";
            }
            else if( percentage >= 80 ) {
                Grade="B";

            }
            else if( percentage >= 70 ) {
                Grade="C";
            }
            else if( percentage >= 60 ) {
                Grade="D";

            }
            else if( percentage >= 50 ) {
                Grade="E";
            }
            else if( percentage >= 40 ) {
                Grade="F";

            }
            console.log("Your average:" ,percentage)
            console.log("Your Grade:" , Grade)
        }