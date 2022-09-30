function addPosts(posts) {
  const ul = document.querySelector('.post')
  const body = document.querySelector("body")
  console.log(body)
  for(let i in users) {
    const user       = document.createElement('li')
    const userImg    = document.createElement('img')
    const userInfo   = document.createElement('div')
    const userName   = document.createElement('h2')
    const userStack  = document.createElement('h4')

    const postInfo   = document.createElement('div')
    const postTitle  = document.createElement('h3')
    const postText   = document.createElement('p')
    const postButton = document.createElement('button')
    
    postButton.setAttribute("id", "buttonView")

    userImg.classList.add("images")
    userInfo.classList.add("info")
    postInfo.classList.add("listPost")

    for(let j in posts) {
      if(users[i].id === posts[j].user) {
        userImg.src          = users[i].img
        userName.innerText   = users[i].user
        userStack.innerText  = users[i].stack
        
        postTitle.innerText  = posts[j].title
        postText.innerText   = posts[j].text
        postButton.innerText = posts[j].view

        
        postButton.addEventListener("click", () =>{
          
          const divPost     = document.createElement("div")
          const sectionPost = document.createElement("section")
          const postImg     = document.createElement('img')
          const divInfo     = document.createElement('div')
          const userName2   = document.createElement('h2')
          const userStack4  = document.createElement('h4')
          const postButton1 = document.createElement('button')
          
          const postInfo1   = document.createElement('div')
          const postTitle1  = document.createElement('h3')
          const postText1   = document.createElement('p')
          

          postButton1.setAttribute("id", "close")

          divPost.setAttribute("id", "divModal")

          sectionPost.classList.add("container-modal")
          postImg.classList.add("images")
          divInfo.classList.add("info")
          postInfo1.classList.add("listPost")

          postImg.src          = users[i].img
          userName2.innerText  = users[i].user
          userStack4.innerText = users[i].stack
          
          postTitle1.innerText  = posts[j].title
          postText1.innerText   = posts[j].text
          postButton1.innerText = posts[j].close

          divPost.append(sectionPost)
          sectionPost.append(postImg, divInfo, postInfo1)
          divInfo.append(userName2, userStack4)
          postInfo1.append(postTitle1, postText1, postButton1)
          body.appendChild(divPost)

          const buttonClose = document.getElementById("close")
          buttonClose.addEventListener("click", () => {
            const modalX = document.getElementById("divModal")
            modalX.remove()
          })

        })


        ul.append(user)
        user.append(userImg, userInfo, postInfo)
        userInfo.append(userName, userStack)
        postInfo.append(postTitle, postText, postButton)
      }
    }
  }
}

addPosts(posts)
