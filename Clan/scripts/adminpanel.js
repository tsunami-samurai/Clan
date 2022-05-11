let users = JSON.parse(localStorage.getItem('users')) || [];
  const userData = {
    userNames: nickname,
    email: email,
    password: password,

  };   
  users.push(userData);
  localStorage.setItem('users', JSON.stringify(users));

    reread();
    function reread(){
    let adminthing = document.getElementById("adminthing");
    adminthing.innerHTML="admin";
    }
    function onread() {
};
 
           