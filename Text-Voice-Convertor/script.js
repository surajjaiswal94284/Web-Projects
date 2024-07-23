let speech=new SpeechSynthesisUtterance()
let btn=document.querySelector("button");
let text=document.querySelector("textarea");

//Speaking
btn.addEventListener("click",()=>{
    speech.text=text.value;
    window.speechSynthesis.speak(speech);
})

//Adding multiple voices to dropdown
let voices=[];
let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    voices.forEach((voice,i)=>(
        voiceSelect.options[i]=new Option(voice.name,i)
    ))
}

//Changing voice
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
})