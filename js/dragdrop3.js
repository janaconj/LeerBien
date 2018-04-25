$(function() {
    $("#done1").hide();
    $("#done2").hide();
    $("#done3").hide();
    $("#done4").hide();
    $("#done5").hide();
    $("#done6").hide();
    
    $("#draggable2").hide();
    $("#draggable3").hide();
    $("#draggable4").hide();
    $("#draggable5").hide();
    $("#draggable6").hide();
    
    $("#draggable1").draggable({start: function(){}}, {helper: 'clone'});
    $("#draggable2").draggable({start: function(){}}, {helper: 'clone'});
    $("#draggable3").draggable({start: function(){}}, {helper: 'clone'});
    $("#draggable4").draggable({start: function(){}}, {helper: 'clone'});
    $("#draggable5").draggable({start: function(){}}, {helper: 'clone'});
    $("#draggable6").draggable({start: function(){}}, {helper: 'clone'});
    
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
                $("#draggable5").show();
            }
        }
    });
    
    $("#droppable5").droppable({
        drop: function(event, ui) {
            var id = $(ui.draggable).attr("id");
            if (id == 'draggable5' ){
                $("#audio-drop5")[0].play();
                $("#no5").hide();
                $("#done5").show();
                $("#draggable5").hide();
                $("#draggable6").show();
            }
        }
    });
    
    $("#droppable6").droppable({
        drop: function(event, ui) {
            var id = $(ui.draggable).attr("id");
            if (id == 'draggable6' ){
                $("#audio-drop6")[0].play();
                $("#no6").hide();
                $("#done6").show();
                $("#draggable6").hide();
            }
        }
    });
    
});