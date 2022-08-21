

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount=getInputFieldValueById('withdraw-field');
   
   const previousWithdraWTotal= getTextElementValueById('withdraw-total');
   const newWithdrawTotal=previousWithdraWTotal + newWithdrawAmount;

   setTextElementValueById('withdraw-total',newWithdrawTotal);

   const previousBalanceTotal=getTextElementValueById('balance-total');
   const newBalanceTotal= previousBalanceTotal - newWithdrawAmount;

   setTextElementValueById('balance-total',newBalanceTotal);
    

})