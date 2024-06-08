let btn=document.querySelectorAll("button");
let input=document.querySelector("input");

let string="";
btn.forEach(button=>{
    button.addEventListener("click",()=>{    
            if(button.innerHTML=="="){
                let answer=eval(string);
                input.value=answer;
            }else if(button.innerHTML=="AC"){
                string="";
                input.value=string;
            }else if(button.innerHTML=="DEL"){
                string=string.substring(0,string.length-1);
                input.value=string;
            }
            else{
                string+=button.innerHTML;
                input.value=string;
            }
    })      
})