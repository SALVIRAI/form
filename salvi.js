window.onload = function() {

  // Check for LocalStorage support.
  if (localStorage) {
    console.log("support")
    // Add an event listener for form submissions
    document.getElementById('interviewform').addEventListener('submit', function() {
      // Get the value of the name field.
      var a = document.getElementById("dropdownlist1");
      var interviewp = a.options[a.selectedIndex].value;
      var interviewer = document.getElementById('interviewer').value;
      var address = document.getElementById('address').value;
      var interviewee = document.getElementById('interviewee').value;
      var email = document.getElementById('email').value;
      var phoneno = document.getElementById('phoneno').value;
      var date = document.getElementById("date").value;
      var uid = document.getElementById("uid").value;
      var a2 = document.getElementById("dropdownlist2");
      var city = a2.options[a2.selectedIndex].value;
      
      if(city == "Elsewhere"){
        city = document.getElementById("other-input").value;
      }
      
      // Save the name in localStorage.
      localStorage.setItem('interviewp', interviewp);
      localStorage.setItem('interviewer', interviewer);
      localStorage.setItem('city', city);
      localStorage.setItem('address', address);
      localStorage.setItem('interviewee', interviewee);
      localStorage.setItem('email', email);
      localStorage.setItem('phoneno', phoneno);
      localStorage.setItem('date', date);
      localStorage.setItem('uid', uid);      

    });

  }
  else {
      console.log("Not support")
  }

}

function details(){
    location.href = "details.html";
}

function serialCreate() {
  console.log("Hkfdsfds");
var serialList = "123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",

serialLength = 13,

randomSerial = "";


  for(var x = 0; x < serialLength; x++){
    var randomNum = Math.floor(Math.random() * serialList.length);
    
     randomSerial += serialList.substring(randomNum, randomNum + 1);
  }
  
  document.getElementById("uid").value = "#"+randomSerial
  
}

function check(elem) {
  // use one of possible conditions
  // if (elem.value == 'Other')
  if (elem.selectedIndex == 6) {
      document.getElementById("other-input").style.display = 'inline-block';
  } else {
      document.getElementById("other-input").style.display = 'none';
  }
}