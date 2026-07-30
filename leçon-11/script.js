const formulaire=document.querySelector("#formulaire");
const message=document.querySelector("#message");
const nomInput=document.querySelector("#nom");
const codeInput=document.querySelector("#code");
const liste=document.querySelector("#liste");

function verifierNom(nom){
    if(nom===""){
        message.textContent="Veuillez renseignez le champ nom du formulaire";
        return;
    }
}
function verifierCode(cod){
    if(cod===""){
        message.textContent="Veuillez renseignez le champ code du formulaire";
        return;
    }
}
function creerFilleul(nam,cod){
    return {
        nom: nom,
        code: code
    };
}
const nom=nomInput.value.trim();
const code=codeInput.value.trim();
formulaire.addEventListener("submit", (event) =>{
    event.preventDefault();
    verifierNom(nom);
    verifierCode(code);
    const filleul=creerFilleul(nom,code);
})
