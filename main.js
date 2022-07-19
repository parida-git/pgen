function $(x){
  return document.getElementById(x);
}

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

var dbase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&-+()/*':;!?,.~={}[]_<>^\"\\";

dbase = dbase.shuffle();

function pwdgen(){
  var plen = $('len').value;
  if(plen > 20000){
    plen = 20000;
  }
  var pass = '';
  for(var loop = 0;loop < plen;loop++){
    pass = pass + dbase.charAt(Math.round((window.crypto.getRandomValues(new Uint8Array(1))/255) * (dbase.length - 1)));
  }
  $('txta').textContent = pass;
}

document.body.onload = function(){
  $('len').value = 27;
  $('slide').value = 27;
  $('slide').oninput = function(){
    $('len').value = this.value;}
  
  $('len').oninput = function(){
    $('slide').value = this.value;
    if(this.value > 20000){
      $('popup').style.display = 'inline-block';
      setTimeout(function(){$('popup').style.display = 'none';}, 1600);
    }
  }
  $('gn').onclick = () => pwdgen();
  $('copy').onclick = function(){
    $('txta').select();
    $('txta').setSelectionRange(0,20000);
    document.execCommand('copy');
  }
  pwdgen(27);
}
