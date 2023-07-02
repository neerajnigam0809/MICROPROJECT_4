const slider = document.getElementById("slider");
  const slidervalue = document.getElementById("slider-value");
  
  slider.addEventListener("input", function() {
    slidervalue.textContent = slider.value;

  });

document.getElementById("generate").addEventListener("click", generatePassword);
document.getElementById("copy").addEventListener("click",copypassword);

  
  
 const checkboxes = document.querySelectorAll('input[type="checkbox"]');
 const boxes = document.querySelectorAll('.box');

  function updateBoxColoring() {
    let Counter = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        Counter++;
      }
    });
  
    const sliderValue = parseInt(slider.value);
  
    boxes.forEach((box, index) =>{ 
      if (Counter === 0 || sliderValue < 4) 
        box.classList.remove('colored');
       else if (index < Counter) 
        box.classList.add('colored');
       else 
        box.classList.remove('colored'); 
  });   
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', updateBoxColoring);
  });
  
  slider.addEventListener('input', updateBoxColoring);



  function generatePassword() {
    var includeUppercase = document.getElementById("includeUppercase").checked;
    var includeLowercase = document.getElementById("includeLowercase").checked;
    var includeNumbers = document.getElementById("includeNumbers").checked;
    var includeSymbols = document.getElementById("includeSymbols").checked;
    var Length = document.getElementById("slider").value;
  
    let Counter=0;
    checkboxes.forEach((checkbox) =>{
      if(checkbox.checked){
        Counter++;
      }
    });
  
    
    var uppercaseChars = "";
    var lowercaseChars = "";
    var numberChars = "";
    var symbolChars = "";
    var character = "";  
    var allowedChars = "";

    if (includeUppercase)
       uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      allowedChars +=uppercaseChars.charAt(Math.floor(Math.random()* uppercaseChars.length));
    if (includeLowercase)
       lowercaseChars="abcdefghijklmnopqrstuvwxyz";
      allowedChars +=lowercaseChars.charAt(Math.floor(Math.random()* lowercaseChars.length));
    if (includeNumbers)
       numberChars="0123456789";
      allowedChars +=numberChars.charAt(Math.floor(Math.random()* numberChars.length));
    if (includeSymbols)
       symbolChars="!@#$%^&*()_+=-{}[]|:;<>,.?/~";
      allowedChars +=symbolChars.charAt(Math.floor(Math.random()* symbolChars.length));
    
    character= uppercaseChars+lowercaseChars+numberChars+symbolChars;
    
    if( Length <4 ) {
      if(Length < Counter ){
        return;
      }
      else{
        for(let i=0; i<Length-Counter ; i++){
        var randomIndex = Math.floor(Math.random() * character.length);
        allowedChars += character.charAt(randomIndex);
        }
      }
    }
    else if(Length>=4){
      for(let i=0; i<Length-Counter;i++){
        var randomIndex = Math.floor(Math.random() * character.length);
        allowedChars += character.charAt(randomIndex);
      }}
     document.getElementById("pass").textContent= allowedChars
  }


  function copypassword(){
    var passwordElement = document.getElementById("pass");
      var passwordText = passwordElement.textContent;
      var textarea = document.createElement("textarea");
      textarea.value = passwordText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      alert("Password copied to clipboard !");
   }
  
  

