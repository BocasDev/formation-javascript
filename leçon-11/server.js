
const express=require("express");
const cors = require("cors");
const app=express();
app.use(cors());
const PORT=3000;
// permet de comprendre le json
app.use(express.json());
// première route créée pour tester le serveur
app.get("/", (req,res) =>{
    res.send("Bienvenue sur mon serveur");
});
app.post("/api/filleul", (req,res) =>{
    console.log(req.body);
    res.send({
      
      message:"Filleul avec succès",
      
    });
});
// Démarrage du serveur local
app.listen(PORT, ()=>{
    console.log(`le serveur a démarré sur le port: ${PORT}`);
    
})