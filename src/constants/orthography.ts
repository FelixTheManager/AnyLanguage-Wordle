import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'á',
  'ä',
  'b',
  'c',
  'd',
  'ð',
  'e',
  'é',
  'f',
  'g',
  'h',
  'i',
  'í',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'ó',
  'ö',
  'p',
  'r',
  's',
  't',
  'þ',
  'u',
  'ú',
  'v',
  'y',
  'x',
  'z',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
