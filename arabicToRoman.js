const romanNumbers = {
  1: 'I',
  5: "V",
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

const ArabicNumbers = [1000, 500, 100, 50, 10, 5,1]

const ArabicToRoman = (number)=>{
    let result = "";
    let remainder;
    let division;

    ArabicNumbers.forEach(function(divisor){
        division = Math.floor(number/divisor);
        remainder = number % divisor;
        number = remainder;
        if(division){
            result = result + romanNumbers[divisor].repeat(division);
        } 
    })
    console.log(result);
    return result
}

ArabicToRoman(7);