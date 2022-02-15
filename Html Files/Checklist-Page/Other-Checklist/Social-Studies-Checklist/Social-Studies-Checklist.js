$(document).ready(function(){
    /*
    test = $("#chkbx001").attr("checked")
    console.log("test = " + test)

    $("#txtbx001").val("Harry")
    test2 = $("#txtbx001").val()
    console.log("test2 = " + test2)
    */
    // check001 = $("#chkbx001").attr("checked")
    
    /*if (check001 == "checked") {
        alert("You may begin the cemorny")
    }
    */

    $("#chkbx001").change(function() {
         if(chkbx001.checked) {
        var audio = new Audio('../../Audio/dingNoisecheck1.mp3');
        audio.play()
         }
    });
});