

//assignment 3 java
//#task 1
//SIRSS1264 
//sohaib khan


function ReplaceString(){
 
    var text = document.getElementById("inputstring").value;
    var replaceWord = document.getElementById("replacewhom").value;
    var replaceWith = document.getElementById("replacewith").value;
 
let replacedText = text.replace(replaceWord , replaceWith);
replacedText = replacedText.replace(replaceWord , replaceWith);
document.getElementById("output").innerHTML = replacedText;
alert(replacedText);
}




