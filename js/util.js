$(document).ready(function() {

        $(".button1").click(function(){
            $("#txt").toggleClass("bold");
    }); 
        $(".button2").click(function(){
            $("#txt").toggleClass("italic");
    }); 
        $(".button3").click(function(){
            $("#txt").toggleClass("underlined");
    }); 
        $("#st").change(function() {
        var x = $("#st").val();
        $('#txt').css("fontFamily",x);
    });
        $("#sr").change(function() {
        var x = $("#sr").val();
        x=x+'px';
        $('#txt').css("fontSize",x);
    });
});
