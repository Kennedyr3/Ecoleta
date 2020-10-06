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
    
    // const citySelect = document.querySelector("select[name=city]")
    // const stateInput = document.querySelector("[name=state]")
    // const indexOfSelectedState = event.target.selectedIndex
    // stateInput.value = event.target.options[indexOfSele ctedState].text
    // const ufValue = event.target.value
    // const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    const citySelect = document.querySelector("select[name=city]"),
    stateInput = document.querySelector("[name=state]"),
    indexOfSelectedState = event.target.selectedIndex,
    ufValue = event.target.value,
    url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    stateInput.value = event.target.options[indexOfSelectedState].text;
    
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then ( res => res.json() )
    .then ( cities =>  {
        
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}

document.querySelector("select[name=uf]").addEventListener("change", getCities)


//Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target
    //adicionar ou remover um classe com js (toggle)
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    const itemId = itemLi.dataset.id
    // verifica se existem itens selecionados,
    // se sim pega os itens selecionados

    //const alreadySelected = selectedItems.findIndex( item => 
        // const itemFound = item == itemId
        //item == itemid
    //)função reduzida

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId // isso será true ou false
        return itemFound
    })
    //se ja estiver selecionado, tira da seleção
    
    //se não estiver selecionado, adcionar a seleção
    //atualizar o campo escondido com os itens selecionados
}

