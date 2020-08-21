function populate(sname,dname){
  var sname = document.getElementById(sname);
  var dname = document.getElementById(dname);

  dname.innerHTML="select your destination";

  if(sname.value =="kerala"){
    var districtArray =["|","thiruvananthapuram|Thiruvananthapuram","ernakulam|Ernakulam","kozhikod|Kozhikod","wayanad|Wayanad"];
  }
  else if(sname.value =="tamilnadu"){
      var districtArray =["|","chennai|Chennai","coimbatore|Coimbatore","salem|Salem","vellore|Vellore"];

  }
  for (var option in districtArray){
    var pair = districtArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value =pair[0];
    newOption.innerHTML=pair[1];
    dname.options.add(newOption);

  }
}
function validateNumber(number){
  var regex =/^[\d]{10}$/;
  if(regex.test(number.value) == false){

      // alert('Invalid phone number');
      number.value="";
      document.getElementById("#phonenumber").innerHTML="<div>Please Enter a vaild email</div>"

      return false;
      }
      return true;

}

  function validateEmail(emailField){
          var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

          if (reg.test(emailField.value) == false)
          {
              // alert('Invalid Email Address');
              emailField.value="";


              return false;
          }

          return true;

  }



var clr=()=>{

var elements=document.querySelectorAll(".form-control");
for(ele of elements){
  // alert(ele);
  ele.value="";
}


}
// document.getElementById("#myForm").addEventListener("shown.bs.modal",function(){
//
// document.getElementById("#modal_btn").bootstrapValidator("resetForm",true);
//
//     }
