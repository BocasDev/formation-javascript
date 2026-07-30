const formulaire=document.querySelector("#formulaire");
const message=document.querySelector("#message");
const nomInput=document.querySelector("#nom");
const codeInput=document.querySelector("#code");
const liste=document.querySelector("#liste");

function verifierNom(nom){
    if(nom===""){
       // message.textContent="Veuillez renseignez le champ nom du formulaire";
        return false;
    }
    return true;
}
function verifierCode(cod){
    if(cod===""){
       // message.textContent="Veuillez renseignez le champ code du formulaire";
        return false;
    }
    return true;
}
function creerFilleul(nam,cod){
    return {
        nom: nam,
        code: cod
    };
}


formulaire.addEventListener("submit", async(event) =>{
    event.preventDefault();
    const nom=nomInput.value.trim();
const code=codeInput.value.trim();
    if(!verifierNom(nom)){
        message.textContent="Veuillez remplir le champ nom de ce formulaire";
        return;
    }
    if(!verifierCode(code)){
        message.textContent="Veuillez remplir le champ code de ce formulaire";
        return;
    }
    const filleul=creerFilleul(nom,code);
    console.log(filleul);
    
    try {
        const response = await fetch("http://localhost/3000", {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filleul)
        });
        const resultat= await response.json();
        console.log(resultat);
        
    } 
    catch (error) {
        message.textContent="Erreur de connexion au serveur";
    }
});
