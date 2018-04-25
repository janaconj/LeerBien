$(function() {
    //var b = 0;
    $("#done1").hide();
    $("#done2").hide();
    $("#done3").hide();
    $("#done4").hide();
    
    $("#draggable2").hide();
    $("#draggable3").hide();
    $("#draggable4").hide();  
    
    $("#draggable1").draggable({helper: 'clone'});
    $("#draggable2").draggable({helper: 'clone'});
    $("#draggable3").draggable({helper: 'clone'});
    $("#draggable4").draggable({helper: 'clone'});
    
    $("#droppable1").droppable({
        drop: function(event, ui) {
            var id = $(ui.draggable).attr("id");
            if (id == 'draggable1' ){
                $("#audio-drop1")[0].play();
                $("#no1").hide();
                $("#done1").show();
                $("#draggable1").hide();
                $("#draggable2").show();
            }
        }
    });
    
    $("#droppable2").droppable({
        drop: function(event, ui) {
            var id = $(ui.draggable).attr("id");
            if (id == 'draggable2' ){
                $("#audio-drop2")[0].play();
                $("#no2").hide();
                $("#done2").show();
                $("#draggable2").hide();
                $("#draggable3").show();
            }
        }
    });
    
    $("#droppable3").droppable({
        drop: function(event, ui) {
            var id = $(ui.draggable).attr("id");
            if (id == 'draggable3' ){
                $("#audio-drop3")[0].play();
                $("#no3").hide();
                $("#done3").show();
                $("#draggable3").hide();
                $("#draggable4").show();
            }
        }
    });
    
    $("#droppable4").droppable({
        drop: function(event, ui) {
            var id = $(ui.draggable).attr("id");
            if (id == 'draggable4' ){
                $("#audio-drop4")[0].play();
                $("#no4").hide();
                $("#done4").show();
                $("#draggable4").hide();
            }
        }
    });
    
});