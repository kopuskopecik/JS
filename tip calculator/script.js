const button = document.querySelector("button");
const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');
const main = document.querySelector("main");


const isInputValid = (value)=>{
    if(isNaN(value)){
        return false
    }
    if(!value){
        return false
    }

    return true
    
}




const calculateTotalBill = (event) =>{
    let isBillValid = isInputValid(bill.value);
    let isTipValid = isInputValid(tip.value);
    if(!isBillValid){
        alert('Please enter a valid bill amount');
        return
    }

    if(!isTipValid){
        alert('Please enter a valid tip amount')
        return
    }

    const tipAmount = (Number(bill.value)* Number(tip.value)) / 100;
    const totalAmount = tipAmount + Number(bill.value);
    const h3 = document.createElement('h3');
    h3.textContent = `Your tip is ${Math.ceil(tipAmount)} and your total amount is ${Math.ceil(totalAmount)}`
    main.appendChild(h3)
}


button.addEventListener("click", calculateTotalBill);
