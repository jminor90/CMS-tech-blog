const newPostHandler = async (event)=> {
  event.preventDefault()

  const postTitle = document.querySelector('#postTitle').value.trim();
  const postDescription = document.querySelector('#postDescription').value.trim();

  if (postTitle && postDescription) {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({postTitle, postDescription}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create post, did you include Title and Description?')
    }
  }

  console.log("postTitle is: "+ postTitle)
  console.log("postDescription is: "+ postDescription)
  console.log("newPostHandler")
  console.log(req.session)
};

document
  .querySelector('#newPost-form')
  .addEventListener('submit', newPostHandler);