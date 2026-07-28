
const express=require("express");
const app=express();
const PORT=3000;
app.use(express.json());
app.post("/api/filleuls", (req,res) =>{
    const utilisateur {
            nom: jean,
            codeParrain: jean123
        }=req.body;
    
    
})
app.get("/", (req,res) =>{
    res.send("Bienvenue sur mon serveur");
});
app.listen(PORT, ()=>{
    console.log(`le serveur a démarré sur le port: ${PORT}`);
    
})