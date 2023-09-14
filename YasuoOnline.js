const userData = {};

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const heroName = document.getElementById('singupHeroname').value;
    const email = document.getElementById('singupEmail').value;
    const password = document.getElementById('singupPassword').value;

    userData[email] = { heroName, email, password};
    alert ('SingUp successful!')

});


    document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = userData[email];

    if (user && user.password === password) {
        alert('Login Successful!')
    } else {
        alert('Invalid email or ppassword. Please try again.')
    }
    
    });