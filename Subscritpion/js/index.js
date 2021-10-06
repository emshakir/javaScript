$(document).ready(function () {
    $('#dialog-btn').on('click', () => {
        $('#dialog').dialog({
            title: 'Consultant Subscription',
            width: 900,
            height: 250,
            modal: true,
            closeText: 'hide',
        });
    });

    var S = '';
    $('.inputTag').keypress(function (e) {
        var input = e.key;
        S += input;
        var dInput = this.value;
        console.log(dInput);
    });

    /*$('.inputTag').keypress(() => {
        var input = $(this).val();
        console.log(input);
        console.log();
    });*/

    /* $('.inputTag').on('keypress', (e) => {
        var input = $(this).val();
        console.log(input);
        console.log();
    });*/
});
