$(function() {
        $("#draggable").draggable({
          start: function() {
            //$("#audio-drag")[0].play();
          }
        });
        $("#droppable").droppable({
          drop: function(event, ui) {
            $("#audio-drop")[0].play();
            $(this)
              .addClass("ui-state-highlight")
              .find("p")
              .html("Dropped!");
          }
        });
});