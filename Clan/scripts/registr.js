let users = JSON.parse(localStorage.getItem('users')) || [];
let fInds;
 
function register() {
    let low = 0, up = 0, number = 0;
    let nickname = document.getElementById('nickname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
let output =document.getElementById('output');

    for (let i = 0; i < password.length; i++) {
        let c = password[i];
        if (c == c.toUpperCase()) {
            up = 1;
        }
        if (c == c.toLowerCase()) {
            low = 1;
        }
        if (!isNaN(c * 1))
            number = 1;
    }
    let ans = "";
    if (low == 0)
        ans += "Lower case letter missed / \n";
    if (up == 0)
        ans += "Upper case letter missed / \n";
    if (number == 0)
        ans += "Number missed \n";
    if (ans !== "")
        output.innerHTML = ans;
        if(low==1 && up==1 && number==1 ) {
        alert("Registration successfull");
        document.getElementById('nickname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    
  const userData = {
    userNames: nickname,
    email: email,
    password: password,

  };   
  users.push(userData);
  localStorage.setItem('users', JSON.stringify(users));
}
};



 function onlogin(fInds){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
   let admin = "admin";
   let adminemail= "admin";
   
  
    for (let i = 0; i < users.length; i++ ) {

        if(users[i].password == fInds){
            alert("blocked");
        }

        if (users[i].password == password && (!(users[i].password==admin))   )           {
           alert(fInds);
                     
            break; 
            
            
        }
        else if (password==admin && (!(password === '')) && adminemail==email){
            window.location.href = 'adminpanel.html';
            
            break;
        }
        else {
            let j = i;
            if (j === users.length-1) {
                alert('no such user exists!');
              break;
            }
          }       
    }      
  };
  let usersList = document.querySelector('.userss');

function fillUsers() {
    usersList.replaceChildren();
    let ind = 0;
    users.forEach(element => {
        ind++;
        let block = document.createElement('div');

        let item = document.createElement('p');
        item.innerHTML = '<fieldset>username: ' + element.userNames + ', email: ' + element.email+ '</fieldset>';
        block.classList.add("ps");
        
        let operations = document.createElement('div');

        let changeButton = document.createElement('div');
        changeButton.innerHTML = '<div  class="change" tittle="change" alt="change"><i class="fas fa-user-cog"></i></div>';

        changeButton.onclick = () => {
            changeOpen(element);
        };
        
        let deleteButton = document.createElement('div');
        deleteButton.innerHTML = '<div class="delete" tittle="delete" alt="удалить"><i class="fas fa-user-minus"></i></div>';
        
        let blockuserbutton = document.createElement('div');
        blockuserbutton.innerHTML = '<div  class="block" tittle="block" alt="block"><i class="fas fa-ban"></i></div>';


        blockuserbutton.onclick = () => {
            blockuser(element);
        };

        deleteButton.onclick = () => {
            onDelete(element);
        };
        
        operations.appendChild(changeButton);
        operations.appendChild(deleteButton);
        operations.appendChild(blockuserbutton);
        
        
        block.appendChild(item);
        block.appendChild(operations);
       
        
        usersList.appendChild(block);
    });
}

let savedElement;
function changeOpen(element) {
    let form = document.getElementById('change');
    form.style.display = "block";
    let username = document.getElementById('change-username');
    let name = document.getElementById('change-name');
    username.setAttribute('value', element.userNames);
    name.setAttribute('value', element.email);
    savedElement = element;
}
function onSave() {
    let form = document.getElementById('change');
    form.style.display = "none";
    
    let username = document.getElementById('change-username');
    let name = document.getElementById('change-name');

    let fInd;
    for (let i = 0; i < users.length; i++) {
        if (users[i].userNames == savedElement.userNames) {
            fInd = i;
            break;
        }
    }
    users[fInd].userNames = username.value;
    users[fInd].email = name.value;
    localStorage.setItem('users',JSON.stringify(users));
    fillUsers();
}
function blockuser(element) {
 let fInds;
   
    for (let i = 0; i < users.length; i++) {
        if (users[i].userNames == element.userNames) {
             fInds=users[i].password;
             alert(fInds);
             window.location.href = 'registr.html';
            
            break;  
 
        }
    }
    


}


function onDelete(element) {
    let fInd;
    for (let i = 0; i < users.length; i++) {
        if (users[i].userNames == element.userNames) {
            fInd = i;
            
            break;
        }
    }
    users.splice(fInd, 1);
    localStorage.setItem('users',JSON.stringify(users));
    fillUsers();    
}
function addnewuser(){
    let addinguser = document.getElementById('add');
    addinguser.style.display = "block";


}

function onAdd() {
    let addinguser = document.getElementById('add');
    addinguser.style.display = "none";
    let username = document.getElementById('add-username').value;
    let name = document.getElementById('add-name').value;
    document.getElementById('add-username').value = '';
    document.getElementById('add-name').value = '';
    
    if (name !== '' && username !== ''){
        users.push({userNames: username, email: name}), fillUsers();
        localStorage.setItem('users',JSON.stringify(users));
    }
    else
        alert('enter all data');
}
fillUsers();