import { mkdirSync, writeFileSync } from 'node:fs'

// Readlorn: "read" + "lorn", from the old root "lorn" (as in forlorn,
// lovelorn) — left behind, unanswered, quietly abandoned.
const word = 'Readlorn'
const definition = 'the quiet ache of a message seen but never answered.'

const entry = `${word} — ${definition}`

// The gate: one line, 1–140 characters, not only white space.
if (entry.length < 1 || entry.length > 140 || entry.trim().length === 0) {
  throw new Error(`Invalid entry: must be 1-140 non-blank characters, got ${entry.length}`)
}

mkdirSync('/output', { recursive: true })
writeFileSync('/output/entry.txt', entry, 'utf8')
