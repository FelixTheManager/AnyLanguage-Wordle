import { CONFIG } from './config'

export const VALIDGUESSES = [
  'alsoo'
,'antér'
,'aufer'
,'augst'
,'bakke'
,'baner'
,'birch'
,'brous'
,'buuch'
,'bákij'
,'céres'
,'draak'
,'dänch'
,'eiräi'
,'emoji'
,'eukte'
,'exelt'
,'féiðe'
,'gläis'
,'goodé'
,'graäs'
,'groov'
,'hound'
,'hvéir'
,'hóver'
,'höntz'
,'jedág'
,'jovér'
,'katte'
,'klank'
,'kleis'
,'kleus'
,'klubé'
,'kluus'
,'krauk'
,'kraux'
,'kreek'
,'kreex'
,'krägg'
,'kvart'
,'kénzt'
,'leern'
,'leiðe'
,'lijme'
,'luist'
,'lunér'
,'lóuse'
,'meech'
,'mijst'
,'mäder'
,'narðé'
,'neðer'
,'niuuv'
,'nékte'
,'oräns'
,'ouvér'
,'plank'
,'plant'
,'plees'
,'pleus'
,'plutó'
,'péise'
,'rijse'
,'réeel'
,'satér'
,'seudé'
,'sjeld'
,'soubt'
,'sovén'
,'speel'
,'speik'
,'speik'
,'speix'
,'speiþ'
,'spoon'
,'spérg'
,'spérg'
,'staal'
,'stijl'
,'stoon'
,'sélze'
,'sóuðe'
,'söben'
,'tanze'
,'tenné'
,'traux'
,'treik'
,'treuf'
,'tzeie'
,'tzumm'
,'tzönn'
,'télez'
,'vantz'
,'vedág'
,'venus'
,'verxt'
,'vijsé'
,'viðér'
,'vlaas'
,'vooid'
,'voror'
,'vrach'
,'vrouk'
,'vroux'
,'víkke'
,'xenté'
,'xälte'
,'zellk'
,'zemme'
,'zvárt'
,'äpvel'
,'äxter'
,'úhvín'

]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
