// let list = document.querySelector('#list')
// let addBtn = document.querySelector('#addbtn1');
// let list2 = document.querySelector('#listcart');
// let subtotal = document.querySelector('#subtotal');
// let tax = document.querySelector('#tax');
// let total =document.querySelector('#total');
// let removeBtn = document.querySelectorAll('.pizza__remove-btn')


// let arr = [
//     {
//     name: "papperoni",
//     price: 5,
//     id : 1,
//     imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsa6WMSV3roPhrORAMR5jTjTEbKllBEJYQ&usqp=CAU"
// },
//      {
//     name: "cheesy",
//     price: 10,
//     id : 2,
//     imgurl: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza1.png'

// },
//     {
//     name: "kombo",
//     price: 20,
//     id : 3,
//     imgurl: "https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg "

// },
// {
//     name: "margarita",
//     price: 30,
//     id : 4,
//     imgurl: "https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg"

// }
// ];


// for (let i=0; i<arr.length; i++) {

//     let li = document.createElement('li');
//     li.className = "pizza__item"
//     li.innerHTML = `

//     <div class="pizza__img-box">
//     <img class='pizza__img' src =" ${arr[i].imgurl} " alt= "pizza"/>
//     </div>
//     <div class="pizza__item-box">
//     <h3 class = 'pizza__item-title'> ${arr[i].name}</h2>
//     <p class="pizza__item-price">$ ${arr[i].price}</p>
//     <button class="pizza__btn" onclick = "addItem(${arr[i].id})">Add to Cart </button>
//     </div>
//  `;

//  list.appendChild(li);
// }


// let newArr = [];
// let sortArr =[]

// let = subtitle =0
// let tax1 = 0;
// let total1 = 0

// let count = 0


// count =arr.length

// function addItem(id) {

//     for (let i = 0; i < arr.length; i++) {
   
//         if (id == arr[i].id) {

//             newArr.push(arr[i]);

        
//         }
//     }


//     arrSort (newArr);
    
//     for (let i = 0; i < newArr.length; i++) {

//         if (i==newArr.length - 1){
               
//             let li = document.createElement("li");

//             li.className = "pizza__item cart__item"
//             li.innerHTML = `
//                 <div class="pizza__img-box">
//                 <img class="pizza__img" src="${newArr[i].imgurl}" alt="img">
//                 </div>
//                 <div class="pizza__item-box">
//                     <div>  
//                             <h3 class="pizza__item-title">${newArr[i].name}</h3>
//                             <p class="pizza__item-price">$${newArr[i].price}</p>
//                      </div>
//                     <button  class="pizza__remove-btn count__btn" onclick=''>${count}</button>

//                     <div class="pizza__cart-btns" style =""> 
//                     <button  class=" pizza__remove-btn" onclick=''>+</button>
//                     <button  class="pizza__remove-btn " onclick='removeItem(${i})'>-</button>
//                     </div>
                    
//                 </div>
//                 `;

//                 subtitle += newArr[i].price;
//                 tax1 = subtitle*0.1;
//                 total1 = subtitle + tax1

//                  list2.appendChild(li);

//                  subtotal.innerHTML=`${subtitle}$`;
//                  tax.innerHTML=`${tax1}$`;
//                  total.innerHTML=`${total1}$`
//             }

//             }
// }



// function arrSort (hhh) {

//     let sortArr =[];
//     let count = hhh.length;

//     for (let i=0; i<count; i++) {
//         let k =[];
//         let f= [];

//         for (j=0; j<hhh.length; j++) {
//             if(hhh[0].id ==hhh[j].id) {
//                 k.push(hhh[j])
//             }else {
//                 f.push(hhh[j])
//             }
//         }
//         hhh = f;
//         if (k!="") sortArr.push(k)
//     }
//     return console.log(sortArr);
// }



// function removeItem(index) {

//     let newArrRemove =[]

//     for (let i=0; i<newArr.length; i++) {
//         if(index!= i) {
//             newArrRemove.push(newArr[i])
//         }
//     }
  
//     newArr = newArrRemove;

//     list2.innerHTML ="";
//     subtitle = 0;
//     tax1 = 0;
//     total1 = 0



//     for (let i=0; i<newArr.length; i++) {

//         let li = document.createElement('li');

//         li.className= "pizza__item cart__item";
//         li.innerHTML =`
        
//             <div class="pizza__img-box">
//             <img class="pizza__img" src="${newArr[i].imgurl}" alt="img">
//             </div>
//             <div class="pizza__item-box">
//             <div>
//             <h3 class="pizza__item-title">${newArr[i].name}</h3>
//             <p class="pizza__item-price">$${newArr[i].price}</p>
//             </div>
//           <button  class="pizza__remove-btn count__btn" onclick=''>${count}</button>
//           <div class="pizza__cart-btns" > 
//           <button  class=" pizza__remove-btn" onclick=''>+</button>
//           <button class="pizza__remove-btn" id="remove-btn" onclick="removeItem(${i})">-</button>
//           </div>
        
//         </div>`;



//         subtitle += newArr[i].price;
//         tax1 = subtitle*0.1;
//         total1 = subtitle + tax1

//         subtotal.innerHTML =` ${subtitle} $`;
//         tax.innerHTML =` ${tax1}$`;
//         total.innerHTML = ` ${total1} $`;

//         list2.appendChild(li);
//     }



//     if (newArr.length == 0) {
//         subtitle = 0;
//         tax1 = 0;
//         total1 = 0;
//         subtotal.innerHTML =` ${subtitle} $`;
//         tax.innerHTML =` ${tax1}$`;
//         total.innerHTML = ` ${total1} $`;
//     } 


// }


