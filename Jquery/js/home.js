$(function() {
    $("#dialog").dialog();
});
$(function() {
    $(document).tooltip();
});
$("#send").on("click", function() {
    alert("bạn đã gửi thành công!");
});
$(".text-menu").on("click", function(e) {
    $("body").toggleClass("open");
    e.preventDefault();
});