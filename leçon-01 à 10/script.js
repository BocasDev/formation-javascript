// application de la notion des fonctions en js



function salutation() {
    console.log('Salut les pros.....');
    
}
salutation();

const salprof=function () {
    console.log('Salut mon professeur');
};
salprof();

const SurfRect=function () {
    let L=10;
    let l=5;
    let Surf = L*l;
    return Surf;
}
const result=SurfRect();
console.log(result);

const SurfCarre=function() {
   let carre=20;
   return carre**2;
};
const surfCar=SurfCarre();
console.log(`la surface du carré est: ${surfCar}`);

// fonction avec paramètres

const Rect = function (longueur, largeur) {
    let surfaceR=longueur*largeur;
    return surfaceR;
}
const afRect=Rect(15,3);
console.log(afRect);

const carr=function(cote) {
    return cote**2;
};
const afcar=carr(10);
console.log(afcar);
const moyenne=function(n1,n2,n3) {
    return (n1+n2+n3)/3;
}
const afmoy=moyenne(12,15,7);
for(let i=1;i<=5;i++){
    console.log(afmoy);
    console.log(afmoy);
}

const pou= (long,larg) => {
    
    return console.log(long*larg);
}
pou(5,6);

// application des objets

const personne={
    nom:'Duplex',
    prenom: 'Bocas',
    email: 'hodboc@gmail.com',
    taille: 1.63,
    age: 23,
    couleur: 'blanc',
    blogs : ['les bases en js','cours html/css', 'zoo du bien'],
    login: function () {
        console.log('utilisateur connécté');
    },
    logout: function () {
        console.log('utilisateur déconnecté');
        
    },
    AfficherBlogs: function () {
        this.blogs.forEach((blog) =>{
            console.log(blog);
            
        })
    }

};
personne.login();
personne.logout();
personne.AfficherBlogs();

const articles =[
    {
        id:1,
        titre: 'Les bases sur le JS',
        contenu: 'tout savoir sur le JavaScript',
        likes: 15
    },
    {
        id:2,
        titre: 'Les bases sur le reactJs',
        contenu: 'tout savoir sur le react',
        likes: 8
    },
    {
        id:3,
        titre: 'Les bases sur le cours html et css',
        contenu: 'tout savoir sur le html/css',
        likes: 10
    }
];
articles.forEach((article) => {
    console.log(`${article.id} - ${article.titre} - ${article.contenu} et ${article.likes} ont aimé cet article`);
    
});

//const h=document.querySelectorAll('p');
//h.forEach(())

const titre=document.querySelector("#titre");
const bouton=document.querySelector("#btn");
bouton.addEventListener("click", ()=>{
    titre.textContent="Bienvenue sur ma plateforme";
});

const message=document.querySelector("#message");
const bouton1=document.querySelector("#btn1");
const bouton2=document.querySelector("#btn2");
bouton1.addEventListener("click", ()=>{
    message.style.display="none";
});
bouton2.addEventListener("click", ()=>{
    message.style.display="block";
});

// recupération de valeurs et controle de saisies

const inputNom=document.querySelector("#nom");
const inputCode=document.querySelector("#code");
const pMess=document.querySelector("#mess");
const bouton3 = document.querySelector("#btn3");
bouton3.addEventListener("click", ()=>{
    const nom=inputNom.value;
    const code=inputCode.value;
    if(nom==="" || code===""){
        pMess.textContent="Veuillez remplir les champs nom et code";
        return;
    }
    pMess.textContent=`Bonjour ${nom} ! 
    Ton code de parrainage est ${code} .`;
    
})

// création de formulaire et validation

const formulaire=document.querySelector("#formulaire");
const inputNoms=document.querySelector("#noms");
const inputtel=document.querySelector("#tel");
const inputPassword=document.querySelector("#password");
const inputCod=document.querySelector("#cod");
const pHello=document.querySelector("#hello");

formulaire.addEventListener("submit", (event) =>{
    event.preventDefault();
    const nomsUtilsateur=inputNoms.value.trim();
    const telUtilsateur=inputtel.value.trim();
    const passwordUtilsateur=inputPassword.value;
    const codUtilsateur=inputCod.value.trim();
    if(nomsUtilsateur==="" || telUtilsateur==="" || passwordUtilsateur==="" || codUtilsateur===""){
        pHello.textContent="Veuillez renseignés tous les champs.";
        return;
    }
    //console.log(passwordUtilsateur);
    
    if(passwordUtilsateur.length < 8 ){
        pHello.textContent="Votre mot de passe est trop court";
        return;
    }
    pHello.textContent=`Bienvenue ${nomsUtilsateur} ! votre demande a été enrégistrée`;
})

// création de liste des éléments avec des boutons dynamiques après un formulaire

const formulaire1= document.querySelector("#formulaire1");
const namInput=document.querySelector("#nam");
const liste=document.querySelector("#liste");
const messI=document.querySelector("#messI");
const codesInput=document.querySelector("#codes");
formulaire1.addEventListener("submit", (event) =>{
    event.preventDefault();
    const nam=namInput.value.trim();
    const codes=codesInput.value.trim();
    if(nam==="" || codes===""){
        messI.textContent="Veuillez remplir le champ nom avant de continuer";
        return;
    }
    const filleul= document.createElement("li");
    filleul.innerHTML=`
    <strong>${nam}</strong>
    <span>Code: ${codes} </span>
    `;
    const bouton5 = document.createElement("button");
    bouton5.textContent="Supprimer";
    //console.log(bouton5);
    //console.log(filleul);
    bouton5.addEventListener("click", () =>{
        filleul.remove();
    })
    filleul.appendChild(bouton5);
    liste.appendChild(filleul);
    namInput.value="";

})

// création de tableau puis remplissage et affichage sur la page

const namesInput=document.querySelector("#names");
const codessInput=document.querySelector("#codess");
const list=document.querySelector("#list");
const formulaire2=document.querySelector("#formulaire2");
const messo =document.querySelector("#messo");
//controle de données
function verifierNom(nomU){
     if(nomU===""){
        //messo.textContent="Veuillez renseigner le champ nom de votre formulaire";
        return false;
    }
        return true;
}
function verifierCode(codeU){
    if(codeU===""){
        //messo.textContent="Veuillez renseigner le champ nom de votre formulaire";
        return false;
    }
        return true;
}
// c
function creerU(nomU,codeU){
    return {
        nom: nomU,
        code: codeU,
        niveau: 1
    };
}
function afficherU(user){
    const elt = document.createElement("li");
    const btne=document.createElement("button");
    btne.textContent="Supprimer";
    elt.innerHTML=`
    <strong> ${user.nom} </strong>
    <span> ${user.code} </span>
   <span> ${user.niveau} </span>
    `;
    btne.addEventListener("click", ()=>{
        elt.remove();
    })
    elt.appendChild(btne);
    list.appendChild(elt);
}
const filleuls=[];
formulaire2.addEventListener("submit", (event) =>{
    event.preventDefault();
    const names=namesInput.value.trim();
    const codess=codessInput.value.trim();
   if(!verifierNom(names)){
    messo.textContent="Veuillez renseigner le champ nom de ce formulaire";
    return;
   }
    if(!verifierCode(codess)){
    messo.textContent="Veuillez renseigner le champ code de ce formulaire";
    return;
   }
   const user=creerU(names,codess);
    
    filleuls.push(user);
    afficherU(user);
    namesInput.value="";
    codessInput.value="";
});

// lecon8: localstorage sauvegarde des données dans le navigateur


