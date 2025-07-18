const radioButtons = document.querySelectorAll('.inputradio');
const formulaire_radio = document.querySelectorAll(".formulaire_radio")
const formulaire_email = document.querySelectorAll(".formulaire_email")



const  email_value=email.value;


 for (let index = 0; index < formulaire_email.length; index++) {
     const element_email = formulaire_email[index];
     const element_ratio=formulaire_radio[index];
     element_email.classList.add('hidden') 
    
  element_ratio.addEventListener('click',(e)=>{

   element_ratio.classList.add('hidden') 
   element_email.classList.remove('hidden') 
  })
   
 }







 ratio=0.2
   const options = {
       root: null,
       rootMargin: "0px",
       threshold:ratio,
     };
     
   
   const callback =function(entries, observer){
      entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratio){
        entry.target.classList.add('apparaitre-visible')
           observer.unobserve(entry.target);
    }
      });
   }
   
   const observer = new IntersectionObserver(callback, options);
   document.querySelectorAll(".apparaitre").forEach(function(r){
       observer.observe(r)
   })




   
   function handleSubmit(event) {
    event.preventDefault(); 



  }

