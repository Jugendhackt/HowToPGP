function setProgess(percent, speed) {
    if(!speed) {
        speed = 1;
    }
    $("#questions_progress > div").css({
        width      : percent+"%",
        transition : 'width '+speed+'s ease-in-out'
    });
}

function showQuestion(next) {
    if(next == "client") {
        $("#question_client").show(500);
        setProgess(25);
    } else if(next == "client") {
        $("#question_keys").show(500);
        setProgess(25);
    } else if(next == "browser") {
        $("#question_browser").show(500);
        setProgess(50);
    } else if(next == "keys") {
        $("#question_keys").show(500);
        setProgess(75);
    } else if(next == "level") {
        $("#question_level").show(500);
        setProgess(95);
    }
}

function selectOS(os) {
    $("#question_os").hide(500);
    $("#field_os").val(os);
    if (os == "android") {
        showQuestion("keys");
    } else{
        showQuestion("client");
    }
}

function selectKeys(keys) {
    $("#question_keys").hide(500);
    $("#field_keys").val(keys);
    showQuestion("level");
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
        showQuestion("browser");
    } else {
        showQuestion("keys");
    }
}

function selectBrowser(browser) {
    $("#question_browser").hide(500);
    $("#field_browser").val(browser);
    showQuestion("keys");
}

function submitQuestions() {
    setProgess(100, 0.5);
    $("#question_level").hide(500);
    $("#field_level").val($("#input_range").val());

    setTimeout(function() {
        $("#question_answers").submit();
    }, 450);
}
