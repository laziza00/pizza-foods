let arr2 = [8,9,10,8,10,11,11, 1];

let b=[]
let count = arr2.length

for (let i=0; i<count; i++) {
    let k =[]
    let f = [];
    for (let j =0; j<arr2.length; j++) {
        if (arr2[0] == arr2[j]) {
            k.push (arr2[j])
        }else {
            f.push(arr2[j])
        }
    }
    arr2 = f;
    if (k !="")b.push(k)

}console.log(b);

