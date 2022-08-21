function getInputFieldValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const element=document.getElementById(elementId);
    const textElementValueString=element.innerText;
    const textElementValue=parseFloat(textElementValueString);

    return textElementValue;
}

function setTextElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId);
     textElement.innerText=newValue;
    
}