const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : 
[]

console.log(itemsArray)

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})

function displayItems(){
    let items = ""
    for(let i = 0 ; i < itemsArray.length; i++){
        items += `<div class="item">
                    <div class="input-controller">
                        <textarea disabled>${itemsArray[i]}</textarea>
                        <div class="edit">
                            <i class="fa-solid fa-trash deletebtn"></i>
                            <i class="fa-solid fa-pen-to-square editbtn"></i>
                        </div>
                    </div>
                    <div class="update-controller">
                        <button class="savebtn">Save</button>
                        <button class="cancelbtn">Cancel</button>
                    </div>
                </div>`
    } 
    document.querySelector(".to-do-list").innerHTML = items
}

function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function displayDate(){
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector('#date').innerHTML = date[1] + " " + date[2] + " " + date[3]
    console.log(date)
}

window.onload = function(){
    displayDate()
    displayItems()
}