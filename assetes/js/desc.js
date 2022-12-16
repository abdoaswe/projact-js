
var totalcard=[]
//var totalcard=JSON.parse(localStorage.getItem('totalcard'));
// localStorage.setItem("totalcard",JSON.stringify(totalcard));
var card=JSON.parse(localStorage.getItem('card'));

 var newdiv=document.createElement('div');
 

    document.body.appendChild(newdiv);

// console.log(card.length)
    for (var i =0 ; i<card.length;i++)
    {
      
       
       var newdiv1=document.createElement("div");
       var img=document.createElement('img');
       var title=document.createElement("h3");
       
       var button =document.createElement("button");
       var mydiv =document.createElement("div");
       var rate =document.createElement("div");
   
       img.src=card[i].imges; 
   
       title.innerText=card[i].name; 
       mydiv.innerText=card[i].discript;
       //console.log (aw);
       rate.innerText=card[i].rate
   
       button.innerText="add favorit";



       button.onclick=function aswe() 
       { 
       
       
       var totalcard=JSON.parse(localStorage.getItem('totalcard')); 
 
         totalcard.push(card[0]); 
         
        localStorage.setItem("totalcard",JSON.stringify(totalcard));


        
           
   
   

           location.assign('file:///media/abdelmonam/abdo/PHP/JavaScript/projact/Favoret.html')

        
    
    }

   newdiv.setAttribute("id","card-list")
   newdiv1.setAttribute("class","card")
   title.setAttribute("class",'card-title')
   button.setAttribute("class","button")
   rate.setAttribute("class",'card-rate')
   
    newdiv .appendChild(newdiv1); 
    newdiv1.appendChild(img);
    newdiv1.appendChild(title);
    newdiv1.appendChild(mydiv);

   
    newdiv1.appendChild(button);
    
    newdiv1.appendChild(rate);
   




 }
       
      
    