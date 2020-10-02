function populateUFs() {
    
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then ( res => res.json() )
    .then ( states =>  {
        for (const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event) {
    
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    // const citySelect = document.querySelector("select[name=city]"), 
    // stateInput = document.querySelector("[name=state]"),
    // indexOfSelectedState = event.target.selectedIndex,
    // ufValue = event.target.value,
    // url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    // stateInput.value = event.target.options[indexOfSelectedState].text

    fetch(url)
    .then ( res => res.json() )
    .then ( cities =>  {
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}

document.querySelector("select[name=uf]").addEventListener("change", getCities)
