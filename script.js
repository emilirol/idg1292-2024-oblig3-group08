/* IO */
const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);

        const els2animate = entry.target.querySelectorAll("#carlos, #doorSlide, #carMove, #trashBag, #anglerMove, .trenchMove, #anglerText, #fact1, #fact2, #fact3, #fact4, #fact5, #nr1, #nr2, #nr3");
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


