    function verificar() {
    const f = document.querySelector('#fun');
    const fun = String(f.value);
    const res = document.querySelector('#res');
    
 
    if (!fun || fun === "0") {
        Swal.fire({
            icon: 'warning',
            title: 'Número incorreto',
            text: 'Verifique e digite novamente.',
        });
        return;
    }
 
     const crachas = {
        "123456789": "main.html",
        "123456790": "main.html",
        "123456791": "main.html",
        "123456792": "main.html",
        "123456793": "main.html",
        "123456794": "main.html",
        "123456795": "main.html",
        "123456796": "main.html",
        "123456797": "main.html",
        "123456798": "main.html",
        "123456799": "main.html",
        "123456800": "main.html",
        "123456801": "main.html",
        "123456802": "main.html",
        "123456803": "main.html",
        "123456804": "main.html",
        "123456805": "main.html",
        "123456806": "main.html",
        "123456807": "main.html",
        "123456808": "main.html",
        "123456809": "main.html",
        "123456810": "main.html",
        "123456811": "main.html",
        "123456812": "main.html",
    };
 
    const mensagens = {
       "123456789": "Agatha",
        "123456790": "Alessandra",
        "123456791": "Alessandra",
        "123456792": "Aline",
        "123456793": "Alline",
        "123456794": "Alvaro",
        "123456795": "Alvaro",
        "123456796": "Amanda",
        "123456797": "Ana",
        "123456798": "Ana",
        "123456799": "Ariane",
        "123456800": "Beatriz",
        "123456801": "Bianca",
        "123456802": "Bianca",
        "123456803": "Bianca",
        "123456804": "Bruna",
        "123456805": "Bruna",
        "123456806": "Bruna",
        "123456807": "Bruna",
        "123456808": "Carolina",
        "123456809": "Carolina",
        "123456810": "Cristhian",
        "123456811": "Damiana",
        "123456812": "Well",

    };
 
    if (crachas[fun]) {
        const nome = mensagens[fun] || "Olá! Que bom ver você por aqui";
        aplicarEstilo(res, nome, crachas[fun], fun);
    } else if (["0587", "0588", "0589"].includes(fun)) {
        window.location = 'inconsistencia.html';
    } else {
            Swal.fire({
            icon: 'warning',
            title: 'Número incorreto',
            text: 'Verifique e digite novamente.',
        });
    }
}
 
function aplicarEstilo(res, nome, pagina, funcional) {
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    res.style.textAlign = 'center';
    res.innerHTML = `<strong> Olá ${nome}! Que bom ver você por aqui.`;
 
    const iframe = document.createElement('iframe');
    iframe.style.overflow = 'hidden';
    iframe.setAttribute('scrolling', 'no');
    iframe.src = `${pagina}?modo=status&fun=${funcional}&nome=${encodeURIComponent(nome)}`;
   //iframe.src = `${pagina}?modo=status&fun=${funcional}&nome=${encodeURIComponent(nome)}`;
  //iframe.src = "/acompanhar-envio-demo/main.html?modo=status&fun=" + funcional + "&nome=" + encodeURIComponent(nome);
     iframe.src = "main.html?modo=status&fun=" + funcional + "&nome=" + encodeURIComponent(nome);
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