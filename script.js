// var ele = document.createElement("div")
// ele.setAttribute("class","container")
// var ele2 = document.createElement("div")
// ele2.setAttribute("class","row")
// var ele3 = document.createElement("div")
// ele3.setAttribute("class","col")
// ele3.innerHTML = "This is col"
// //ele.innerHTML = "<P>This is div</p>"
// // this will create P tag and insert text
// //else
// //
// //ele.innerHTML = `
// //<p>This id div 2 </p>
// //<p>This id div 2 </p>
// //<p class='third'>This id div 3 </p>
// //`
// ele.append(ele2)
// ele2.append(ele3)
// document.body.append(ele)
function foo(){
    var firstname = document.getElementById("firstname").value
    var middlename = document.getElementById("middlename").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var phonenumber = document.getElementById("phonenumber").value 
console.log(`First Name:${firstname} 
Middle Name:${middlename} 
Last Name:${lastname} 
Email:${email} 
Phone Number:${phonenumber}`)
}