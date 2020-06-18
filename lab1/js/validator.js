checker = [0,0,0,0,0,0];
function sprawdzTowarName() {
    var formularz_obj=document.getElementById("towar_name");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("towar_name_blad");
    
    
   
     var objRegExp  = /^[a-zA-Z]+$/;
   if (t_name === "") 
        {   
            blad.innerHTML = "Podaj nazwe towaru"; 
            blad.classList.add("invalid-feedback");
            formularz_obj.classList.add("is-invalid");
            blad.classList.remove("valid-feedback");
            formularz_obj.classList.remove("is-valid");
            blad_danych=true; 
        }
    else if (t_name.length > 10)
        {
            blad.innerHTML = "Zadluga nazwa (max 10 znakow)"; 
            blad.classList.add("invalid-feedback");
            formularz_obj.classList.add("is-invalid");
            blad.classList.remove("valid-feedback");
            formularz_obj.classList.remove("is-valid");
            blad_danych=true; 
        }
        
    else
        {
            blad.classList.remove("invalid-feedback");
            formularz_obj.classList.remove("is-invalid");
            blad.classList.add("valid-feedback");
            formularz_obj.classList.add("is-valid");
            blad.innerHTML = ""; 
            blad_danych=false;
        } 


    return blad_danych;       
    }

    function sprawdzKodTowaru() {
        var formularz_obj=document.getElementById("kod_towaru");
        var t_name = formularz_obj.value;
        var blad = document.getElementById("kod_towaru_blad");
        
         
        
         var objRegExp  = /^[a-zA-Z]+$/;
          
        if (t_name === "") 
            {   
                blad.innerHTML = "Podaj kod towaru"; 
                blad.classList.add("invalid-feedback");
                formularz_obj.classList.add("is-invalid");
                blad.classList.remove("valid-feedback");
                formularz_obj.classList.remove("is-valid");
                blad_danych=true; 
            }
        else if (t_name.length != 8)
            {
                blad.innerHTML = "Kod towaru musi mieć 8 znaków"; 
                blad.classList.add("invalid-feedback");
                formularz_obj.classList.add("is-invalid");
                blad.classList.remove("valid-feedback");
                formularz_obj.classList.remove("is-valid");
                blad_danych=true; 
            }
        else
            {
                blad.classList.remove("invalid-feedback");
                formularz_obj.classList.remove("is-invalid");
                blad.classList.add("valid-feedback");
                formularz_obj.classList.add("is-valid");
                blad.innerHTML = ""; 
                blad_danych=false;
            } 
        return blad_danych;       
        }

        function sprawdzCeneNetto() {
            var formularz_obj=document.getElementById("cena_netto");
            var t_name = formularz_obj.value;
            var blad = document.getElementById("cena_netto_blad");
            
            
             var objRegExp  = /^[a-zA-Z]+$/;
              
            if (t_name === "") 
                {   
                    blad.innerHTML = "Podaj cenę netto"; 
                    blad.classList.add("invalid-feedback");
                    formularz_obj.classList.add("is-invalid");
                    blad.classList.remove("valid-feedback");
                    formularz_obj.classList.remove("is-valid");
                    blad_danych=false; 
                }
            else if (isNaN(t_name))
                {
                    blad.innerHTML = "To nie jest poprawna liczba"; 
                    blad.classList.add("invalid-feedback");
                    formularz_obj.classList.add("is-invalid");
                    blad.classList.remove("valid-feedback");
                    formularz_obj.classList.remove("is-valid");
                    blad_danych=true; 
                }
            else
                {
                    blad.classList.remove("invalid-feedback");
                    formularz_obj.classList.remove("is-invalid");
                    blad.classList.add("valid-feedback");
                    formularz_obj.classList.add("is-valid");
                    blad.innerHTML = ""; 
                    blad_danych=false;
                    var cena = parseFloat(t_name);
                    formularz_obj.value = cena.toFixed(2);
                    
                    
                } 
                
                   
            return blad_danych;       
            }

            function sprawdzVAT() {
                var formularz_obj=document.getElementById("stawka_vat");
                var t_name = formularz_obj.value;
                var blad = document.getElementById("VAT_blad");
                
                
                 var objRegExp  = /^[a-zA-Z]+$/;
                  
                if (t_name === "") 
                    {   
                        blad.innerHTML = "Podaj stawkę VAT"; 
                        blad.classList.add("invalid-feedback");
                        formularz_obj.classList.add("is-invalid");
                        blad.classList.remove("valid-feedback");
                        formularz_obj.classList.remove("is-valid");
                        blad_danych=false; 
                    }
                else if (isNaN(t_name))
                    {
                        blad.innerHTML = "To nie jest poprawna liczba"; 
                        blad.classList.add("invalid-feedback");
                        formularz_obj.classList.add("is-invalid");
                        blad.classList.remove("valid-feedback");
                        formularz_obj.classList.remove("is-valid");
                        blad_danych=true; 
                    }
                    else if (t_name>100)
                    {
                        blad.innerHTML = "Stawka musi być mniejsza niż 100"; 
                        blad.classList.add("invalid-feedback");
                        formularz_obj.classList.add("is-invalid");
                        blad.classList.remove("valid-feedback");
                        formularz_obj.classList.remove("is-valid");
                        blad_danych=true; 
                    }
                else
                    {
                        blad.classList.remove("invalid-feedback");
                        formularz_obj.classList.remove("is-invalid");
                        blad.classList.add("valid-feedback");
                        formularz_obj.classList.add("is-valid");
                        blad.innerHTML = ""; 
                        blad_danych=false;
                        var cena = parseFloat(t_name);
                        formularz_obj.value = cena.toFixed(0);
                        
                        
                    } 
                    
                        
                return blad_danych;       
                }

                function zmienBrutto(){
                var formularz_obj=document.getElementById("cena_brutto");

                var formularz_obj2=document.getElementById("stawka_vat");
                var stawka = formularz_obj2.value;

                var formularz_obj3=document.getElementById("cena_netto");
                var netto = formularz_obj3.value;

                var brutto = parseFloat(netto)*(100+(parseFloat(stawka)))/100;
                formularz_obj.value = parseFloat(brutto).toFixed(2);
                } 

                function checkOptions(){
                    var option1 = document.getElementById("inlineCheckbox1");
                    var option2 = document.getElementById("inlineCheckbox2");
                    var option3 = document.getElementById("inlineCheckbox3");
                    var option4 = document.getElementById("inlineCheckbox4");
                    var option5 = document.getElementById("inlineCheckbox5");
                    var blad_opcji = document.getElementById("opcje_blad");
                    
                    var blad = false;
                    if(option1.checked==false 
                        && option2.checked==false
                        && option3.checked==false
                        && option4.checked==false
                        && option5.checked==false){
                        blad=true;
                    }
                   
                    console.log(blad);
                    if(blad==true){
                        console.log("blad");
                        blad_opcji.innerHTML="<p style='color:red;'>Zaznacz opcje</p>";
                        option1.classList.remove("is-valid");
                        option1.classList.add("is-invalid");
                        option2.classList.remove("is-valid");
                        option2.classList.add("is-invalid");
                        option3.classList.remove("is-valid");
                        option3.classList.add("is-invalid");
                        option4.classList.remove("is-valid");
                        option4.classList.add("is-invalid");
                        option5.classList.remove("is-valid");
                        option5.classList.add("is-invalid");
                    }else{
                        console.log("nieblad");
                        blad_opcji.innerHTML="<p style='color:green;'>Poprawne opcje</p>";
                        option1.classList.remove("is-invalid");
                        option1.classList.add("is-valid");
                        option2.classList.remove("is-invalid");
                        option2.classList.add("is-valid");
                        option3.classList.remove("is-invalid");
                        option3.classList.add("is-valid");
                        option4.classList.remove("is-invalid");
                        option4.classList.add("is-valid");
                        option5.classList.remove("is-invalid");
                        option5.classList.add("is-valid");
                    }
                   return blad;

                } 
                function checkRat(){
                    var rat1=document.getElementById("rating1");
                    var rat2=document.getElementById("rating2");
                    var rat3=document.getElementById("rating3");
                    var rat4=document.getElementById("rating4");
                    var rat5=document.getElementById("rating5");
                    var blad_rat=document.getElementById("blad_radio");

                    var blad = true;
                        if(rat1.checked==true 
                        || rat2.checked==true
                        || rat3.checked==true
                        || rat4.checked==true
                        || rat5.checked==true){
                        blad=false;
                    }

                    if(blad==true){
                        console.log("blad");
                        blad_rat.innerHTML="<p style='color:red;'>Zaznacz ocenke!</p>";
                        rat1.classList.remove("is-valid");
                        rat1.classList.add("is-invalid");
                        rat2.classList.remove("is-valid");
                        rat2.classList.add("is-invalid");
                        rat3.classList.remove("is-valid");
                        rat3.classList.add("is-invalid");
                        rat4.classList.remove("is-valid");
                        rat4.classList.add("is-invalid");
                        rat5.classList.remove("is-valid");
                        rat5.classList.add("is-invalid");
                    }else{
                        console.log("nieblad");
                        blad_rat.innerHTML="<p style='color:green;'>Poprawna ocenka :)</p>";
                       rat1.classList.remove("is-invalid");
                       rat1.classList.add("is-valid");
                       rat2.classList.remove("is-invalid");
                       rat2.classList.add("is-valid");
                       rat3.classList.remove("is-invalid");
                       rat3.classList.add("is-valid");
                       rat4.classList.remove("is-invalid");
                       rat4.classList.add("is-valid");
                       rat5.classList.remove("is-invalid");
                       rat5.classList.add("is-valid");
                    }
                    return blad;
                }

