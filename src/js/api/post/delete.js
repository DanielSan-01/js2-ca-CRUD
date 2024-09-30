export async function deletePost() {
  /* const queryParams = new URLSearchParams(window.location.search)
  const postID = queryParams.get("id") */
  const currentPostData = JSON.parse(localStorage.getItem("postToEdit"))

  const token = localStorage.getItem('token')
  const apiKey = localStorage.getItem('apiKey')

  const errorMessage = document.getElementById("error")
  errorMessage.innerHTML = ""

  const response = await fetch(`https://v2.api.noroff.dev/social/posts/${currentPostData.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'X-Noroff-API-Key': `${apiKey}`
      },
    }) 
    
    if (response.ok){
      alert("succsesfully deleted post")
      window.location.href = "/";
    } else {
    const data = await response.json();
    console.log(data);
    if (data.errors){
      const errorsArray = data.errors
      errorsArray.forEach((error) => {
        const errorPTag = document.createElement("p")
        errorPTag.innerText = error.message
        errorMessage.appendChild(errorPTag)
      })
    } else {
      const errorPTag = document.createElement("p")
      errorPTag.innerText = "An error occurred, refresh and please try again."
      errorMessage.appendChild(errorPTag)
    }
  }
}
