const copyBtn = document.getElementById("copyBtn")
const textBox = document.getElementById("textBox")
const backBtn = document.getElementById("backBtn")
const vahaduoBtn = document.getElementById("vahaduoBtn")
const vahaduo2wayBtn = document.getElementById("vahaduo2wayBtn")


textBox.textContent = "Copied to cliploard!"
textBox.style.cssText = "font-size:20px;background-color:white;color:white;display:flex;justify-content:center;align-items:center;text-align:center;"
copyBtn.addEventListener("click", () => {
    const copyText = document.getElementById("content").textContent;

    navigator.clipboard.writeText(copyText);
    textBox.innerHTML = "<div>Copied to clipboard!</div>"
    textBox.style.cssText = "border-radius:10px;font-size:20px;background-color:#FFEB3B;display:flex;justify-content:center;align-items:center;text-align:center;"
    

    setTimeout(() => {
         textBox.style.cssText = "background-color:white;color:white;"
    },3000)
})

backBtn.addEventListener("click", () => {
    window.location.href="index.html";
})

vahaduoBtn.addEventListener("click", () => {
    window.open("https://vahaduo.github.io/vahaduo/", '_blank').focus();
})

vahaduo2wayBtn.addEventListener("click", () => {
    window.open("https://promotopic.com/calculator/vahd.html", '_blank').focus();
})

function myFunction() {
    window.open("https://www.w3schools.com");
  }

