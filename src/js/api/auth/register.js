export async function register( event) {
  event.preventDefault();
  const name = document.querySelector("#name").value
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value
  const response = await fetch(`https://v2.api.noroff.dev/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({name, email, password})
  })
  const registerData = await response.json()
  console.log(registerData);

  if (response.ok) {
    localStorage.setItem('token', registerData.data.accessToken);
    console.log('Register successful', registerData);

  } else {
    console.log('Register Failed', registerData);
  }

}

document.querySelector('form[name="register"]').addEventListener('submit', register);