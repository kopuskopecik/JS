const romanNumbers = {
  1: 'I',
  5: "V",
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

const arabicNumbers = [1000, 500, 100, 50, 10, 5, 1]

const ArabicToRoman = (number)=>{
    let result = "";
    let remainder;
    let division;

    arabicNumbers.forEach(function(divisor){
        division = Math.floor(number/divisor); // 7 / 5 = 1
        remainder = number % divisor; // 5 % 5 = 2
        number = remainder; // 2
        if(division){
            result = result + romanNumbers[divisor].repeat(division); // '' = '' +  "V".repeat(1)
        } 
    })
    console.log(result);
    return result
}

ArabicToRoman(7);
ArabicToRoman(3000);
ArabicToRoman(2768);