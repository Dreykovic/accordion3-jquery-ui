$(function() {
  $("#text-js").html("Texte renseigné par le bais de jQuery");
  $("#submit").click(function() {
    alert($("#name").val());
  });
  $("#a").click(function() {
    $("#result").load("inc/result.php");
  });
});
