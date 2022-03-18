// let arr2 = [8,9,10,8,10,11,11, 1];

// let b=[]
// let count = arr2.length

// for (let i=0; i<count; i++) {
//     let k =[]
//     let f = [];
//     for (let j =0; j<arr2.length; j++) {
//         if (arr2[0] == arr2[j]) {
//             k.push (arr2[j])
//         }else {
//             f.push(arr2[j])
//         }
//     }
//     arr2 = f;
//     if (k !="")b.push(k)

// }console.log(b);





function checkPizzaItem (item) {
    if(!newArr.length) {
        const newPizzasArr = item;
        newPizzasArr.count = 1;
        return newArr.push(newPizzasArr)
    }
    for(let i=0; i<newArr.length; i++) {
        if (item.id === newArr[i].id) {
            return newArr[i].count=newArr[i].count+1
        }
    }
    const newPizzasArr = item;
    newPizzasArr.count =1;

    newArr.push(newPizzasArr)
}


function removeItem (id) {

    const arrBox = [];

    for (let i=0; i<newArr.length; i++){
        if(id===newArr[i].id){
            if(newArr[i].count >1){
            const newPizzasArr = newArr[i];

            newPizzasArr.count = newPizzasArr.count-1;

            arrBox.push(newPizzasArr)
        }
    }
        else {
            arrBox.push(newArr[i]);
        }
    }
    newArr = arrBox;
    sortItem ();
}


function sortItem () {
    list2.innerHTML = '';

    let  subtitle =0;

    for (let i=0; i<newArr.length; i++){
        let li = document.createElement('li');

        li.className = "pizza__item cart__item"
        li.innerHTML = `
                <div class="pizza__img-box">
                <img class="pizza__img" src="${newArr[i].imgurl}" alt="img">
                </div>
                <div class="pizza__item-box">
                    <div>  
                            <h3 class="pizza__item-title">${newArr[i].name}</h3>
                            <p class="pizza__item-price">$${newArr[i].price *newArr[i].count}</p>
                     </div>
                    <button  class="pizza__remove-btn count__btn" >${newArr[i].count}</button>

                    <div class="pizza__cart-btns" style =""> 
                    <button  class=" pizza__remove-btn" onclick='addItem(${i})'>+</button>
                    <button  class="pizza__remove-btn " onclick='removeItem(${i})'>-</button>
                    </div>
                    
                </div>
             `;

             subtitle += newArr[i].count* newArr[i].price;
             list2.appendChild(li)

    }

    let tax1 = subtitle *0.1;
    let total1 = tax1 + subtitle;

    subtotal.innerHTML=`${subtitle}$`;
    tax.innerHTML=`${tax1}$`;
    total.innerHTML=`${total1}$`

}



function addItem(index) {
    newArr[index].count = newArr[index].count +1

    sortItem()
}

function removeItem(index) {
    let pizzaIndex = newArr[index];
    
    if (pizzaIndex.count >1){
        pizzaIndex.count = pizzaIndex.count -1;
        return sortItem()
    }

    let sortArr =[];
    for (let i=0; i<newArr.length; i++){
        if(newArr[i].id !==pizzaIndex.id){
            sortArr.push(newArr[i])
        }
    }
    newArr = sortArr;

    sortItem();
}

function getAdd(id){
    
    let pizzaIndex = addItem(id);

    checkPizzaItem(pizzaIndex);

    sortItem();
}