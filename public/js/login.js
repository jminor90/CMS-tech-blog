const loginFormHandler = async (event) => {
  event.preventDefault();
    console.log("Form Submitted")
  const userName = document.querySelector('#userName-login').value.trim();
  const userPassword = document.querySelector('#userPassword-login').value.trim();

  if (userName && userPassword) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ userName, userPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(userName)
    console.log(userPassword)

    if (response.ok) {
      alert('Succesfully logged in!')
      document.location.replace('/');
      
    } else {
      alert('Failed to log in.');
    }
  }
};


document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

  