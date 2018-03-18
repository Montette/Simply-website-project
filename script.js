$(".left").on("click", function() {
            $(".hero").removeClass("bcg2 bcg3").addClass("bcg1");
        });

        $(".middle").on("click", function() {
            $(".hero").removeClass("bcg2 bcg3").addClass("bcg2");
        });

        $(".right").on("click", function() {
            $(".hero").removeClass("bcg2 bcg1").addClass("bcg3");
        })

        $(".burger").on("click", function() {
            $("nav").toggleClass("navActive");
            $(".burger").toggleClass("active");
        })