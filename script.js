$.fn.upform = function() {
  var $this = $(this);
  var container = $this.find(".upform-main");

  $(document).ready(function() {
    $(container).find(".input-block").first().click();
  });

  // $($this).find("form").submit(function() {
  //   return false;
  // });

  document.getElementById('understand').addEventListener("click",function (e){
    moveNext(e.srcElement)
    rescroll(e.srcElement)
  })

  $(container)
    .find(".input-block")
    .not(".input-block input")
    .on("click", function() {
      if(!$(this).hasClass('active')) {

    $(container).find(".input-block input").each(function(e) {
      $(e).blur();
    });
    $(this).addClass("active");
      }
     if(!$(this).hasClass("active") && !$(this).hasClass('text-block')) {
        rescroll(this);
      }
    });


  $(container)
    .find(".input-block")
    .not(".input-block input")
    .on("focus", function() {
      if(!$(this).hasClass('active')) {

    $(container).find(".input-block input").each(function(e) {
      $(e).blur();
    });
    $(this).addClass("active");
      }
     if(!$(this).hasClass("active") && !$(this).hasClass('text-block')) {
        rescroll(this);
      }
    });





  $(container).find(".input-block input").keypress(function(e) {
    if (e.which == 13) {
      if ($(this).hasClass("required") && $(this).val() == "") {
      } else moveNext(this);
    }
  });

  $(container).find('.input-block input[type="radio"]').change(function(e) {
    // moveNext(this);
  });

  $(window).on("scroll", function() {
    $(container).find(".input-block").each(function() {
      var etop = $(this).offset().top;
      var diff = etop - $(window).scrollTop();
      if (diff > 100 && diff < 300) {
        reinitState(this);
      }
    });
  });

  function reinitState(e) {
    $(container).find(".input-block").removeClass("active");

    $(container).find(".input-block input").each(function() {
      $(this).blur();
    });
    $(e).addClass("active");
    /*$(e).find('input').focus();*/
  }

  function rescroll(e) {
    $(window).scrollTo($(e), 200, {
      offset: { left: 100, top: -200 },
      queue: false
    });
  }

  function reinit(e) {
    reinitState(e);
    rescroll(e);
  }

  function moveNext(e) {
    $(e).parent().parent().next().click();
  }

  function movePrev(e) {
    $(e).parent().parent().prev().click();
  }
};

$(".upform").upform();


function rangeSlide(value) {
      document.getElementById('rangeValue').value = value;
}

function changeRange(value) {
      document.getElementById('myRange').value = value;
}
