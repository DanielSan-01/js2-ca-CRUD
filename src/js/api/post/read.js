//export async function readPost(id) {}

//export async function readPosts(limit = 12, page = 1, tag) {}

//export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
//const container = document.getElementById('displayData')


export async function readPosts() {
  //const token = localStorage.getItem('token')
  //const apiToken = localStorage.getItem('apiKey')
  const token = localStorage.getItem('token')
  const apiKey = localStorage.getItem('apiKey')
  
  const response = await fetch(`https://v2.api.noroff.dev/social/posts`, {

    method: 'GET',
    headers : {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-Noroff-API-Key': `${apiKey}`
      //get autoh token and key inside headers
    }, 
  });
  const allPostsData = await response.json();
  //console.log(allPostsData);
  //console.log(allPostsData.data); 

  return allPostsData.data.slice(0,12)
}

readPosts()


  
  
  /* if (response.ok) {
    const displayData = document.querySelector('#displayData')
    displayData.innerHTML = `
   <div>
      <h1>${allPostsData.data.title}</h1>
      <p></p>
    </div>
    `
  } */
  //const postsData = await response.json();
  //console.log(postsData);

  //const accessToken = await response.json();
  //const allPosts = await response.json();

  //get AUTH - token



/* 
 
  const response = await fetch(`https://v2.api.noroff.dev/social/posts`, {

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

 */
//fetch api
// have acces token
// retrevive posts