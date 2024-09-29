export async function createPost(event) {
  event.preventDefault()


  const token = localStorage.getItem('token')
  const apiKey = localStorage.getItem('apiKey')


  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const mediaURL = document.getElementById("mediaURL").value
  const mediaALT = document.getElementById("mediaALT").value

  const media = mediaURL ? {url: mediaURL, alt: mediaALT} : null;

  const postData = {
    title,
    body
  }
  if (media){
    postData.media=media;
  }

  const response = await fetch(`https://v2.api.noroff.dev/social/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-Noroff-API-Key': `${apiKey}`
    },
    body: JSON.stringify(postData)
  })

  const newPostData = await response.json()
  console.log(newPostData);

  if (response.ok) {
    console.log("Sucsessfully created new post", newPostData);
  } else {
    console.log('New post failed', newPostData);
  }


}
//createPost()

document.querySelector('form[name="createPost"]').addEventListener('submit', createPost);