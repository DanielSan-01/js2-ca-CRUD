import { authGuard } from "../../utilities/authGuard";
import { readPosts } from "../../api/post/read.js"
import { onLogout } from "../../ui/auth/logout.js";

const btn = document.getElementById("logoutBtn")
btn.addEventListener("click", onLogout)

export async function home() {
  const posts = await readPosts();
  //console.log(posts);
  const container = document.getElementById("container");
  const singlePost = posts.forEach(post => {
    const card = document.createElement("a")
    card.classList.add("postCard")

    console.log(post.id)
    card.href = `./post/?id=${post.id}`
    const cardTitle = document.createElement("h2")
    cardTitle.innerText = `${post.title}`
    const cardBody = document.createElement("p")
    cardBody.innerText = `${post.body}`
    const cardMedia = document.createElement("img")
    if (post.media != null){
      cardMedia.src = post.media.url
      cardMedia.classList.add("mediaCard")
    }
    card.append(cardTitle, cardBody, cardMedia)
    container.append(card)
    //console.log(post.id);
  });
}

home()
authGuard();