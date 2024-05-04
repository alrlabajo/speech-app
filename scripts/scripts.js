const voiceDropdown = document.querySelector("#voices");
const rateInput = document.querySelector("#rate");
const pitchInput = document.querySelector("#pitch");
const textarea = document.querySelector("#textarea");
const stopButton = document.querySelector("#stop-button");
const speakButton = document.querySelector("#speak-button");

const message = new SpeechSynthesisUtterance(textarea.value);
let voices = [];

function populateVoices(){
    voices = speechSynthesis.getVoices();

    for(let i=0; i < voices.length; i++){
        const option = document.createElement("option");
        option.setAttribute("value", voices[i].name);
        option.textContent = voices[i].name;

        voiceDropdown.appendChild(option);
    }
}

function setVoice(){
    for(let i=0; i < voices.length; i++){
        if(voiceDropdown.value === voices[i].name){
            message.voice = voices[i];
        }
    }
}

function setRate(){
    message.rate = rateInput.value;
}

function setPitch(){
    message.pitch = pitchInput.value;
}

function setText(){
    message.text = textarea.value;
}

function stopVoice(){
    speechSynthesis.cancel();
}

function speakVoice(){
    speechSynthesis.speak(message);
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voiceDropdown.addEventListener("changed", setVoice);
rateInput.addEventListener("changed", setRate);
pitchInput.addEventListener("changed", setPitch);
textarea.addEventListener("changed", setText);
stopButton.addEventListener("click", stopVoice);
speakButton.addEventListener("click", speakVoice);
