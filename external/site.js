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
    $("#field_level").val($("#input_range").val());
    
    setTimeout(function() {
        $("#question_answers").submit();
    }, 450);
}
function switchTo(href) {
    $("#content").hide(500);
    
    setTimeout(function() {
        window.location.href=href;
    }, 600);
}
$(window).scroll(function(){
  var sticky = $('h1'),
      scroll = $(window).scrollTop();

  if (scroll >= 75) sticky.addClass('scroll');
  else sticky.removeClass('scroll');
});