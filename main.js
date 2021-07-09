console.log("there is no brother section because i dont have a brother and yes i used my image for the sister class because i dont have a sister either.");

Webcam.set({width: 300, height: 300, image_format: "png", png_quality: 90});
camera=document.getElementById("camera");
Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri){document.getElementById("snapshot").innerHTML='<img id="bleh" src="'+data_uri+'"/>';});
}
console.log("ml version-", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lVY3LiWJD/",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded")
}
function identify(){
    img=document.getElementById("photo");
    classifier.classify(img, gotResult);

}
function gotResult(error, result){
 if(error){
     console.error(error);
 } else{
     console.log(result);
     document.getElementById("face").innerHTML=result[0].label;
 }
}