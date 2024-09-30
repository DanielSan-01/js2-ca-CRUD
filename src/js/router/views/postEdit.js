import { authGuard } from "../../utilities/authGuard";
import { deletePost } from "../../api/post/delete.js"

authGuard();

export async function updatePostData(event) {
  event.preventDefault()
  const currentPostData = JSON.parse(localStorage.getItem("postToEdit"))
  console.log(currentPostData.id);
  const token = localStorage.getItem('token')
  const apiKey = localStorage.getItem('apiKey')
  
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const mediaURL = document.getElementById("mediaURL").value
  const mediaALT = document.getElementById("mediaALT").value

  const errorMessage = document.getElementById("error")

  const updataDataSomething = {
    "title": title,
    "body": body,
    "media": {
      "url": mediaURL,
      "alt": mediaALT
    }
  }

  const response = await fetch(`https://v2.api.noroff.dev/social/posts/${currentPostData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-Noroff-API-Key': `${apiKey}`
    },
    body: JSON.stringify(updataDataSomething)

  })
  const updatedPostData = await response.json();
  //console.log(updatedPostData);

  if (response.ok){
    alert("succsesfully updated post")
  } else {
    const errorsArray = updatedPostData.errors
    
    errorsArray.forEach((error) => {
      const errorPTag = document.createElement("p")
      errorPTag.innerText = error.message
      errorMessage.appendChild(errorPTag)
    })
  }
}
document.getElementById("editPost").addEventListener("submit", updatePostData)

//remember to add errorhandeling and validation message :)

const button = document.getElementById("deleteButton")

button.addEventListener("click", deletePost)