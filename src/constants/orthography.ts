import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ä',
  'é',
  'e',
  'r',
  't',
  'þ',
  'y',
  'u',
  'ú',
  'i',
  'í',
  'o',
  'ó',
  'ö',
  'p',
  'a',
  'á',
  's',
  'd',
  'ð',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
