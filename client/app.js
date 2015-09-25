/**
 * Created by laurakressin on 9/25/15.
 */
//Client Side JS (jQuery AJAX)
$(function(){
    $.ajax({
        url:"/getColors"
    }).done(function(response) {
        var color = response;

        for(var i = 0; i < response.length; i++){
            console.log(color[i].color + " " + color[i].value);
            $('.rainbow').append("<li style='color:" + color[i].value + "'>" + color[i].color + "</style></li>" );
        }
    })
});
