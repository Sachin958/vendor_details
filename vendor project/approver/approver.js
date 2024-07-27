const viewreport = document.getElementById('viewreport')

viewreport.addEventListener('click' , function(event){
    event.preventDefault()
    window.location.href = '../auditorDetails.html'
})


const form = document.getElementById('form-sub');
form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const aprover = document.getElementById('approval_status')
    console.log(aprover.value)
        if(aprover.value === 'okay' ){
            localStorage.clear();
            alert("approved")
        }else if(aprover.value == 'Not Okay'){
            
        }else if(aprover.value === 'Discuss'){

}
})