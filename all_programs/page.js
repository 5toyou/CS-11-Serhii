function change_HTML(url){
    window.location.href = url;
}

document.getElementById("goto_index").onclick = () => {change_HTML("index.html");};



const colorful_case = document.querySelector(".colorful_case")

const min_number = 0;
const max_number = 255;


function my_func(element){
    random_color_1 = Math.floor(Math.random() * (max_number - min_number + 1));
    random_color_2 = Math.floor(Math.random() * (max_number - min_number + 1));
    random_color_3 = Math.floor(Math.random() * (max_number - min_number + 1));
    const rgb_color = `rgb(${random_color_1},${random_color_2},${random_color_3})`;

    element.style.color = rgb_color;
    element.classList.add("bounce");

    element.addEventListener("animationend",() => {
        element.classList.remove("bounce");
    }) 
    
    setTimeout(() => {
        element.style.color = "black";
    }, 1500);
    
}
