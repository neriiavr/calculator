function carp(ilkSayi, ikinciSayi){
    return ilkSayi * ikinciSayi;
}

function topla(ilkSayi, ikinciSayi){
    return ilkSayi + ikinciSayi;
}

function cikar(ilkSayi, ikinciSayi){
    return ilkSayi - ikinciSayi;
}

function bol(ilkSayi, ikinciSayi) {
    return ilkSayi / ikinciSayi;
}

var ilkSayi = "0"
var islem = ""
var ikinciSayi = ""
var sonuc = ""


document.querySelector(".button-container").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        
        if (event.target.innerText === "C") {
            ilkSayi = "0"
            islem = ""
            ikinciSayi = ""
            sonuc = ""
        }
        if ( event.target.innerText === "="){

            if (islem === "X") {
                sonuc = carp(ilkSayi, ikinciSayi)
            }

            if (islem === "/"){
                sonuc = bol(ilkSayi, ikinciSayi);
            }

            if (islem === "+"){
                sonuc = topla(ilkSayi, ikinciSayi);
            }

            if (islem === "-"){
                sonuc = cikar(ilkSayi, ikinciSayi);
            
            }
        }

        

            if ( ilkSayi !== 0 && islem !== "") {
                ikinciSayi = ikinciSayi + event.target.innerText 
            } 

            else{
                if (event.target.innerText === "X" || event.target.innerText === "/" || event.target.innerText === "+" || event.target.innerText === "-")
                {
                    islem = event.target.innerText 
                }
                // sayi butonlarina tiklandiysa bu satir calisir
                else {
                    // ilk kez bir sayi butonuna tiklaniyorsa bu satir calisir 
                    if(ilkSayi === "0") {
                        ilkSayi = event.target.innerText
                    }
                    else {
                        ilkSayi = ilkSayi + event.target.innerText; 
                    }
                }
            }

    }




    // Asagisi ekrana yazdirma alani

    if (event.target.innerText === '=') {
        document.querySelector(".row0 p ").innerHTML= sonuc;
    } else {
        document.querySelector(".row0 p ").innerHTML= ilkSayi + islem + ikinciSayi;
    } 
    if (event.target.innerText === 'C') {
        document.querySelector(".row0 p ").innerHTML = "0";
    }

    

    console.log(ilkSayi, islem, ikinciSayi, sonuc)
})