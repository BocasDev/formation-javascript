const express = require("express");
const {Pool}=require("pg");
const app=express();
const PORT=3000;
app.use(express.json());

app.post("/api/inscription", async(req,res) =>{
    /* console.log(req.body);
    res.send({
        message: "utilisé enregistré avec succès"
    })
   */ 
  {
    try {
        const {nom,code}=req.body;
        const resultat=await pool.query(
              `
                    INSERT INTO utilisateurs
                    (nom, code_parrainage)
                    VALUES ($1, $2)
                    RETURNING *
                    `,

                    [
                        nom,
                        codeParrainage
                    ]

                );
                res.status(201).json({
                    message: "Utilisateur inscrit avec succès",
                    utilisateur: resultat.rows[0]
                });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Erreur lors de l'inscription"
        });
        
    }
  }
})

const pool = new Pool({

    user: "postgres",

    host: "localhost",

    database: "plateforme_parrainage",

    password: "@dmin051290",

    port: 5432

});
pool.query("")
    .then((resultat) => {

        console.log(
            "Connexion réussie :",
            resultat.rows[0]
        );

    })
    .catch((error) => {

        console.log(
            "Erreur de connexion :",
            error
        );

    });