# Cacau Ateliê

Site de bolos e biscoitos de chocolate com pedidos por WhatsApp (Vite, JavaScript puro).

## Correr

```bash
npm install
npm run dev      # desenvolvimento (aberto também na rede local, para testar no telemóvel)
npm run build    # gera a pasta dist/
npm run preview  # testa o build
```

## Personalizar

- WhatsApp (258863108477), nome da marca e moeda: `CFG` no topo de `src/main.js`.
- Produtos e preços: lista `P` em `src/main.js` (`c` = secção: bolos, festa ou biscoitos; `p:null` mostra "Sob consulta").
- Fotos: pasta `src/assets/`.
- Cores e tipografia: variáveis no início de `src/style.css`.
