//Algoritimo faz cada etapa avançar de acordo com a data preenchida no arquivo Excel Upload "main.html"

document.addEventListener("DOMContentLoaded", () => {
  const etapas = [
    { classe: "one", id: "coletado" },
    { classe: "two", id: "preparacao" },
    { classe: "three", id: "confeccionado" },
    { classe: "four", id: "enviado" },
    { classe: "five", id: "transito" },
    { classe: "six", id: "entregue" }
  ];
 
  function atualizarBarra() {
    let activeSteps = 0;
 
    etapas.forEach((etapa, index) => {
      const dataElemento = document.getElementById(etapa.id);
      if (dataElemento && dataElemento.textContent.trim() !== "") {
        activeSteps = index + 1;
      }
    });
 
    etapas.forEach((etapa, index) => {
      const elementoBarra = document.querySelector(`.progress.${etapa.classe}`);
      if (index < activeSteps) {
        elementoBarra.classList.add("active");
      } else {
        elementoBarra.classList.remove("active");
      }
    });
  }
 
  // Atualiza inicialmente
  atualizarBarra();
 
  // Observa mudanças nas datas
  const observer = new MutationObserver(atualizarBarra);
  etapas.forEach(etapa => {
    const target = document.getElementById(etapa.id);
    if (target) {
      observer.observe(target, { childList: true, characterData: true, subtree: true });
    }
  });
});