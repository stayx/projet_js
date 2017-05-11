function machineASous(){
    
/* Gestion du score et credit */
	var creditJoueur = document.getElementById("credit").value;
	var highscore = document.getElementById("highscore").value;
	
/* Tirages des images */
    var u = Math.floor(Math.random()*4);
    var v = Math.floor(Math.random()*4);
	var w = Math.floor(Math.random()*4);
	var x = Math.floor(Math.random()*4);
	var y = Math.floor(Math.random()*4);
    var z = Math.floor(Math.random()*4);
	
/* Images aléatoires */
    document.getElementById("img_sous_0").src = 'image/img_' + u + '.jpg';
	document.getElementById("img_sous_1").src = 'image/img_' + v + '.jpg';
    document.getElementById("img_sous_2").src = 'image/img_' + w + '.jpg';
	document.getElementById("img_sous_3").src = 'image/img_' + x + '.jpg';
	document.getElementById("img_sous_4").src = 'image/img_' + y + '.jpg';
    document.getElementById("img_sous_5").src = 'image/img_' + z + '.jpg';
    document.getElementById("img_sous_0").className = "rotateIn animated";
	document.getElementById("img_sous_1").className = "rotateIn animated";
	document.getElementById("img_sous_2").className = "rotateIn animated";
    document.getElementById("img_sous_3").className = "rotateIn animated";
    document.getElementById("img_sous_4").className = "rotateIn animated";
    document.getElementById("img_sous_5").className = "rotateIn animated";
    setTimeout(function(){
        var i = 0
        if(i=1){
        if(document.getElementById("img_sous_0").className == "rotateIn animated"){
    document.getElementById("img_sous_0").removeAttribute("class");
	document.getElementById("img_sous_1").removeAttribute("class");
	document.getElementById("img_sous_2").removeAttribute("class");
    document.getElementById("img_sous_3").removeAttribute("class");
    document.getElementById("img_sous_4").removeAttribute("class");
    document.getElementById("img_sous_5").removeAttribute("class");
    }}
        i++;
    },900);
    
/* Perdre 1 crédit à chaque tour perdu */
    creditJoueur -= 1;
    
/* Gagner 5 crédit à chaque tour gagné */
	if(u == v && v == w && w == x && x == y && y == z){
		creditJoueur += 20;
	}
    
/* Mises à jour du meilleur score */
	if(creditJoueur > highscore){
		highscore = creditJoueur;
	}
    
/* Réinitialisation lorsque le crédit est à 0 */
    if(creditJoueur == 0){
        alert('Désolé vous avez perdu! Recommencez à nouveau!');
        window.location.reload();
    }
    
/* Mises à jour des points */
	document.getElementById("credit").value = creditJoueur;
	document.getElementById("highscore").value = highscore;
    
    }