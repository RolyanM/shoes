// change picture of the shoe

let thumbnails = document.getElementsByClassName("thumbnail")
let activeImages = document.getElementsByClassName("active")


for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('mouseover', function ()  {
    if (activeImages.length > 0) {
      activeImages[0].classList.remove('active')
    }

    this.classList.add("active")
    document.getElementById("featured").src = this.src
  })
}

let buttonRight = document.getElementById("slideRight");
let buttonLeft = document.getElementById("slideLeft");


// slider changer
buttonLeft.addEventListener("click", function(){
  document.getElementById("slider").scrollLeft -= 180
})

buttonRight.addEventListener("click", function(){
  document.getElementById("slider").scrollLeft += 180
})

// modal

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("sizebtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// open the modal
btn.onclick = () => {
  modal.style.display = "block";
}

//close the modal
span.onclick = () => {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


// timer

let countDownDate = new Date("Dec 7, 2021 21:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for , hours, minutes and seconds
 
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = "Order in the next " + hours + " hours "
  + minutes + " minutes " + seconds + " seconds " + "for express next day delivery!";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




/* Open */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close  */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
} 

/* Open */
function openReturnsNav() {
  document.getElementById("returnsNav").style.width = "100%";
}

/* Close  */
function closeReturnsNav() {
  document.getElementById("returnsNav").style.width = "0%";
} 