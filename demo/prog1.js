let numbers = [30, 60, 190]; 
let result = true;

for (let i = 0; i<numbers.length; i++) 
{
  if(numbers[i] >= 100) 
  {
    result = false; 
    break; 
    
  } 
} 

document.write(result); 

