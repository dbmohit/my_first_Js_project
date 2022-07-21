function getoutput(){
    document.getElementById("screen1").innerText;
}
function printscreen(num){
    document.getElementById("screen1").innerText = num;
}
 
buttons = document.querySelectorAll('button');
let screenval = '';
for(item of buttons){
    item.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
        // console.log(buttonText);
        
        if(buttonText == 'x'){
            buttonText = '*';
            screenval += buttonText;
        }
        else if(buttonText == '='){
            screenval = eval(screenval);
        }
        else if(buttonText == 'AC'){
            screenval = '';
            
        }
        // else if(screenval = '0/0'){
        //     screenval 
        // }
        else{
            screenval += buttonText;
        }

        printscreen(screenval);
    })
    
}

