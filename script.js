

// $("p").click(function(event) {
// 	$(this).addClass("black")
// });



	
var count = 0;
$(".plus").click(function(event) {
	 $(".number").text(++count)
});
$(".minus").click(function(event) {
	 $(".number").text(--count)
});

