document.getElementById("logout-btn").addEventListener("click", function (e) {
    e.preventDefault(); 
    sessionStorage.clear();
    window.location.href = "login.html";
    if (!sessionStorage.getItem("loggedIn")) {
        window.location.href = "user_login.html";
    }
    sessionStorage.setItem("loggedIn", "true");
        window.location.href = "landingPage.html";
});

let adminsee = document.getElementById("onlyadmin")


window.onload = function checkLoginStatus() {
	let loginSession = sessionStorage.getItem('loginSession');
	if ((loginSession && JSON.parse(loginSession).loggedIn && JSON.parse(loginSession).isAdmin)) {
        adminsee.style.display = '';
	}
   
}