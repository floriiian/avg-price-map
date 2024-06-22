// Each County with the avg. price
const COUNTYS = {
    "DONEGAL": 134199,
    "SLIGO": 153545,
    "CAVAN": 141033,
    "LEITRIM": 119755,
    "LONGFORD": 119312,
    "ROSCOMMON": 124875,
    "GALWAY": 231936,
    "MAYO": 147368,
    "MEATH": 273001,
    "KILDARE": 306134,
    "WICKLOW": 367003,
    "DUBLIN": 460122,
    "LOUTH": 211556,
    "MONAGHAN": 154595,
    "CARLOW": 178091,
    "KILKENNY": 214687,
    "LAOIS": 187985,
    "OFFALY": 165292,
    "WESTMEATH": 181095,
    "TIPPERARY": 158784,
    "CORK": 255495,
    "WATERFORD": 187579,
    "WEXFORD": 190071,
    "KERRY": 185737,
    "LIMERICK": 197525,
    "CLARE": 184000,
};
// listens to mouse move, so I know where the user is currently pointing at.
document.addEventListener('mousemove', e => {
    // Gets position and info element.
    const pos = document.elementFromPoint(e.clientX, e.clientY);
    const info = document.getElementById("info");
    // If the current pos element matches a county (eg.  data-county="LOUGHS" tag)
    if (pos && pos.dataset.county) {
        const curr_county = pos.dataset.county;
        /* Loops through county's and checks if it exists, then pulls out the price and displays it via innerText
        *  and converts the price into the finnish currency format.
        */
        for (const county in COUNTYS) {
             if(county === curr_county){
                 const price = new Intl.NumberFormat("fi", {
                     style: "currency",
                     currency: "EUR"
                 }).format(parseFloat(COUNTYS[county]));
                 info.innerText = "County: " + curr_county[0] + curr_county.substring(1).toLowerCase() + "\n Average Property Price: " + price;

             }
        }
    }
else{
        // Resets the info, originally I planned to show it on cursor but that really didn't go well. (Flickering)
        info.innerText = "County: " + "\n Average Property Price: ";
    }

// Passive? Why? Because I don't need to prevent a default behavior in my case. So it's passive, not aggressive.
}, {passive: true})






