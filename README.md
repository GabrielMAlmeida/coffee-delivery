# Coffee Delivery

Aplicação front-end de uma cafeteria fictícia, criada como projeto de estudo de React. O fluxo permite explorar um catálogo de cafés, montar um carrinho e simular a finalização de um pedido.

O foco do projeto é praticar componentes, gerenciamento de estado com Context API, formulários e navegação entre páginas.

> Demonstração educacional: o catálogo está definido no código e o pedido é simulado. Não há backend, banco de dados externo ou processamento de pagamentos.

## Funcionalidades

- Catálogo com nome, imagem e preço dos cafés.
- Adição de produtos ao carrinho.
- Aumento e redução de quantidades; ao reduzir a quantidade de um produto a zero, ele é removido.
- Cálculo do valor total com base no preço e na quantidade de cada produto.
- Indicador no cabeçalho com a quantidade de produtos distintos no carrinho.
- Formulário de checkout com nome, telefone, endereço, forma de pagamento e observações.
- Bloqueio da confirmação quando o carrinho está vazio.
- Limpeza do carrinho após a confirmação do pedido.
- Página de confirmação com nome e endereço informados no checkout.

## Tecnologias

| Tecnologia | Aplicação no projeto |
| --- | --- |
| JavaScript e React | Componentes e interação da interface |
| Context API e hooks | Estado compartilhado do carrinho e cálculo dos totais |
| React Router DOM | Rotas do catálogo, checkout e confirmação |
| React Hook Form | Registro dos campos e envio do formulário |
| CSS Modules | Estilos organizados por componente e página |
| Lucide React | Ícones da interface |
| Vite | Servidor de desenvolvimento e build |

## Como executar

### Pré-requisitos

- Git.
- Node.js 20.19+ na linha 20, ou Node.js 22.12 ou superior, conforme o requisito do Vite registrado no projeto.
- npm.

### Instalação e desenvolvimento

```bash
git clone https://github.com/GabrielMAlmeida/coffee-delivery.git
cd coffee-delivery
npm ci
npm run dev
```

Abra o endereço informado pelo terminal, normalmente http://localhost:5173.

A aplicação não exige variáveis de ambiente nem configuração de serviços externos.

### Build e prévia local

```bash
npm run build
npm run preview
```

O build gera os arquivos estáticos na pasta `dist/`. O comando de prévia informa no terminal o endereço para acessar esse build localmente.

## Como explorar

1. No catálogo, adicione cafés ao carrinho.
2. Acesse o checkout pelo ícone do carrinho.
3. Ajuste as quantidades e confira o valor total.
4. Preencha o formulário com dados fictícios e escolha uma forma de pagamento.
5. Confirme o pedido para visualizar a página de sucesso.

## Organização do código

| Caminho | Responsabilidade |
| --- | --- |
| `src/components/` | Cabeçalho, rodapé e card de produto |
| `src/contexts/coffee-context.jsx` | Estado do carrinho, quantidades, remoção e total |
| `src/database/db.jsx` | Catálogo estático definido em JavaScript |
| `src/pages/` | Catálogo, checkout e confirmação |
| `src/routes.jsx` | Definição das rotas da aplicação |
| `public/images/` | Imagens locais disponíveis |

## Decisões de implementação

- O carrinho usa Context API para compartilhar os dados entre catálogo, cabeçalho e checkout.
- O total é calculado a partir dos itens do carrinho.
- Os dados do formulário são enviados à página de confirmação pelo estado de navegação do React Router.
- O catálogo está separado dos componentes em um arquivo local, sem requisições a uma API.

## Limitações atuais e melhorias

- O carrinho fica na memória da aplicação e é reiniciado ao recarregar a página.
- A forma de pagamento é apenas uma seleção demonstrativa.
- O formulário ainda precisa de regras de validação para os campos.
- A página de confirmação depende dos dados recebidos do checkout; o acesso direto a `/success` ainda precisa de tratamento.
- Há referências a imagens SVG de produtos e da confirmação que não estão incluídas no repositório.
- Não há suíte de testes automatizados configurada.

## Autor

**Gabriel Monteiro de Almeida**

- [GitHub](https://github.com/GabrielMAlmeida)
- [LinkedIn](https://www.linkedin.com/in/gabriel-monteiro-de-almeida-153174161/)
