document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("header-demo").innerHTML = "Démo Manipulation DOM!";
  
   
    const paragraphs = document.querySelectorAll('#demo-section p');

    if (paragraphs.length > 0) {
        document.getElementById('demo-result').innerHTML = 'Le premier paragraphe explique que le DOM permet la manipulation des éléments de la page web : ' + paragraphs[0].innerHTML;
      } else {
        document.getElementById('demo-result').innerHTML = 'Il semble que les paragraphes sur le DOM ne sont pas disponibles.';
      }





  
    // DOM Events
    document.getElementById('trigger-event-btn').addEventListener('click', function() {
        const result = document.getElementById('event-result');
        result.textContent = 'Événement déclenché avec succès !';
      });
      
     
      });




        // DOM Forms
function myFunction() {
    const name = document.getElementById('name').value.trim();
    let text;
    if (name === "") {
      text = "Veuillez entrer un nom.";
    } else {
      text = `Bonjour, ${name} !`;
    }
    document.getElementById('form-result').textContent = text;
  }



   // DOM Animations
   document.getElementById('animate-btn').addEventListener('click', function() {
    const box = document.getElementById('box');
    box.style.transform = 'rotate(360deg)';
  });

  function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }

  function myFunction() {
    const list = document.getElementById('list');
    const lastItem = list.lastElementChild;
    if (lastItem) {
      lastItem.classList.add('highlight');
    }
  }