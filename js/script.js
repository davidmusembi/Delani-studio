$(document).ready(function(){

    //Creating a jquery effect  to open the hover effect on the what we do page
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

      //Creating a jquery effect to show a name of the  portfolio image when clicked in portfolio page
      $('.work1').mouseover(function() {
        $('.work1-overlay').show();
      }).mouseout(function() {
        $('.work1-overlay').hide();
      });
      $(".work2").mouseenter(function() {
        $(".work2-overlay").show();
      }).mouseleave(function() {
        $(".work2-overlay").hide();
      });
      $(".work3").mouseenter(function() {
        $(".work3-overlay").show();
      }).mouseleave(function() {
        $(".work3-overlay").hide();
      });
      $(".work4").mouseenter(function() {
        $(".work4-overlay").show();
      }).mouseleave(function() {
        $(".work4-overlay").hide();
      });
      $(".work5").mouseenter(function() {
        $(".work5-overlay").show();
      }).mouseleave(function() {
        $(".work5-overlay").hide();
      });
      $(".work6").mouseenter(function() {
        $(".work6-overlay").show();
      }).mouseleave(function() {
        $(".work6-overlay").hide();
      });
      $(".work7").mouseenter(function() {
        $(".work7-overlay").show();
      }).mouseleave(function() {
        $(".work7-overlay").hide();
      });
      $(".work8").mouseenter(function() {
        $(".work8-overlay").show();
      }).mouseleave(function() {
        $(".work8-overlay").hide();
      });

      //Creating a function to validate the submit button on contact page
      var contactForm = $("#contact-form");

        contactForm.on("submit", function(e) {
         e.preventDefault();
         let formValid = validateContactForm();
         if (formValid) {
             const name = $("input.name").val();
 
             alert(`Thank you ${name}, we have received your message. Thank you for reaching out to us.`);
             clearForm();
         }
        });
        function validateContactForm() {
            let isFormValid = true;
            const formInputs = contactForm.find("input,textarea");
        
            formInputs.each(function() {
                if (!$(this).val()) {
                    $(this).addClass("is-invalid");
                    isFormValid = false;
                }
            });
            return isFormValid;
        }
        
        function removeFormErrors() {
            contactForm.find("input,textarea").on("keydown", function() {
                if ($(this).hasClass("is-invalid")) {
                    $(this).removeClass("is-invalid");
                }
            });
        }
        
        function clearForm() {
            contactForm.find("input,textarea").each(function() {
                $(this).val("");
            });
          }
    
          removeFormErrors();
    
     });
    





