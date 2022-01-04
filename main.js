
let ctd = ['Electrique','Essence','Hybride','Diesel'];
let moto = ['Electrique','Essence'];
let cpt_brl = ['Essence','Hybride','Diesel'];

let utl = ['Diesel'];
let engin = ['Essence','Diesel'];
let cmn = ['Diesel'];
const lista1= document.querySelector('#type-v'),
lista2 = document.querySelector('#auto'),
lista3 = document.querySelector("#motorisation"),
lista4 = document.querySelector("#duree");
let a = ['Automatique'],m=['Mannuelle'];





form = document.querySelector('form');
form.addEventListener('submit',e=>{
    let vehicule  = lista1.value;
    let boite  = lista2.value;
    let motorisation = lista3.value;
    e.preventDefault();
    let nj = lista4.value;
    let prixF = montant * nj;
    console.log(prixF);
    // alert('Le type de véhicule : '+vehicule+" ( "+boite+' )\n'+"La motorisation : "+motorisation+"\nLe montant que vous devez payer est : "+prixF+" €");
    swal({
        title: vehicule+" "+motorisation,
        text: "Le montant que vous devez payer est  "+prixF+" €",
        icon: "success",
        button: "Merci",
      });
})

lista1.addEventListener('change',()=>{
    let vehicule  = lista1.value;
    lista3.innerHTML='<option>choisir</option>'

    if(vehicule=='citadine'){
       
        ctd.forEach(e => {
            let moteurC = document.createElement('option');
            moteurC.textContent += `${e}`;
            lista3.appendChild(moteurC);
        });
    }else if(vehicule=='moto'){
        moto.forEach(ev => {
            let moteurM = document.createElement('option');
            moteurM.textContent+=`${ev}`;
            lista3.appendChild(moteurM);
        });
    }else if(vehicule=='compact'){

        
        cpt_brl.forEach(el => {
            let moteurCp = document.createElement('option');
            moteurCp.textContent += `${el}`;
            lista3.appendChild(moteurCp);
        });
    }else if(vehicule=='berline'){       
        cpt_brl.forEach(elt => {
            let moteurB = document.createElement('option');
            moteurB.textContent += `${elt}`;
            lista3.appendChild(moteurB);
        });
    }else if(vehicule=='utilitaire'){
        utl.forEach(e => {
            let moteurU = document.createElement('option');
            moteurU.textContent+=`${e}`;
            lista3.appendChild(moteurU);
        });
    }else if(vehicule=='engin'){

       
        engin.forEach(e => {
            let moteurE = document.createElement('option');
            moteurE.textContent+=`${e}`;
            lista3.appendChild(moteurE);
        });
    }else if(vehicule=='camion'){

        cmn.forEach(e => {
            let moteurCm = document.createElement('option');
            moteurCm.textContent+=`${e}`;
            lista3.appendChild(moteurCm);
        });
    }
    
})

lista1.addEventListener('change',()=>{
    let vehicule  = lista1.value;
    lista2.innerHTML='<option>choisir</option>'

    if(vehicule=='citadine'){
       
        m.forEach(e => {
            let btC = document.createElement('option');
            btC.textContent += `${e}`;
            lista2.appendChild(btC);
        });
    
    }else if(vehicule=='compact'){
        m.forEach(el => {
            let btCp = document.createElement('option');
            btCp.textContent += `${el}`;
            lista2.appendChild(btCp);
        });
    }else if(vehicule=='berline'){       
        a.forEach(elt => {
            let btB = document.createElement('option');
            btB.textContent += `${elt}`;
            lista2.appendChild(btB);
        });
    }else if(vehicule=='utilitaire'){
        m.forEach(e => {
            let btU = document.createElement('option');
            btU.textContent+=`${e}`;
            lista2.appendChild(btU);
        });
    }else if(vehicule=='engin'){
        m.forEach(e => {
            let btE = document.createElement('option');
            btE.textContent+=`${e}`;
            lista2.appendChild(btE);
        });
    }else if(vehicule=='camion'){

        a.forEach(e => {
            let btCm = document.createElement('option');
            btCm.textContent+=`${e}`;
            lista2.appendChild(btCm);
        });
    }
    
})


lista3.addEventListener('change',()=>{
    // let montant = 0;
    let vehicule  = lista1.value;
    let boite  = lista2.value;
    let motorisation = lista3.value;


    if( vehicule=='moto' &&  motorisation=="Electrique"){
        montant=10+(10*5/100);
    }else if( vehicule=='moto' &&  motorisation=="Essence"){
        montant=10+(10*14/100);
    }

     
    if(vehicule=='citadine' && boite=='Mannuelle' && motorisation=='Electrique'){
        montant=12+(12*5/100);
    }else if( vehicule=='citadine' && boite=='Mannuelle' &&  motorisation=="Essence"){
        montant=10+(10*14/100);
    }else if( vehicule=='citadine' && boite=='Mannuelle' &&  motorisation=="Hybride"){
        montant=10+(10*9/100);
    }else if( vehicule=='citadine' && boite=='Mannuelle' &&  motorisation=="Diesel"){
        montant=10+(10*9/100);
    } 
    
    
    if(vehicule=='compact' && boite=='Mannuelle' && motorisation=='Essence'){
        montant=14+(14*14/100);
    }else if(vehicule=='compact' && boite=='Mannuelle' && motorisation=='Hybride'){
        montant=14+(14*9/100);
    }else if(vehicule=='compact' && boite=='Mannuelle' && motorisation=='Diesel'){
        montant=14+(14*21/100);
    }
    
    if(boite=='Automatique' && vehicule =='berline' && motorisation=="Hybride"){
        montant=20 + (20*19/100)+(20*9/100);
    }else if(boite=='Automatique' && vehicule =='berline' && motorisation=="Essence"){
        montant=20 + (20*19/100)+(20*14/100);
    }else if(boite=='Automatique' && vehicule =='berline' && motorisation=="Diesel"){
        montant=20 + (20*19/100)+(20*21/100);
    }
   
    if(vehicule=='utilitaire' && boite=='Mannuelle' && motorisation=="Diesel"){
        montant=16+(16*21/100);
    }
    
    if(vehicule=='engin' && boite=='Mannuelle' && motorisation=="Diesel"){
        montant=900+(900*21/100);
    }else if(vehicule=='engin' && boite=='Mannuelle' && motorisation=='Essence'){
        montant=900+(900*14/100);
    }
     
    if(vehicule=='camion' && boite=='Automatique'){
        montant=250+ (250*19/100);
    }

})
