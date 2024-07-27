// function LocalDatastore(event){
//     event.preventDefault()

//     const dept_name = document.getElementById('dept_name').value;
//     const auditor_name = document.getElementById('auditor_name').value;
//     const audit_date = document.getElementById('audit_date').value;
//     const audit_type = document.getElementById('audit_type').value;
//     const audit_scope = document.getElementById('audit_scope').value;
//     const audit_objectives = document.getElementById('audit_objectives').value;
//     const findings = document.getElementById('findings').value;
//     const recommendations = document.getElementById('recommendations').value;
//     const action_plan = document.getElementById('action_plan').value;
//     const completion_date = document.getElementById('completion_date').value;
//     const status = document.getElementById('status').value;
//     const comments = document.getElementById('comments').value;
//     const follow_up_date = document.getElementById('follow_up_date').value;
//     const compliance_status = document.getElementById('compliance_status').value;
//     const risk_level = document.getElementById('risk_level').value;
//     // const dept_name = document.getElementById('dept_name')
//     if (dept_name && auditor_name && audit_date && audit_type && audit_scope && audit_objectives && findings && recommendations && action_plan &&completion_date && status &&comments && follow_up_date && compliance_status && risk_level) {
//         // Generate a unique ID for this report
//         const id = Date.now();
//         const report = { dept_name , auditor_name , audit_date , audit_type , audit_scope , audit_objectives , findings , recommendations , action_plan , completion_date , status , comments , follow_up_date , compliance_status , risk_level };

//         // Save report to localStorage
//         let reports = JSON.parse(localStorage.getItem('reports')) || [];
//         reports.push(report);
//         localStorage.setItem('reports', JSON.stringify(reports));

//         // Clear the form
//         document.getElementById('reportForm').reset();

//         // Display the updated list of reports
//         displayReports();
//     } else {
//         alert('Please fill out all fields.');
//     }

// }

// function displayReports() {
//     const reportsList = document.getElementById('reportsList');
//     reportsList.innerHTML = '';

//     let reports = JSON.parse(localStorage.getItem('reports')) || [];
//     reports.forEach(report => {
//         const reportDiv = document.createElement('div');
//         reportDiv.innerHTML = `
//             <h3>${report.title}</h3>
//             <p>${report.content}</p>
//             <button onclick="editReport(${report.id})">Edit</button>
//         `;
//         reportsList.appendChild(reportDiv);
//     });
// }






    // const dept_name = document.getElementById('dept_name').value;
    // const auditor_name = document.getElementById('auditor_name').value;
    // const audit_date = document.getElementById('audit_date').value;
    // const audit_type = document.getElementById('audit_type').value;
    // const audit_scope = document.getElementById('audit_scope').value;
    // const audit_objectives = document.getElementById('audit_objectives').value;
    // const findings = document.getElementById('findings').value;
    // const recommendations = document.getElementById('recommendations').value;
    // const action_plan = document.getElementById('action_plan').value;
    // const completion_date = document.getElementById('completion_date').value;
    // const status = document.getElementById('status').value;
    // const comments = document.getElementById('comments').value;
    // const follow_up_date = document.getElementById('follow_up_date').value;
    // const compliance_status = document.getElementById('compliance_status').value;
    // const risk_level = document.getElementById('risk_level').value;


    // document.querySelector('form').addEventListener('submit' , function(event){
    //     event.preventDefault();
    //     const fd = new FormData(form)
    //     console.log(fd);

    // })

    // const scriptURL = 'https://script.google.com/macros/s/AKfycbzAbSzqqTdxswLYXT4LRJNdM1ynWBCpd3s76ycj3cm2KqytWwkqxJlwtUscncSC-GaPOA/exec'
    // const form = document.forms['google-sheet'] 

    // form.addEventListener('submit' , e =>{
    //     e.preventDefault()
    //     fetch(scriptURL , {method : 'POST' , body: new FormData(form)})
    //     .then(response => alert("Thanks for contacting us !!!!"))
    //     .catch(error => console.error("Error" , error.message))
    // })

    const formE1 = document.querySelector('.form')

    formE1.addEventListener('submit' , event =>{
        event.preventDefault();
        const formData = new FormData(formE1);
        const data = Object.fromEntries(formData);
        // console.log(data);
        localStorage.setItem('formData' , JSON.stringify(data));

        fetch('https://reqres.in/api/users' , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then(res =>res.json())
        .then(data => alert("Provided Details are save"))
        .catch(error => console.log(error))
    });