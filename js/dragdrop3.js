$(function() {
    
    $("#draggable2").hide();
    $("#draggable3").hide();
    $("#draggable4").hide();
    $("#draggable5").hide();
    $("#draggable6").hide();
    
    $("#draggable1").draggable({start: function(){}});
    $("#draggable2").draggable({start: function(){}});
    $("#draggable3").draggable({start: function(){}});
    $("#draggable4").draggable({start: function(){}});
    $("#draggable5").draggable({start: function(){}});
    $("#draggable6").draggable({start: function(){}});
    
    $("#droppable1").droppable({
        drop: function(event, ui) {
            $("#audio-drop1")[0].play();
            $("#draggable2").show();
        }
    });
    
    $("#droppable2").droppable({
        drop: function(event, ui) {
            $("#audio-drop2")[0].play();
            $("#draggable3").show();
        }
    });
    
    $("#droppable3").droppable({
        drop: function(event, ui) {
            $("#audio-drop3")[0].play();
            $("#draggable4").show();
        }
    });
    
    $("#droppable4").droppable({
        drop: function(event, ui) {
            $("#audio-drop4")[0].play();
            $("#draggable5").show();
        }
    });
    
    $("#droppable5").droppable({
        drop: function(event, ui) {
            $("#audio-drop5")[0].play();
            $("#draggable6").show();
        }
    });
    
    $("#droppable6").droppable({
        drop: function(event, ui) {
            $("#audio-drop6")[0].play();
        }
    });
    
});