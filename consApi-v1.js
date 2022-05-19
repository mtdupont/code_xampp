const getData = async ()=> {
    try {
        let Api = await axios('https://randomuser.me/api/')
        vData = Api.data.results[0]
        console.log("datos", vData)
        let vAddHML = ""
        for (vHea in vData) {
            vAddHML += `<button id='${vHea}' onclick="fAddData('${vHea}')">${vHea}</button>`
        }
        fHTMLhds(vAddHML)
    } catch(e) {
        fHTMLhds(`<p>La API fallo</p>`,"")
    }
}
const fHTMLhds = (vHTML) => {
    const vHeaders = document.querySelector(".cls-heads")
    vHeaders.innerHTML = `<br> ${vHTML} <br> <br>`
}
const fAddData = (pDato) => {
    const vGrid = document.querySelector(".cls-grid")
    const vAdd = document.createElement("DIV")
    vAdd.classList.add("cls-item")
    vValue = vData[pDato]
    if (typeof(vValue) == "object") {
        fAddItem(vValue,vGrid)
    }else {
        vAdd.innerHTML = `${pDato}: ${vValue}`
        vGrid.appendChild(vAdd)
    }
}
const fAddItem = (pItem,pGrid) => {
    let vLat = 0
    let vLon = 0
    let vImgL = ""
    let vImgM = ""
    let vImgT = ""
    for (vValSub in pItem) {
        vSubVal = pItem[vValSub]
        switch(vValSub) {
            case "latitude": vLat = vSubVal
              break;
            case "longitude": vLon = vSubVal
              break;
        }
        if (vLon != 0 && vLat != 0) {
            const vMaps = document.querySelector(".cls-maps")
            let vUrl = `http://maps.google.com/maps?z=12&t=m&q=loc:${vLat}+${vLon}`
            vMaps.innerHTML = `<button onclick="window.open('${vUrl}')">MAPS</button>`
        }
        console.log("coord?", vValSub)
        if (vValSub == "large" || vValSub == "medium" || vValSub == "thumbnail") {
            switch(vValSub) {
                case "large": vImgL = vSubVal
                  break;
                case "medium": vImgM = vSubVal
                  break;
                case "thumbnail": vImgT = vSubVal
                  break;
            }    
        if (vImgL != "" && vImgM != "" && vImgT != "") {
            const vImgs = document.querySelector(".cls-imgs")
            vImgs.innerHTML = `<img src="${vImgL}" alt=""><img src="${vImgM}" alt=""><img src="${vImgT}" alt="">`
        }
        } else {
            if (typeof(vSubVal) == "object") {
                fAddItem(vSubVal,pGrid)
            } else {
                const vAdd = document.createElement("DIV")
                vAdd.classList.add("cls-item")
                vAdd.innerHTML = `${vValSub}: ${vSubVal}`
                pGrid.appendChild(vAdd)
            }
        }
    }
}

document.getElementById("i-nombre").addEventListener("click", getData)
