const sec2 = document.querySelectorAll("#explore-btn");

sec2.forEach((item)=> {
    item.addEventListener("click",()=> {

        // console.log("hallo")

        let scrl = document.getElementById("second-section");
        scrl.scrollIntoView();
    })
})