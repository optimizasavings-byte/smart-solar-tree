# Histórico de cores — 25/09/2026

O arquivo `styles.css` nesta pasta preserva integralmente o CSS anterior, incluindo gradientes, transparências, estados de interação e responsividade. `cores.json` registra as variáveis e todas as cores originais.

| Uso | Original | Verde Solar |
| --- | --- | --- |
| Fundo | `#07140f` | `#00634b` |
| Destaque verde | `#3be8a5` | `#ceff70` |
| Amarelo solar | `#ffc857` | `#ffcd42` |
| Texto | `#f7faf9` | `#f7fff5` |
| Texto secundário | `#aab8b2` | `#d2eade` |
| Divisórias | `#aab8b22b` | `#d2eade40` |
| Barra do navegador | `#07140f` | `#00533f` |

A nova paleta se inspira nas superfícies saturadas, no contraste claro e no amarelo do [Hermes Agent](https://hermes-agent.nousresearch.com/), adaptando essa direção para verdes. Logo e vídeo mantêm suas cores originais.

## Voltar ao padrão anterior

Na raiz do projeto, execute no PowerShell:

```powershell
Copy-Item -LiteralPath 'historico/2026-09-25-paleta-original/styles.css' -Destination 'styles.css'
```

Em `index.html`, altere apenas o valor da meta tag `theme-color` de `#00533f` para `#07140f`. Recarregue a página com Ctrl+F5.

A restauração substitui todo o CSS atual pelo snapshot desta data. Se houver alterações posteriores de layout, guarde uma cópia do CSS atual antes de restaurar.
