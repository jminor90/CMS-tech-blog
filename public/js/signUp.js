const signUpHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#userName').value.trim();
  const userPassword= document.querySelector('#userPassword').value.trim();
  const userPasswordConfirm= document.querySelector('#userPasswordConfirm').value.trim();

  console.log(userName)
  console.log(userPassword)
  console.log(userPasswordConfirm)

  if (userPassword === userPasswordConfirm) {
    //continue logic
    const response = await fetch ('/api/users', {
      method: 'POST',
      body: JSON.stringify({userName, userPassword}),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      alert('Succesfully signed up, returning to homepage.')
      document.location.replace('/')
    } else {
      alert('Failed to sign up')
    };

  } else {
    alert("Passwords do not match, please try again")
    return
  };

}


document.querySelector('.form-register').addEventListener('submit',signUpHandler)