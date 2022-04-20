//click karne par gray aur line through dubara karne par hata dena hai
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});
//event bubbling
//deletion
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(function () {
        //fadeout+remove
        $(this).remove();
    });
    //prevent event bubbling
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        var todoText = $(this).val();
        //after adding reset input 
        $(this).val("");
        $("ul").append("<li><span><i class=\"fas fa-trash\"></i></span> " + todoText + "</li>");
    }
});
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});
//additional points
$(".fa-print").click(function () { 
    var printlist=new jsPDF();    
    printlist.fromHTML($("#container").html(), 80, 20);
    printlist.save("list.pdf");
});
