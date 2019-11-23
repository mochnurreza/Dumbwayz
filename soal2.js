<!doctype html>
<html lang="en">
  	<head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <meta name="robots" content="nofollow">
		<meta name="googlebot" content="noindex">
	    <title>Print Money </title>
	</head>
<body>
    <section class="login-form-wrap">
        <h1>Print Money</h1>
        <br>
        <form class="login-form" action="#">
            <label>
            <input type="number" name="money1" id="money1" required placeholder="Total belanja">
            <input type="number" name="money2" id="money2" required placeholder="Total uang yang dimasukkan">
            <input type="button" onclick="printMoney()" value="Cetak">
           </label>
            <div class="keterangan" id="result">Result Print Kembalian : 
             </div>
        </form>
    </section>
</body>
<script type="text/javascript">
function printMoney() {
    var v1 = document.getElementById('money1').value;
    var v2 = document.getElementById('money2').value;
    var v3 = v2-v1;
    var t, t1, t2, t3;
    t = v3 / 50000;
    if(t>0){
        v3 = v3 % 50000;
    }
    t1 = v3 / 20000;
    if(t1>0){
        v3 = v3 % 20000;
    }
    t2 = v3 / 10000;
    if(t2>0){
        v3 = v3 % 10000;
    }
    t3 = v3 / 5000;
    if(t3>0){
        v3 = v3 % 5000;
    }
    t4 = v3 / 2000;
    if(t3>0){
    	 v3 = v3 % 2000;
    }
    t5 = v3 / 1000;
    if(t3>0){
        v3 = v3 % 1000;
    }
    t6 = v3 / 500;
    if(t3>0){
        v3 = v3 % 500;
    }
    
    
    console.log(v3+", "+t+", "+t1+", "+t2+", "+t3+", "+t4+", "+t5+", "+t6);
    var printDiv = document.getElementById('result');
    printDiv.innerHTML = 'Result Print Kembalian : <br>'+
        "- "+convT(t)+' 50000<br>'+
        "- "+convT(t1)+' 20000<br>'+
        "- "+convT(t2)+' 10000<br>'+
        "- "+convT(t3)+' 5000<br>'+
	"- "+convT(t4)+' 2000<br>'+
	"- "+convT(t5)+' 1000<br>'+
	"- "+convT(t6)+' 500';
}
function convT(x) {
    i = Math.floor(x);
    var angka = new Array('0','1','2','3','4','5','6');
    var kata = new Array('Nol lembar','Selembar','Dua lembar','Tiga lembar','Empat lembar','Lima lembar');
    var bilang=angka[i];
    return bilang;
}
</script>
</html>