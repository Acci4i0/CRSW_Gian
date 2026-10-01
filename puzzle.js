// ============================================================================
//  PUZZLE.JS — L'UNICO FILE DA MODIFICARE PER CREARE UN CRUCIVERBA
// ============================================================================
//
//  Per fare il cruciverba di una nuova persona, cambia solo i valori qui sotto
//  e ricarica la pagina: la griglia (portrait + landscape) e il footer con gli
//  indizi si rigenerano da soli, in automatico.
//
//  Regole per le risposte (answer):
//   - una sola parola, senza spazi
//   - vengono messe in MAIUSCOLO in automatico; le lettere accentate vengono
//     tolte, non convertite: scrivi "BONARIETA", non "BONARIETÀ"
//   - le parole devono CONDIVIDERE QUALCHE LETTERA tra loro, altrimenti il
//     cruciverba non puo incrociarsi (in locale, con ?dev, vedrai un avviso)
//
//  Numero di indizi: libero (il footer si divide da solo in due colonne).
//
//  Avatar in alto a sinistra (facoltativo): il percorso di un'immagine in
//  assets/ ("assets/avatar.webp") oppure un'animazione a sprite sheet
//  ({ sprite, frames, frameMs }). Togli la riga per non mostrarlo.
// ============================================================================

const PUZZLE = {
  // Titolo della scheda del browser.
  title: "Gianmarco",

  // Gli indizi e le risposte. clue = la domanda mostrata sotto "INFO".
  clues: [
    { number: 1, clue: "Il mio nome",                                  answer: "GIANMARCO" },
    { number: 2, clue: "Ma mi chiamano…",                              answer: "STANGHE" },
    { number: 3, clue: "La mia passione:",                             answer: "CALCIO" },
    { number: 4, clue: "Cosa che spesso odio:",                        answer: "CALCIO" },
    { number: 5, clue: "Income primario:",                             answer: "BLACKJACK" },
    { number: 6, clue: "(Ma ho anche dei difetti) Il mio cuore è di:", answer: "COSTANZA" },
  ],

  // Contatti mostrati sotto "CONTACT".
  contact: {
    mail: "gianmarco.stangherlin@gmail.com",
    tel: "+393349898169", // usato nel link "chiama"
    telDisplay: "+39 3349898169", // come viene mostrato
    instagram: "_ggianmarco_",
    instagramUrl: "https://instagram.com/_ggianmarco_",
    year: 2026,
  },

  // Avatar in alto a sinistra (vedi in cima al file).
  avatar: "assets/avatar.webp",
};
