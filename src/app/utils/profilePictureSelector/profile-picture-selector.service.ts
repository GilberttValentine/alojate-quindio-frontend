import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilePictureSelectorService {
  profilePictures = ["profile1_y3x51s.png","profile2_hr6mvw.png", "profile3_dgbbd5.png", "profile4_h6phmj.png", 
  "profile5_hbc7eo.png", "profile6_latvgn.png", "profile7_mhjwur.png", "profile8_pk1mjs.png", "profile9_fqe9rf.png",
  "profile10_munp3y.png", "profile11_sfcaro.png", "profile12_fd1zap.png"]
  
  constructor() { }

  picSelector():string {
    return this.profilePictures[Math.floor(Math.random()*this.profilePictures.length)]
  }
}
