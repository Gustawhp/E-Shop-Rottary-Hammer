const logout = document.getElementById('logout');

logout.addEventListener('click', e => {
    localStorage.removeItem("userId")
    location.reload()
})