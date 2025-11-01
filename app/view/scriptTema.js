document.addEventListener('DOMContentLoaded', () => {    
    let Click;
    
    const btnTema = document.createElement("div");
    btnTema.classList.add("btnTema");
    document.body.appendChild(btnTema);
    let atual = sessionStorage.getItem("atual");
    tema();
    if (!atual) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            Click = 0;
        } else {
            Click = 1;
        }
    } else {
        if (atual === "tema-escuro") {
            Click = 0;
        } else {
            Click = 1;
        }
        tema();
    }

    function tema(){
        if (Click == 0) {
            atual = "tema-escuro";
            sessionStorage.setItem("atual", atual);
            Click = 1;
        } else if (Click == 1) {
            atual = "tema-claro";
            sessionStorage.setItem("atual", atual);
            Click = 0;
        }
        atualizar();
    }
    btnTema.addEventListener("click", ()=>{
        if (Click == 0) {
            atual = "tema-escuro";
            sessionStorage.setItem("atual", atual);
            Click = 1;
        } else if (Click == 1) {
            atual = "tema-claro";
            sessionStorage.setItem("atual", atual);
            Click = 0;
        }
        atualizar();
    });
    function atualizar(){
        atual = sessionStorage.getItem("atual");
        document.body.classList.remove("tema-escuro", "tema-claro");
        document.body.classList.add(atual);
    }
    atualizar();

    // let menu = document.createElement("div");
    // menu.classList.add("menuTema");
    // menu.style.display = "none";

    // let btnClaro = document.createElement("button");
    // btnClaro.textContent = "Tema Claro";
    // btnClaro.classList.add("btn");

    // let btnEscuro = document.createElement("Button");
    // btnEscuro.textContent = "Tema Escuro";
    // btnEscuro.classList.add("btn");
    
    // btnClaro.addEventListener("click", ()=>{
    //     document.body.classList.remove("tema-escuro");
    //     document.body.classList.add("tema-claro");

    // });

    // btnEscuro.addEventListener("click",() =>{
    //     document.body.classList.remove("tema-claro");
    //     document.body.classList.add("tema-escuro");
    // });

    // menu.appendChild(btnClaro);
    // menu.appendChild(btnEscuro);
    // document.body.appendChild(menu);
});
