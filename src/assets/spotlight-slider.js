import {$} from "jquery";
import { func } from "prop-types";
    /* --------------------------------------
   Spotlight slider starts here
----------------------------------------- */

const spotlightSlider = {

  // add here all selectors and other config vars
  config: {
    selector: '.spotlight-slider',
    noScrollClass: 'no-scroll',
    animationTimeout: 600,
    startSlideTransitionTimeout: 400,
    slideAttribute: 'data-slide',
    elementsAnimationClass: '.animation-in',
    elementsAnimationClassOut: '.animation-out',
    animationClass: '.slide-up',
    dotsContainerClass: '.spotlight-indicator',
    dotActiveClass: '.spotlight-indicator__bar--active',
    dotAttribute: 'data-slide-target',
    scrollButtonsSelector: '[data-js="spotlightScroll"]',
    forwardClass: 'next',
    backwardsClass: 'prev',
    winHeight: null
  },

  // selects the main slider container
  slider: function() {
    const slider = document.querySelector(spotlightSlider.config.selector);
    return slider;
  },


  // ADDS the class which activates the normal page scroll 
  addBodyClass: function() {
    if (document.querySelector(".slick-slider")) {
      document.body.classList.remove("no-scroll");
    } else {
      const body = document.body;
      body.classList.add(spotlightSlider.config.noScrollClass);
    }
  },


  // REMOVES the class which activates the normal page scroll 
  removeBodyClass: function() {
    const body = document.body;
    body.classList.remove(spotlightSlider.config.noScrollClass);
  },


  // checks if the window scroll is on top
  isTop: function() {
    const windowHeight = window.innerHeight;
    const scrollPos = window.pageYOffset;
    
    return scrollPos == 0;
  },


  // set a timer for which a new scroll cannot be performed
  // this should match the CSS animation time
  isPaused: function() {
    const currentTime = Date.now();
    
    if (currentTime - window.time < spotlightSlider.config.animationTimeout) {
      return true;
    } else {
      window.time = currentTime;
      return false;
    }
  },


  // hightlights the dot for the current slide
  setCurrentDot: function(direction) {
    const currentSlide = spotlightSlider.getCurrentSlide();
    const currentSlideNr = currentSlide.getAttribute(spotlightSlider.config.slideAttribute);
    const dotsContainer = spotlightSlider.slider().querySelector(spotlightSlider.config.dotsContainerClass);
    const activeDot = dotsContainer.querySelector(spotlightSlider.config.dotActiveClass);
    const currentDot = dotsContainer.querySelector('['+ spotlightSlider.config.dotAttribute + '="' + currentSlideNr + '"]');
    
    dotsContainer.classList.remove(spotlightSlider.config.forwardClass);
    dotsContainer.classList.remove(spotlightSlider.config.backwardsClass);
    dotsContainer.classList.add(direction);
    activeDot.classList.remove(spotlightSlider.config.dotActiveClass.replace('.', ''));
    currentDot.classList.add(spotlightSlider.config.dotActiveClass.replace('.', ''));
  },


  // get current slide by getting last element who has animation class
  getCurrentSlide: function() {
    const visibleSlides = spotlightSlider.slider().querySelectorAll(spotlightSlider.config.animationClass);
    const currentSlide = visibleSlides[visibleSlides.length - 1];
    
    return currentSlide;
  },


  // checks if there is any other slide who has data-slide attribute after the current one
  isLastSlide: function() {
    const currentSlide = spotlightSlider.getCurrentSlide();
    const nextSlide = currentSlide.nextElementSibling;
    
    if( nextSlide !== null && 
        nextSlide.getAttribute(spotlightSlider.config.slideAttribute) !== null ) {
      return false;
    }

    return true;
  },


  // shows previous slide by removing animation class from current slide
  goToPreviousSlide: function() {
    const currentSlide = spotlightSlider.getCurrentSlide();
    const prevSlide = currentSlide.previousElementSibling;    

    if( prevSlide.getAttribute(spotlightSlider.config.slideAttribute) !== null ) {
      
      // --- hide elements animation
      currentSlide.classList.remove(spotlightSlider.config.elementsAnimationClass.replace('.', ''));
      currentSlide.classList.add(spotlightSlider.config.elementsAnimationClassOut.replace('.', ''));

      // --- animate previous slide
      setTimeout(function() {
        currentSlide.classList.remove(spotlightSlider.config.animationClass.replace('.', ''));
        spotlightSlider.setCurrentDot(spotlightSlider.config.backwardsClass);
      }, spotlightSlider.config.startSlideTransitionTimeout);

      // --- show elements on new slide
      setTimeout(function() {
        currentSlide.classList.remove(spotlightSlider.config.elementsAnimationClassOut.replace('.', ''));
        prevSlide.classList.add(spotlightSlider.config.elementsAnimationClass.replace('.', ''));
      }, spotlightSlider.config.startSlideTransitionTimeout + spotlightSlider.config.animationTimeout);
    }    

  },


  // shows next slide adding animation class
  goToNextSlide: function(e) {
    const currentSlide = spotlightSlider.getCurrentSlide();
    const nextSlide = currentSlide.nextElementSibling;

    // --- hide elements animation
    currentSlide.classList.remove(spotlightSlider.config.elementsAnimationClass.replace('.', ''));
    currentSlide.classList.add(spotlightSlider.config.elementsAnimationClassOut.replace('.', ''));
    
    // --- animate previous slide
    setTimeout(function() {
      nextSlide.classList.add(spotlightSlider.config.animationClass.replace('.', ''));
      spotlightSlider.setCurrentDot(spotlightSlider.config.forwardClass);
    }, spotlightSlider.config.startSlideTransitionTimeout);
    
    // --- show elements on new slide
    setTimeout(function() {
      currentSlide.classList.remove(spotlightSlider.config.elementsAnimationClassOut.replace('.', ''));
      nextSlide.classList.add(spotlightSlider.config.elementsAnimationClass.replace('.', ''));
    }, spotlightSlider.config.startSlideTransitionTimeout + spotlightSlider.config.animationTimeout);
   
  },

  

  goToTop: function() {
    const scrollPos = window.innerHeight;
    $("html, body").animate({ 
      scrollTop: scrollPos
    }, "slow");    
  },

  // performs all the actions for mouse wheel scroll
  scrollEvents: function(e) {
    // --- adds no-scroll bodyClass to enter into the slider behavior
    if (e.deltaY < 0 && spotlightSlider.isTop()) {
      spotlightSlider.addBodyClass(); 
    }  

    // --- prevents doing any action before the animation finishes
    if (spotlightSlider.isPaused()) {
      return false;
    }

    // --- if scrolls up and is on top of the page move to previous slide
    if (e.deltaY < 0 && spotlightSlider.isTop()) {
      spotlightSlider.goToPreviousSlide();
    }

    // --- if scrolls down and IS the last slide start normal scrolling
    if (e.deltaY > 0 && spotlightSlider.isLastSlide()) {
      spotlightSlider.removeBodyClass();
    }

    // --- if scrolls down and is NOT the last slide move to next slide
    if (e.deltaY > 0 && !spotlightSlider.isLastSlide()) {
      spotlightSlider.goToNextSlide();
    } 
  },

  // activates normal scroll and goes to next block 
  scroll: function(e) {
    spotlightSlider.removeBodyClass();
    spotlightSlider.goToTop();
  },

  // binds mouse wheel event
  addScrollEvents: function() {
    document.body.addEventListener("wheel", spotlightSlider.scrollEvents);
  },

  
  // binds events for scroll buttons
  addButtonsEvents: function() {
    const scrollButtons = spotlightSlider.slider().querySelectorAll(spotlightSlider.config.scrollButtonsSelector);
    //Changed foreach to Array.prototype.forEach for IE11
    Array.prototype.forEach.call(scrollButtons, function(button, index){
      // --- remove the event from last slide scroll button
      if (index < scrollButtons.length - 1) {
        button.addEventListener("click", spotlightSlider.goToNextSlide);
      } else {
        button.addEventListener("click", spotlightSlider.scroll);
      }
    });
  },


  // binds the custom function to mouse wheel event
  init: function(selector, disable) {
    if (disable) {
      return false;
    }

    spotlightSlider.config.selector = selector;
    
    // --- bind the events listeners just if there is a slider instance on the page
    if (spotlightSlider.slider !== null) {
      spotlightSlider.addBodyClass();
      spotlightSlider.addScrollEvents();
      spotlightSlider.addButtonsEvents();
    }
  }
}

// initializes the spotlight slider

//const section = document.body.classList;
//const disable = ( isMobile.any() || document.body.classList || document.body.classList.indexOf('home') !== -1 );

// spotlightSlider.init('.spotlight-slider', disable);
setTimeout(function(){
    spotlightSlider.init('.spotlight-slider');
}, 3000);