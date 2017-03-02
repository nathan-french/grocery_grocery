$(document).ready(function(){

  $("#items").submit(function(event){
    event.preventDefault();

    var list = [$("#item_1").val(), $("#item_2").val(), $("#item_3").val()];
    console.log(list);

    var uppers = list.map(function(list_upper){
      return list_upper.toUpperCase();
      });

    uppers.forEach(function(item){
      $(".output").append(item);
      console.log(item);
    });



  });

});
