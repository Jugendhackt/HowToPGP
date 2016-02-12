function setProgess(percent, speed) {
    if(!speed) {
        speed = 1;
    }
    $("#questions_progress > div").css({
        width      : percent+"%",
        transition : 'width '+speed+'s ease-in-out'
    });
}

function selectOS(os) {
    $("#question_keys").hide(500);
    $("#question_os").hide(500);
    if (os != "android") {
    $("#question_client").show(500);
    }
    else{
        $("#question_keys").show(500);
        setProgess(90);
    }
    $("#field_os").val(os);
    setProgess(30);
}
function selectKeys(keys) {
    $("#question_keys").hide(500);
    $("#question_level").show(500);
    $("#field_keys").val(keys);
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
        setProgess(60);
    } else {
        $("#question_level").show(500);
        setProgess(90);
    }
    
}
function selectBrowser(browser) {
    $("#question_browser").hide(500);
    $("#question_level").show(500);
    $("#field_browser").val(browser);
    setProgess(90);
}
function submitQuestions() {
    $("#question_level").hide(500);
    $("#field_level").val($("#input_range").val());
    setProgess(100,0.5);

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
