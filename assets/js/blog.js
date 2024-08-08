function search() {

    let search = document.querySelector(".search").value.toUpperCase();
    // let prodectlist = document.querySelector(".prodect-list");
    let prodect = document.querySelectorAll(".blog_heading");
    // let prodect = document.getElementsByTagName("h2");
    let prodectname = document.getElementsByTagName("h2");
    let pargraph = document.getElementsByTagName("p");

    for (let i = 0 ; i < prodect.length ; i++) {
        if (prodect[i].innerHTML.toUpperCase().indexOf(search) >= 0) {
            // prodect[i].style.display = "";
            prodect[i].style.backgroundColor = "orange";
            prodect[i].style.borderRadius = "20px";
        } else {
            // prodect[i].style.display = "none";
            prodect[i].style.backgroundColor = "transparent;";
        }
    }

    // for (let i = 0 ; i < prodectname.length ; i++) {
    //     if (prodectname[i].innerHTML.toUpperCase().indexOf(search) >= 0) {
    //         // prodect[i].style.display = "";
    //         prodect[i].style.backgroundColor = "orange";
    //         prodect[i].style.borderRadius = "20px";
    //     } else {
    //         // prodect[i].style.display = "none";
    //         prodect[i].style.backgroundColor = "transparent;";
    //     }
    // }
}