// variables to access the DOM
const color = document.getElementById("color-picker")
const selectScheme = document.getElementById("color-schemes")
const btnGetColor = document.getElementById("btn-get")
const schemeType = document.getElementById("scheme-type")
const colorSection = document.getElementById("color-section")
const hexValues = document.getElementById("hex-values")
const copyModal = document.getElementById("modal-hex-copied")

//Variables
//load random seed color on each page load - not necessary for function but fun to add
color.value = randomColor()

//Functions
//fetch and render colors from color picker and selection
async function renderColors() {
    const currentColor = color.value.slice(1)
    let currentScheme = selectScheme.value.toLowerCase() 
    const res = await fetch (`https://www.thecolorapi.com/scheme?hex=${currentColor}&mode=${currentScheme}&count=5`)
    const data = await res.json()
    const colorsArr = data.colors    
    colorsArr.map((color)=> {  
        colorSection.innerHTML += `<div class="color-section" style="background:${color.hex.value}">
                                        <button class="color-text" onclick="SelfCopy('${color.hex.value}')">${color.name.value}</button>
                                    </div>`
        hexValues.innerHTML += `<button type="button" id="${color.hex.value}" class="hexText" onclick="SelfCopy('${color.hex.value}')">
                                    <span>${color.hex.value}</span>
                                </button>`
    })                  
}

//generate random seed color on page load
function randomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    return randomColor
}

//copy text to Clipboard
async function SelfCopy(hexColor) {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(hexColor)
            copyModal.textContent = hexColor + " copied"
            copyModal.style.display = 'flex'
            setTimeout (()=>(copyModal.style.display = 'none'), 1500)
        } catch (error) { //if try block throws an error use CopyToClipboard
            CopyToClipboard(hexColor)
        }
        } else { //if clipboard API not supported use CopyToClipboard
            CopyToClipboard(hexColor)
    }
}

//deprecated version to work on Scrimba
function CopyToClipboard(hexColor) {
    const area = document.createElement('textarea')
    area.classList.add('modal')
    area.style.display = 'flex'
    area.style.textAlign = 'center'
    area.style.resize = 'none'
    area.style.width = '5em'
    area.style.focus = 'none'
    document.body.appendChild(area)
    area.value = hexColor + " copied"
    area.select()
    document.execCommand('copy')
    setTimeout (()=>(document.body.removeChild(area)), 1500)  
}

//Event Listeners
btnGetColor.addEventListener('click', (e)=> {
    e.preventDefault()
    const currentSchemeName = (schemeType.textContent).toLowerCase()
    if(selectScheme.value != currentSchemeName){
        schemeType.textContent = selectScheme.value.charAt(0).toUpperCase() + selectScheme.value.slice(1) 
        colorSection.innerHTML = ""
        hexValues.innerHTML = ""
        renderColors()
    }
})

color.addEventListener('click', () => {
    colorSection.innerHTML = ""
    hexValues.innerHTML = ""
    schemeType.textContent = ""  
})

selectScheme.addEventListener('change', (e) => {
    e.preventDefault()
    schemeType.textContent = selectScheme.value.charAt(0).toUpperCase() + selectScheme.value.slice(1)  
    colorSection.innerHTML = ""
    hexValues.innerHTML = ""
    renderColors()
})

