

const btn = document.getElementById("Btn")
const coolBtn = document.getElementById("coolBtn")
const colInfo = document.getElementById("colorName")


const changeTheBackgroundColor = () => {
    const color = Math.floor(Math.random() * 775).toString(); // gerate a random number and then use it as a background by adding a "#"
    document.body.style.backgroundColor = "#" + color;
    color.innerHTML = "#" + color;
    colInfo.innerHTML = "This color is #" + color;
    console.log("color", color)
  }
  
btn.addEventListener("click", changeTheBackgroundColor);
changeTheBackgroundColor();

coolBtn.addEventListener("click", () =>{
    setInterval(() => {
        
    for (let index = 0; index < 1000; index++) {
        changeTheBackgroundColor()
    }
    }, 200);
});