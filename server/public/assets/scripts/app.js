$(document).ready(function(){
<<<<<<< HEAD

    $("#catform").on('submit', submitCats)

    fetchCats();
});

function submitCats(event){
    event.preventDefault();

    var catObject = {};
    catObject.username = $("#username").val();

    $.ajax({
        type: "POST",
        data: catObject,
        url: "/cat",
        success: function(data){
            console.log(data);
            fetchCats();
        }
    });
}

function fetchCats(){
    $.ajax({
        type: "GET",
        url: "/cat",
        success: function(data){
            console.log(data);
            appendDom(data);
        }
    })
}

function appendDom(data){
    $(".cat-container").empty();
    for(var i = 0; i <data.length; i++){
        $(".cat-container").append("<div></div>");
        var $el = $(".cat-container").children().last();
        $el.append("<p>" + data[i].username + "</p>");
    }
}
=======
    $.ajax({
        type: "GET",
        url: "/kitties",
        success: function(data){
            console.log(data);
        }
    });
});
>>>>>>> fe8d05771cb03b8bd564bafa90cbf5b035c07a19
