export async function readPosts() {
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

  
//get AUTH - token

//fetch api
// have acces token
// retrevive posts