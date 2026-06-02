function verificar() {
    const f = document.querySelector('#fun');
    const fun = String(f.value);
    const res = document.querySelector('#res');
    
 
    if (!fun || fun === "0") {
        alert('[ERROR] Verifique os dados e tente novamente');
        return;
    }
 
    const crachas = {
        "987356344": "main.html", //ok
        "987353230": "main.html",//
        "987378556": "main.html",//ok
        "987341637": "main.html",//ok
        "987324540": "main.html",//ok
        "987390970": "main.html",
        "007684343": "main.html",
        "987281186": "main.html",
    };
 
    const mensagens = {
        "987356344": "Alan",
        "987353230": "Alice",
        "007684343": "Alessandra",
        "987378556": "Aline",
        "987341637": "Cecilia",
        "987324540": "Camila",
        "987390970": "Amanda",
        "987281186": "Well",
    };
 
    if (crachas[fun]) {
        const nome = mensagens[fun] || "Olá! Que bom ver você por aqui";
        aplicarEstilo(res, nome, crachas[fun], fun);
    // } else if (fun === "0587") {
    //     window.location = 'ag0587.html';
    // } else {
    //     alert('[ERROR] Crachá não reconhecido');
    }
}
 
function aplicarEstilo(res, nome, pagina, funcional) {
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    res.style.textAlign = 'center';
    res.innerHTML = `<strong> Olá #Ituber! Que bom ver você por aqui,  ${nome} <i class="icon uil uil-selfie"></i></strong>`;
 
    const iframe = document.createElement('iframe');
    iframe.style.overflow = 'hidden';
    iframe.setAttribute('scrolling', 'no');
    //iframe.src = `${pagina}?modo=status&fun=${funcional}&nome=${encodeURIComponent(nome)}`;
    iframe.src = `${pagina}?modo=status&fun=${funcional}&nome=${encodeURIComponent(nome)}`;
   //document.body.appendChild(iframe);
   res.appendChild(iframe);

    iframe.onload = () => {
    console.log("Iframe carregado!");
    console.log(iframe.src);
    };

    iframe.onerror = (e) => {
        console.log("Erro ao carregar iframe", e);
    };
}