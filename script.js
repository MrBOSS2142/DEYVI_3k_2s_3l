$(document).ready(function() {
  $("#img_box1").hide();
  $("#img_box2").hide();
  $("#img_box3").hide();
  $("#img_box4").hide();
  $("#img_box5").hide();

  $("#cat1").mouseenter(function() {
    $("#cat1").hide();
    $("#img_box1").show();
    $("#img_box1").click(function() {
      $("#mouse_img1").css({
        transition: "transform 2s",
        transform: "rotate(360deg)"
      });
      $("#img_box1").css({
        transition: "transform 2s",
        "transition-delay": "2s",
        transform: "translateX(1700px)"
      });

      function cat() {
        $("#cat1").show();
        $("#img_box1").removeAttr("style");
        $("#mouse_img1").removeAttr("style");
        $("#img_box1").hide();
      }
      setTimeout(cat, 3000);
    });
  });

  $("#cat2").mouseenter(function() {
    $("#cat2").hide();
    $("#img_box2").show();
    $("#img_box2").click(function() {
      $("#mouse_img2").css({
        transition: "transform 2s",
        transform: "rotate(360deg)"
      });
      $("#img_box2").css({
        transition: "transform 2s",
        "transition-delay": "2s",
        transform: "translateX(1700px)"
      });

      function cat() {
        $("#cat2").show();
        $("#img_box2").removeAttr("style");
        $("#mouse_img2").removeAttr("style");
        $("#img_box1").hide();
      }
      setTimeout(cat, 3000);
    });
  });

  $("#cat3").mouseenter(function() {
    $("#cat3").hide();
    $("#img_box3").show();
    $("#img_box3").click(function() {
      $("#mouse_img3").css({
        transition: "transform 2s",
        transform: "rotate(360deg)"
      });
      $("#img_box3").css({
        transition: "transform 2s",
        "transition-delay": "2s",
        transform: "translateX(1700px)"
      });

      function cat() {
        $("#cat3").show();
        $("#img_box3").removeAttr("style");
        $("#mouse_img3").removeAttr("style");
        $("#img_box3").hide();
      }
      setTimeout(cat, 3000);
    });
  });

  $("#cat4").mouseenter(function() {
    $("#cat4").hide();
    $("#img_box4").show();
    $("#img_box4").click(function() {
      $("#mouse_img4").css({
        transition: "transform 2s",
        transform: "rotate(360deg)"
      });
      $("#img_box4").css({
        transition: "transform 2s",
        "transition-delay": "2s",
        transform: "translateX(1700px)"
      });

      function cat() {
        $("#cat4").show();
        $("#img_box4").removeAttr("style");
        $("#mouse_img4").removeAttr("style");
        $("#img_box4").hide();
      }
      setTimeout(cat, 3000);
    });
  });

  $("#cat5").mouseenter(function() {
    $("#cat5").hide();
    $("#img_box5").show();
    $("#img_box5").click(function() {
      $("#mouse_img5").css({
        transition: "transform 2s",
        transform: "rotate(360deg)"
      });
      $("#img_box5").css({
        transition: "transform 2s",
        "transition-delay": "2s",
        transform: "translateX(1700px)"
      });

      function cat() {
        $("#cat5").show();
        $("#img_box5").removeAttr("style");
        $("#mouse_img5").removeAttr("style");
        $("#img_box5").hide();
      }
      setTimeout(cat, 3000);
    });
  });
});
