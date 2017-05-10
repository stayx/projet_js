function machineASous(){
    
/* Gestion du score et credit */
	var creditJoueur = document.getElementById("credit").value;
	var highscore = document.getElementById("highscore").value;
	
/* Tirages des images */
	var w = Math.floor(Math.random()*4);
	var x = Math.floor(Math.random()*4);
	var y = Math.floor(Math.random()*4);
    var z = Math.floor(Math.random()*4);
	
/* Images aléatoires */
	document.getElementById("img_sous_0").src = 'image/img_' + w + '.jpg';
	document.getElementById("img_sous_1").src = 'image/img_' + x + '.jpg';
	document.getElementById("img_sous_2").src = 'image/img_' + y + '.jpg';
    document.getElementById("img_sous_3").src = 'image/img_' + z + '.jpg';
    
/* Perdre 1 crédit à chaque tour perdu */
    creditJoueur -= 1;
    
/* Gagner 5 crédit à chaque tour gagné */
	if(w == x && x == y && y == z){
		creditJoueur += 5;
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