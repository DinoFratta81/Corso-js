# Confronto: Cookie vs IndexedDB vs Cache API

| Tecnologia | Cos’è | Quanto può salvare | Dove vive | Va al server? | Cosa ci salvi | Quando usarla | 
|-----------|-------|--------------------|-----------|---------------|---------------|----------------|
| Cookie | Piccoli dati inviati al server | ~4 KB | Browser (ma inviati al server) | **Sì** | Sessioni, login, preferenze | Autenticazione, tracking, sessioni |
| IndexedDB | Database locale NoSQL | Da MB a GB | Browser locale | **No** | Dati complessi, liste, file, cache personalizzate | App offline, salvataggi, app complesse |
| Cache API | Cache di file gestita da Service Worker | Molto (file interi) | Browser locale | **No** | HTML, CSS, JS, immagini, JSON | PWA, offline, caricamenti rapidi |
