//algoritimo para buscar os dados no arquivo Excel Upload referente a cada pessoa, "main.html"

let dadosExcel = [];
 
// Normaliza nomes de colunas
function normalize(str) {
    return str.toString().toLowerCase().replace(/\s+/g,'').normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}
 
// Converte datas do Excel para dd/mm
function formatarData(valor) {
  if(!valor) return "";
  if(typeof valor === "number") {
    const date = new Date(Math.round((valor - 25569) * 86400 * 1000));
    const day = String(date.getUTCDate()).padStart(2,'0');
    const month = String(date.getUTCMonth()+1).padStart(2,'0');
    return `${day}/${month}`;
  }
  return valor;
}
 
// Mapeamento HTML
const mapHTML = {
    "coletado": "coletado",
    "empreparacao": "preparacao",
    "confeccionado": "confeccionado",
    "enviado": "enviado",
    "emtransito": "transito",
    "entregue": "entregue"
};
 
// Preenche campos e progresso
function preencherCampos(nome) {
    const linha = dadosExcel.find(r => r.Nome === nome);
    if(!linha) return;
 
    const linhaNorm = {};
    Object.keys(linha).forEach(k => linhaNorm[normalize(k)] = linha[k]);
 
    Object.keys(mapHTML).forEach((key, i) => {
        let chaveOriginal = Object.keys(linhaNorm).find(k => normalize(k) === key);
        let valor = formatarData(chaveOriginal ? linhaNorm[chaveOriginal] : "");
        const el = document.getElementById(mapHTML[key]);
        el.innerText = valor;
 
        const progressEl = document.querySelector(`.progress.${["one","two","three","four","five","six"][i]}`);
        if(valor) progressEl.classList.add("done");
        else progressEl.classList.remove("done");
    });
 
    carregarImagem(nome); // <- chamada correta
}
 
  //Carrega imagem da pessoa
   function carregarImagem(nome) {
    const img = document.getElementById("fotoPessoa");
 
    const nomeNormalizado = normalize(nome).replace(/[^a-z]/g, '');
    const caminhoImagem = `pic/${nomeNormalizado}.jpg`;
 
   fetch(caminhoImagem)
      .then(res => {
           if (res.ok) {
                img.src = caminhoImagem;
                img.style.display = "block";
            } else {
              console.warn("Imagem não encontrada:", caminhoImagem);
                img.style.display = "none";
            }
         })
         .catch(() => {
             img.style.display = "none";
         });
         }
 
// Upload Excel
document.getElementById("uploadExcel").addEventListener("change", function(e) {
  let file = e.target.files[0];
  let reader = new FileReader();
 
  reader.onload = function(e) {
    let data = new Uint8Array(e.target.result);
    let workbook = XLSX.read(data, { type: "array" });
    let sheet = workbook.Sheets[workbook.SheetNames[0]];
    dadosExcel = XLSX.utils.sheet_to_json(sheet);
 
    console.log("Dados do Excel:", dadosExcel);
 
    localStorage.setItem('dadosExcel', JSON.stringify(dadosExcel));
 
    // Preencher dropdown
    const select = document.getElementById("selectPessoa");
    select.innerHTML = '<option value="">Selecione a pessoa</option>';
    dadosExcel.forEach(row => {
      if(row.Nome) {
        const option = document.createElement("option");
        option.value = row.Nome;
        option.text = row.Nome;
        select.appendChild(option);
      }
    });
  };
  reader.readAsArrayBuffer(file);
});
 
// Seleção de pessoa
document.getElementById("selectPessoa").addEventListener("change", function() {
    const nomeSelecionado = this.value;
    if(!nomeSelecionado) return;
 
    localStorage.setItem('pessoaSelecionada', nomeSelecionado);
    preencherCampos(nomeSelecionado);
});
 
window.addEventListener('load', () => {
  const params = new URLSearchParams(window.location.search);
  const funcional = params.get('fun');
  const modo = params.get('modo');
 
  const dadosSalvos = localStorage.getItem('dadosExcel');
  if (dadosSalvos) {
      dadosExcel = JSON.parse(dadosSalvos);

      console.log("dadosSalvos:", localStorage.getItem('dadosExcel'));
      console.log("dadosExcel:", dadosExcel.length);

    // TESTES
      console.log("Quantidade:", dadosExcel.length);
      console.log("Primeiro registro:", dadosExcel[0]);
      console.log("Funcional recebida:", funcional);

      const linha = dadosExcel.find(
          r => String(r.Funcional) === funcional
      );

      console.log("Linha encontrada:", linha);

 
      // Preencher dropdown (caso não esteja em modo status)
      const select = document.getElementById("selectPessoa");
      if (modo !== 'status') {
          select.innerHTML = '<option value="">Selecione a pessoa</option>';
          dadosExcel.forEach(row => {
              if (row.Nome) {
                  const option = document.createElement("option");
                  option.value = row.Nome;
                  option.text = row.Nome;
                  select.appendChild(option);
              }
          });
 
          const pessoaSalva = localStorage.getItem('pessoaSelecionada');
          if (pessoaSalva) {
              select.value = pessoaSalva;
              preencherCampos(pessoaSalva);
          }
      }
 
      // Se estiver em modo=status e tiver funcional na URL, busca automática
      if (modo === 'status' && funcional) {
        //const linha = dadosExcel.find(r => String(r.Funcional) === funcional); //errado
        const linha = dadosExcel.find(r => String(r.Crachá) === funcional); //certo
        //const linha = dadosExcel.find(r => String(r["Crachá"]) === funcional);  //certo tbm
        //const linha = dadosExcel.find(r => Number(r["Crachá"]) === Number(funcional)); //certo tbm
console.log("Linha encontrada:", linha);
          if (linha && linha.Nome) {
              preencherCampos(linha.Nome);
              carregarImagem(linha.Nome);
          }
      }
  }
 
  // Ocultar elementos visuais no modo status
  if (modo === 'status') {
      const dropdown = document.querySelector('.dropdown');
      const fileSelector = document.querySelector('#uploadExcel');
      const selectPessoa = document.getElementById('selectPessoa');
 
      if (dropdown) dropdown.style.display = 'none';
      if (fileSelector) fileSelector.style.display = 'none';
      if (selectPessoa) selectPessoa.style.display = 'none';
  }
});


