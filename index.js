function check(){
    const pin1 = document.querySelector('.pin1');
    const pin2 = document.querySelector('.pin2');
   switch(pin1){
    case "pin1" == "pin2": alert('thank you');
    break;
    case "pin1" !== "pin2": alert('password must be the same');
    break;
    default: alert('no password added');
   } 
}

