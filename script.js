function toggleButton(){
    let onOff = document.querySelector(".onOff__button");
    if (onOff.classList.contains("off")){
        onOff.classList.remove("off");
        onOff.classList.add("on");
        onOff.textContent = "Animations ON";

    } else{
        onOff.classList.remove("on");
        onOff.classList.add("off");
        onOff.textContent = "Animations OFF";
    }
}