function checkOne(boole,id){
    if(boole==true){
        checker[id]=0;
    }
    else{
        checker[id]=1;
    }
}

function checkExist(name){
   var blad = false;
   var lista_dodanych = document.getElementsByClassName("exist");
   for(var i=0; i<lista_dodanych.length;i++){
       if(lista_dodanych[i].innerHTML == name){
           blad = true;
       }
   }
   return blad;
}

function checkAll(){
    if(
           sprawdzTowarName() == false
        && sprawdzKodTowaru() == false
        && sprawdzCeneNetto() == false
        && sprawdzVAT() == false
        && checkRat() == false
        && checkOptions() == false
        && checkExist(document.getElementById("towar_name").value) == false
    ) {
        var name = document.getElementById("towar_name").value;
        var vat = document.getElementById("stawka_vat").value;
        var kod = document.getElementById("kod_towaru").value;
        var netto = document.getElementById("cena_netto").value;
        var brutto = document.getElementById("cena_brutto").value;
        var cat = document.getElementById("exampleFormControlSelect1").value;
        var photo = document.getElementById("fileToUpload").value;

        var opt = "";
        var optElem1 = document.getElementById("inlineCheckbox1");
        var optElem2 = document.getElementById("inlineCheckbox2");
        var optElem3 = document.getElementById("inlineCheckbox3");
        var optElem4 = document.getElementById("inlineCheckbox4");
        var optElem5 = document.getElementById("inlineCheckbox5");
        if(optElem1.checked) opt = opt+optElem1.value+" ";
        if(optElem2.checked) opt = opt+optElem2.value+" ";
        if(optElem3.checked) opt = opt+optElem3.value+" ";
        if(optElem4.checked) opt = opt+optElem4.value+" ";
        if(optElem5.checked) opt = opt+optElem5.value+" ";


        var rat = "Ocena: ";
        var ratElem1 = document.getElementById("rating1");
        var ratElem2 = document.getElementById("rating2");
        var ratElem3 = document.getElementById("rating3");
        var ratElem4 = document.getElementById("rating4");
        var ratElem5 = document.getElementById("rating5");
        if(ratElem1.checked) rat = rat+ratElem1.value;
        else if(ratElem2.checked) rat = rat+ratElem2.value;
        else if(ratElem3.checked) rat = rat+ratElem3.value;
        else if(ratElem4.checked) rat = rat+ratElem4.value;
        else if(ratElem5.checked) rat = rat+ratElem5.value;
        var buttonA = "<button class='toCart'>Dodaj do koszyka</button>";
        var buttonD = "<button class='remove'>Usuń</button>";
        var buttonE = "<button class='edit'>Edytuj</button>";
        var row= "<tr><td class='exist'>"+name+"</td><td>"+kod+"</td><td>"+netto+"</td><td>"+vat+"</td><td>"+brutto+"</td><td>"+cat+"</td><td>"+opt+"</td><td>"+rat+"</td><td>"+photo+"</td>"+"<td>"+buttonA+buttonD+buttonE+"</td>"+"</tr>",
        $row=$(row),
        resort=true;
        console.log($row);

        $('#myTable')
            .find('tbody').append($row)
            .trigger('addRows', [$row, resort]);
        alert("Dodano do koszyka :)");
        document.getElementById('dodaj').firstChild.data = 'Dodaj';
    }
    else alert("Formularz nieuzupełniony lub produkt o tej nazwie już w tabeli");
}

function deleteRow(){

}