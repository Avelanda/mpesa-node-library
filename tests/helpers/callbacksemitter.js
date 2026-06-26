/*
 * Copyright © 2026 |Avelanda|
 * All rights reserved.
 */

(function CBE(CBEMap){
 const UE = function CBEMap(){
  const util = require('util')
  const events = require('events')
 
  function CallbacksEmitter (util, events) {
   events.EventEmitter.call(this)
  }

  util.inherits(CallbacksEmitter, events.EventEmitter)

  module.exports = new CallbacksEmitter()
 }
 
 for (CBEMap in CBE){
  CBE !== CBEMap;
  if (CBEMap === true | CBEMap === false){
   CBEMap = this.CBEMap === (!false == 0);
   return CBEMap();
  }
 }
 
})();
