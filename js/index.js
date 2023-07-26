let menu = document.querySelector(".menu-icon");
menu.onclick = () => {
  menu.classList.toggle("move");
};

// Email JS
function validate() {
  let name = document.querySelector(".fromname");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");
  let text = document.getElementById("emailvaliderror")
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } 
    else {
      if(pattern.test(email.value))
      {
        text.style.display = 'none';
        sendmail(name.value, email.value, msg.value);
        success();
        name.value = "";
        email.value = "";
        msg.value = "";
      }
      else
      {
        text.style.display = 'block';
      }
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_7h1hgek","template_4ng4wih",{
  from_name: email,
  to_name: name,
  message: msg,
  });
}


function emptyerror() {
  swal({
    title: "Oh No",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function success() {
  swal({
    title: "Email sent successfully",
    text: "I will try to reply in 24 hours",
    icon: "success",
  });
}

// Header Background color change on scrolling
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

function changeHtbBadgeStyle() {
  setTimeout(() => {
    let element1 = document.getElementById("htb-badge");
    let element2 = element1.nextElementSibling;
    element2.style.margin = 'auto';
  }, 2000);
}
changeHtbBadgeStyle()
