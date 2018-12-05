window.onload = function() {
  
  // Check for LocalStorage support.
  if (localStorage) {
    console.log("support")
    // Add an event listener for form submissions
    var interviewp = localStorage.getItem('interviewp');
    var city = localStorage.getItem('city');
    var interviewer = localStorage.getItem('interviewer');
    var address = localStorage.getItem('address');
    var interviewee = localStorage.getItem('interviewee');
    var email = localStorage.getItem('email');
    var phoneno = localStorage.getItem('phoneno');
    var date = localStorage.getItem("date");
    var uid = localStorage.getItem("uid");
    document.getElementById("detal").innerHTML = interviewp + "," + city + "," + interviewer + "," + address + "," + interviewee + "," + email + "," + phoneno + "," + date + "," + uid;

  }
  else {
      console.log("Not support")
  }

}