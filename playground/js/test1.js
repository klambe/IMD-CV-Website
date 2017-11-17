//
// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// })
//
// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
//
//     $("[rel='tooltip']").tooltip();
//
//     $('.thumbnail').hover(
//         function(){
//             $(this).find('.caption').slideDown(250); //.fadeIn(250)
//         },
//         function(){
//             $(this).find('.caption').slideUp(250); //.fadeOut(205)
//         }
//     );
// });

$('#panelPrecios [data-toggle="tooltip"]').tooltip({
    animated: 'fade',
    placement: 'bottom',
    html: true
});