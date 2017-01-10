
$(function () {
    console.log("Datepicker!"); 
    $('.datefrom').datepicker({
        format: "dd MM yyyy"
    });

    $('.dateto').datepicker({
        format: "dd MM yyyy"
    });
});