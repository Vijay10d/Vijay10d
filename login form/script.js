// document.getElementById("login").addEventListener("submit",function(event){
//     event.preventDefault()
    

//     var username = document.forms["Login form"]["username"].value
//     var password = document.form["login form"]["password"].value

//     if (username.trim() === '' || password.trim() === ''){
//     alert("username and password id empty")
//     return false
//     }

//     if(password.length<8){
//         alert("password must 8 character")
//     }
//     alert("login successfully")
// })


const usersArray = [
    {
        id:'2',
        username:'xxxxx',
        email:'xxx@gmail.com',
        age:25,
        isActive:'true',

    },
    {
        id:'9',
        username:'sssss',
        email:'ssss@gmail.com',
        age:25,
        isActive:'false',
    },
    {
        id:'5',
        username:'sssss',
        email:'ssss@gmail.com',
        age:25,
        isActive:'true',
    }
    
]

console.log(usersArray)
console.table(usersArray)