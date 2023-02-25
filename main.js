
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BBw1OBySh/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}

var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var snake = 0;
var background_noise = 0;

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("result").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("result").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        

        if(results[0].label == "barking"){
            img.src = "dog-img.jpg";
            dog = dog+1;
            document.getElementById("result").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "meowing"){
            img.src = "cat-img.jpg";
            cat = cat+1;
            document.getElementById("result").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "roaring"){
            img.src = "lion-img.jpg";
            lion = lion+1;
            document.getElementById("result").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "mooing"){
            img.src = "cow-img.jpg";
            cow = cow+1;
            document.getElementById("result").innerHTML = "Detected Cow - "+ cow;
        }
        else if(results[0].label == "hissing"){
            img.src = "snake-img.jpg";
            cow = cow+1;
            document.getElementById("result").innerHTML = "Detected Snake - "+ snake;
        }
        else{
            img.src = "ear.png";
            background_noise = background_noise+1;
            document.getElementById("result").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}