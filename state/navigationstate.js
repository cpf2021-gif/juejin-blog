import { atom } from 'recoil';

const navigationstate = atom({
  key: 'navigationstate',
  default: 'index'
})

export { navigationstate }
