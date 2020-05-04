function onClickSubmit (){
    var x = document.getElementById("sign-up-form")
    var fname = x.elements.fname.value;
    var lname = x.elements.lname.value;
    var email = x.elements.email.value;
    var password = x.elements.password.value;
    var pwdRepeat = x.elements.pwdr.value;

    var request = new XMLHttpRequest()
    request.open('POST', 'http://patilgajanan.com/user/signup', true)
    request.onload = function(res) {
      console.log(res);
    }
    request.setRequestHeader("Access-Control-Allow-Origin", true)
    request.setRequestHeader("Content-Type", "application/json")
    var req = { firstName : fname,
      lastName : lname,
      email : email,
      password : password
    }


    request.send(JSON.stringify(req));
}