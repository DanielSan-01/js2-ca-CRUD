export async function getKey() {
  const token = localStorage.getItem("token");
  console.log(token);

  const response = await fetch(`https://v2.api.noroff.dev/auth/create-api-key`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,

      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: "API Key"
    }),
  });
  const apiKeyData = await response.json();
  console.log(apiKeyData.data.key);
  
  if (response.ok) {
    localStorage.setItem('apiKey', apiKeyData.data.key);
    console.log('Key successful', apiKeyData);
  } else {
    console.log('Failed to create API key', apiKeyData);
  }
  return apiKeyData;   
}









// document.querySelector('form[name="login"]').addEventListener('submit', getKey);


/*   const name = document.querySelector("#name").value
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value */
  


//https://v2.api.noroff.dev//auth/create-api-key

// retreve info from form
// send info to api in order to create 
// recive access token
// valid user + valid token allows you to login
// retrive token from local storage