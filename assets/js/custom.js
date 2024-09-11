setTimeout(function () {
  $("#customQuote").modal();
}, 1500);

function openNav() {
  document.getElementById("mySidenav").style.left = "0px";
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-250px";
}

function setButtonURL() {
  Tawk_API.toggle();
}

function getURLParameter(e) {
  return (
    decodeURIComponent(
      (new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(
        location.search
      ) || [null, ""])[1].replace(/\+/g, "%20")
    ) || null
  );
}
new WOW().init();
var a = getURLParameter("pack");
$("#packages option:eq(" + a + ")").prop("selected", !0),
  $(".logo-platform").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    centerMode: true,
    cssEase: "linear",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }),
  $(".timeline__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    loop: !0,
    autoplay: !1,
    arrows: !1,
    dots: !0,
    autoplaySpeed: 1e3,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: !0,
          dots: !0,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }),
  $(".portfolio-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
$(".Process__services__slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: !0,
  dots: !1,
  arrows: !1,
  autoplaySpeed: 2e3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: !0,
        dots: !0,
      },
    },
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".services__boxes__slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: !0,
  dots: !0,
  arrows: !1,
  autoplaySpeed: 2e3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: !0,
        dots: !0,
      },
    },
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".review-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: !0,
  arrows: !0,
  dots: !1,
  autoplaySpeed: 2e3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        dots: !0,
      },
    },
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
const counterUp = window.counterUp.default,
  callback = (e) => {
    e.forEach((e) => {
      const o = e.target;
      e.isIntersecting &&
        !o.classList.contains("is-visible") &&
        (counterUp(o, {
          duration: 2e3,
          delay: 16,
        }),
        o.classList.add("is-visible"));
    });
  },
  IO = new IntersectionObserver(callback, {
    threshold: 1,
  }),
  els = document.querySelectorAll(".counter__number");

function order_now_value(e, o = 1) {
  (x = e.name),
    $("#packages").val(
      $("#packages")
        .find('[pack="' + o + '"]')
        .attr("value")
    );
  try {
    (document.getElementById("lead_area_popup1").value = x),
      (document.getElementById("lead_text").innerHTML = x);
  } catch (e) {}
}
let ip, ip_value;
els.forEach((e) => {
  IO.observe(e);
}),
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 1e4,
          easing: "swing",
          step: function (e) {
            $(this).text(Math.ceil(e));
          },
        }
      );
  }),
  $(".clickbutton").click(function () {
    $(".floatbutton").toggleClass("active");
  }),
  $("#phone-country,#phone-coun,#phone-order").intlTelInput({
    allowDropdown: !1,
    geoIpLookup: function (e) {
      $.get("https://ipinfo.io", function () {}, "jsonp").always(function (o) {
        var t = o && o.country ? o.country : "";
        e(t), (ip = o.ip);
      });
    },
    initialCountry: "auto",
    nationalMode: !0,
    separateDialCode: !0,
  }),
  setTimeout(function () {
    $('input[name="pc"]').val($(".selected-dial-code").text()),
      $('input[name="cip"]').val(ip),
      $('input[name="ctry"]').val(
        $(".country-list .country.active .country-name").text()
      );
  }, 3e3),
  $("body").delegate(".country", "click", function () {
    $('input[name="pc"]').val($(this).find(".dial-code").text()),
      $('input[name="cip"]').val(ip),
      $('input[name="ctry"]').val(
        $(this)
          .closest("form")
          .find(".country-list .country.active .country-name")
          .text()
      );
  }),
  $(window).innerWidth() <= 751 &&
    $(".portfolio_slid").slick({
      dots: !0,
      infinite: !0,
      autoplay: !0,
      speed: 300,
      arrows: !1,
      slidesToShow: 1,
      adaptiveHeight: !0,
    }),
  $(function () {
    $(".lazy").lazy({
      effect: "fadeIn",
      effectTime: 10,
      threshold: 0,
    });
  }),
  $('a[data-toggle="tab"]').on("show.bs.tab", function (e) {
    $(e.target.hash)
      .find(".lazy")
      .each(function () {
        var e = $(this).attr("data-src");
        $(this).attr("src", e).removeAttr("data-src");
      });
  }),
  $(".mobile-nav-btn").click(function () {
    $(".mobile-nav-btn, .mobile-nav, .app-container").toggleClass("active");
  }),
  $(".firstlevel li a").click(function () {
    $(this).hasClass("active")
      ? ($(this).removeClass("active"), $(this).siblings("ul").slideUp())
      : ($(".firstlevel li a").removeClass("active"),
        $(this).addClass("active"),
        $(".dropdown").slideUp(),
        $(this).siblings("ul").slideDown());
  }),
  $(".mainnav > li > a").click(function () {
    $(this).hasClass("active")
      ? ($(this).removeClass("active"),
        $(this).parents("li").children(".firstlevel").slideUp())
      : ($(this).addClass("active"),
        $(this).parents("li").children(".firstlevel").slideDown(),
        $(this)
          .parents("li")
          .siblings("li")
          .children("a")
          .removeClass("active"),
        $(this).parents("li").siblings("li").children(".firstlevel").slideUp());
  });
