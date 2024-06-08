let btn=document.querySelector("button");
let input=document.querySelector("input");
let url="https://api.dictionaryapi.dev/api/v2/entries/en/";

btn.addEventListener("click",async()=>{
    let word=input.value;
    input.value="";
    let result=await getWords(word);
    show(result);
});
function show(result){
        let list=document.querySelector('#result');
        list.innerText="";
        let div=document.createElement("div");
        console.log(result);
        if(result.length!=0){
        for( i of result){
            // let pro=document.createElement("h3");
            
            // if(i.phonetics && i.phonetics[0] && i.phonetics[0].audio){
            //     pro.innerText="Pronunciation";
            //     pro.classList.add="h3";
            //     div.appendChild(pro);

            //     let audio = document.createElement("audio");
            //     audio.setAttribute("controls", "");
            //     let source = document.createElement("source");
            //     source.setAttribute("src", i.phonetics[0].audio);
            //     audio.appendChild(source);
            //     div.appendChild(audio);
            // }

            let mean=document.createElement("h3");
            mean.innerText="Meanings";
            mean.classList.add="h3";
            div.appendChild(mean);
            for( j of i.meanings){
                for( k of j.definitions){
                     p=document.createElement("p");
                    p.innerText=k.definition;
                    p.classList.add("p");
                    div.appendChild(p);
                    list.appendChild(div);
                }
            }
        }
    }else{
        list.innerHTML="<h1 style='color:white'>Please enter vaild word</h1>";
    }
}

async function getWords(word){
    try{
        let res=await axios.get(url+word);
        return res.data;
    }
    catch(err){
        console.log("Not found");
        return [];
    }
}


