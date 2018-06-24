$(document).ready(function () {
    
    /* ==================================
	 Table of contents:-
     
		1. For Raning News
		2. For Contact From
		3. For Date Time Picker 
		4. For Mouse Drag
		5. Responsive siderbar menu
        6. Preloader
        7. Popup section
        
	================================== */
    
	/*----------------------------
		1. For Raning News
	-------------------------------*/
   $('.ticker').jTicker({

        // Default options
        duration : 100, // speed
        loop     : 2 // loops

    });
    
    /*----------------------------
		2. For Contact From
	-------------------------------*/
    $( "#form" ).keypress(function(e) {
      if ( e.which == 13 ) {
         e.preventDefault();
      }
    });
    
    var next = 1;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = '<input autocomplete="off" class="input form-control" id="field' + next + '" name="field' + next + '" type="text">';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);  
        
            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });
    
    
    /*----------------------------
		3. For Date Time Picker
	-------------------------------*/
   $('#my_dtp').datetimepicker({
       format: 'yyyy-mm-dd hh:ii',
       fontAwesome: true,
       wheelViewModeNavigation: true
   })
   $('#my_dtp').datetimepicker('update', new Date())
    
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
    
    
    /*----------------------------
		4. For Mouse Drag
	-------------------------------*/
    $('.drag').draggable();
    
    
    /*------------------------------------------
		5. Responsive siderbar menu
	---------------------------------------------*/
//    $(".responsiveicon").click(function(){
//        $("#Social-show, #dropdownmenu, #popupmenu.popupmenu, #res-ticker").toggleClass("show");
//    });
//    
    $("#nextBtn").click(function(){
        $("#Social-show").toggleClass("headen");
    });
    
    
    function myFunction(x) {
        if (x.matches) { // If media query matches
            $(".responsiveicon").click(function(){
                $("#Social-show, #dropdownmenu, #popupmenu.popupmenu, #res-ticker").toggleClass("show");
            });
        }
    }
        var x = window.matchMedia("(max-width: 768px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes

    /*---------------------
		6. Preloader
	----------------------*/
    
    $(window).load(function() {
        $(".loading").addClass("spin");

        setTimeout(function() {
            var currentPositon = $(".loading").css("transform");
            console.log(currentPositon)
            $(".loading").addClass("class").css("transform", currentPositon).css("transform", "none")
            $(".loading").animate({

            }, 500, function() {
              increaseWidth();
            });
          }, 1985);

          function increaseWidth() {
            $(".loading").animate({

              width: "+=100%",
            }, 2500, function() {
              slide();
              removeLine();
            });
          }

          function removeLine() {
            $(".loading").animate({

              width: "0%",
            }, 2500, function() {});
          }

          function goUp() {
            $(".up").show();
            $(".up").animate({
              top: "-=50%"
            }, 2500, function() {
              $(this).hide();
            });
          }

          function goDown() {
            $(".down").show();
            $(".down").animate({
              bottom: "-=50%"
            }, 2500, function() {
              $(this).hide();
            });
          }

          function slide() {
            goUp();
            goDown();
          }

        });
    
});/* End Document Ready function */


/*---------------------------------
		7. Popup section menu
-----------------------------------*/
var popupDiv = document.getElementById("popup_bg");

    function OpenPopupMenu() {
        popupDiv.style.display = "block";
    }

    function closePopupMenu() {
        popupDiv.style.display = "none";
    }

    $(".full-popup-div").click(function () {
        $(".popup-main-body").toggleClass("full");
    });

