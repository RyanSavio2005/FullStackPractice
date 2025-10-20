function keyLog(){
    document.addEventListener("keydown",(event)=>{
        alert("Key Pressed");
        console.log("Pressed at:",event.key);
    });
}