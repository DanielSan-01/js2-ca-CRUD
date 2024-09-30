//import  { API_BASE_URL } from "../../../config"
import { getKey } from './key.js'

export async function login(event) {
  event.preventDefault();
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value
  const errorMessage = document.getElementById("error")
  errorMessage.innerHTML = ""

  const response = await fetch(`https://v2.api.noroff.dev/auth/login`, {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({email, password})
  });
  const loginData = await response.json();

  if (response.ok) {
    localStorage.setItem('token', loginData.data.accessToken);
    await getKey();
    window.location.href = "/"
  } else if (loginData.errors) {
      const errorsArray = loginData.errors
      errorsArray.forEach((error) => {
        const errorPTag = document.createElement("p")
        errorPTag.innerText = error.message
        errorMessage.appendChild(errorPTag)
      });
  } else {
    const errorPTag = document.createElement("p")
    errorPTag.innerText = "An error occurred, refresh and please try again."
    errorMessage.appendChild(errorPTag)
  }

}

document.querySelector('form[name="login"]').addEventListener('submit', login);


//recive login info
// fetch api loginurl
//https://v2.api.noroff.dev//auth/create-api-key
// request method POST and request in JSON format
