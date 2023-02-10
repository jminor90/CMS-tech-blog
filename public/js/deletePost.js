const deleteButton = document.querySelectorAll('#deletePost')

const deletePostHandler = async (event) => {

  const ID = await event.target.getAttribute('data-id')

  const response = await fetch (`/api/post/${ID}`, {
    method: 'DELETE'
  })

  if (response.ok) {
    alert('Post Deleted!')
    document.location.replace('/')
  } else {
    alert('Post Failed to Delete')
  }
  // console.log(ID)
  // console.log('Delete Post Button')
}

// function deletePostHandler (event) {
//   const ID = event.target.getAttribute('data-id')

//   // const response = fetch (`/api/post/${ID}`, {
//   //   method: 'DELETE'
//   // })

//   // if (response.ok) {
//   //   alert('Post Deleted!')
//   //   document.location.replace('/')
//   // } else {
//   //   alert('Post Failed to Delete')
//   // }
//   console.log(ID)
//   console.log("Yo")
// }

deleteButton.forEach(e => e.addEventListener('click', deletePostHandler));