let urlAgentes = "https://valorant-api.com/v1/agents"
let urlMapas = "https://valorant-api.com/v1/maps"
let urlArmas = "https://valorant-api.com/v1/weapons"
let urlPlayersCard = "https://valorant-api.com/v1/playercards"
let urlSpray = "https://valorant-api.com/v1/sprays"
let urlBuddies = "https://valorant-api.com/v1/buddies"
let urlBlundles = "https://valorant-api.com/v1/bundles"
let Urlcompetitivo = "https://valorant-api.com/v1/competitivetiers"


const { createApp } = Vue

const app = createApp({
    data() {
        return {
            agents: [],
            agentsBackup: [],
            maps: [],
            mapsBackup: [],
            tiers: [],
            roles: [],
            descriptionRoles: [],
            categoriasSeleccionadasAgents: [],
            categoriasSeleccionadasMapas: [],
            textoBuscarAgents: "",
            textoBuscarMapas: "",
        }
    },

    created() {
        this.getDataAgents(urlAgentes)
        this.getDataMaps(urlMapas)
        this.getDataCompetitive(Urlcompetitivo)
    },

    methods: {
        getDataAgents(url) {
            fetch(url).then(response => response.json()).then(data => {
                this.agents = data.data.filter(events => events.isPlayableCharacter == true)
                this.agentsBackup = data.data.filter(events => events.isPlayableCharacter == true)
                this.roles = Array.from(new Set(this.agents.map(events => events.role.displayName)))
                this.descriptionRoles = Array.from(new Set(this.agents.map(events => events.role.description)))
                console.log(this.agents)
                console.log(this.roles)
                console.log(this.descriptionRoles)
            })
        },
        getDataMaps(url) {
            fetch(url).then(response => response.json()).then(data => {
                this.maps = data.data.filter(events => events.narrativeDescription != null)
                this.mapsBackup= data.data.filter(events => events.narrativeDescription != null)
                console.log(this.maps)
            })
        },
        getDataCompetitive(url) {
            fetch(url).then(response => response.json()).then(data => {
                this.tiers = (data.data[0].tiers).filter((events => events.largeIcon != null))
                console.log(this.tiers)
            })
        },


    },

    computed: {
        superFiltroAgents(){
            let filtroTextoAgents = this.agentsBackup.filter(agent => agent.displayName.toLowerCase().includes(this.textoBuscarAgents.toLowerCase()))
            
            this.categoriasSeleccionadasAgents.length == 0 ? this.agents = filtroTextoAgents: this.agents=filtroTextoAgents.filter(agent => this.categoriasSeleccionadasAgents.includes(agent.role.displayName))
        },
        superFiltroMapas(){
            let filtroTextoMaps = this.mapsBackup.filter(map => map.displayName.toLowerCase().includes(this.textoBuscarMapas.toLowerCase()))

            this.categoriasSeleccionadasMapas.length == 0 ? this.maps = filtroTextoMaps: this.maps=filtroTextoMaps.filter(map=>this.categoriasSeleccionadasMapas.includes(map.displayName))
        }
    }

}).mount('#app')

let cabecera = document.getElementById("cabecera")
let cardsPlayer = document.getElementById("cardAgents")
let cardsMaps = document.getElementById("cardMaps")
let sectionTable = document.getElementById("sectionTable")
let videoPrincipal = document.getElementById("videoPrincipal")
let footer = document.getElementById("footer")
let divCheckbox = document.getElementById("divCheckbox")
let divCheckboxAgents =document.getElementById("divCheckboxAgents")
let divCheckboxMapas = document.getElementById("divCheckboxMapas")

let botonAgents = document.getElementById("botonAgentes")
botonAgents.addEventListener("click", mostrarDataAgents)

function mostrarDataAgents() {
    cabecera.classList.remove("d-none")
    divCheckboxAgents.classList.remove("d-none")
    cardsPlayer.classList.remove("d-none")
    videoPrincipal.classList.add("d-none")
    footer.classList.remove("d-none")

}

let botonMaps = document.getElementById("botonMapas")
botonMaps.addEventListener("click", mostrarDataMapas)

function mostrarDataMapas() {

    cabecera.classList.remove("d-none")
    divCheckboxAgents.classList.add("d-none")
    divCheckboxMapas.classList.remove("d-none")
    cardsMaps.classList.remove("d-none")
    videoPrincipal.classList.add("d-none")
    footer.classList.remove("d-none")
}

let botonTabla = document.getElementById("botonTable")
botonTabla.addEventListener("click", mostrarDataTable)

function mostrarDataTable() {
    cabecera.classList.remove("d-none")
    divCheckboxAgents.classList.add("d-none")
    divCheckboxMapas.classList.add("d-none")
    sectionTable.classList.remove("d-none")
    videoPrincipal.classList.add("d-none")
    footer.classList.remove("d-none")
}

let botonAgentesAncord = document.getElementById("botonAgentesAncord")
botonAgentesAncord.addEventListener("click", mostrarAgentes)

function mostrarAgentes() {
    divCheckboxAgents.classList.remove("d-none")
    divCheckboxMapas.classList.add('d-none')
    cardsPlayer.classList.remove("d-none")
    sectionTable.classList.add("d-none")
    cardsMaps.classList.add("d-none")
    footer.classList.remove("d-none")
}

let botonMapasAncord = document.getElementById("botonMapasAncord")
botonMapasAncord.addEventListener("click", mostrarMapas)

function mostrarMapas() {
    divCheckboxMapas.classList.remove("d-none")
    divCheckboxAgents.classList.add("d-none")
    cardsMaps.classList.remove("d-none")
    sectionTable.classList.add("d-none")
    cardsPlayer.classList.add("d-none")
    footer.classList.remove("d-none")
}

let botonTableAncord = document.getElementById("botonTablaAncord")
botonTableAncord.addEventListener("click", mostrarTable)

function mostrarTable() {
    sectionTable.classList.remove("d-none")
    divCheckboxAgents.classList.add("d-none")
    divCheckboxMapas.classList.add("d-none")
    cardsMaps.classList.add("d-none")
    cardsPlayer.classList.add("d-none")
    footer.classList.remove("d-none")
}

