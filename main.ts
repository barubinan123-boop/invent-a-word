import { mkdirSync, writeFileSync } from 'node:fs'

const entry = 'Readlorn — the quiet ache of a message seen but never answered.'

mkdirSync('/output', { recursive: true })
writeFileSync('/output/entry.txt', entry, 'utf8')
