const ratio = 0.2;
const options = {
  root: null, // Utilise la fenêtre comme conteneur
  rootMargin: "0px", // Pas de décalage
  threshold: ratio, // Déclenche lorsque 20% de l'élément est visible
};

const callback = function (entries) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      // Ajoute les classes pour déclencher l'animation
      if (entry.target.classList.contains("apparaitre")) {
        entry.target.classList.add("apparaitre-visible");
      }
      if (entry.target.classList.contains("trans_left")) {
        entry.target.classList.add("trans_left_true");
      }
    } else {
      // Retire les classes lorsque l'élément sort du viewport
      if (entry.target.classList.contains("apparaitre")) {
        entry.target.classList.remove("apparaitre-visible");
      }
      if (entry.target.classList.contains("trans_left")) {
        entry.target.classList.remove("trans_left_true");
      }
    }
  });
};

// Initialise l'observateur
const observer = new IntersectionObserver(callback, options);

// Observe les éléments
document.querySelectorAll(".apparaitre, .trans_left").forEach(function (element) {
  observer.observe(element);
});






// ANIMATION EN ALLER RETOUR
/*const ratio = 0.2; // Seuil d'intersection
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const callback = function (entries) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      // Ajoute les classes pour l'animation lorsqu'on entre dans la vue
      entry.target.classList.add("apparaitre-visible");
      entry.target.classList.remove("apparaitre-sortie");
    } else {
      // Ajoute les classes pour revenir en arrière lorsqu'on sort de la vue
      entry.target.classList.remove("apparaitre-visible");
      entry.target.classList.add("apparaitre-sortie");
    }
  });
};

// Initialise l'observateur
const observer = new IntersectionObserver(callback, options);

// Observe les éléments avec la classe `apparaitre`
document.querySelectorAll(".apparaitre").forEach(function (r) {
  observer.observe(r);
});










*/





