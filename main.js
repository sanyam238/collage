var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult = function(event){

    console.log(event);

     Content = event.results[0] [0].transcript;
if(Content == "take my selfie")
{
    console.log("taking selfie ---");
    speak();
}
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'png',
    png_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function(){
        take_snapshot();
    },5000);
    Webcam.attach(camera);
    }

function take_snapshot(){

    Webcam.snap(function(data_uri) {
        if(img_id == "selfie1"){
            document.getElementById("result_1").innerHTML = '<img id="selfie_1" src="'+data_uri+' "/>'
        }
    });
}