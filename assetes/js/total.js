
var newdiv1=document.createElement('div');

document.body.appendChild(newdiv1);



function total(){

  var total=0;
 var totalcard=JSON.parse(localStorage.getItem('totalcard'));
 var card=JSON.parse(localStorage.getItem('card'));
 //console.log(totalcard)
//  var card=JSON.parse(localStorage.getItem('card'));// get data from localstorg
//     console.log(card)
 

   for(var i=0 ;i<totalcard.length;i++ ){

  var newdiv=document.createElement('div');

  var img=document.createElement('img'); 
  var price=document.createElement("h3");
  var id=document.createElement("span");

   var button=document.createElement('button');
   img.src=totalcard[i].imges;
   //price.innerText=totalcard[i].price;
    button.innerText="delete"
    id.innerText=totalcard[i].id
  






   
  
 // totoal+=cart[i].price;

  total+=totalcard[i].price;
 
  newdiv1.setAttribute("id","card-list")
  newdiv.setAttribute("class","card")
  id.setAttribute("class","span")
   button.setAttribute("class","delete")
   price.setAttribute("id","pric")
    newdiv.appendChild(img);
    newdiv.appendChild(price);
    newdiv.appendChild(button);
    newdiv1.appendChild(newdiv);
    newdiv.appendChild(id);

  //  var spn=document.getElementsByClassName("span");
  //  console.log(spn)
  
 
    button.onclick=function remove(){
      var totalcard=JSON.parse(localStorage.getItem('totalcard'));

    var myid= this.parentElement.children[2];
   
    console.log(myid)  ;
    myid.remove()
     
    localStorage.setItem("totalcard",JSON.stringify(totalcard));
  
   // location.assign("file:///media/abdelmonam/abdo/PHP/JavaScript/projat/movecards.html");
  }




}
  



var totalPrice=document.createElement("h3");
//totalPrice.innerHTML=`total price ${total}`;

document.body.appendChild(totalPrice);

//localStorage.setItem("card",JSON.stringify(card));



 }

 


function process(){
    totalcard=[]
    localStorage.setItem("totalcard",JSON.stringify(totalcard));
   location.reload()
}

 