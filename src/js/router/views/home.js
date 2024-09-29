import { authGuard } from "../../utilities/authGuard";
import { readPosts } from "../../api/post/read.js"

/* const data = allPostsData.data;

const dataMap = data.map((post) => post.title)
console.log(dataMap);

const dataForEach = data.forEach(post => {
  post.title;
});
console.log(dataForEach) */

export async function home() {

  const posts = await readPosts();
  const container = document.getElementById("container");

 // container.innerHTML = `<p>test</p>`

  console.log(posts);
  const card = document.createElement("a")
  card.classList.add("postCard")
  const singlePost = posts.forEach(post => {
    console.log(post.title)
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


  

/* return `
    <div class="containerAllPosts">
      ${posts.map(post => `
        <div class="post">
          <h2>${post.title}</h2>
          <p>${post.content}</p>
        </div>
      `).join('')}
    </div>
  `; */
}
home()
authGuard();