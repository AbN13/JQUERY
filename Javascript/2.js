// $("#p1").text("Teste de Texto");
/*$( "#alvo" ).click(function(){ 
    alert("Usuário clicou no texto" );
});*/
/*$("#txt1").mousedown(function(){
    $("#txt2").text("Botão do mouse para BAIXO");    
    })    
    .mouseup(function(){
    
    $("#txt2").text("Botão do mouse para CIMA");
    
    });*/
/*$("#txt").keypress(function(){

    $("p").text($("#txt").val());
    
    });*/

    $("#txt").keyup(function(){

        $("#p1").text($("#txt").val());
        
        $("#p2").text("");
        
        })
        
        .keydown(function(){
        
        $("#p2").text("tecla pressionada");
        
        });


