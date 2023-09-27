
function Percentage(num,totalAmount)
    {      
    if (isNaN(num) || isNaN(totalAmount) || totalAmount === 0) 
    {
      return "Error";
    }
    const percentage=(num/totalAmount)*100;
    return percentage.toFixed(2)+"%";
    }
  const number=5;
  const totalAmount=80;
  const result=Percentage(number,totalAmount);
  console.log(`The percentage of ${number} out of ${totalAmount} is ${result}`);