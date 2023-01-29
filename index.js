let Submited = false;
const x = document.querySelectorAll(".btn")
const selection = document.getElementById('rating')


function Submit(){
    if(Submited){
        Submited = false;
        return document.body.classList.remove("submited")
    }
    Submited = true;
    document.body.classList += " submited";


}



x.forEach((rating) => {
    rating.addEventListener('click', function() {
        selection.textContent = rating.textContent
    })
    
}) 

