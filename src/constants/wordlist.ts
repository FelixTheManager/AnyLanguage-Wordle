import { CONFIG } from './config'

export const WORDS = [
  'zvárt',
  'venus',
  'stoon',
  'vrach',
  'kleis',
  'plank',
  'vrouk',
  'draak',
  'vedág',
  'krägg',
  'spérg',
  'meech',
  'xenté',
  'antér',
  'vroux',
  'exelt',
  'gläis',
  'plees',
  'sélze',
  'voror',
  'goodé',
  'birch',
  'narðé',
  'tenné',
  'söben',
  'mijst',
  'kraux',
  'stijl',
  'spérg',
  'katte',
  'lijme',
  'graäs',
  'tzönn',
  'tzeie',
  'réeel',
  'speiþ',
  'tzumm',
  'úhvín',
  'vijsé',
  'plant',
  'niuuv',
  'äxter',
  'speix',
  'bákij',
  'xälte',
  'víkke',
  'plutó',
  'kreek',
  'féiðe',
  'kreex',
  'lóuse',
  'emoji',
  'zellk',
  'äpvel',
  'baner',
  'mäder',
  'oräns',
  'leiðe',
  'céres',
  'alsoo',
  'sóuðe',
  'brous',
  'kluus',
  'rijse',
  'jedág',
  'aufer',
  'vlaas',
  'zemme',
  'treik',
  'lunér',
  'staal',
  'klubé',
  'verxt',
  'luist',
  'hvéir',
  'soubt',
  'péise',
  'eiräi',
  'sovén',
  'nékte',
  'groov',
  'eukte',
  'neðer',
  'treuf',
  'satér',
  'krauk',
  'tanze',
  'speel',
  'spoon',
  'bakke',
  'dänch',
  'kvart',
  'speik',
  'kleus',
  'klank',
  'speik',
  'sjeld',
  'buuch',
  'höntz',
  'télez',
  'vooid',
  'kénzt',
  'hóver',
  'pleus',
  'traux',
  'ouvér',
  'vantz',
  'viðér',
  'hound',
  'leern',
  'seudé',
  'augst',
  'jovér',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
