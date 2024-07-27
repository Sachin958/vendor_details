const submit = document.getElementById('registerform')

submit.addEventListener('submit' , function(event){
    let pass = document.getElementById('password')
    let cpass = document.getElementById('cpass')

    // if(pass.value != cpass){
    //     alert("Password do not match");
    //     // event.preventDefault();
    //     return;
    // }
})



// add data to google sheet
    // window.addEventListener("DOMContentLoaded", function() {
    //     const yourForm = document.getElementById('registerform');
    //     yourForm.addEventListener("submit", function(e) {
    //         e.preventDefault();
    //         const data = new FormData(yourForm);
    //         const action = e.target.action;
    //         fetch(action, {
    //             method: 'POST',
    //             body: data,
    //         }).then(() => {
    //             window.location.replace('https://script.google.com/macros/s/AKfycbwPTGXUOPZaKYc_pszAtom03s8H0PxFuC1gBZhpkz5c9Tjj0u5VpdUL2FyrpJgMcn7H/exec')
    //         })
    //     })
    // }); 

    

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzaJI0oz4uJ0pnL3Om-mgg0QV_t-u60VMMmI1MKqb-5hsTbztKYzmK0ufNr2ru5yUBC/exec';
    const form = document.forms['google-sheet']

    form.addEventListener('submit' , e=>{
        e.preventDefault()
        fetch(scriptURL , {
            method: 'POST' , body: new FormData(form)
        })
        .then(response => alert("Thanks for Contacting us.."))
        .catch(error => console.log('Error!' , error.message))
    })

    