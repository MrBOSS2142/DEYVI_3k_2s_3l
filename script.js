$(document).ready(function() {
  $(".img_box").hide();

  $(".box").mouseenter(function() {
    $(this)
      .find(".cat")
      .hide();
    $(this)
      .find(".img_box")
      .show();
  });
  $(".box").click(function() {
    $(this)
      .find(".img_box")
      .find(".mouse_img")
      .css({
        transition: "transform 2s",
        transform: "rotate(360deg)"
      });
    $(this)
      .find(".img_box")
      .css({
        transition: "transform 2s",
        "transition-delay": "2s",
        transform: "translateX(1700px)"
      });

    setTimeout(cat, 3000);
    function cat() {
      $(".cat").show();
      $(".img_box").removeAttr("style");
      $(".mouse_img").removeAttr("style");
      $(".img_box").hide();
    }
  });
});
