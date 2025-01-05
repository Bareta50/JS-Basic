const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const electronicMail = document.getElementById("email");
const password = document.getElementById("password");
const theButton = document.getElementById("BigRedButton");

function combineIntoStrings(fname, lname, email, pass) {
  return `Hello ${fname} ${lname}. You're E-mail is :${email} ; Password: ${pass}.`;
}
theButton.addEventListener("click", function () {
  const firstNameOf = firstName.value;
  const lastNameOf = lastName.value;
  const eMail = electronicMail.value;
  const passWord = password.value;
  const result = combineIntoStrings(firstNameOf, lastNameOf, eMail, passWord);
  console.log(result);
  const paragraph = document.getElementById("changeP");
  paragraph.textContent = result;

  firstName.value = "";
  lastName.value = "";
  electronicMail.value = "";
  passWord.value = "";
});
