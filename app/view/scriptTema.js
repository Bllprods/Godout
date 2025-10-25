document.addEventListener('DOMContentLoaded', () => {    

    // criar Btn
    const btnTema = document.createElement("button");
    btnTema.textContent = "+";
    btnTema.classList.add("btnTema");

    let menu = document.createElement("div");
    menu.classList.add("menuTema");
    menu.style.display = "none";

    let btnClaro = document.createElement("button");
    btnClaro.textContent = "Tema Claro";
    btnClaro.classList.add("btn");

    let btnEscuro = document.createElement("Button");
    btnEscuro.textContent = "Tema Escuro";
    btnEscuro.classList.add("btn");
    
    let atual = sessionStorage.getItem("atual");
    if (!atual) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            //sessionStorage permite armazenar dados enquanto o site estiver acessado
            atual = "tema-escuro";
        } else {
            atual = "tema-claro";
        }
    }
    btnClaro.addEventListener("click", ()=>{
        document.body.classList.remove("tema-escuro");
        document.body.classList.add("tema-claro");
        atual = "tema-claro";
        sessionStorage.setItem("atual", atual);
        return atual;
    });

    btnEscuro.addEventListener("click",() =>{
        document.body.classList.remove("tema-claro");
        document.body.classList.add("tema-escuro");
        atual = "tema-escuro";
        sessionStorage.setItem("atual", atual);
        return atual;
    });

    menu.appendChild(btnClaro);
    menu.appendChild(btnEscuro);
    document.body.appendChild(menu);
    
    let Click = 0;
    btnTema.addEventListener('click', ()=>{
        if (Click ==0) {
            menu.style.display = "flex";
            Click = 1;
        } else if (Click == 1) {
            menu.style.display = "none";
            Click = 0;
        }
        console.log(atual);
    });

    document.body.appendChild(btnTema);
    
    function atualizar() {
        atual = sessionStorage.getItem("atual");      
        if (atual != "tema-escuro") {
            document.body.classList.remove("tema-escuro");
        } else {
            document.body.classList.remove("tema-claro");
        }
        document.body.classList.add(atual);
    }
    atualizar();
});
