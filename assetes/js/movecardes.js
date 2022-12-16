
var obj =[{id: 1, name:"Beach Cruiser Bicycle",imges:"https://cdn.arageek.com/magazine/bloodshot_6.jpg",price:10,rate:5,
discript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, distinctio."}
,{id: 2, name:"Best Hybrid Bikes" ,imges:"file:///media/abdelmonam/abdo/PHP/JavaScript/projact/img/Mulan_(2020_film)_poster.jpg",price:20,rate:8,
discript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, distinctio."}
,{id: 3,name:" Artimas Fowel",imges:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2020-artemis-fowl-1576601149.jpg?crop=0.9877750611246944xw:1xh;center,top&resize=480:*",price:30,rate:8,
discript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, distinctio."},
{id: 4,name:" war",imges:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96OKgI7_lKHW89Dwivc5zNlSnNRqPjiG6oQ&usqp=CAU",price:30,rate:3,
discript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, distinctio."},
{id: 5,name:" Pandora",imges:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bnzhjytnkowytmjk4os00y2uxlwfmzjitmmyzy2i3nmi5zde5xkeyxkfqcgdeqxvynzmzmju5ndyat-v1-sy1000-cr0-0-697-1000-al-1589908261.jpg",price:30,rate:8,
discript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, distinctio."},
{id: 6,name:" Resident",imges:"https://ok.arbcinema.com/wp-content/uploads/2021/11/%D9%81%D9%8A%D9%84%D9%85-R-Evil-Rac0N-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-268x333.jpg",price:30,rate:7,
discript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, distinctio."},
{id: 7,name:" Sacret Garden",imges:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-secret-garden-1579043478.jpg",price:30,rate:4,
discript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, distinctio."}]


var card=[]

 localStorage.setItem("card",JSON.stringify(card));

   var newdiv=document.createElement('div');

    document.body.appendChild(newdiv);

    for (var i =0 ; i<obj.length;i++)
    {
      
       
       var newdiv1=document.createElement("div");
       var img=document.createElement('img');
       var title=document.createElement("h3");
       var descript=document.createElement("p");
       
       var button =document.createElement("button");
       var span =document.createElement("span");
       var rate =document.createElement("div");
   
       img.src=obj[i].imges; 
   
       title.innerText=obj[i].name; 
      span.innerText=""+obj[i].id;
       //console.log (aw);
       rate.innerText="Rate : "+obj[i].rate
   
       button.innerText="see more";
       
      
   
       button.onclick=function aswe() 
       {
   
   
           
          var myid = this.parentElement.children[3].innerText; 

              var card=JSON.parse(localStorage.getItem('card')); 
   
           card.push(obj[myid-1]); 
           

           localStorage.setItem("card",JSON.stringify(card));
            
   
           location.assign('file:///media/abdelmonam/abdo/PHP/JavaScript/projact/desc.html')

        
    
    }

   newdiv.setAttribute("id","card-list")
   newdiv1.setAttribute("class","card")
   title.setAttribute("class",'card-title')
   button.setAttribute("class","button")
   rate.setAttribute("class",'card-rate')
   
   
    newdiv .appendChild(newdiv1); 
    newdiv1.appendChild(img);
    newdiv1.appendChild(title);
    newdiv1.appendChild(button);
    newdiv1.appendChild(span);
    newdiv1.appendChild(rate);
    newdiv1.appendChild(descript);
   




 }

 let range=document.getElementById("ran")
 let res=document.getElementById("res")

 range.addEventListener("change",function(e){
  
       var val=e.target.value
           res.innerText=` Rate is : ${val}`;
       

              const containarCard =document.getElementById("card-list")
   

                   const cards =containarCard.getElementsByClassName("card")

    

   for(let i=0 ;i<cards.length;i++)
   {
    let littel =cards[i].querySelector(".card div.card-rate")
    console.log(littel)

    
    if(littel.innerText.indexOf(val) >-1)
      {
        cards[i].style.display="";
      }
        else 
        {
            cards[i].style.display="none"
        }

         
      }

 })

 

  var userName;
  function user(){
  var user=JSON.parse(localStorage.getItem("formData"))
  
  for(var i=0 ;i<user.length;i++)
  {
     userName=user[i].fname+" "+user[i].lname
    
  }

  var navName=document.getElementById("username")
  navName.innerText=userName;
  console.log(userName)
 }

 user()

 function logout(){
  event.preventDefault()



  var navName=document.getElementById("username")
  navName.innerText="login";
     
  delete userName;
  
 
 }


 