var abc = document.location.href.match(/[^\/]+$/)[0],
  newabc = abc.split(".").slice(0, -1).join("."),
  myArray = newabc.split("-");
"package" == myArray[2] && $("body").addClass("packages_banner");
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "👋 Hi! Still need a Authors Book Publishers?";
}),
  window.addEventListener("focus", () => {
    document.title = docTitle;
  }),
  $(document).ready(function () {
    $("#myModal").modal("show");
  }),
  $(document).ready(function () {
    $("body").hasClass("pop-page") &&
      ($("#autoload").trigger("click"), $(".lp-let").html("Get Instant Quote")),
      $("#form2").hide(),
      $("#form3").hide(),
      $("#form4").hide(),
      $("#form5").hide(),
      $("#form6").hide(),
      $("#backbtn").hide();
  });
let i = 1;

function Nextfun() {
  i < 6 &&
    (1 == i
      ? ("other" == $("input[name='extra[Platform]']:checked").val() &&
          ("" == $("#form-1-other").val()
            ? $(".error-element").html("Fill the text Field *")
            : (i++, $(".error-element").html(""))),
        $("input[name='extra[Platform]']:checked").val()
          ? "other" != $("input[name='extra[Platform]']:checked").val() &&
            (i++,
            $("#form-1-other").prop("disabled", !0),
            $("#form-1-other").html(""),
            $(".error-element").html(""),
            console.log("inputed"))
          : $(".error-element").html("Select the option *"))
      : 2 == i
      ? ("other" == $("input[name='extra[Genre]']:checked").val() &&
          ("" == $("#form-2-other").val()
            ? $(".error-element2").html("Fill the text Field *")
            : (i++, $(".error-element2").html(""))),
        $("input[name='extra[Genre]']:checked").val()
          ? "other" != $("input[name='extra[Genre]']:checked").val() &&
            (i++,
            $("#form-2-other").prop("disabled", !0),
            $("#form-2-other").html(""),
            $(".error-element2").html(""),
            console.log("inputed"))
          : $(".error-element2").html("Select the option *"))
      : 3 == i
      ? $("input[name='extra[Manuscript_completed]']:checked").val()
        ? (i++, $(".error-element4").html(""))
        : $(".error-element4").html("select the option *")
      : 4 == i &&
        ("other" == $("input[name='extra[words_count]']:checked").val() &&
          ("" == $("#form-3-other").val()
            ? $(".error-element3").html("Fill the text Field *")
            : (i++, $(".error-element3").html(""))),
        $("input[name='extra[words_count]']:checked").val()
          ? "other" != $("input[name='extra[words_count]']:checked").val() &&
            (i++,
            $("#form-3-other").prop("disabled", !0),
            $("#form-3-other").html(""),
            $(".error-element3").html(""),
            console.log("inputed"))
          : $(".error-element3").html("Select the option *"))),
    1 == i
      ? ($("#changetopic").text("Where do you want to Publish your Book"),
        $("#form1").show(),
        $("#form2").hide(),
        $("#form3").hide(),
        $("#form4").hide(),
        $("#form5").hide(),
        $("#form6").hide(),
        $("#backbtn").hide(),
        $("#nextbtn").show())
      : 2 == i
      ? ($("#changetopic").text("Genre"),
        $("#form1").hide(),
        $("#form2").show(),
        $("#form3").hide(),
        $("#form4").hide(),
        $("#form5").hide(),
        $("#form6").hide(),
        $("#backbtn").show(),
        $("#nextbtn").show())
      : 3 == i
      ? ($("#changetopic").text("Is the Manuscript Completed"),
        $("#form1").hide(),
        $("#form2").hide(),
        $("#form3").show(),
        $("#form4").hide(),
        $("#form5").hide(),
        $("#form6").hide(),
        $("#backbtn").show(),
        $("#nextbtn").show())
      : 4 == i
      ? ($("#changetopic").text("How many numbers of words?"),
        $("#form1").hide(),
        $("#form2").hide(),
        $("#form3").hide(),
        $("#form4").show(),
        $("#form5").hide(),
        $("#form6").hide(),
        $("#backbtn").show(),
        $("#nextbtn").show())
      : 5 == i &&
        ($("#changetopic").text("Contact Information"),
        $("#form1").hide(),
        $("#form2").hide(),
        $("#form3").hide(),
        $("#form4").hide(),
        $("#form5").hide(),
        $("#form6").show(),
        $("#backbtn").show(),
        $("#nextbtn").hide(),
        $("#backbtn").addClass("backbtnwrp-l"));
}

