$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
    $('#myModal').modal('show')
    $('#myModal').modal('hide')
   
});


$(document).ready(function(){
    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    });
    
    $(".close").click(function(){
        $("#reserveModal").modal('hide');
    });
    
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });
    
    $(".close").click(function(){
        $("#loginModal").modal('hide');
    });
  });

