# 📊 Sistema de Acompanhamento de Status

Este projeto é um sistema web simples para consulta de status e validação de usuários através de código (crachá).

O sistema simula um fluxo de autenticação e redirecionamento com base em números cadastrados previamente no sistema.

---

## 🚀 Funcionalidades

- Validação de código do usuário
- Exibição de mensagem personalizada
- Redirecionamento baseado em regras específicas
- Interface dinâmica com iframe
- Alertas de erro com SweetAlert2
- Suporte a lista de usuários cadastrados
- Tratamento de códigos inválidos

---

## 🔐 Lógica do sistema

O sistema funciona da seguinte forma:

1. O usuário digita um número (crachá)
2. O sistema verifica se:
   - O número existe na lista de `crachas`
   - Se é um código especial de redirecionamento
   - Ou se é inválido

### Regras:

- ✔ Se o número existir em `crachas` → exibe status
- ✔ Se o número estiver na lista especial → redireciona para página específica
- ❌ Se não existir → exibe alerta de erro

---

## 🧠 Tecnologias utilizadas

- HTML5
- CSS3 (responsivo + dark mode)
- JavaScript (vanilla)
- SweetAlert2
- Iframe dinâmico

---

## 📱 Responsividade

O sistema é totalmente responsivo, adaptando-se para:
- Desktop
- Tablet
- Mobile

---

## 🎨 Interface

- Layout moderno com cards
- Modo claro/escuro
- Animações suaves
- Fundo dinâmico (quando aplicado)

---

## ⚠️ Observações importantes

Este projeto foi desenvolvido apenas para fins de estudo e demonstração.

- Todos os **dados utilizados são fictícios**
- Todas as **imagens e nomes são ilustrativos**
- Não representa um sistema real de empresa ou base de dados oficial

---

## 📂 Estrutura do projeto
acompanhar-envio-demo/
 ├── css/
 │    └── inconsistencias.css
 │    └── step.css
 │    └── style.css
 ├── docs/
 │    └── ...
 ├── img/ 
 │    └── degfault.jpg
 │    └── em-fictica.png
 │    └── ...
 ├── js/
 │    └── dados.js
 │    └── indicador.js
 │    └── resultado.js
 ├── pic/
 │    └──WellingtonBertosoSantos.jpg
 │    └── AlessandraEduardaDaSilvaAzevedo.jpg
 │    └── ...
 ├── .gitignore
 ├── documentation.md
 ├── inconsistencia.html
 ├── index.html
 ├── LICENSE
 ├── main.html
 ├── README.md

## 👨‍💻 Autor:
Wellington Bertoso Santos

Esse projeto foi desenvolvido para fins educacionais e de portfólio.

---

## 📌 Status

✔ Finalizado (versão de demonstração)