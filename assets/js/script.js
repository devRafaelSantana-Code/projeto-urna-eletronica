const seuVotoPara = document.querySelector(".d-1-1 span");
const cargo = document.querySelector(".d-1-2 span");
const numeros = document.querySelector(".d-1-3");
const descricao = document.querySelector(".d-1-4");
const lateral = document.querySelector(".d-1-right");
const aviso = document.querySelector(".d-2");
const telaEl = document.querySelector(".tela");

let etapaAtual = 0;
let numeroClick = "";
let votoBranco = false;
let bloqueiaTeclado = false;
const votos = [];

function comecarEtapa() {
   const etapa = etapas[etapaAtual];

   numeroClick = "";
   votoBranco = false;

   let numeroHTML = "";
   for (let i = 0; i < etapa.numeros; i++) {
      const classePisca = i === 0 ? " pisca" : "";
      numeroHTML += `<div class="numero${classePisca}"></div>`;
   }

   telaEl.style.display = "flex";
   telaEl.style.flexDirection = "column";
   telaEl.style.justifyContent = "initial";
   telaEl.style.alignItems = "initial";

   seuVotoPara.style.display = "none";
   cargo.innerHTML = etapa.titulo;
   descricao.innerHTML = "";
   aviso.style.display = "none";
   lateral.innerHTML = "";
   numeros.innerHTML = numeroHTML;
}

function atualizaInterface() {
   const etapa = etapas[etapaAtual];
   const candidato = etapa.candidatos.find(
      (item) => item.numero === numeroClick,
   );

   seuVotoPara.style.display = "block";
   aviso.style.display = "block";

   if (candidato) {
      let infoHTML = `Nome: ${candidato.nome} <br/>Partido: ${candidato.partido}`;
      if (candidato.vice) {
         infoHTML += `<br/>Vice: ${candidato.vice}`;
      }
      descricao.innerHTML = infoHTML;

      lateral.innerHTML = candidato.fotos
         .map((foto) => {
            const classeSmall = foto.small ? " small" : "";
            return `
               <div class="d-1-image${classeSmall}">
                  <img src="./assets/images/${foto.url}" alt="${foto.legenda}" />
                  ${foto.legenda}
               </div>
            `;
         })
         .join("");
   } else {
      descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
      lateral.innerHTML = "";
   }
}

function numero(n) {
   if (bloqueiaTeclado || votoBranco) return;

   const elNumero = document.querySelector(".numero.pisca");
   if (!elNumero) return;

   elNumero.innerHTML = n;
   numeroClick += n;
   elNumero.classList.remove("pisca");

   if (elNumero.nextElementSibling) {
      elNumero.nextElementSibling.classList.add("pisca");
   } else {
      atualizaInterface();
   }
}

function branco() {
   if (bloqueiaTeclado) return;

   numeroClick = "";
   votoBranco = true;

   seuVotoPara.style.display = "block";
   aviso.style.display = "block";
   numeros.innerHTML = "";
   descricao.innerHTML =
      '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
   lateral.innerHTML = "";
}

function corrige() {
   if (bloqueiaTeclado) return;

   if (etapas[etapaAtual]) {
      comecarEtapa();
   }
}

function confirma() {
   if (bloqueiaTeclado) return;

   const etapa = etapas[etapaAtual];
   if (!etapa) return;

   let votoConfirmado = false;

   if (votoBranco) {
      votoConfirmado = true;
      votos.push({
         etapa: etapa.titulo,
         voto: "branco",
      });
   } else if (numeroClick.length === etapa.numeros) {
      votoConfirmado = true;
      votos.push({
         etapa: etapa.titulo,
         voto: numeroClick,
      });
   }

   if (votoConfirmado) {
      etapaAtual++;

      if (etapas[etapaAtual]) {
         comecarEtapa();
      } else {
         finalizarVotacao();
      }
   }
}

function finalizarVotacao() {
   bloqueiaTeclado = true;

   telaEl.style.display = "flex";
   telaEl.style.flexDirection = "row";
   telaEl.style.justifyContent = "center";
   telaEl.style.alignItems = "center";
   telaEl.innerHTML =
      '<div class="aviso--gigante pisca" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">FIM</div>';

   setTimeout(() => {
      window.location.reload();
   }, 10000);
}

comecarEtapa();
