let list = document.querySelector('#list')
let addBtn = document.querySelector('#addbtn1');
let list2 = document.querySelector('#listcart');
let subtotal = document.querySelector('#subtotal');
let tax = document.querySelector('#tax');
let total =document.querySelector('#total')


let arr = [
    {
    name: "papperoni",
    price: 5,
    id : 1,
    imgurl: " https://img1.freepng.ru/20180318/cde/kisspng-pizza-italian-cuisine-buffalo-wing-gyro-pasta-pizza-png-transparent-images-5aae95862d9de2.7327163615213909821869.jpg"
},
     {
    name: "cheesy",
    price: 10,
    id : 2,
    imgurl: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza1.png'

},
    {
    name: "kombo",
    price: 20,
    id : 3,
    imgurl: "https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg "

},
{
    name: "margarita",
    price: 30,
    id : 4,
    imgurl: "https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg"

}
];


for (let i=0; i<arr.length; i++) {

    let li = document.createElement('li');

    li.innerHTML = `
    <li class="pizza__item">
    <div class="pizza__img-box">
    <img class='pizza__img' src =" ${arr[i].imgurl} " alt= "pizza"/>
    </div>
    <div class="pizza__item-box">
    <h3 class = 'pizza__item-title'> ${arr[i].name}</h2>
    <p class="pizza__item-price">$ ${arr[i].price}</p>
    <button class="pizza__btn" onclick = "workId(${arr[i].id})">Add to Cart </button>
    </div>
    </li>
 `
 list.appendChild(li);
}


function workId (e) {
    console.log(e);
}

let newArr = [];


function workId(e) {
    let = subtitle =0
    let tax1 = 0;
    let total1 = 0
    for (let i = 0; i < arr.length; i++) {
   
        if (e == arr[i].id) {
            newArr.push(arr[i]);
            list2.innerHTML = "";

            for (let j = 0; j < newArr.length; j++) {

                subtitle += newArr[j].price;
                tax1 = subtitle*0.1;
                total1 = subtitle + tax1
               

                let li = document.createElement("li");
                li.innerHTML = `
                <li class="pizza__item">
                <div class="pizza__img-box">
                <img class="pizza__img" src="${newArr[j].imgurl}" alt="img">
                </div>
                <div class="pizza__item-box">
                  <h3 class="pizza__item-title">${newArr[j].name}</h3>
                  <p class="pizza__item-price">$${newArr[j].price}</p>
                  <button id = "${newArr[j].id}" class="pizza__remove-btn">-</button>
                </div>
              </li>
            `
             list2.appendChild(li);

             subtotal.innerHTML=`${subtitle}$`;
             tax.innerHTML=`${tax1}$`;
             total.innerHTML=`${total1}$`
            }
    
        }
 
    }
 
let removeBtn = document.querySelectorAll('.pizza__remove-btn')
subtitle -= newArr[j].price;
tax1 = subtitle/0.1;
total1 = subtitle - tax1


subtotal.innerHTML=`${subtitle}$`;
tax.innerHTML=`${tax1}$`;
total.innerHTML=`${total1}$`

    for (let i=0; i<removeBtn.length; i++) {
        
        removeBtn[i].addEventListener('click', (e) => {
            let ids = e.target;
            console.log(ids);
            ids.parentNode.parentNode.remove();
            newArr = []
        })
    }
  
}







