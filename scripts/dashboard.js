//Code to access and update items from an array stored on the local host

const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) :
[]

console.log = (itemsArray)

const input = document.getElementById('add-input')

document.querySelector("#enter").addEventListener("click", () => {
    const inputValue = input.value;
    // console.log("one")
    console.log("one")

    const item = document.querySelector("#item")
    // createItem(inputValue)
})

function displayItems() {
    let items =  ""
    itemsArray.forEach(item => {
        items += `
        <div class="item">
            <div class="input">
                <textarea disabled>${item}</textarea>
                <div class="edit">
                    <i class="fa-solid fa-plus editbtn"></i>
                    <i class="fa-solid fa-trash deletebtn"></i>
                </div>
            </div>
            <div class="update">
                <button class="savebtn">Save</button>
                <button class="cancelbtn">Cancel</button>
            </div>
        </div>
        `
    })
    // for (let i = 0; i < itemsArray.lenght; i++){
    //     items += `
    //     <div class="item">
    //         <div class="input">
    //             <textarea disabled>${itemsArray[i]}</textarea>
    //             <div class="edit">
    //                 <i class="fa-solid fa-plus editbtn"></i>
    //                 <i class="fa-solid fa-trash deletebtn"></i>
    //             </div>
    //         </div>
    //         <div class="update">
    //             <button class="savebtn">Save</button>
    //             <button class="cancelbtn">Cancel</button>
    //         </div>
    //     </div>
    //     `
    // }

    document.querySelector(".to-do").innerHTML = items
}

function createItem(item){
    itemsArray.push(item)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    displayItems()
    // location.reload()
}

// Code to display date

function displayDate() {
    let date = new Date()
    
    date = date.toString().split(" ")
    document.querySelector('#date').innerHTML = "It is;" + " " + date[1] + " " + date[2]+ " " + date[3]
    console.log=(date)
}

window.onload = function() {
    displayDate()
    // displayItems()
}