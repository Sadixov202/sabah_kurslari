$(document).ready(function () {

  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

  $("body").click(function () {
    $(".main-ul").show();
    $(".main-menu").css("text-align", "left");
    $(".searc-inp").css("display", "none");
    $(".search button").css("color", "#666666");
  });

  $(".search").click(function (e) {
    e.stopPropagation();
  });


  $(".search button").click(function (e) {
    if ($(".main-ul").css("display") == "inline") {
      e.preventDefault();
      e.stopPropagation();
      $(".main-ul").hide();
      $(".main-menu").css("text-align", "right");
      $(".searc-inp").css("display", "inline-block");
      $(this).css("color", "#009c4e");
    } else {
      if ($(".searc-inp").val().length <= 0) {
        e.preventDefault();
        $(".main-ul").show();
        $(".main-menu").css("text-align", "left");
        $(".searc-inp").css("display", "none");
        $(".search button").css("color", "#666666");
      }
    }
  });

  $(".c-a").click(function (e) {
    e.preventDefault();
  })


  $("#owl-demo").owlCarousel({
    nav: !0,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    loop: !0,
    slideSpeed: 500,
    paginationSpeed: 200,
    items: 1,
    animateOut: "fadeOut",
    startPosition: 0,
    itemsDesktop: 1,
    itemsDesktopSmall: 1
  });
  $(" #testim-sld").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 2000,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  });
  $(" #univer-sld").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 2000,
    dots: false,
    margin: 20,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
        nav: !1
      },
      700: {
        items: 3,
        nav: !1
      },



    }
  });


  $("#ins-sld").owlCarousel({
    nav: !0,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    items: 4,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 2000,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
        nav: !1
      },
      700: {
        items: 3,
        nav: !1
      },
      1024: {
        items: 4,
        nav: !1
      },
      1200: {
        items: 4
      }


    }

  });

  $("#partners-sld").owlCarousel({
    nav: !0,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    items: 6,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 2000,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
        nav: !1
      },
      700: {
        items: 3,
        nav: !1
      },
      1024: {
        items: 4,
        nav: !1
      },
      1200: {
        items: 6
      }


    }

  });

  $("#mobile-menu .sub-item i").click(function () {
    $(this).parent().find(".sub-menu ").slideToggle();
    $(this).toggleClass("down");

  });

  $('.mobile-menu-i i').click(function () {
    if ($(this).hasClass("fa-bars")) {
      $(this).removeClass("fa-bars");
      $(this).addClass("fa-times");
    } else {
      $(this).removeClass("fa-times");
      $(this).addClass("fa-bars");
    }

    $("#mobile-menu").slideToggle();
  });

  $(window).resize(function () {
    if ($(window).width() > 768) {
      $("#mobile-menu").css("display", "none");
      $('.mobile-menu-i i').removeClass("fa-times");
      $('.mobile-menu-i i').addClass("fa-bars");
    }
  });



  $(function () {
    $('#datetimepicker12').datetimepicker({
      inline: true,
      sideBySide: false
    });
  });

  $("#subscribe #button").click(function (e) {
    e.preventDefault();
    $(".modal-overlay").fadeIn();
    $("#modals").fadeIn();
  });

  $("body").on('click touchend', function (event) {
    if ($("#modals").css("display") == "block") {
      if ($(event.target).hasClass("popup")) {
        $("#modals").fadeOut();
        $(".modal-overlay").fadeOut();
      }
    }
  });

  $("body").keydown(function (event) {
    if ($(".popup").css("display") == "block") {
      switch (event.which) {
        case 27:
          $("#modals").fadeOut();
          $(".modal-overlay").fadeOut();
          break;
        default:
          break;
      }
    }
  });

  $(".success button").click(function () {
    $("#modals").fadeOut();
    $(".modal-overlay").fadeOut();
  });

  $(".no-link").click(function (e) {
    e.preventDefault();
  })

  if ($(window).width() < 510) {
    $("#applying .x").removeClass("col-xs-7");
    $(".col-xs-5").hide();
  } else {
    $("#applying .x").addClass("col-xs-7");
    $(".col-xs-5").show();
  }

  $(window).resize(function () {
    if ($(window).width() < 510) {
      $("#applying .x").removeClass("col-xs-7");
      $(".col-xs-5").hide();
    } else {
      $("#applying .x").addClass("col-xs-7");
      $(".col-xs-5").show();
    }
  });

  $("#search input").keydown(function (event) {
    $("#search button .open").hide();
    $("#search button .close").show();
  });


  $("#search button .close").click(function (e) {
    e.preventDefault();
    $("#search input").val("   ")
    $("#search button .close").hide();
    $("#search button .open").show();

  });

  function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 40.391614,
        lng: 49.861520
      },
      zoom: 16,
      mapTypeControl: true,
      mapControl: true,
      disableDefaultUI: true,
      draggable: true

    });

    var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map
    });

  }

  $('#aniimated-thumbnials').lightGallery({
    thumbnail: true
  });


  /////////////////////////////////////////////////////

  //File Upload//
  ! function (e) {
    var t = function (t, n) {
      this.$element = e(t), this.type = this.$element.data("uploadtype") || (this.$element.find(".thumbnail").length > 0 ? "image" : "file"), this.$input = this.$element.find(":file");
      if (this.$input.length === 0) return;
      this.name = this.$input.attr("name") || n.name, this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]'), this.$hidden.length === 0 && (this.$hidden = e('<input type="hidden" />'), this.$element.prepend(this.$hidden)), this.$preview = this.$element.find(".fileupload-preview");
      var r = this.$preview.css("height");
      this.$preview.css("display") != "inline" && r != "0px" && r != "none" && this.$preview.css("line-height", r), this.original = {
        exists: this.$element.hasClass("fileupload-exists"),
        preview: this.$preview.html(),
        hiddenVal: this.$hidden.val()
      }, this.$remove = this.$element.find('[data-dismiss="fileupload"]'), this.$element.find('[data-trigger="fileupload"]').on("click.fileupload", e.proxy(this.trigger, this)), this.listen()
    };
    t.prototype = {
      listen: function () {
        this.$input.on("change.fileupload", e.proxy(this.change, this)), e(this.$input[0].form).on("reset.fileupload", e.proxy(this.reset, this)), this.$remove && this.$remove.on("click.fileupload", e.proxy(this.clear, this))
      },
      change: function (e, t) {
        if (t === "clear") return;
        var n = e.target.files !== undefined ? e.target.files[0] : e.target.value ? {
          name: e.target.value.replace(/^.+\\/, "")
        } : null;
        if (!n) {
          this.clear();
          return
        }
        this.$hidden.val(""), this.$hidden.attr("name", ""), this.$input.attr("name", this.name);
        if (this.type === "image" && this.$preview.length > 0 && (typeof n.type != "undefined" ? n.type.match("image.*") : n.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader != "undefined") {
          var r = new FileReader,
            i = this.$preview,
            s = this.$element;
          r.onload = function (e) {
            i.html('<img src="' + e.target.result + '" ' + (i.css("max-height") != "none" ? 'style="max-height: ' + i.css("max-height") + ';"' : "") + " />"), s.addClass("fileupload-exists").removeClass("fileupload-new")
          }, r.readAsDataURL(n)
        } else this.$preview.text(n.name), this.$element.addClass("fileupload-exists").removeClass("fileupload-new")
      },
      clear: function (e) {
        this.$hidden.val(""), this.$hidden.attr("name", this.name), this.$input.attr("name", "");
        if (navigator.userAgent.match(/msie/i)) {
          var t = this.$input.clone(!0);
          this.$input.after(t), this.$input.remove(), this.$input = t
        } else this.$input.val("");
        this.$preview.html(""), this.$element.addClass("fileupload-new").removeClass("fileupload-exists"), e && (this.$input.trigger("change", ["clear"]), e.preventDefault())
      },
      reset: function (e) {
        this.clear(), this.$hidden.val(this.original.hiddenVal), this.$preview.html(this.original.preview), this.original.exists ? this.$element.addClass("fileupload-exists").removeClass("fileupload-new") : this.$element.addClass("fileupload-new").removeClass("fileupload-exists")
      },
      trigger: function (e) {
        this.$input.trigger("click"), e.preventDefault()
      }
    }, e.fn.fileupload = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("fileupload");
        i || r.data("fileupload", i = new t(this, n)), typeof n == "string" && i[n]()
      })
    }, e.fn.fileupload.Constructor = t, e(document).on("click.fileupload.data-api", '[data-provides="fileupload"]', function (t) {
      var n = e(this);
      if (n.data("fileupload")) return;
      n.fileupload(n.data());
      var r = e(t.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');
      r.length > 0 && (r.trigger("click.fileupload"), t.preventDefault())
    })
  }(window.jQuery)


  // Text area
  var $textarea = $('.js-textarea');
  $textarea.on('keyup', function (e) {
    var count = $textarea.val().length;

    if (count > 200) {

      $textarea.val($textarea.val().substr(0, 200));
      count = $textarea.val().length;
    }

    $textarea
      .parent()
      .attr('data-text-count', count + '/200');
  });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > $("header").height()) {
      $("header").addClass("menu-fix");
      $(".sc").show();
    } else {
      $("header").removeClass("menu-fix");
      $(".sc").hide();

    }
    if ($("header").hasClass("menu-fix")) {
      $("#mobile-menu").css({
        "position": "fixed",
        "top": "90px"
      });
      if ($(window).width() < 410) {
        $("#mobile-menu").css({
          "position": "fixed",
          "top": "70px"
        });
      }
    }
  })



  $(".pinBox").pinBox({
    //default 0px
    Top: '120px',
    //default '.container' 
    Container: '#pinBoxContainer',
    //default 20 
    ZIndex: 20,
    //default '767px' if you disable pinBox in mobile or tablet
    MinWidth: '992px',
    //events if scrolled or window resized  
    // Events: function (e) {
    //     console.log(e);
    //     // // e.current => current scroll top [number]
    //     // // e.direction => scroll down or up [up,down]
    //     // e.width = window [991]
    //     // // e.active => if pinBox active [true,false]
    //     // e.disabled = [true, false]
    // }

  });
  $(".tab_ul li a").click(function (e) {
    e.preventDefault();
  })
  $(".tab_ul li").click(function () {
    $(".tab_ul").find(".active").removeClass("active");
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
    if($(".no_result").hasClass("active")){
        $(".result_all").hide(200);
        $(".no-result").show(200);
    }else{
      $(".result_all").show(200);
      $(".no-result").hide(200);
    }
  })

  $(".pinBox").trigger('pinBox.reload');
  $("body").prepend("<div class='sc'></div>")

})