function selectOS(os) {
    $("#question_os").hide(500);
    $("#question_client").show(500);
    $("#field_os").val(os);
}
function selectClient(client) {
    $("#question_client").hide(500);
    $("#question_level").show(500);
    $("#field_client").val(client);
}
function submitQuestions() {
    $("#question_level").hide(500);
    $("#field_level").val("");
    
    setTimeout(function() {
        $("#question_answers").submit();
    }, 800);
}