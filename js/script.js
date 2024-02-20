const { createApp } = Vue
createApp({
    data(){
        return{
            // memorizzo la slide attiva
            activeSlideIndex : 0,

             slides : [
                    {
                        image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ],
                
             autoplayTimer : 0,
            
            }
 
        },
    methods: {
        nextSlide(){
          this.activeSlideIndex ++ ; // this permette di andare a cercare nei data quello che c'è scritto dopo il punto
          if(this.activeSlideIndex >= this.slides.length){
              this.activeSlideIndex = 0;
          }
        },
        prevSlide(){
          this.activeSlideIndex -- ;
          if(this.activeSlideIndex < 0 ){
              this.activeSlideIndex = this.slides.length -1;
          }
        },
        changeSlide(index){
        //passare numero dell'immagine
            //console.log(index);
            this.activeSlideIndex = index ;

       },
       stopAutoplay(){
        clearInterval(this.autoplayTimer);
       },
       stratAutoplay(){
        this.autoplayTimer = setInterval(this.prevSlide, 3000);
       },
       mounted(){
            // tutto il codice scritto qua dentro verra eseguito
            //quando la'pplicazione è stata monatata
        
           // this.autoplayTimer = setInterval(this.prevSlide, 3000);
            this.stratAutoplay();
        },
    },
  }).mount("#app"); 

