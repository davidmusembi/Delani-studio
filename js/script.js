$(document).ready(function(){
    //Creating a function to open the hover effect on the what we page
    $(".design").click(function() {
        $("#design, .design").toggle("slow");
      });
      $("#design").click(function() {
        $(".design, #design").toggle("slow");
      });
      $(".development").click(function() {
        $("#development, .development").toggle("slow");
      });
      $("#development").click(function() {
        $(".development, #development").toggle("slow");
      });
      $(".product-mgt").click(function() {
        $("#product-mgt, .product-mgt").toggle("slow");
      });
      $("#product-mgt").click(function() {
        $(".product-mgt, #product-mgt").toggle("slow");
      });
      
});

