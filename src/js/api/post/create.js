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
    const newPostData = data.data;
    console.log(newPostData);
    window.location.href = `/post/?id=${newPostData.id}`
  }
}
//createPost()

document.querySelector('form[name="createPost"]').addEventListener('submit', createPost);