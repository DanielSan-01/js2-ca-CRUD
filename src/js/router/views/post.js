//alert("Single Post Page");

//fetch single post with spesific ID

export async function singlePost() {
  const token = localStorage.getItem('token')
  const apiKey = localStorage.getItem('apiKey')
  const queryParams = new URLSearchParams(window.location.search)
  const postID = queryParams.get("id")
  //console.log(postID);

  const response = await fetch(`https://v2.api.noroff.dev/social/posts/${postID}`, {
    method: 'GET',
    headers : {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-Noroff-API-Key': `${apiKey}`
    }, 
  });
  const singlePostData = await response.json();
  
  const data = singlePostData.data
  //console.log(data.title);
  /* const editButton = document.getElementById("editButton")
  const ancorTag = document.createElement("a")
  ancorTag.innerText = "Edit"
  ancorTag.href = `/post/edit/`
  editButton.append(ancorTag) */


  const container = document.getElementById("displaySinglePost");

  const title = document.createElement("h2")
  const body = document.createElement("p")
  const media = document.createElement("img")

  title.innerText = `${data.title}`
  body.innerText = `${data.body}`
  if (data.media != null) {
    media.src = data.media.url;
    media.classList.add("singlePostIMG")
  }
  container.append(title, body, media);

  const buttonDiv = document.getElementById("editButton")
  const editButton = document.createElement("a")
  editButton.href = `/post/edit/`
  editButton.innerText = "Edit"
  editButton.addEventListener("click", () => {
    localStorage.setItem("postToEdit", JSON.stringify({id:postID, ...data}))

  });
  buttonDiv.append(editButton);
}

singlePost()
