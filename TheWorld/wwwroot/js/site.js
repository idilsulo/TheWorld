/* site.js */



(function () {
    
    //var ele = $("#username");
    //ele.text("İdil Sülo");

    //var main = $("#main");

    //main.on("mouseenter", function () {
      //  main.style.backgroundColor = "#888"; /* The color will be a darker shade of grey when the mouse howers over the main part */
    //});

    //main.on("mouseleave", function () {
      //  main.style.backgroundColor = ""; /* The color will turn back to its color defined in the css file since we do not asign a string to it */
    //});

    //var menuItems = $("ul.menu li a");
    //menuItems.on("click", function () {
      //  var me = $(this);
      //  alert(me.text());
    //});

    var $sidebarAndWrapper = $("#sidebar, #wrapper");
    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {

        $sidebarAndWrapper.toggleClass("hide-sidebar");
        

        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");

        }
        else {
            $icon.addClass("fa-angle-left");
            $icon.removeClass("fa-angle-right");
        }
    });


})();