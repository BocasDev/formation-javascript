

const formulaire=document.querySelector("#formulaire");
const message=document.querySelector("#message");
const nomInput=document.querySelector("#nom");
const codeInput=document.querySelector("#code");
const liste=document.querySelector("#liste");

function verifierNom(nom){
    if(nom===""){
        //message.textContent="Veuillez renseignez le champ nom du formulaire";
        return false;
    }
    true;
}
function verifierCode(cod){
    if(cod===""){
        //message.textContent="Veuillez renseignez le champ code du formulaire";
        return false;
    }
    return true;
}
// cette fonction crée un objet puis l'envoie au serveur fetch
async function creerFilleul(nam,cod){
    const filleul={
        nom: nam,
        code: cod
    };
    //console.log(filleul);
    
    const response = await fetch("http://localhost:3000/api/filleul", {
        method: "POST",
        headers:
        {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(filleul)
    });
    const resultat=await response.json();
    return resultat;
}


formulaire.addEventListener("submit", async(event) =>{
    event.preventDefault();
    
const nom=nomInput.value.trim();
const code=codeInput.value.trim();

try 
{
    const resultat= await creerFilleul(nom,code);
    console.log(resultat);
   // message.textContent=resultat.message;
} catch (error) {
    message.textContent="Erreur de connexion au serveur";
}
    
    
});
