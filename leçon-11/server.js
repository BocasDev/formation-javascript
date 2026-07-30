
const express=require("express");
const app=express();
const PORT=3000;
// permet de comprendre le json
app.use(express.json());
// première route créée pour tester le serveur
app.get("/", (req,res) =>{
    res.send("Bienvenue sur mon serveur");
});
// Démarrage du serveur local
app.listen(PORT, ()=>{
    console.log(`le serveur a démarré sur le port: ${PORT}`);
    
})