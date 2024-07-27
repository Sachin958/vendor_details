// const form = document.getElementById('loginForm');

// function saveData(event) {
//     event.preventDefault(); // Prevent form submission
    
//     // Retrieve user input
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let position = document.getElementById('position').value;
    
//     console.log("Input Data - Name:", name, "Email:", email, "Password:", password, "Position:", position);

//     // Retrieve and parse user records from localStorage
//     let user_record = JSON.parse(localStorage.getItem('users')) || [];
    
//     // Debug logging to check the data in localStorage
//     console.log("Stored User Records:", user_record);

//     let userexists = false;
//     for(let i = 0 ; i < user_record.length; i++){
//         let curr = user_record[i];
//         // console.log(curr.name);
//         if(curr.name === name && curr.email === email && curr.password === password && curr.position === position){
//             userexists = true
//         }
//     }
    
//     // Check if user exists
//     // user_record.some(user => 
//     //     user.name === name && 
//     //     user.email === email && 
//     //     user.password === password && 
//     //     user.position === position
//     // );

//     // Debug logging for user existence
//     console.log("User Exists:", userexists);

//     if (userexists) {
//         alert("Login successful");

//         // Redirect based on position
//         let value = position.toLowerCase();
//         switch (value) {
//             case 'approver':
//                 window.location.href = '../approver/approver.html';
//                 break;
//             case 'auditor':
//                 window.location.href = '../auditor/auditor.html';
//                 break;
//             case 'dealer':
//                 window.location.href = '../dealer/dealer.html';
//                 break;
//             case 'invigilator':
//                 window.location.href = '../invigilator/invi.html';
//                 break;
//             default:
//                 alert("Invalid position");
//                 break;
//         }
//     } else {
//         alert("Login failed");
//     }
// }

// form.addEventListener('submit', saveData);

// if(nextpage == 0){ 
const form = document.getElementById('loginForm');
let position = document.getElementById('position');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let value = position.value.toLowerCase();
    console.log(value);
    
    if (value === 'approver') {
        window.location.href = '../approver/approver.html';
    } else if (value === 'auditor') {
        window.location.href = '../auditor/auditor.html';
    } else if (value === 'dealer') {
        window.location.href = '../dealer/dealer.html';
    } else if (value === 'invigilator') {
        window.location.href = '../invigilator/invi.html';
    }
});

