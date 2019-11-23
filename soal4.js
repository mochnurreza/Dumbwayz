<!doctype html>
<html lang="en">
    <head>
        <title>menghitung diskon</title>
        <script type="text/javascript">
        function hitung(){
            var nilai1=(document.namaform.input_nilai1.value);
            var nilai2=(document.namaform.input_nilai2.value);
            var diskon="";
            var jumlah_terbayar ="";

            if(nilai2 >=20000){
                diskon= ((40/100)*nilai2);
                jumlah_terbayar = (nilai2-diskon);
            }else{ 
                   diskon=(0);
                   jumlah_terbayar = (nilai2-diskon);
               }
            
        alert("nama pembeli"+nilai1+ "jumlah pembelian"+ nilai2+ "jumlah diskon"+ diskon+ "yang harus dibayar: "+jumlah_terbayar)
        }
        </script>
    </head>
    <body>
    <form name="namaform">
    <pre>
    formulir isian:
    nama pembeli: <input type="text" name="input_nilai1"/>
    jumlah pembelian: <input type="text" name="input_nilai2"/>
    <input type="button" value="jumlah terbayar" onclick="hitung()"/>
    <input type="reset" value="isi data lagi"/>
    </pre>
    </form>
    </body>
    </html>
    