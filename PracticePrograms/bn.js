function clickBn(){
    document.addEventListener("click",(event)=>{
    alert("Button clicked");
    document.getElementsByTagName("h1").style.color="yellow";
    });
}