//your JS code here. If required.
let p = document.getElementById("counter")
let button = document.getElementById("incrementBtn")
let count = 0
function addCount(){
	alert(count)
    p.innerText = ""
	p.innerText = count + 1
    count += 1
}
button.addEventListener("click",addCount)