function Backfun() {
  i > 1 && i--,
    1 == i
      ? ($("#changetopic").text("Where do you want to Publish your Book"),
        $("#form1").show(),
        $("#form2").hide(),
        $("#form3").hide(),
        $("#form4").hide(),
        $("#form5").hide(),
        $("#form6").hide(),
        $("#backbtn").hide(),
        $("#nextbtn").show(),
        $("#backbtn").removeClass("backbtnwrp-l"),
        $("#form-1-other").prop("disabled", !1))
      : 2 == i
      ? ($("#changetopic").text("Genre"),
        $("#form1").hide(),
        $("#form2").show(),
        $("#form3").hide(),
        $("#form4").hide(),
        $("#form5").hide(),
        $("#form6").hide(),
        $("#backbtn").show(),
        $("#nextbtn").show(),
        $("#backbtn").removeClass("backbtnwrp-l"),
        $("#form-2-other").prop("disabled", !1))
      : 3 == i
      ? ($("#changetopic").text("is the Manuscript Completed"),
        $("#form1").hide(),
        $("#form2").hide(),
        $("#form3").show(),
        $("#form4").hide(),
        $("#form5").hide(),
        $("#form6").hide(),
        $("#backbtn").show(),
        $("#nextbtn").show(),
        $("#backbtn").removeClass("backbtnwrp-l"))
      : 4 == i
      ? ($("#changetopic").text("How many numbers of words?"),
        $("#form1").hide(),
        $("#form2").hide(),
        $("#form3").hide(),
        $("#form4").show(),
        $("#form5").hide(),
        $("#form6").hide(),
        $("#backbtn").show(),
        $("#nextbtn").show(),
        $("#backbtn").removeClass("backbtnwrp-l"),
        $("#form-3-other").prop("disabled", !1))
      : 5 == i &&
        ($("#changetopic").text("Contact Information"),
        $("#form1").hide(),
        $("#form2").hide(),
        $("#form3").hide(),
        $("#form4").hide(),
        $("#form5").hide(),
        $("#form6").show(),
        $("#backbtn").show(),
        $("#nextbtn").hide());
}
