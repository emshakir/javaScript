$(document).ready(function() {
    $('#dialog-btn').on('click', () => {
        $('#dialog').dialog({
            title: "Consultant Subscription",
            width: 1200,
            height: 400,
            modal: true,
            closeText: "hide"
        });
    });
});