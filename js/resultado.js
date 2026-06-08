function verificar() {
    const f = document.querySelector('#fun');
    const fun = String(f.value);
    const res = document.querySelector('#res');
 
    if (!fun || fun === "0") {
        alert('[ERROR] Verifique os dados e tente novamente');
        return;
    }
 
    const crachas = {
        "987732405": "main.html", //ok
        "987353230": "main.html",//
        "987378556": "main.html",//ok
        "987341637": "main.html",//ok
        "987324540": "main.html",//ok
        "987390970": "main.html",
        "007684343": "main.html",
        "987394407": "main.html",
        "987394795": "main.html",
        "987338207": "main.html",
        "987274949": "main.html",
        "987394262": "main.html",
        "007439169": "main.html",
        "987395885": "main.html",
        "006248603": "main.html",
        "987395372": "main.html",
        "007676976": "main.html",
        "987395579": "main.html",
        "987394919": "main.html",
        "987395367": "main.html",
        "987395095": "main.html",
        "987395437": "main.html",
        "987344477": "main.html",
        "987395952": "main.html",
        "987395743": "main.html",
        "987395967": "main.html",
        "987395050": "main.html",
        "004213955": "main.html",
        "987395526": "main.html",
        "004324984": "main.html",
        "007670276": "main.html",
        "987377289": "main.html",
        "987395424": "main.html",
        "004096848": "main.html",
        "327554044": "main.html",
        "987315220": "main.html",
        "007524598": "main.html",
        "987395614": "main.html",
        "987349610": "main.html",
        "004298576": "main.html",
        "987354645": "main.html",
        "987321927": "main.html",
        "987395666": "main.html",
        "987395658": "main.html",
        "987395228": "main.html",
        "987394901": "main.html",
        "006334387": "main.html",
        "987392797": "main.html",
        "987377961": "main.html",
        "987393049": "main.html",
        "987395536": "main.html",
        "987395420": "main.html",
        "987305347": "main.html",
        "987395271": "main.html",
        "987395289": "main.html",
        "987395478": "main.html",
        "987394271": "main.html",
        "987357358": "main.html",
        "987361879": "main.html",
        "987395494": "main.html",
        "987304903": "main.html",
        "003881638": "main.html",
        "987362292": "main.html",
        "987395752": "main.html",
        "987395114": "main.html",
        "987298328": "main.html",
        "987382522": "main.html",
        "987395786": "main.html",
        "987395759": "main.html",
        "987351538": "main.html",
        "987395442": "main.html",
        "987338443": "main.html",
        "987266246": "main.html",
        "987395727": "main.html",
        "987395492": "main.html",
        "987394090": "main.html",
        "987389687": "main.html",
        "987394345": "main.html",
        "987395379": "main.html",
        "987395776": "main.html",
        "987352214": "main.html",
        "987322467": "main.html",
        "987395865": "main.html",
        "987387399": "main.html",
        "987379576": "main.html",
        "987378486": "main.html",
        "987395728": "main.html",
        "987395264": "main.html",
        "987294613": "main.html",
        "987384684": "main.html",
        "987395530": "main.html",
        "987394928": "main.html",
        "004410536": "main.html",
        "004210266": "main.html",
        "987325498": "main.html",
        "987394492": "main.html",
        "987346680": "main.html",
        "006958755": "main.html",
        "987395481": "main.html",
        "006681100": "main.html",
        "987296621": "main.html",
        "987338106": "main.html",
        "004081329": "main.html",
        "987395584": "main.html",
        "987395869": "main.html",
        "987395683": "main.html",
        "007481237": "main.html",
        "987281186": "main.html",
        "987366961": "main.html",
        "987369081": "main.html",

    };
 
    const mensagens = {
        "987394407": "Agatha",
        "987732405": "Alan",
        "987394795": "Alessandra",
        "007684343": "Alessandra",
        "987338207": "Alessandra Alimari",
        "987353230": "Alice",
        "987274949": "Aline",
        "987378556": "Aline",
        "987394262": "Alline",
        "007439169": "Alvaro",
        "987395885": "Alvaro",
        "987390970": "Amanda",
        "987324540": "Camila",
        "987341637": "Cecilia",
        "006248603": "Carol",
        "987395372": "Ana Paula",
        "007676976": "Anisio",
        "987395579": "Ariane",
        "987394919": "Arthur Joaquim",
        "987395367": "Bia",
        "987395095": "Bianca",
        "987395437": "Bianca",
        "987344477": "Bianca",
        "987395952": "Bruna Liu",
        "987395743": "Bruna",
        "987395967": "Bruna",
        "987395050": "Bruno",
        "004213955": "Camila",
        "987395526": "Carlos",
        "004324984": "Carol",
        "007670276": "Carolina",
        "987377289": "Cristhian",
        "987395424": "Damiana",
        "004096848": "Daniela",
        "327554044": "Daniele",
        "987315220": "Danielle",
        "007524598": "Danielly",
        "987395614": "Debora",
        "987349610": "Eduarda",
        "004298576": "Erica",
        "987354645": "Felipe",
        "987321927": "Fernanda",
        "987395666": "Fernando ",
        "987395658": "Fernando ",
        "987395228": "Nascimento",
        "987394901": "Gabriel",
        "006334387": "Hilton",
        "987392797": "Iohana",
        "987377961": "Isabela",
        "987393049": "Isabela",
        "987395536": "Isabella",
        "987395420": "Izabela Nicolau",
        "987305347": "Jaqueline",
        "987395271": "Jenyffer",
        "987395289": "Joao Vitor Baptista",
        "987395478": "John Enderson",
        "987394271": "Jonatas",
        "987357358": "Moab Souza",
        "987361879": "Wandes",
        "987395494": "Julia Maria",
        "987304903": "Juliana",
        "003881638": "Juliana",
        "987362292": "Laura",
        "987395752": "Leonardo",
        "987395114": "Leonardo",
        "987298328": "Luana",
        "987382522": "Lorran",
        "987395786": "Lucas",
        "987395759": "Luis Menardi",
        "987351538": "Luiz Fernando",
        "987395442": "Marcella",
        "987338443": "Marcelo",
        "987266246": "Marcelo",
        "987395727": "Maria Cristina",
        "987395492": "Maria Eduarda",
        "987394090": "Maria Eduarda",
        "987389687": "Marilia",
        "987394345": "Marina",
        "987395379": "Mateus Gruber",
        "987395776": "Mayara Kardec",
        "987352214": "Miriam",
        "987322467": "Muriel",
        "987395865": "Naiara Cristina",
        "987387399": "Nathalia",
        "987379576": "Octavio",
        "987378486": "Otto",
        "987395728": "Paulo",
        "987395264": "Pedro Senna",
        "987294613": "Priscila",
        "987384684": "Rafael",
        "987395530": "Rodrigo",
        "987394928": "Rodrigo",
        "004410536": "Rose",
        "004210266": "Sandrineia",
        "987325498": "Sara Poza",
        "987394492": "Sara Omena",
        "987346680": "Tais",
        "006958755": "Thays",
        "987395481": "Thiago",
        "006681100": "Thiago",
        "987296621": "Thiago",
        "987338106": "Tiago Martinns",
        "004081329": "Val",
        "987395584": "Vinicius",
        "987395869": "Vitor",
        "987395683": "Vitoria",
        "007481237": "Wagner",
        "987281186": "Well",
        "987366961": "Yan",
        "987369081": "Ygor",

    };
 
    if (crachas[fun]) {
        const nome = mensagens[fun] || "Olá! Que bom ver você por aqui";
        aplicarEstilo(res, nome, crachas[fun], fun);
    } else if (fun === "0587" || fun === "0588" || fun === "0589") {
        window.location = 'inconsistencia.html';
    } else {
        alert('[ERROR] Crachá não reconhecido');
    }
}
 
function aplicarEstilo(res, nome, pagina, funcional) {
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.querySelector(".upload-container")
    
    res.style.textAlign = 'center';
    res.innerHTML = `<strong>Que bom ver você por aqui,  ${nome} <i class="icon uil uil-selfie"></i></strong>`;
 
    const iframe = document.createElement('iframe');
    iframe.style.overflow = 'hidden';
    iframe.setAttribute('scrolling', 'no');
    //iframe.src = `${pagina}?modo=status&fun=${funcional}&nome=${encodeURIComponent(nome)}`;
   // iframe.src = `${pagina}?modo=status&fun=${funcional}&nome=${encodeURIComponent(nome)}`;
   iframe.src = "/acompanhar-envio-crachas/main.html?modo=status&fun=" + funcional + "&nome=" + encodeURIComponent(nome);
   //document.body.appendChild(iframe);
   res.appendChild(iframe);
   res.style.visibility = "hidden"; 


    iframe.onload = () => {
    res.style.visibility = "visible"; 
   
    console.log("Iframe carregado!");
    console.log(iframe.src);
    };

    iframe.onerror = (e) => {
        console.log("Erro ao carregar iframe", e);
    };
}