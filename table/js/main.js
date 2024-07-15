import { USERS } from "../db/server.js"
// oynani chiqarish start
const headerAdd = document.querySelector(".header__add")
const btnClose = document.querySelector(".btn__close")
const popap = document.querySelector(".popap")
// console.log(popap);
// oynani yopish and
// form start
const form = document.querySelector(".form")
const formName = document.querySelector(".form__name")
const formUsername = document.querySelector(".form__username")
const formPassword = document.querySelector(".form__password")
const formPasswordconform = document.querySelector(".form__password-conform")
const formQuantite = document.querySelector(".form__quantite")
const formTotal = document.querySelector(".form__total")
// console.log(formTotal);
// form and
// userdata start
let userData = JSON.parse(localStorage.getItem("users")) || []
// userdata and
// wrapper start
const wrapper = document.querySelector(".wrapper")
// wrapper and
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let name = formName.value
    let username = formUsername.value
    let password = formPassword.value
    let passwordConform = formPasswordconform.value
    let quanti = formQuantite.value
    let totil = formTotal.value
    if (passwordConform !== totil) {
        formTotal.style.border = "1px solid red"
        formPasswordconform.style.border = "1px solid red"
        return
    }
    formTotal.style.border = "1px solid #ddd"
    formPasswordconform.style.border = "1px solid #ddd"

    let exisUser = USERS.findIndex(user => user.username === username)
    console.log(exisUser);
    if (exisUser >= 0) {
        formUsername.style.border = "1px solid red"
        return alert("Bu username yaroqsiz")
    }
    let mewUser = {
        id: new Date().getTime(),
        name,
        username,
        password,
        passwordConform,
        quanti,
        totil

    }
    userData.push(mewUser)
    // console.log(USERS);
    form.reset();
    popupState("none");
    createCard(userData);
    localStorage.setItem("users", JSON.stringify(userData))
});

function createCard(data) {
    let tbody = document.getElementById("tbody");
    console.log(tbody);
    tbody.innerHTML = ""
    data.forEach((user) => {
        tbody.innerHTML += `
              <tr>
               <td>${user.name}</td>
               <td>${user.username}</td>
               <td>${user.password}</td>
               <td>${user.passwordConform}</td>
               <td>${user.quanti}</td>
               <td>${user.totil}</td>
              </tr>`;
      // console.log(card);
    });
  }
  createCard(userData);
  
















  alert ( "• ASSALOMU ALEKUM SAYTIMIZGA XUSH KELIBSIZ •")
  const title = document.querySelector(".title")
  
  function clock(){ 
      let date = new Date()
      let month = date.getMonth()
      let hour = date.getHours()
      let minute = date.getMinutes()
      let secunt = date.getSeconds()
      let result =[hour,minute,secunt,].map(i=>i.toString().padStart(2,"0")).join(":")
      console.log(result)
      title.textContent = result
  }
  clock()
  setInterval(()=>{
      clock()
  },1000)
  





















headerAdd.addEventListener("click", () => {
    popupState("flex")
})
btnClose.addEventListener("click", () => {
    popupState("none")
})
function popupState(state) {
    popap.style.display = state
}
