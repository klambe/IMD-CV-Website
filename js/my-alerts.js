$('.input-type-email').on('click', function () {
    swal({
        title: 'Input email address',
        input: 'email',
        inputPlaceholder: 'Enter your email address',
    }).then(function (email) {
        swal({
            type: 'success',
            html: 'Entered email: <strong>' + email + '</strong>'
        })
    }).catch(swal.noop)
});

$('.submit-my-form').on('click', function () {
    swal({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Submit!'
    }).then(function () {
        swal('Submitted!', 'Thank you!', 'success')
    }).catch(swal.noop)
});


$('.input-type-multiple').on('click', function () {
    swal({
        title: 'Contact Form',
        html:
        '<input id="swal-input1" class="swal2-input" placeholder="Enter Email">' +
        '<input id="swal-input2" class="swal2-textarea" placeholder="Enter Message">',
        focusConfirm: false,
        preConfirm: function () {
            return new Promise(function (resolve) {
                resolve([
                    $('#swal-input1').val(),
                    $('#swal-input2').val()
                ])
            })
        }
    }).then(function (result) {
        swal(
            'Submitted!',
            'Thank you form has been submitted.',
            'success'
        )
    }).catch(swal.noop)
});

var fxn = function() {
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    hours = n.getHours();
    min = n.getMinutes();
    sec = n.getSeconds();
    document.getElementById("time").innerHTML = hours + ":" + min + ":" + sec;
}
setInterval(fxn, 1000);

document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
