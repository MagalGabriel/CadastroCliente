const express = require("express");

const app = express();

app.get("/", function(req, resp){
    resp.send("Bem-vindo ao meu app");
})

app.get("/contato", function(req, resp){
    resp.send("Página de contato do meu app")
})

app.get("/produto", function(req, resp){
    resp.send("Página de produto do meu app")
})

//Essa deve ser sempre a última linha quando usamos o express
app.listen(8081, function(){
    console.log("O servidor está funcionando na url http://localhost:8081");
});

