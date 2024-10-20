$(document).ready(function() {

    $("h1").text("Zadanie z jQuery");

    $("p").addClass("highlight");

    $("#image").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWgFQ5azMRK3ssK4MvmGdp46QwHGEHSzTrQ&s").show();

    $("#colorBtn").click(function() {
        const kolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        $("body").css("background-color", kolor);
    });

    $("#toggleImageBtn").click(function() {
        $("#image").fadeToggle();
    });

    $("#slideTextBtn").click(function() {
        $("#textSection").slideToggle();
    });

    $("#addParaBtn").click(function() {
        $("#content").append("<p>Nowy paragraf</p>");
    });

    $("#removeParaBtn").click(function() {
        $("#content p:last").remove();
    });

    $("#showDateBtn").click(function() {
        const data = new Date().toLocaleString();
        $("#date").text("Aktualna data i godzina: " + data);
    });

});
