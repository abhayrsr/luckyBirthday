const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#luckyNumber");
const check = document.querySelector("#checkButton");
const message = document.querySelector('#message');

check.addEventListener('click', function calculate(){
    const dateOfBirth = dob.value.replaceAll("-","");
    const sum = totalSum(dateOfBirth);
    const num = Number(luckyNumber.value);
    console.log(sum%num)
    if((sum%num) == 0){
        return message.innerText = "You are lucky";
    } else {
        return message.innerText = "You are unlucky";
    }
})

function totalSum(dateOfBirth){
    let sum = 0;
    for(let i = 0; i < dateOfBirth.length; i++){
        sum +=  Number(dateOfBirth.charAt(i))
    }
    return sum;
}