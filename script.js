function toggleAnimations() {
    let elements = document.querySelectorAll('.bubble--one, .bubble--two, .bubble--three, .bubble--fore, .guy, .truck'); //Target the animations inside the svgs
    let button = document.querySelector('.toggleButton');
    
    // Toggle animation on/off for each animated element
    elements.forEach(function(element) {
        element.classList.toggle('paused');
    });
    
    // Change button text based on animation state
    if (button.innerText === 'Animations') {
        button.innerText = 'Animations On';
    } else {
        button.innerText = 'Toggle Animations';
    }
}

function toggleButton(){
    let onOff = document.querySelector('.onOff__button');
    if (onOff.classList.contains('off')){
        onOff.classList.remove('off');
        onOff.classList.add('on');
        onOff.textContent = 'Animations ON';

    } else{
        onOff.classList.remove('on');
        onOff.classList.add('off');
        onOff.textContent = 'Animations OFF';
    }
}

toggleButton();

/* IO */
const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);

        const els2animate = entry.target.querySelectorAll("#carlos, #doorSlide, #carMove");
        console.log(els2animate)
        els2animate.forEach(el=>{
            const animationClassName = el.getAttribute("animation-name");
            if (entry.isIntersecting) {
                const svgContent = el.innerHTML;
                el.innerHTML = svgContent;
                el.classList.add(animationClassName);
            } else {
                el.classList.remove(animationClassName);
            }        console.log(animationClassName)
        });

    });
},{
    threshold: 0.5,
});



sections.forEach(section=> {
    observer.observe(section)
});


