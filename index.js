$(function() {
    $(".section4 .button div").eq(0).click(function () {
        $(".section4 .list").css("marginLeft","0")})
    $(".section4 .button div").eq(1).click(function () {
            $(".section4 .list").css("marginLeft", "-900px")})
    $(".section4 .button div").eq(2).click(function () {
                $(".section4 .list").css("marginLeft", "-1800px")})
    var flag3=true;
    $(".section3 .tu").click(function(){
        if(flag3){
            flag3=false
            console.log($(this))
             $(".section3 .tu-list").eq($(this).index(".section3 .tu")).css({height:"150px",paddingTop:"30px"})
        }
        else{
            flag3=true
            $(".section3 .tu-list").eq($(this).index(".section3 .tu")).css({height:"0",paddingTop:"0px"})
        }
    })
})