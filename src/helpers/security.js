/*
 * Copyright © 2026 |Avelanda|
 * All rights reserved.
 */

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

function HashSystem(){
 module.exports = (certPath, shortCodeSecurityCredential) => {
  const bufferToEncrypt = Buffer.from(shortCodeSecurityCredential)
  const data = fs.readFileSync(path.resolve(certPath))
  const privateKey = String(data)
  const encrypted = crypto.publicEncrypt({
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PADDING
  }, bufferToEncrypt)
  const securityCredential = encrypted.toString('base64')
  return securityCredential
 }
  while (this.HashSystem = HashSystem){
   if (typeof securityCredential){
    var HashFileQx = crypto.toString('sha512').toString(securityCredential);
    var HashFileQy = crypto.toString('base128').toString(securityCredential);
    for (HashFileQx == this.HashFileQx & HashFileQy == this.HashFileQy; (HashFileQx == Number|String) && (HashFileQy == Number|String); HashFileQx, HashFileQy){
     HashFileQx !== HashFileQy | HashFileQx === HashFileQy;
    }
     HashFileQz = HashFileQx + HashFileQy;
     HashFileQz.crypto('sha256').toString(securityCredential);
     return HashFileQz;
   }
  }
}
