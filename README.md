# Zelo

Aplicativo de cuidado diário com a saúde — lembretes de remédio, controle de hidratação e checklist de higiene, feitos para ajudar a manter uma rotina de autocuidado simples e consistente.

Este repositório contém o **protótipo navegável** da interface, desenvolvido em HTML, CSS e JavaScript puro (sem frameworks ou build step), como parte do Trabalho de Conclusão de Curso (TCC) do curso técnico em Desenvolvimento de Sistemas.

## Como rodar

Como o projeto usa ES Modules (`import`/`export`), ele precisa ser servido por um servidor local — abrir o `index.html` direto pelo navegador (`file://`) não funciona.

Algumas opções simples:

```bash
# Com Python
python3 -m http.server 8000

# Com Node (npx)
npx serve .
```

Depois é só acessar `http://localhost:8000`.

Também é possível publicar direto com o **GitHub Pages**: Settings → Pages → Branch `main` → pasta `/ (root)`.

## Estrutura do projeto

```
zelo-app/
├── index.html          # estrutura da página e moldura do celular
├── css/
│   └── style.css       # design system (cores, tipografia, componentes)
├── js/
│   ├── app.js           # controlador: navegação, eventos, loop de renderização
│   ├── data.js           # estado da aplicação (dados mockados)
│   ├── icons.js          # ícones SVG reutilizáveis
│   └── screens/
│       ├── home.js          # Tela Inicial
│       ├── lembretes.js      # Lista de Lembretes, Detalhe e Adicionar Lembrete
│       ├── hidratacao.js      # Tela de Hidratação
│       ├── higiene.js          # Tela de Higiene (checklist)
│       ├── progresso.js         # Tela de Progresso/Estatísticas
│       └── perfil.js             # Perfil e Configurações
└── README.md
```

## Telas

| Tela | Descrição |
|---|---|
| Início | Resumo do dia: progresso de remédios, água e higiene |
| Lembretes | Lista de lembretes com busca e status |
| Detalhe do Remédio | Dose, horário, frequência e ação de marcar como feito |
| Hidratação | Progresso circular de copos de água, com botão de adicionar |
| Higiene | Checklist diário de hábitos de higiene |
| Progresso | Gráfico de adesão aos lembretes na última semana |
| Perfil | Dados do usuário e acesso às configurações |
| Configurações | Notificações (lembretes, som, resumo diário) |
| Adicionar Lembrete | Formulário de cadastro de um novo remédio |

## Design system

- Verde-menta `#43C491` — ações e destaques
- Verde-escuro `#10544F` — títulos e textos principais
- Cinza `#8F8F8F` — textos secundários
- Branco `#FFFFFF` — fundo
- Cantos arredondados e ícones de linha simples

## Próximos passos (evolução do protótipo)

Este repositório cobre a camada de interface. Para virar um app funcional de verdade, os próximos passos sugeridos são:

- [ ] Reescrever a interface em **Flutter** ou **React Native**, para rodar como app nativo (Android/iOS)
- [ ] Persistir os lembretes em **SQLite** (local) ou **Firebase** (nuvem)
- [ ] Implementar **notificações locais** para os horários de remédio, água e higiene
- [ ] Autenticação de usuário (login/cadastro)
- [ ] Testes automatizados das principais interações

## Licença

Projeto acadêmico, desenvolvido para fins de TCC.
