function searchMoves(){
 
   const input= document.getElementById('filter').value.toUpperCase();
     
   console.log(input)
      
   const containarCard =document.getElementById("card-list")
   console.log(containarCard)

    const cards =containarCard.getElementsByClassName("card")

    console.log(cards)

   for(let i=0 ;i<cards.length;i++)
   {
    let littel =cards[i].querySelector(".card h3.card-title")
    console.log(littel)
    if(littel.innerText.toUpperCase().indexOf(input) >-1)
      {
        cards[i].style.display="";
      }
        else 
        {
            cards[i].style.display="none"
        }

   
   }
}