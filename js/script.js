document.addEventListener('DOMContentLoaded', function() {

  //  DOM Méthods 
    document.getElementById("header-demo").innerHTML = "Démo Manipulation DOM!";

    // DOM CSS
    document.getElementById("header-demo").style.color = "blue";
    document.getElementById("header-demo").style.fontFamily = "Arial";
    document.getElementById("header-demo").style.fontSize = "30px";

    
  
   
    // DOM Elements
    const paragraphs = document.querySelectorAll('#demo-section p');

    if (paragraphs.length > 0) {
        document.getElementById('demo-result').innerHTML = 'Le premier paragraphe explique que le DOM permet la manipulation des éléments de la page web : ' + paragraphs[0].innerHTML;
      } else {
        document.getElementById('demo-result').innerHTML = 'Il semble que les paragraphes sur le DOM ne sont pas disponibles.';
      }





  
  
      });




    // DOM Events
 
    function changeText(id) {
      id.innerHTML = "Réalisez vos rêves !";
    }

// DOM Event Listerner

    var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myMoFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myMoFunction() {
  document.getElementById("demo").innerHTML += "Le succès est proche !<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Agissez avec détermination !<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Continuez à avancer !<br>";
}



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

  //  DOM Navigation 
  
  document.getElementById("source").innerHTML = document.getElementById("destinationParagraph").innerHTML;
  // function highlightLastItem() {
  //   const list = document.getElementById('list');
  //   const lastItem = list.lastElementChild;
  //   if (lastItem) {
  //     lastItem.classList.add('highlight');
  //   }
  //   // document.getElementById("element-2").remove();
    
  // }

  //  DOM HTML 
  document.getElementById("ft").innerHTML = "Date : " + Date();


  
  // DOM Nodes

// 1. Ajouter un paragraphe à la fin du conteneur 'div1'
const addParaBtn = document.getElementById("addParaBtn");
addParaBtn.addEventListener("click", function() {
    const element = document.getElementById("div1");
    const para = document.createElement("p");
    const node = document.createTextNode("Commence et n'abandonne jamais.");
    para.appendChild(node);
    element.appendChild(para);
  
});

// 2. Insérer un nouveau paragraphe avant le paragraphe P1
const insertParaBtn = document.getElementById("insertParaBtn");
insertParaBtn.addEventListener("click", function() {
    const element = document.getElementById("div1");
    
    // Vérifiez si le paragraphe existe déjà pour éviter les doublons
    const existingPara = document.getElementById("insertedPara");
   

    const para = document.createElement("p");
    para.id = "insertedPara"; 
    const node = document.createTextNode("Agis maintenant, réussis demain.");
    para.appendChild(node);
    const child = document.getElementById("p2");
    element.insertBefore(para, child);
        
});

// 3. Supprimer le paragraphe P1
const removeParaBtn = document.getElementById("removeParaBtn");
removeParaBtn.addEventListener("click", function() {
    const p1 = document.getElementById("p1");
    p1.remove();
   
});

// 4. Remplacer le paragraphe P2
const replaceParaBtn = document.getElementById("replaceParaBtn");
replaceParaBtn.addEventListener("click", function() {
    const element = document.getElementById("div1");
    const newPara = document.createElement("p");
    const newText = document.createTextNode("Progresser, c'est réussir.");
    newPara.appendChild(newText);
    const oldChild = document.getElementById("p2");
   element.replaceChild(newPara, oldChild);
       
});


//  DOM Collections
function myMod() {
  const section = document.getElementById("demo-section-nodes");
  
  if (section) {
      const paragraphs = section.getElementsByTagName("p");
      for (let i = 0; i < paragraphs.length; i++) {
          paragraphs[i].style.color = "red";
      }
  }

}

//  DOM Node Lists

const allParagraphs = document.querySelectorAll("#demo-section-nodes-lists p");

document.getElementById("demo1").innerHTML = "Ce document contient " + allParagraphs.length + " paragraphes.";