/*------------------------------------------------------
		7. Popup section menu
-----------------------------------------------------*/

    var colorDiv = document.getElementById("popup_color_perer");

    function OpenColorMenu() {
        colorDiv.style.display = "block";
    }

    function closeColorMenu() {
        colorDiv.style.display = "none";
    }

    function SaveColorMenu() {
        colorDiv.style.display = "none";
    }   

    $(".full-popup-div-2").click(function () {
        $(".popup-main-body-2").toggleClass("full");
    });



    $(".close-color-div").click(function () {
        $(".popup-main-body").toggleClass("full");
    });

    $(".color-name-1").click(function () {
        $("body").addClass("c-red");
    });

    $(".color-name-2").click(function () {
        $("body").addClass("c-green");
    });

    $(".color-name-3").click(function () {
        $("body").addClass("c-antiquewhite");
    });

    $(".color-name-4").click(function () {
        $("body").addClass("c-aqua");
    });

    $(".color-name-5").click(function () {
        $("body").addClass("c-crimson");
    });

    $(".color-name-6").click(function () {
        $("body").addClass("c-grey");
    });

    $(".color-name-7").click(function () {
        $("body").addClass("c-chartreuse");
    });

    $(".color-name-8").click(function () {
        $("body").addClass("c-chocolate");
    });

    $(".color-name-9").click(function () {
        $("body").addClass("c-silver");
    });

    $(".color-name-10").click(function () {
        $("body").addClass("c-violet");
    });

    $(".color-name-11").click(function () {
        $("body").addClass("c-lime");
    });

    $(".color-name-12").click(function () {
        $("body").addClass("c-mediumblue");
    });

    $(".close-color-div").click(function () {
        $("body").addClass("d");
    });

    $(".close-color-div").click(function () {
        $("body").addClass("d");
    });

    $(".sleep-start").click(function () {
        $("#sleep").addClass("start");
    });

    var Sleep = document.getElementById("sleep");
        function bodysleep() {
            Sleep.style.background = "#000";
        }

/*------------------------------------------------------
		7. Popup section Body  For Read icon
--------------------------------------------------------*/
var popupBodyIcon = document.getElementById("popup_body");

    function OpenPopupBodyIcon() {
        popupBodyIcon.style.display = "block";
    }

    function closePopupMenuIcon() {
        popupBodyIcon.style.display = "none";
    }

    $(".full-popup-div").click(function () {
        $(".popup-main-body-icon").toggleClass("full");
    });

/*------------------------------------------------------
		7. 1.Sub Popup section Body For Read icon
--------------------------------------------------------*/
    var SubpopupBodyIcon = document.getElementById("sub-popup_body-1");

    function SubOpenPopupBodyIcon() {
        SubpopupBodyIcon.style.display = "block";
    }

    function SubClosePopupBodyIcon() {
        SubpopupBodyIcon.style.display = "none";
    }

    $(".sub-full-popup-div").click(function () {
        $(".sub-popup-main-body-icon-1").toggleClass("subfull");
    });

/*---------------------------------------------------
		7. 2.Sub Popup section Body For Read icon
-----------------------------------------------------*/
    var SubpopupBodyIconTwo = document.getElementById("sub-popup_body-2");

    function SubOpenPopupBodyIconTwo() {
        SubpopupBodyIconTwo.style.display = "block";
    }

    function SubClosePopupBodyIconTwo() {
        SubpopupBodyIconTwo.style.display = "none";
    }

    $(".sub-full-popup-div-2").click(function () {
        $(".sub-popup-main-body-icon-2").toggleClass("subfull-2");
    });


/*---------------------------------------------------
		7.Popup section Body For Services icon
-----------------------------------------------------*/
    var ServicePopupDiv = document.getElementById("popup_body-service");

    function OpenServicePopupDiv() {
        ServicePopupDiv.style.display = "block";
    }

    function CloseServicePopupDiv() {
        ServicePopupDiv.style.display = "none";
    }

    $(".service-full-popup-div").click(function () {
        $(".service-popup").toggleClass("full");
    });


/*------------------------------------------------------------
		7. 1.Sub Popup section Body For Services icon
--------------------------------------------------------------*/
    var ServicePopupSub = document.getElementById("popup_body-service-sub-1");

    function OpenServicePopupSub() {
        ServicePopupSub.style.display = "block";
    }

    function CloseServicePopupSub() {
        ServicePopupSub.style.display = "none";
    }

    $(".service-full-popup-div-sub-1").click(function () {
        $(".service-popup-sub-1").toggleClass("full");
    });


