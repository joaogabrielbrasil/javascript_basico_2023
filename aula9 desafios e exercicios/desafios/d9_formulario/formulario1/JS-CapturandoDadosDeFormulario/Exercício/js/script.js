var btn = window.document.querySelector('#submitbtn')
btn.addEventListener('click', function(event) {
    event.preventDefault()

    var name = window.document.querySelector('#name').value
    var surname = window.document.querySelector('#surname').value
    var mymail = window.document.querySelector('#mymail').value
    var birthdate = window.document.querySelector('#birthdate').value

    window.console.log([name,surname,mymail,birthdate])
})