// project 1 // variables 

// let btn = document.querySelector('#new-quote');
// let quote=document.querySelector('.quote');
// let person=document.querySelector('.person');

// const quotes = [
//     {
//         quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
//         person: "Nelson Mandela"
//     },
//     {
//         quote: "The way to get started is to quit talking and begin doing.",
//         person: "Walt Disney"
//     },
//     {
//         quote: "If life were predictable it would cease to be life, and be without flavor.",
//         person: "Eleanor Roosevelt"
//     },
//     {
//         quote: "Life is what happens when you're busy making other plans.",
//         person: "John Lennon"
//     },
// ]

// btn.addEventListener('click', function(){
    
//     let random= Math.floor(Math.random()*quotes.length);
//     quote.innerText=quotes[random].quote;
//     person.innerText=quotes[random].person;
// });


// project 2 // variables

// let openbtn = document.getElementById('open-btn');
// let closebtn = document.getElementById('close-btn');
// let modalcontainer=document.getElementById('modal-container');

// // event listeners

// openbtn.addEventListener('click', function(){
//     modalcontainer.style.display='block';
// });

// closebtn.addEventListener('click', function(){  
//     modalcontainer.style.display='none';
// }); 

// window.addEventListener('click', function(e){
//     if(e.target==modalcontainer){
//         modalcontainer.style.display='none';
//     }
// });


// project 3 // variables for buttons

const startstopbtn = document.querySelector('#startstop');
const resetbtn = document.querySelector('#reset');

// variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;

let timeInterval=null;
let timerstatus="stopped";

// stop watch function

function stopwatch(){
    seconds++;
    if(seconds/60===1){
        seconds=0;
        minutes++;
        if(minutes/60===1){
            minutes=0;
            hours++;
        }
    }
    if(seconds<10){
        leadingseconds='0'+seconds.toString();
    }else {
        leadingseconds=seconds;
    }
    if(minutes<10){
        leadingminutes='0'+minutes.toString();
    } else {
        leadingminutes=minutes;
    }
    if(hours<10){
        leadinghours='0'+hours.toString();
    } else {
        leadinghours=hours;
    }

    let displayTimer = document.getElementById('timer').innerText=`${leadinghours}:${leadingminutes}:${leadingseconds}`;
}

//window.setInterval(stopwatch, 1);

startstopbtn.addEventListener('click', function(){
    if(timerstatus==="stopped"){
        timeInterval=window.setInterval(stopwatch, 1000);
        document.getElementById('startstop').innerHTML=`<i class="fas fa-pause" id ="pause"></i>`;
        timerstatus="started";
    } else {
        window.clearInterval(timeInterval);
        document.getElementById('startstop').innerHTML=`<i class="fas fa-play" id ="start"></i>`;
        timerstatus="stopped";
    }
});

resetbtn.addEventListener('click', function(){
    window.clearInterval(timeInterval);
    // seconds=0;
    // minutes=0;
    // hours=0;
    document.getElementById('timer').innerText=`00:00:00`;
    document.getElementById('startstop').innerHTML=`<i class="fas fa-play" id ="start"></i>`;
    timerstatus="stopped";});




