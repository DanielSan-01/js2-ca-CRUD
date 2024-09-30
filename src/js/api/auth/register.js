export async function register(event) {
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

  const errorMessage = document.getElementById("error")
  errorMessage.innerHTML = ""

  const data = await response.json()

  if(data.errors) {
    const errorsArray = data.errors
    errorsArray.forEach((error) => {
      const errorPTag = document.createElement("p")
      errorPTag.innerText = error.message
      errorMessage.appendChild(errorPTag)
    })
  } else {
    alert("User succssesfully registered, please login")
    window.location.href = "/auth/login/"
  }
}

document.querySelector('form[name="register"]').addEventListener('submit', register);