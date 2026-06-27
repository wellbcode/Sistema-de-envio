# 📊 Documentação Técnica — Sistema de Acompanhamento de Status

## 📌 Visão geral

Este projeto é um sistema web de consulta de status baseado em um código (crachá) digitado pelo usuário.

Ele valida o código, exibe informações personalizadas ou redireciona para páginas específicas, simulando um fluxo de sistema interno.

---

## ⚙️ Fluxo de funcionamento

### 1. Entrada do usuário
O usuário digita um código no campo de input (`#fun`).

---

### 2. Validação inicial

O sistema valida se:

- O campo não está vazio
- O valor não é "0"
- O código existe na base de dados (`crachas`)

Se falhar, é exibido um alerta via SweetAlert2.

---

### 3. Base de dados (simulada)

O sistema utiliza dois objetos principais:

#### 📦 `crachas`
Responsável pelo mapeamento do código para a página:

```js id="doc2"
{
  "123456789": "main.html",
  "123456790": "main.html"
}

👤 mensagens

Responsável pelo nome do usuário:
{
  "123456789": "Agatha",
  "123456790": "Alessandra"
}

4. Regras de negócio
✔️ Código válido
Existe em crachas
Exibe mensagem personalizada
Carrega iframe com status
🔀 Códigos especiais

Alguns códigos não seguem o fluxo padrão e redirecionam diretamente:

["0587", "0588", "0589"]

Esses códigos levam para:

inconsistencia.html
❌ Código inválido
Não existe na base
Campo vazio ou "0"
Mostra alerta de erro
🖥️ Função principal
verificar()

Responsável por:

Capturar input do usuário
Validar o código
Direcionar fluxo correto
aplicarEstilo()

Responsável por:

Exibir mensagem personalizada
Inserir iframe dinâmico com status
Ajustar interface visual
📡 Navegação dinâmica

O sistema utiliza iframe para carregar a página de status:

iframe.src = "/acompanhar-envio-demo/main.html?modo=status&fun=" + funcional;

Parâmetros enviados:

modo=status → define o modo da página
fun → código do usuário
nome → nome personalizado
📱 Responsividade

O sistema adapta-se automaticamente para:

Desktop
Tablet
Mobile
🎨 Interface
Layout baseado em cards
Suporte a modo escuro
Animações suaves
Alertas interativos (SweetAlert2)
⚠️ Observações
Todos os dados são fictícios
Imagens e nomes são ilustrativos
Projeto criado para fins educacionais e portfólio
🔐 Segurança (simulada)

Este projeto não possui backend real.

Toda validação é feita no front-end apenas para simulação de fluxo de sistema.

👨‍💻 Arquitetura resumida
Input (#fun)
   ↓
Validação JS
   ↓
├── inválido → alerta
├── especial → redirect
└── válido → iframe status
📌 Status do projeto

✔ Finalizado (versão demonstrativa)