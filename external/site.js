function selectOS(os) {
    $("#question_os").hide(500);
    $("#question_client").show(500);
    $("#field_os").val(os);
}
function selectClient(client) {
    $("#question_client").hide(500);
    $("#field_client").val(client);
    if (client == "browser") {
        if($("#field_os").val() == "windows") {
            $("#question_browser-ie").show(0);
        } else {
            $("#question_browser-ie").hide(0);
        }
        $("#question_browser").show(500);
    } else {
        $("#question_level").show(500);
    }
}
function selectBrowser(browser) {
    $("#question_browser").hide(500);
    $("#question_level").show(500);
    $("#field_browser").val(browser);
}
function submitQuestions() {
    $("#question_level").hide(500);
    $("#field_level").val($("#input_range").val());

    setTimeout(function() {
        $("#question_answers").submit();
    }, 450);
}
function switchTo(href) {
    $("#content").hide(500);

    setTimeout(function() {
        window.location.href = href;
    }, 600);
}
function showInfographic() {
    $('#main_img').show(500);
    $('#showmore').hide(500);
}