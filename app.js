// DECLARATION VARIABLE
let accordions = document.getElementsByClassName("container-accordion");
let i;


for(i = 0; i < accordions.length; i++){
    accordions[i].addEventListener('click', function(){

        let activated = [...this.classList].includes('active'); // On stocke si le containe contient la class active
        [...accordions].forEach(function (accordion){
            if([...accordion.classList].includes('active')){
                accordion.classList.remove('active');
            }
            
        });
        // Si il ne contenait pas active alors on lui donne !
        if(activated === false){
        this.classList.add('active'); // this représente l'élement qui a été cliqué
        }
    });
}
