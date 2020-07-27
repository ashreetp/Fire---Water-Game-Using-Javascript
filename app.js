/*

GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score0=0,score1=0,active=0,rand=0,randval=0;
document.querySelector('.btn-new').addEventListener('click',function() {
    score0=0,score1=0,active=0,rand=0,randval=0;
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('.btn-roll').style.display='block';
    document.querySelector('.btn-hold').style.display='block';
    document.querySelector('.dice').style.display='none';
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active')

})
document.querySelector('.dice').style.display='none';
document.querySelector('.btn-roll').addEventListener('click',function() {
    rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
    if (rand != 1)
    {
        randval+=rand;
        document.querySelector('#current-'+active).textContent=randval;
        document.querySelector('.dice').style.display='block';
        document.querySelector('.dice').src='dice-'+rand+'.png';
    }
    else
    {
        randval=0;
        document.querySelector('#current-'+active).textContent=randval;
        if(active==0)
        {
            document.querySelector('.player-0-panel').classList.remove('active')
            document.querySelector('.player-1-panel').classList.add('active')
        }
        else
        {
            document.querySelector('.player-1-panel').classList.remove('active')
            document.querySelector('.player-0-panel').classList.add('active')
        }
        document.querySelector('.dice').style.display='block';
        document.querySelector('.dice').src='dice-'+rand+'.png';
        active === 0 ? active=1 : active = 0;
    }
    
 })

 document.querySelector('.btn-hold').addEventListener('click',function() {
     var scr=parseInt(document.querySelector('#score-'+active).textContent)
     document.querySelector('#score-'+active).textContent=(scr+randval);
     rand=0;
     randval=0;
     document.querySelector('#current-'+active).textContent=0;
     if(parseInt(document.querySelector('#score-'+active).textContent)>=100)
        {
        document.querySelector('.dice').style.display='none';
        document.querySelector('.btn-hold').style.display='none';
        document.querySelector('.btn-roll').style.display='none';
        document.querySelector('#score-'+active).textContent="Winner";
        }
     if(active==0)
     {
        document.querySelector('.player-0-panel').classList.remove('active')
        document.querySelector('.player-1-panel').classList.add('active')
     }
     else
     {
        document.querySelector('.player-1-panel').classList.remove('active')
        document.querySelector('.player-0-panel').classList.add('active')
     }
     document.querySelector('.dice').style.display='none';
     active == 0 ? active=1 : active = 0;
     
 })