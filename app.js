
// Welcome Div Function
function welcomDiv(){
    var modal = document.getElementById('myModal');
      // Get the close button
    var closeBtn = document.getElementsByClassName('close')[0];
      // When the user clicks the close button, hide the modal
    closeBtn.onclick = function() {
      
      modal.style.display = 'none';
    }
    
  }
  welcomDiv();



  // Above Function is for when a user land on a site, a Div will be opened for welcome massage
  
  
  // Code of Page 1 Consist of The all functionality given in the iPhone Page or Page 1 
  function CodeofPage1(){
  
  // Code For Page 1 (iPhone Page)
  
  // iPhone Information Changing Text 
  function changingTextiphone() {
  
    document.addEventListener("DOMContentLoaded", function () {
      let currentTextIndex = localStorage.getItem("currentTextIndex") || 0;
      const paragraphs = document.querySelectorAll('.content p');
      const numParagraphs = paragraphs.length;
  
      function showText(index) {
        paragraphs.forEach((paragraph, i) => {
          if (i == index) {
            paragraph.style.display = 'block';
          } else {
            paragraph.style.display = 'none';
          }
        });
        localStorage.setItem("currentTextIndex", index);
      }
  
      function showNextiphone() {
        if (currentTextIndex < numParagraphs - 1) {
          currentTextIndex++;
        } else {
          currentTextIndex = 0; // Reset to the first paragraph
        }
        showText(currentTextIndex);
      }
  
      function showPreviousiphone() {
        if (currentTextIndex > 0) {
          currentTextIndex--;
        } else {
          currentTextIndex = numParagraphs - 1; // Move to the last paragraph
        }
        showText(currentTextIndex);
      }
  
      // Show only the first paragraph initially
      showText(0);
  
      // Event listeners for next and previous buttons
      document.getElementById('prev').addEventListener('click', showNextiphone);
      document.getElementById('next').addEventListener('click', showPreviousiphone);
    });
  }
  changingTextiphone();
  //The above code is for the information of iphone that when user click on the next or previous arrow
  
  // scroll on Click From Iphone
  function ScrollonClickiphone(){
    let page2 = document.querySelector("#page2");
    let clickToScroll = document.querySelector(".down-arrow");
    clickToScroll.addEventListener("click", function(){
    
       page2.scrollIntoView({behavior: "smooth"})
       page2.window.scrollTo()
    
    })
    
  }
  ScrollonClickiphone();
  
  // The Above Function is of the iphone Page Circle for click to down for ipad page
  
  // iPhone Circle Text
  
  function ScrollDowncircleiPhone() {
  
    let myText = document.querySelector(".down-arrow");
    let initialArrow = myText.innerHTML;
  
    myText.addEventListener("mouseover", function () {
      myText.innerHTML = "Scroll Down";
      myText.style.fontSize = "1.1vw";
      myText.addEventListener("mouseout", function () {
        myText.innerHTML = initialArrow;
  
  
      })
    })
  }
  ScrollDowncircleiPhone();
  
  //-------------------------------------------------------------------------------------------------------
  }
  CodeofPage1()
  // Code of Page 2 Consist of The all functionality given in the iPad Page or Page 2
  function CodeofPage2(){
    // iPad Information Changing Text
  function changingTextipad() {
  
    document.addEventListener("DOMContentLoaded", function () {
      let currentTextIndex = localStorage.getItem("currentTextIndex") || 0;
      const paragraphs = document.querySelectorAll('.content-ipad p');
      const numParagraphs = paragraphs.length;
  
      function showText(index) {
        paragraphs.forEach((paragraph, i) => {
          if (i == index) {
            paragraph.style.display = 'block';
          } else {
            paragraph.style.display = 'none';
          }
        });
        localStorage.setItem("currentTextIndex", index);
      }
  
      function showNextipad() {
        if (currentTextIndex < numParagraphs - 1) {
          currentTextIndex++;
        } else {
          currentTextIndex = 0; // Reset to the first paragraph
        }
        showText(currentTextIndex);
      }
  
      function showPreviousipad() {
        if (currentTextIndex > 0) {
          currentTextIndex--;
        } else {
          currentTextIndex = numParagraphs - 1; // Move to the last paragraph
        }
        showText(currentTextIndex);
      }
  
      // Show only the first paragraph initially
      showText(0);
  
      // Event listeners for next and previous buttons
      document.getElementById('prev-ipad').addEventListener('click', showNextipad);
      document.getElementById('next-ipad').addEventListener('click', showPreviousipad);
    });
  }
  changingTextipad();
  //The above code is for the information of iPad that when user click on the next or previous arrow
  
  // scroll on Click From Ipad
  function ScrollonipadCircle(){
    let page3 = document.querySelector("#page3");
    let clickToScroll = document.querySelector(".scrolldownipad");
    clickToScroll.addEventListener("click", function(){
    
       page3.scrollIntoView({behavior: "smooth"})
       page3.window.scrollTo()
    
    })
    
  }
  ScrollonipadCircle();
  
  // The Above Function is of the ipad Page Circle for click to get down of mac page
  
  // iPad Circle Text
  
  function ScrollDowncircleiPad() {
  
    let myText = document.querySelector(".scrolldownipad");
    let initialArrow = myText.innerHTML;
  
    myText.addEventListener("mouseover", function () {
      myText.innerHTML = "Scroll Down";
      myText.style.fontSize = "1.1vw";
      myText.addEventListener("mouseout", function () {
        myText.innerHTML = initialArrow;
  
  
      })
    })
  }
  ScrollDowncircleiPad();
  
  //-------------------------------------------------------------------------------------------------------
  }
  CodeofPage2()
  // Code of Page 3 Consist of The all functionality given in the MacBook Page or Page 3 
  
  function CodeofPage3(){
    // Macbook Information Changing Text
  function changingTextmac() {
  
    document.addEventListener("DOMContentLoaded", function () {
      let currentTextIndex = localStorage.getItem("currentTextIndex") || 0;
      const paragraphs = document.querySelectorAll('.content-macbook p');
      const numParagraphs = paragraphs.length;
  
      function showText(index) {
        paragraphs.forEach((paragraph, i) => {
          if (i == index) {
            paragraph.style.display = 'block';
          } else {
            paragraph.style.display = 'none';
          }
        });
        localStorage.setItem("currentTextIndex", index);
      }
  
      function showNextmacbook() {
        if (currentTextIndex < numParagraphs - 1) {
          currentTextIndex++;
        } else {
          currentTextIndex = 0; // Reset to the first paragraph
        }
        showText(currentTextIndex);
      }
  
      function showPreviousmacbook() {
        if (currentTextIndex > 0) {
          currentTextIndex--;
        } else {
          currentTextIndex = numParagraphs - 1; // Move to the last paragraph
        }
        showText(currentTextIndex);
      }
  
      // Show only the first paragraph initially
      showText(0);
  
      // Event listeners for next and previous buttons
      document.getElementById('prev-macbook').addEventListener('click', showNextmacbook);
      document.getElementById('next-macbook').addEventListener('click', showPreviousmacbook);
    });
  }
  changingTextmac();
  //The above code is for the information of Macbook that when user click on the next or previous arrow
  
  // scroll on Click From Macbook 
  function ScrollonmacCircle(){
    let page4 = document.querySelector("#page4");
    let clickToScroll = document.querySelector(".scrolldownmacbook");
    clickToScroll.addEventListener("click", function(){
    
       page4.scrollIntoView({behavior: "smooth"})
       page4.window.scrollTo()
    
    })
    
  }
  ScrollonmacCircle();
  
  // The Above Function is of the Macbook Page Circle for click to get down of mac page
  
  // iPad Circle Text
  
  function ScrollDowncircleMac() {
  
    let myText = document.querySelector(".scrolldownmacbook");
    let initialArrow = myText.innerHTML;
  
    myText.addEventListener("mouseover", function () {
      myText.innerHTML = "Scroll Down";
      myText.style.fontSize = "1.1vw";
      myText.addEventListener("mouseout", function () {
        myText.innerHTML = initialArrow;
  
  
      })
    })
  }
  ScrollDowncircleMac();
  
  //-------------------------------------------------------------------------------------------------------
  }
  CodeofPage3()




  

  
  