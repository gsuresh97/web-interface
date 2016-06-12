$(document).ready(function() {
    var name = "none";
    $(".selected").on("mouseover", function() {
        $(this).draggable({

        });
    });
    $(".draggable").draggable({
        opacity: 1.0,
        helper: "clone",
        revert: "invalid",
        snap:true,
        //
        stop: function(event, ui) {
            var newItem = $(ui.helper).clone();

            var code = document.getElementById("#code");

            newItem.addClass("selected");
            newItem.addClass("code");
            newItem.appendTo("#code");
            makeDraggable(newItem);
        }
    });


    $(".droppable").droppable({
        drop: function(event, ui) {
            makeDraggable(ui.draggable);
        }
    });

    $(".container").droppable({
        accept: ".selected",
        hoverClass: "red-border"

    });

    function makeDraggable(element) {
        $(element).draggable({
            revert: "invalid",
            snap:true
        });
    }



    function makeNumOnly(element) {
        element.keypress(function(e) {

            if (e.charCode === 45 || e.charCode === 46 || (e.charCode > 47 && e.charCode < 58)) {
                return true;
            }
            e.preventDefault();
            console.log(e.charCode);
            return false;
        })
    }
    $("#choosenum").keypress(function(e) {

        if (e.charCode === 45 || e.charCode === 46 || (e.charCode > 47 && e.charCode < 58)) {
            return true;
        }
        e.preventDefault();
        console.log(e.charCode);
        return false;
    })
});
