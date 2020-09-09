const buttons = document.getElementsByClassName('dropbtn')
const content = document.getElementsByClassName('dropdown-content')

// for (i=0; i < buttons.length; i++) {
  buttons[0].addEventListener('mouseover', showDropdown)
  buttons[1].addEventListener('mouseover', showDropdown2)
  buttons[2].addEventListener('mouseover', showDropdown3)
  buttons[3].addEventListener('mouseover', showDropdown4)


  function showDropdown(){
    content[0].style.display='flex'
    content[0].style.flexDirection='column'
  }

  function showDropdown2(){
    content[1].style.display='block'
  }

  function showDropdown3(){
    content[2].style.display='block'
  }

  function showDropdown4(){
    content[3].style.display='block'
  }



  
    content[0].addEventListener('mouseleave', hideDropdown)

    function hideDropdown(){
      content[0].style.display='none'
    }
  
  
    content[1].addEventListener('mouseleave', hideDropdown2)
  
      function hideDropdown2(){
        content[1].style.display='none'
      }

    content[2].addEventListener('mouseleave', hideDropdown3)
  
      function hideDropdown3(){
        content[2].style.display='none'
      }  
    
    content[3].addEventListener('mouseleave', hideDropdown4)
    
      function hideDropdown4(){
        content[3].style.display='none'
      }



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

function myFunction() {
  var x = document.getElementById("myEmail").value;
  document.getElementById("demo").innerHTML = x;
}