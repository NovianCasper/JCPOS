var count = document.getElementById('Products').getElementsByTagName('tr').length - 1;
if (count > 1){
    document.getElementById('sendtodb').disabled = false;
}else{
    document.getElementById('sendtodb').disabled = true;
}