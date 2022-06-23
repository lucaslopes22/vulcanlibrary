const initializer = () => {
	const imageZoom = document.querySelectorAll(".book-cover img");
    const popup = document.querySelector(".zoom-image");
    const content = document.querySelector(".all-content");
    const modal = document.getElementById("close-modal");

    imageZoom.forEach((image) => {
        if (imageZoom.length > 0) {
            image.addEventListener("click", () => {
                popup.classList.add("active");
                content.classList.add("active");
                const imagePopup = popup.querySelector("img");
                imagePopup.src = image.getAttribute("src");
                console.log(image.getAttribute("src"));
            });
        }
    });

    modal.addEventListener("click", () =>{
        popup.classList.remove("active");
        content.classList.remove("active");
    });
    


    
    /*imageZoom.addEventListener("click", (e) =>{
        imageZoom.classList.add("active");
        popup.classList.add("active");
        console.log(e);
        const image = popup.querySelector("img");
    });
    */

};

window.onload = initializer();
