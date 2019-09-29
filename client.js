let allEmployees = [];
let salaryLimit = 200000

$(document).ready(onReady);

function onReady() {
    console.log('in onReady');
    // render a table with the `` data
    render();
    $('.js-btn-employee').on(`click`, onClickAddEmployee);
    $('.js-btn-delete').on(`click`, deleteEmployee);
}

function onAddInfo(event){
    event.preventDefault();
    const  formArray= $(this).serializeArray();
    console.table(formArray);
    const profileEmployee = {};
    for(let field of formArray){
        const objectKey = field.name;
        const objectValue = field.value

        profileEmployee[objectKey] = objectValue;
    }
    console.log(profileEmployee);

    render();
}
    function deleteEmployee() {
        $(this).parent().remove();
    }

function onClickAddEmployee() {
    const newEmployee = {
        firstname: $('.js-input-firstname').val(),
        lastname: $('.js-input-lastname').val(),
        idnumber: parseInt($('.js-input-idnumber').val()),
        jobtitle: $('.js-input-jobtitle').val(),
        annualsalary: parseInt($('.js-input-annualsalary').val())
    }
    console.log(newEmployee);
    allEmployees.push(newEmployee);
    render();

    $('.js-input-firstname').val(''),
    $('.js-input-lastname').val(''),
    $('.js-input-idnumber').val(''),
    $('.js-input-jobtitle').val(''),
    $('.js-input-annualsalary').val('')
}
function render(){
    console.log('render');
    const tableElement = $('.js-table-data')

    
        tableElement.empty();
        let salaryMonthly = 0;
        let salaryTotal = 0;
        for (let i = 0; i < allEmployees.length; i++) {
            let employee = allEmployees[i];
    salaryMonthly = employee.annualsalary / 12;
    salaryTotal =+ salaryMonthly;

            tableElement.append(`<tr id='row'>
                <td>${employee.firstname}</td>
                <td>${employee.lastname}</td>
                <td>${employee.idnumber}</td>
                <td>${employee.jobtitle}</td>
                <td>${employee.annualsalary}</td>
            </tr>`);
        
        salaryMonthly += parseInt((salaryTotal));
        }
    

    $('#totalSalaryOut').text('Total Budget: $' +salaryTotal );
        
        // $('#totalSalaryOut').append( salaryMonthly  );

        if(salaryTotal > salaryLimit){
            $('.sumTotal').css('background-color','red');
            $('.sumTotal').css('color', 'yellow');
        }
   
    }
    



