$(document).ready(function() {
  $("button#screen").click(function() {
    $("body").addClass("change-background");
  });

  $("button#original").click(function() {
    $("body").removeClass();
  });
});
