$(document).ready(function(){
    $("#brief-word").click(function(){
        var briefUrl = "https://hitokoto.jijidown.com/v2/api/hitokoto"
        $.get(briefUrl,function(data){
            $("#brief-word").html(data.res[0].hitokoto)
            console.log(data.res[0].hitokoto);
            console.log(data.res[0].source);
        },"json");
    });
});