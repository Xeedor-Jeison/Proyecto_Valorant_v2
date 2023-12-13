let urlAgentes = "https://valorant-api.com/v1/agents"
let urlMapas = "https://valorant-api.com/v1/maps"


fetch(urlAgentes).then(response => response.json()).then(data => {
    let urlString = window.location.href
    let urlArmada = new URL(urlString)
    let parametros = new URLSearchParams(urlArmada.search)
    let uuid = parametros.get('uuid')
    let divDetailsAgents = document.getElementById("divAgentsDetails")
    let divMapsDetails = document.getElementById("divMapsDetails")
    let filtroData = data.data.filter(events => events.isPlayableCharacter == true)

    let miData = filtroData.filter(events => events.uuid == uuid)
    console.log(miData)

    if (miData.length != 0) {
        console.log("Estoy entrnado aca")
        divDetailsAgents.classList.remove("d-none")
        document.getElementById("nameAgents").innerHTML = miData[0].displayName
        document.getElementById("descriptionAgents").innerHTML = miData[0].description
        document.getElementById("rolAgents").innerHTML = miData[0].role.displayName
        document.getElementById("descriptionRol").innerHTML = miData[0].role.description
        document.getElementById("imagenAgents").src = miData[0].fullPortrait
    }
 
   


})

fetch(urlMapas).then(response => response.json()).then(data => {
    let urlString = window.location.href
    let urlArmada = new URL(urlString)
    let parametros = new URLSearchParams(urlArmada.search)
    let uuid = parametros.get('uuid')
    let divDetailsAgents = document.getElementById("divAgentsDetails")
    let divMapsDetails = document.getElementById("divMapsDetails")



    let filtroData = data.data.filter(events => events.narrativeDescription != null)

    let miData = filtroData.filter(events => events.uuid == uuid)
    console.log(miData)

    if (miData.length != 0) {
        console.log("Estoy entrnado aca")
        
        divMapsDetails.classList.remove("d-none")
        document.getElementById("titleMaps").innerHTML = miData[0].displayName
        // document.getElementById("descriptionAgents").innerHTML = miData[0].description
        // document.getElementById("rolAgents").innerHTML = miData[0].role.displayName
        // document.getElementById("descriptionRol").innerHTML = miData[0].role.description
        document.getElementById("imgFondo").src = miData[0].splash
        document.getElementById("imgSobrePuesta").src = miData[0].displayIcon
    }


})