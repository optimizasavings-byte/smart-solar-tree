# Histórico — paleta Verde Solar

Cópia integral da versão verde anterior à aplicação do azul. `cores.json` registra todas as cores e variáveis; `styles.css` preserva também gradientes e estados de interação.

## Restaurar a versão verde

Na raiz do projeto, execute:

```powershell
Copy-Item -LiteralPath 'historico/2026-09-25-paleta-verde/styles.css' -Destination 'styles.css'
```

Em `index.html`, altere a meta tag `theme-color` para `#00533f`. Recarregue com Ctrl+F5. A restauração substitui todo o CSS; guarde alterações posteriores antes de executar.

O PDF verde permanece em `divulgacao/smart-solar-tree-paleta-verde.pdf`. A paleta escura inicial permanece em `../2026-09-25-paleta-original/`.
