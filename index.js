// Write your code in this file!

function scuberGreetingForFeet(input){
  if (input < 400){
    return 'This one is on me!'
  }
  else if (input > 2000 && input < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (input > 2500){
    return 'No can do.'
  }
}
function ternaryCheckCity(city){
  if (city == 'NYC'){
    return 'Ok, sounds good.'
  }
  else if (city != 'NYC'){
    return 'No go.'
    
  }
}
  function switchOnCharmFromTip(generosity){
    switch (generosity){
      case 'generous':
        return "Thank you so much.";
        case 'not as generous':
          return 'Thank you.';
          case 'thanks for everything':
            return "Bye.";
    }
  }
  
  
 