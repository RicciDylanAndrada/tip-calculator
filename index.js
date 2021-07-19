const length = document.querySelectorAll(".percent").length;
for(var x = 0; x<length;x++){
  document.querySelectorAll(".percent")[x].addEventListener("click",function() {
    var percentage = this.innerHTML;
    calculate(percentage);
  });
}




function calculate(percentage){
  const billAmount = document.getElementById("bill").value
  const billAmount1 = document.getElementById('bill').value
  const input = document.getElementById('inputButton').value



  const people = document.getElementById("numOfPeople").value
  let sum =0;
  let perPerson = 0;
  let extra = 0;

  switch (percentage) {

    case "5%":
     extra = (billAmount * 0.05) / people
    sum = extra + billAmount
    perPerson = (billAmount/people) + extra;




      break;

      case "10%":

        extra = (parseFloat(billAmount) * 0.10) / people
      sum = extra + billAmount
      perPerson = (billAmount/people) + extra;



        break;
        case "15%":
          extra = (billAmount * 0.15) / people
        sum = extra + billAmount
        perPerson = (billAmount/people) + extra;



          break;

          case "25%":
            extra = (billAmount * 0.25) / people
          sum = extra + billAmount
          perPerson = (billAmount/people) + extra;



            break;

            case "50%":
             extra = (billAmount * 0.50) / people
            sum = extra + billAmount
            perPerson = (billAmount/people) + extra;

              break;

              case "Reset":

              document.getElementById("sum").innerHTML = "$0.00"
              document.getElementById("sumPerson").innerHTML = "$0.00"
                break;
    default:

    extra = (billAmount * input) / people
    sum = extra + billAmount
    perPerson = (billAmount/people) + extra;
    perPerson = perPerson.toFixed(2);

}
if (  !isNaN(extra) && !isNaN(perPerson) && isFinite(extra)   && isFinite(perPerson)  ){
document.getElementById("sum").innerHTML = extra.toFixed(2);
document.getElementById("sumPerson").innerHTML = perPerson.toFixed(2);
}
else{

}


}
