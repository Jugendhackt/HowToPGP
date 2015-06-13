function selectOS(os) {
    $("#question_os").hide(500);
    $("#question_client").show(500);
    $("#question_answers > #os").value = os;
}
function selectClient(client) {
    $("#question_client").hide(500);
    $("#question_level").show(500);
    $("#question_answers > #client").value = client;
}