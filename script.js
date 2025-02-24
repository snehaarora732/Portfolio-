var typed = new Typed(".auto-type", {
  strings: ["Frontend Developer", "Web Designer", "Digital Marketer"],
  typeSpeed: 150,
  backSpeed: 150,
  looped: true,
});

function unique() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let message = document.getElementById("message").value;

  if (
    firstname === "" ||
    lastname === "" ||
    email === "" ||
    number === "" ||
    message === ""
  ) {
    alert("Please Fill all Fields");
  } else if (!email.includes("@")) {
    alert("Please enter vaild email format");
  } else {
    alert("Message Sent Successfully");
  }
}
