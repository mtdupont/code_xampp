const getDataTable = async ()=> {
    try {        
        let ApiTable = await axios('https://randomuser.me/api/')
        let vDataTable = ApiTable.data.results[0]
        console.log("datos", vDataTable)
        fCreaHTML(vDataTable)
    } catch(e) {
        return "La API fallo"
    }
}
const fCreaHTML = (vDataTable) => {
    const vTable = document.querySelector(".cls-table")
    const vTh = document.querySelector(".cls-th")
    console.log("TH",vTh)
    if (vTh == null) {
        vRow = document.createElement("TR")
        vRow.classList.add("cls-th")
        vTable.appendChild(vRow) 
        vRow.innerHTML = `<th>Photo</th><th>Id</th><th>Title</th><th>First</th><th>Last</th><th>Gender</th>
        <th>Date</th><th>Age</th><th>Nat</th><th>Email</th><th>Phone</th>`
        vHeader = true    
    }
    vRow = document.createElement("TR")
    vTable.appendChild(vRow)
    vImgT = vDataTable.picture.thumbnail
    vRow.innerHTML = `<td><img src="${vImgT}" alt=""></td><td>${vDataTable.id.name}</td><td>${vDataTable.name.title}</td><td>${vDataTable.name.first}</td><td>${vDataTable.name.last}</td>
    <td>${vDataTable.gender}</td><td>${vDataTable.dob.date}</td><td>${vDataTable.dob.age}</td><td>${vDataTable.nat}</td><td>${vDataTable.email}</td><td>${vDataTable.phone}</td>`
}

/*
const fAddData = (pDato) => {
    const vGrid = document.querySelector(".cls-grid")
    const vAdd = document.createElement("DIV")
    vAdd.classList.add("cls-item-1")
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
    let vCol  = 0
    for (vValSub in pItem) {
        vCol ++
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
                fAddImag
                // const vImgs = document.querySelector(".cls-imgs")
                // vImgs.innerHTML = `<img src="${vImgL}" alt=""><img src="${vImgM}" alt=""><img src="${vImgT}" alt="">`
            }
        } else {
            if (typeof(vSubVal) == "object") {
                vCol = 0
                fAddItem(vSubVal,pGrid)
            } else {
                const vAdd = document.createElement("DIV")
                if (vCol == 5) vCol = 1
                vAdd.classList.add(`cls-item-${vCol}`)
                vAdd.innerHTML = `${vValSub}: ${vSubVal}`
                pGrid.appendChild(vAdd)
            }
        }
    }
}
const fAddImag = () => {
    const vImgs = document.querySelector(".cls-imgs")
    // vImgs.innerHTML = `<img src="${vImgL}" alt=""><img src="${vImgM}" alt=""><img src="${vImgT}" alt="">`
    vImgs.innerHTML = `<img src="${vImgL}" alt=""><img src="${vImgM}" alt=""><img src="${vImgT}" alt="">`

}
*/

document.getElementById("i-api-tabla").addEventListener("click", getDataTable)