/*------------------------------------------------------------
		7. 2.Sub Popup section Body For Services icon
-------------------------------------------------------------*/
    var ServicePopupSubTwo = document.getElementById("popup_body-service-sub-2");

    function OpenServicePopupSubTwo() {
        ServicePopupSubTwo.style.display = "block";
    }

    function CloseServicePopupSubTwo() {
        ServicePopupSubTwo.style.display = "none";
    }

    $(".service-full-popup-div-sub-2").click(function () {
        $(".service-popup-sub-2").toggleClass("full");
    });


/*------------------------------------------------------------
		7.Popup section Body For Clients icon
-------------------------------------------------------------*/
    var ClientPopup = document.getElementById("popup_body-client");

    function OpenClientPopup() {
        ClientPopup.style.display = "block";
    }

    function CloseClientPopup() {
        ClientPopup.style.display = "none";
    }

    $(".client-full-popup-div").click(function () {
        $(".client-popup").toggleClass("full");
    });


/*------------------------------------------------------------
		7. 1. Sub Popup section Body For Clients icon
-------------------------------------------------------------*/
    var ClientPopupSubOne = document.getElementById("popup_body-client-sub-1");

    function OpenClientPopupOne() {
        ClientPopupSubOne.style.display = "block";
    }

    function CloseClientPopupOne() {
        ClientPopupSubOne.style.display = "none";
    }

    $(".full-popup-client-sub-1").click(function () {
        $(".client-popup-sub-1").toggleClass("full");
    });


/*------------------------------------------------------------
		7. 2. Sub Popup section Body For Clients icon
-------------------------------------------------------------*/
    var ClientPopupSubTwo = document.getElementById("popup_body-client-sub-2");

    function OpenClientPopupTwo() {
        ClientPopupSubTwo.style.display = "block";
    }

    function CloseClientPopupTwo() {
        ClientPopupSubTwo.style.display = "none";
    }

    $(".full-popup-client-sub-2").click(function () {
        $(".client-popup-sub-2").toggleClass("full");
    });


/*------------------------------------------------------------
		7. 3. Sub Popup section Body For Clients icon
-------------------------------------------------------------*/
    var ClientPopupSubThree = document.getElementById("popup_body-client-sub-3");

    function OpenClientPopupThree() {
        ClientPopupSubThree.style.display = "block";
    }

    function CloseClientPopupThree() {
        ClientPopupSubThree.style.display = "none";
    }

    $(".full-popup-client-sub-3").click(function () {
        $(".client-popup-sub-3").toggleClass("full");
    });


/*------------------------------------------------------------
		7. 4. Sub Popup section Body For Clients icon
-------------------------------------------------------------*/
    var ClientPopupSubFour = document.getElementById("popup_body-client-sub-4");

    function OpenClientPopupFour() {
        ClientPopupSubFour.style.display = "block";
    }

    function CloseClientPopupFour() {
        ClientPopupSubFour.style.display = "none";
    }

    $(".full-popup-client-sub-4").click(function () {
        $(".client-popup-sub-4").toggleClass("full");
    });


/*------------------------------------------------------------
		7. 5. Sub Popup section Body For Clients icon
-------------------------------------------------------------*/
    var ClientPopupSubFive = document.getElementById("popup_body-client-sub-5");

    function OpenClientPopupFive() {
        ClientPopupSubFive.style.display = "block";
    }

    function CloseClientPopupFive() {
        ClientPopupSubFive.style.display = "none";
    }

    $(".full-popup-client-sub-5").click(function () {
        $(".client-popup-sub-5").toggleClass("full");
    });


/*---------------------------------
		7. Popup section menu
-----------------------------------*/
var popupShouts = document.getElementById("popup_body-shouts");

    function OpenPopupShouts() {
        popupShouts.style.display = "block";
    }

    function closePopupShouts() {
        popupShouts.style.display = "none";
    }

    $(".shouts-full-popup-div").click(function () {
        $(".shouts-popup").toggleClass("full");
    });








/*-------------------------------------------
		7. Offfice Dropdown section
---------------------------------------------*/
    $(".dropdown-office").click(function () {
        $(".office-dropdown-menu").toggleClass("office-dropdown-show");
    });

    $(".responsiveicon").click(function () {
        $(".dropdown-office").toggleClass("z-index");
    });


    







