//import  { API_BASE_URL } from "../../../config"
import { getKey } from './key.js'

export async function login(event) {
  event.preventDefault();
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value
  console.log(email);

  const response = await fetch(`https://v2.api.noroff.dev/auth/login`, {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({email, password})
  });

  const loginData = await response.json();
  console.log(loginData.data);

  if (response.ok) {
    localStorage.setItem('token', loginData.data.accessToken);
    console.log(loginData.data.accessToken);
    await getKey();
    console.log('Login successful', loginData);

  } else {
    console.log('Login Failed', loginData);
  }

}

document.querySelector('form[name="login"]').addEventListener('submit', login);


//recive login info
// fetch api loginurl
//https://v2.api.noroff.dev//auth/create-api-key
// request method POST and request in JSON format
