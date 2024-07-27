// document.addEventListener("DOMContentLoaded", function() {
//     fetch('../auditor/auditor.html')
//         .then(response => response.text())
//         .then(data => {
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(data, 'text/html');
//             const dataContainer = doc.getElementById('form-details');

//             console.log(dataContainer.hasAttribute)
//             // document.getElementById('content').innerText = dataContainer.innerText;

//             // const dept_name = document.getElementById('dept_name').value;
//             // const auditor_name = document.getElementById('auditor_name').value;
//             // const audit_date = document.getElementById('audit_date').value;
//             // const audit_type = document.getElementById('audit_type').value;
//             // const audit_scope = document.getElementById('audit_scope').value;
//             // const audit_objectives = document.getElementById('audit_objectives').value;
//             // const findings = document.getElementById('findings').value;
//             // const recommendations = document.getElementById('recommendations').value;
//             // const action_plan = document.getElementById('action_plan').value;
//             // const completion_date = document.getElementById('completion_date').value;
//             // const status = document.getElementById('status').value;
//             // const comments = document.getElementById('comments').value;
//             // const follow_up_date = document.getElementById('follow_up_date').value;
//             // const compliance_status = document.getElementById('compliance_status').value;
//             // const risk_level = document.getElementById('risk_level').value;
        
//         });
// });

// // function details(event){
   
// //     console.log(dept_name)

// // }


document.getElementById('btn').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Auditor Report", 20, 20);

    const data = JSON.parse(localStorage.getItem('formData'));

    if (data) {
        let yPos = 30;

        for (const key in data) {
            doc.text(`${key.replace(/_/g, ' ')}: ${data[key]}`, 20, yPos);
            yPos += 10;
        }
    }

    doc.save('auditor_details_report.pdf');
});