!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=7)}([function(e,t,i){"use strict";(function(e){i.d(t,"a",function(){return a}),i.d(t,"b",function(){return _}),i.d(t,"c",function(){return b}),i.d(t,"d",function(){return o}),i.d(t,"e",function(){return s}),i.d(t,"f",function(){return l}),i.d(t,"g",function(){return A}),i.d(t,"h",function(){return E}),i.d(t,"i",function(){return R}),i.d(t,"j",function(){return N}),i.d(t,"k",function(){return h}),i.d(t,"l",function(){return u}),i.d(t,"m",function(){return f}),i.d(t,"n",function(){return T}),i.d(t,"o",function(){return p}),i.d(t,"p",function(){return v}),i.d(t,"q",function(){return c}),i.d(t,"r",function(){return d}),i.d(t,"s",function(){return m}),i.d(t,"t",function(){return g}),i.d(t,"u",function(){return x}),i.d(t,"v",function(){return S}),i.d(t,"w",function(){return O}),i.d(t,"x",function(){return y});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const t=[];let i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:r<2048?(t[i++]=r>>6|192,t[i++]=63&r|128):55296==(64512&r)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128,t[i++]=r>>6&63|128,t[i++]=63&r|128):(t[i++]=r>>12|224,t[i++]=r>>6&63|128,t[i++]=63&r|128)}return t},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,c=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),n.push(i[h],i[c],i[u],i[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let i=0,n=0;for(;i<e.length;){const r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{const s=e[i++],o=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const r=i[e.charAt(t++)],s=t<e.length?i[e.charAt(t)]:0,o=++t<e.length?i[e.charAt(t)]:64,a=++t<e.length?i[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const l=r<<2|s>>4;if(n.push(l),64!==o){const e=s<<4&240|o>>2;if(n.push(e),64!==a){const e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){return function(e){const t=n(e);return r.encodeByteArray(t,!0)}(e).replace(/\./g,"")},o=function(e){try{return r.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=(()=>{}),this.resolve=(()=>{}),this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,i))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i=t||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function c(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function u(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function d(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function f(){return h().indexOf("Electron/")>=0}function p(){const e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){return h().indexOf("MSAppHost/")>=0}function m(){return!function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v(){return"object"==typeof indexedDB}function y(){return new Promise((e,t)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=(()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)}),r.onupgradeneeded=(()=>{i=!1}),r.onerror=(()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")})}catch(e){t(e)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class b extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=w,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(I,(e,i)=>{const n=t[i];return null!=n?String(n):`<${i}?>`})}(r,i):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new b(n,o,i)}}const I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function E(e,t){if(e===t)return!0;const i=Object.keys(e),n=Object.keys(t);for(const r of i){if(!n.includes(r))return!1;const i=e[r],s=t[r];if(k(i)&&k(s)){if(!E(i,s))return!1}else if(i!==s)return!1}for(const e of n)if(!i.includes(e))return!1;return!0}function k(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){const t=[];for(const[i,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function O(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}}),t}function R(e){const t=e.indexOf("?");if(!t)return"";const i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){const i=new C(e,t);return i.subscribe.bind(i)}class C{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:i}).next&&(n.next=L),void 0===n.error&&(n.error=L),void 0===n.complete&&(n.complete=L);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){return new Promise((i,n)=>{e.onsuccess=(e=>{i(e.target.result)}),e.onerror=(e=>{var i;n(`${t}: ${null===(i=e.target.error)||void 0===i?void 0:i.message}`)})})}class D{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new M(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new j(this._db.createObjectStore(e,t))}close(){this._db.close()}}class M{constructor(e){this._transaction=e,this.complete=new Promise((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=(()=>{t(this._transaction.error)}),this._transaction.onabort=(()=>{t(this._transaction.error)})})}objectStore(e){return new j(this._transaction.objectStore(e))}}class j{constructor(e){this._store=e}index(e){return new U(this._store.index(e))}createIndex(e,t,i){return new U(this._store.createIndex(e,t,i))}get(e){return P(this._store.get(e),"Error reading from IndexedDB")}put(e,t){return P(this._store.put(e,t),"Error writing to IndexedDB")}delete(e){return P(this._store.delete(e),"Error deleting from IndexedDB")}clear(){return P(this._store.clear(),"Error clearing IndexedDB object store")}}class U{constructor(e){this._index=e}get(e){return P(this._index.get(e),"Error reading from IndexedDB")}}function x(e,t,i){return new Promise((n,r)=>{try{const s=indexedDB.open(e,t);s.onsuccess=(e=>{n(new D(e.target.result))}),s.onerror=(e=>{var t;r(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)}),s.onupgradeneeded=(e=>{i(new D(s.result),e.oldVersion,e.newVersion,new M(s.transaction))})}catch(e){r(`Error opening indexedDB: ${e.message}`)}})}}).call(this,i(6))},function(e,t,i){"use strict";i.d(t,"a",function(){return _}),i.d(t,"b",function(){return m}),i.d(t,"c",function(){return g}),i.d(t,"d",function(){return v}),i.d(t,"e",function(){return T}),i.d(t,"f",function(){return I}),i.d(t,"g",function(){return E});var n=i(4),r=i(2),s=i(0);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const a="@firebase/app",l="0.7.22",h=new r.b("@firebase/app"),c="[DEFAULT]",u={[a]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},d=new Map,f=new Map;function p(e,t){try{e.container.addComponent(t)}catch(i){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function g(e){const t=e.name;if(f.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;f.set(t,e);for(const t of d.values())p(t,e);return!0}function m(e,t){const i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}function v(e,t,i=c){m(e,t).clearInstance(i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},w=new s.b("app","Firebase",y);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new n.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw w.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _="9.7.0";function I(e,t={}){if("object"!=typeof t){t={name:t}}const i=Object.assign({name:c,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw w.create("bad-app-name",{appName:String(r)});const o=d.get(r);if(o){if(Object(s.h)(e,o.options)&&Object(s.h)(i,o.config))return o;throw w.create("duplicate-app",{appName:r})}const a=new n.b(r);for(const e of f.values())a.addComponent(e);const l=new b(e,i,a);return d.set(r,l),l}function T(e=c){const t=d.get(e);if(!t)throw w.create("no-app",{appName:e});return t}function E(e,t,i){var r;let s=null!==(r=u[e])&&void 0!==r?r:e;i&&(s+=`-${i}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}g(new n.a(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k="firebase-heartbeat-database",S=1,O="firebase-heartbeat-store";let R=null;function A(){return R||(R=Object(s.u)(k,S,(e,t)=>{switch(t){case 0:e.createObjectStore(O)}}).catch(e=>{throw w.create("storage-open",{originalErrorMessage:e.message})})),R}async function C(e,t){try{const i=(await A()).transaction(O,"readwrite"),n=i.objectStore(O);return await n.put(t,L(e)),i.complete}catch(e){throw w.create("storage-set",{originalErrorMessage:e.message})}}function L(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=1024,P=2592e6;class D{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new j(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=M();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=P}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=M(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=N){const i=[];let n=e.slice();for(const r of e){const e=i.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),U(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),U(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=Object(s.e)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function M(){return(new Date).toISOString().substring(0,10)}class j{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s.p)()&&Object(s.x)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await A()).transaction(O).objectStore(O).get(L(e))}catch(e){throw w.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return C(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return C(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function U(e){return Object(s.e)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){g(new n.a("platform-logger",e=>new o(e),"PRIVATE")),g(new n.a("heartbeat",e=>new D(e),"PRIVATE")),E(a,l,e),E(a,l,"esm2017"),E("fire-js","")}("")},function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return h}),i.d(t,"c",function(){return c}),i.d(t,"d",function(){return u});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=[];var r;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...i)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${n}]  ${e.name}:`,...i)};class h{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function c(e){n.forEach(t=>{t.setLogLevel(e)})}function u(e,t){for(const i of n){let n=null;t&&t.level&&(n=s[t.level]),i.userLogHandler=null===e?null:(t,i,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");i>=(null!==n&&void 0!==n?n:t.logLevel)&&e({level:r[i].toLowerCase(),message:o,args:s,type:t.name})}}}},function(e,t,i){"use strict";(function(e){i.d(t,"a",function(){return tn}),i.d(t,"b",function(){return rn}),i.d(t,"c",function(){return nn}),i.d(t,"d",function(){return on}),i.d(t,"e",function(){return sn}),i.d(t,"f",function(){return an}),i.d(t,"g",function(){return ln}),i.d(t,"h",function(){return Zi}),i.d(t,"i",function(){return en});var n,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},s={},o=o||{},a=r||self;function l(){}function h(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function c(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var u="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(e,t,i){return e.call.apply(e.bind,arguments)}function p(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function g(e,t,i){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p).apply(null,arguments)}function m(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function i(){}i.prototype=t.prototype,e.Z=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.Vb=function(e,i,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[i].apply(e,r)}}function y(){this.s=this.s,this.o=this.o}var w={};y.prototype.s=!1,y.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,u)&&e[u]||(e[u]=++d)}(this);delete w[e]}},y.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return-1},_=Array.prototype.forEach?function(e,t,i){Array.prototype.forEach.call(e,t,i)}:function(e,t,i){const n=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<n;s++)s in r&&t.call(i,r[s],s,e)};function I(e){return Array.prototype.concat.apply([],arguments)}function T(e){const t=e.length;if(0<t){const i=Array(t);for(let n=0;n<t;n++)i[n]=e[n];return i}return[]}function E(e){return/^[\s\xa0]*$/.test(e)}var k,S=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function O(e,t){return-1!=e.indexOf(t)}function R(e,t){return e<t?-1:e>t?1:0}e:{var A=a.navigator;if(A){var C=A.userAgent;if(C){k=C;break e}}k=""}function L(e,t,i){for(const n in e)t.call(i,e[n],n,e)}function N(e){const t={};for(const i in e)t[i]=e[i];return t}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(e,t){let i,n;for(let t=1;t<arguments.length;t++){for(i in n=arguments[t])e[i]=n[i];for(let t=0;t<P.length;t++)i=P[t],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}function M(e){return M[" "](e),e}M[" "]=l;var j,U=O(k,"Opera"),x=O(k,"Trident")||O(k,"MSIE"),F=O(k,"Edge"),H=F||x,z=O(k,"Gecko")&&!(O(k.toLowerCase(),"webkit")&&!O(k,"Edge"))&&!(O(k,"Trident")||O(k,"MSIE"))&&!O(k,"Edge"),V=O(k.toLowerCase(),"webkit")&&!O(k,"Edge");function B(){var e=a.document;return e?e.documentMode:void 0}e:{var $="",K=function(){var e=k;return z?/rv:([^\);]+)(\)|;)/.exec(e):F?/Edge\/([\d\.]+)/.exec(e):x?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):V?/WebKit\/(\S+)/.exec(e):U?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(K&&($=K?K[1]:""),x){var G=B();if(null!=G&&G>parseFloat($)){j=String(G);break e}}j=$}var W,q={};function X(){return function(e){var t=q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}(function(){let e=0;const t=S(String(j)).split("."),i=S("9").split("."),n=Math.max(t.length,i.length);for(let o=0;0==e&&o<n;o++){var r=t[o]||"",s=i[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=R(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||R(0==r[2].length,0==s[2].length)||R(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e})}if(a.document&&x){var J=B();W=J||(parseInt(j,10)||void 0)}else W=void 0;var Y=W,Q=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",l,t),a.removeEventListener("test",l,t)}catch(e){}return e}();function Z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ee(e,t){if(Z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(z){e:{try{M(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:te[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ee.Z.h.call(this)}}Z.prototype.h=function(){this.defaultPrevented=!0},v(ee,Z);var te={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ie="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var i=t.type;if(i in e.g){var n,r=e.g[i],s=b(r,t);(n=0<=s)&&Array.prototype.splice.call(r,s,1),n&&(re(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function ae(e,t,i,n){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!i&&s.ia==n)return r}return-1}se.prototype.add=function(e,t,i,n,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ae(e,t,n,r);return-1<o?(t=e[o],i||(t.fa=!1)):((t=new function(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.ia=r,this.key=++ne,this.ca=this.fa=!1}(t,this.src,s,!!n,r)).fa=i,e.push(t)),t};var le="closure_lm_"+(1e6*Math.random()|0),he={};function ce(e,t,i,n,r){if(n&&n.once)return function e(t,i,n,r,s){if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);return null}n=ve(n);return t&&t[ie]?t.O(i,n,c(r)?!!r.capture:!!r,s):ue(t,i,n,!0,r,s)}(e,t,i,n,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ce(e,t[s],i,n,r);return null}return i=ve(i),e&&e[ie]?e.N(t,i,c(n)?!!n.capture:!!n,r):ue(e,t,i,!1,n,r)}function ue(e,t,i,n,r,s){if(!t)throw Error("Invalid event type");var o=c(r)?!!r.capture:!!r,a=ge(e);if(a||(e[le]=a=new se(e)),(i=a.add(t,i,n,o,s)).proxy)return i;if(n=function(){var e=pe;return function t(i){return e.call(t.src,t.listener,i)}}(),i.proxy=n,n.src=e,n.listener=i,e.addEventListener)Q||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(fe(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return i}function de(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ie])oe(t.i,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(fe(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=ge(t))?(oe(i,e),0==i.h&&(i.src=null,t[le]=null)):re(e)}}}function fe(e){return e in he?he[e]:he[e]="on"+e}function pe(e,t){if(e.ca)e=!0;else{t=new ee(t,this);var i=e.listener,n=e.ia||e.src;e.fa&&de(e),e=i.call(n,t)}return e}function ge(e){return(e=e[le])instanceof se?e:null}var me="__closure_events_fn_"+(1e9*Math.random()>>>0);function ve(e){return"function"==typeof e?e:(e[me]||(e[me]=function(t){return e.handleEvent(t)}),e[me])}function ye(){y.call(this),this.i=new se(this),this.P=this,this.I=null}function we(e,t){var i,n=e.I;if(n)for(i=[];n;n=n.I)i.push(n);if(e=e.P,n=t.type||t,"string"==typeof t)t=new Z(t,e);else if(t instanceof Z)t.target=t.target||e;else{var r=t;D(t=new Z(n,e),r)}if(r=!0,i)for(var s=i.length-1;0<=s;s--){var o=t.g=i[s];r=be(o,n,!0,t)&&r}if(r=be(o=t.g=e,n,!0,t)&&r,r=be(o,n,!1,t)&&r,i)for(s=0;s<i.length;s++)r=be(o=t.g=i[s],n,!1,t)&&r}function be(e,t,i,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==i){var a=o.listener,l=o.ia||o.src;o.fa&&oe(e.i,o),r=!1!==a.call(l,n)&&r}}return r&&!n.defaultPrevented}v(ye,y),ye.prototype[ie]=!0,ye.prototype.removeEventListener=function(e,t,i,n){!function e(t,i,n,r,s){if(Array.isArray(i))for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);else r=c(r)?!!r.capture:!!r,n=ve(n),t&&t[ie]?(t=t.i,(i=String(i).toString())in t.g&&-1<(n=ae(o=t.g[i],n,r,s))&&(re(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[i],t.h--))):t&&(t=ge(t))&&(i=t.g[i.toString()],t=-1,i&&(t=ae(i,n,r,s)),(n=-1<t?i[t]:null)&&de(n))}(this,e,t,i,n)},ye.prototype.M=function(){if(ye.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],n=0;n<i.length;n++)re(i[n]);delete t.g[e],t.h--}}this.I=null},ye.prototype.N=function(e,t,i,n){return this.i.add(String(e),t,!1,i,n)},ye.prototype.O=function(e,t,i,n){return this.i.add(String(e),t,!0,i,n)};var _e=a.JSON.stringify;function Ie(){var e=Re;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Te,Ee=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new class{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}},e=>e.reset());function ke(e){a.setTimeout(()=>{throw e},0)}function Se(e,t){Te||function(){var e=a.Promise.resolve(void 0);Te=function(){e.then(Ae)}}(),Oe||(Te(),Oe=!0),Re.add(e,t)}var Oe=!1,Re=new class{constructor(){this.h=this.g=null}add(e,t){const i=Ee.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}};function Ae(){for(var e;e=Ie();){try{e.h.call(e.g)}catch(e){ke(e)}var t=Ee;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Oe=!1}function Ce(e,t){ye.call(this),this.h=e||1,this.g=t||a,this.j=g(this.kb,this),this.l=Date.now()}function Le(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ne(e,t,i){if("function"==typeof e)i&&(e=g(e,i));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}v(Ce,ye),(n=Ce.prototype).da=!1,n.S=null,n.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),we(this,"tick"),this.da&&(Le(this),this.start()))}},n.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},n.M=function(){Ce.Z.M.call(this),Le(this),delete this.g};class Pe extends y{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=Ne(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);const i=t.h;t.h=null,t.m.apply(null,i)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(e){y.call(this),this.h=e,this.g={}}v(De,y);var Me=[];function je(e,t,i,n){Array.isArray(i)||(i&&(Me[0]=i.toString()),i=Me);for(var r=0;r<i.length;r++){var s=ce(t,i[r],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ue(e){L(e.g,function(e,t){this.g.hasOwnProperty(t)&&de(e)},e),e.g={}}function xe(){this.g=!0}function Fe(e,t,i,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i)for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return _e(i)}catch(e){return t}}(e,i)+(n?" "+n:"")})}De.prototype.M=function(){De.Z.M.call(this),Ue(this)},De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},xe.prototype.Aa=function(){this.g=!1},xe.prototype.info=function(){};var He={},ze=null;function Ve(){return ze=ze||new ye}function Be(e){Z.call(this,He.Ma,e)}function $e(e){const t=Ve();we(t,new Be(t,e))}function Ke(e,t){Z.call(this,He.STAT_EVENT,e),this.stat=t}function Ge(e){const t=Ve();we(t,new Ke(t,e))}function We(e,t){Z.call(this,He.Na,e),this.size=t}function qe(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}He.Ma="serverreachability",v(Be,Z),He.STAT_EVENT="statevent",v(Ke,Z),He.Na="timingevent",v(We,Z);var Xe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Je={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ye(){}function Qe(e){return e.h||(e.h=e.i())}function Ze(){}Ye.prototype.h=null;var et,tt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function it(){Z.call(this,"d")}function nt(){Z.call(this,"c")}function rt(){}function st(e,t,i,n){this.l=e,this.j=t,this.m=i,this.X=n||1,this.V=new De(this),this.P=at,e=H?125:void 0,this.W=new Ce(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ot}function ot(){this.i=null,this.g="",this.h=!1}v(it,Z),v(nt,Z),v(rt,Ye),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},et=new rt;var at=45e3,lt={},ht={};function ct(e,t,i){e.K=1,e.v=Pt(Ot(t)),e.s=i,e.U=!0,ut(e,null)}function ut(e,t){e.F=Date.now(),gt(e),e.A=Ot(e.v);var i=e.A,n=e.X;Array.isArray(n)||(n=[String(n)]),Gt(i.h,"t",n),e.C=0,i=e.l.H,e.h=new ot,e.g=Gi(e.l,i?t:null,!e.s),0<e.O&&(e.L=new Pe(g(e.Ia,e,e.g),e.O)),je(e.V,e.g,"readystatechange",e.gb),t=e.H?N(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),$e(1),function(e,t,i,n,r,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+t+"\n"+i+"\n"+o})}(e.j,e.u,e.A,e.m,e.X,e.s)}function dt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function ft(e,t,i){let n,r=!0;for(;!e.I&&e.C<i.length;){if((n=pt(e,i))==ht){4==t&&(e.o=4,Ge(14),r=!1),Fe(e.j,e.m,null,"[Incomplete Response]");break}if(n==lt){e.o=4,Ge(15),Fe(e.j,e.m,i,"[Invalid Chunk]"),r=!1;break}Fe(e.j,e.m,n,null),bt(e,n)}dt(e)&&n!=ht&&n!=lt&&(e.h.g="",e.C=0),4!=t||0!=i.length||e.h.h||(e.o=1,Ge(16),r=!1),e.i=e.i&&r,r?0<i.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+i.length),xi(t),t.L=!0,Ge(11))):(Fe(e.j,e.m,i,"[Invalid Chunked Response]"),wt(e),yt(e))}function pt(e,t){var i=e.C,n=t.indexOf("\n",i);return-1==n?ht:(i=Number(t.substring(i,n)),isNaN(i)?lt:(n+=1)+i>t.length?ht:(t=t.substr(n,i),e.C=n+i,t))}function gt(e){e.Y=Date.now()+e.P,mt(e,e.P)}function mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=qe(g(e.eb,e),t)}function vt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function yt(e){0==e.l.G||e.I||zi(e.l,e)}function wt(e){vt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Le(e.W),Ue(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function bt(e,t){try{var i=e.l;if(0!=i.G&&(i.g==e||Zt(i.i,e)))if(i.I=e.N,!e.J&&Zt(i.i,e)&&3==i.G){try{var n=i.Ca.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){e:if(!i.u){if(i.g){if(!(i.g.F+3e3<e.F))break e;Hi(i),Ai(i)}Ui(i),Ge(18)}}else i.ta=r[1],0<i.ta-i.U&&37500>r[2]&&i.N&&0==i.A&&!i.v&&(i.v=qe(g(i.ab,i),6e3));if(1>=Qt(i.i)&&i.ka){try{i.ka()}catch(e){}i.ka=void 0}}else Bi(i,11)}else if((e.J||i.g==e)&&Hi(i),!E(t))for(r=i.Ca.g.parse(t),t=0;t<r.length;t++){let h=r[t];if(i.U=h[0],h=h[1],2==i.G)if("c"==h[0]){i.J=h[1],i.la=h[2];const t=h[3];null!=t&&(i.ma=t,i.h.info("VER="+i.ma));const r=h[4];null!=r&&(i.za=r,i.h.info("SVER="+i.za));const c=h[5];null!=c&&"number"==typeof c&&0<c&&(n=1.5*c,i.K=n,i.h.info("backChannelRequestTimeoutMs_="+n)),n=i;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;!s.g&&(O(e,"spdy")||O(e,"quic")||O(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ei(s,s.h),s.h=null))}if(n.D){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.sa=e,Nt(n.F,n.D,e))}}i.G=3,i.j&&i.j.xa(),i.$&&(i.O=Date.now()-e.F,i.h.info("Handshake RTT: "+i.O+"ms"));var o=e;if((n=i).oa=Ki(n,n.H?n.la:null,n.W),o.J){ti(n.i,o);var a=o,l=n.K;l&&a.setTimeout(l),a.B&&(vt(a),gt(a)),n.g=o}else ji(n);0<i.l.length&&Ni(i)}else"stop"!=h[0]&&"close"!=h[0]||Bi(i,7);else 3==i.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Bi(i,7):Ri(i):"noop"!=h[0]&&i.j&&i.j.wa(h),i.A=0)}$e(4)}catch(e){}}function _t(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(h(e)||"string"==typeof e)_(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var i=e.T();else if(e.R&&"function"==typeof e.R)i=void 0;else if(h(e)||"string"==typeof e){i=[];for(var n=e.length,r=0;r<n;r++)i.push(r)}else for(r in i=[],n=0,e)i[n++]=r;r=(n=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(h(e)){for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t}for(n in t=[],i=0,e)t[i++]=e[n];return t}(e)).length;for(var s=0;s<r;s++)t.call(void 0,n[s],i&&i[s],e)}}function It(e,t){this.h={},this.g=[],this.i=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(e)if(e instanceof It)for(i=e.T(),n=0;n<i.length;n++)this.set(i[n],e.get(i[n]));else for(n in e)this.set(n,e[n])}function Tt(e){if(e.i!=e.g.length){for(var t=0,i=0;t<e.g.length;){var n=e.g[t];Et(e.h,n)&&(e.g[i++]=n),t++}e.g.length=i}if(e.i!=e.g.length){var r={};for(i=t=0;t<e.g.length;)Et(r,n=e.g[t])||(e.g[i++]=n,r[n]=1),t++;e.g.length=i}}function Et(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(n=st.prototype).setTimeout=function(e){this.P=e},n.gb=function(e){e=e.target;const t=this.L;t&&3==Ti(e)?t.l():this.Ia(e)},n.Ia=function(e){try{if(e==this.g)e:{const u=Ti(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||H||this.g&&(this.h.h||this.g.ga()||Ei(this.g)))){this.I||4!=u||7==t||$e(8==t||0>=d?3:2),vt(this);var i=this.g.ba();this.N=i;t:if(dt(this)){var n=Ei(this.g);e="";var r=n.length,s=4==Ti(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){wt(this),yt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==r-1});n.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==i,function(e,t,i,n,r,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+t+"\n"+i+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.X,u,i),this.i){if(this.$&&!this.J){t:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(l)){var c=l;break t}}c=null}if(!(i=c)){this.i=!1,this.o=3,Ge(12),wt(this),yt(this);break e}Fe(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bt(this,i)}this.U?(ft(this,u,o),H&&this.i&&3==u&&(je(this.V,this.W,"tick",this.fb),this.W.start())):(Fe(this.j,this.m,o,null),bt(this,o)),4==u&&wt(this),this.i&&!this.I&&(4==u?zi(this.l,this):(this.i=!1,gt(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),wt(this),yt(this)}}}catch(e){}},n.fb=function(){if(this.g){var e=Ti(this.g),t=this.g.ga();this.C<t.length&&(vt(this),ft(this,e,t),this.i&&4!=e&&gt(this))}},n.cancel=function(){this.I=!0,wt(this)},n.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&($e(3),Ge(17)),wt(this),this.o=2,yt(this)):mt(this,this.Y-e)},(n=It.prototype).R=function(){Tt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},n.T=function(){return Tt(this),this.g.concat()},n.get=function(e,t){return Et(this.h,e)?this.h[e]:t},n.set=function(e,t){Et(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},n.forEach=function(e,t){for(var i=this.T(),n=0;n<i.length;n++){var r=i[n],s=this.get(r);e.call(t,s,r,this)}};var kt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function St(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof St){this.g=void 0!==t?t:e.g,Rt(this,e.j),this.s=e.s,At(this,e.i),Ct(this,e.m),this.l=e.l,t=e.h;var i=new Vt;i.i=t.i,t.g&&(i.g=new It(t.g),i.h=t.h),Lt(this,i),this.o=e.o}else e&&(i=String(e).match(kt))?(this.g=!!t,Rt(this,i[1]||"",!0),this.s=Dt(i[2]||""),At(this,i[3]||"",!0),Ct(this,i[4]),this.l=Dt(i[5]||"",!0),Lt(this,i[6]||"",!0),this.o=Dt(i[7]||"")):(this.g=!!t,this.h=new Vt(null,this.g))}function Ot(e){return new St(e)}function Rt(e,t,i){e.j=i?Dt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function At(e,t,i){e.i=i?Dt(t,!0):t}function Ct(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Lt(e,t,i){t instanceof Vt?(e.h=t,function(e,t){t&&!e.j&&(Bt(e),e.i=null,e.g.forEach(function(e,t){var i=t.toLowerCase();t!=i&&($t(this,t),Gt(this,i,e))},e)),e.j=t}(e.h,e.g)):(i||(t=Mt(t,Ht)),e.h=new Vt(t,e.g))}function Nt(e,t,i){e.h.set(t,i)}function Pt(e){return Nt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Dt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Mt(e,t,i){return"string"==typeof e?(e=encodeURI(e).replace(t,jt),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}St.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Mt(t,Ut,!0),":");var i=this.i;return(i||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Mt(t,Ut,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&e.push(":",String(i))),(i=this.l)&&(this.i&&"/"!=i.charAt(0)&&e.push("/"),e.push(Mt(i,"/"==i.charAt(0)?Ft:xt,!0))),(i=this.h.toString())&&e.push("?",i),(i=this.o)&&e.push("#",Mt(i,zt)),e.join("")};var Ut=/[#\/\?@]/g,xt=/[#\?:]/g,Ft=/[#\?]/g,Ht=/[#\?@]/g,zt=/#/g;function Vt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Bt(e){e.g||(e.g=new It,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var s=e[i].substring(0,n);r=e[i].substring(n+1)}else s=e[i];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)}))}function $t(e,t){Bt(e),t=Wt(e,t),Et(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Et((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Tt(e)))}function Kt(e,t){return Bt(e),t=Wt(e,t),Et(e.g.h,t)}function Gt(e,t,i){$t(e,t),0<i.length&&(e.i=null,e.g.set(Wt(e,t),T(i)),e.h+=i.length)}function Wt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(n=Vt.prototype).add=function(e,t){Bt(this),this.i=null,e=Wt(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},n.forEach=function(e,t){Bt(this),this.g.forEach(function(i,n){_(i,function(i){e.call(t,i,n,this)},this)},this)},n.T=function(){Bt(this);for(var e=this.g.R(),t=this.g.T(),i=[],n=0;n<t.length;n++)for(var r=e[n],s=0;s<r.length;s++)i.push(t[n]);return i},n.R=function(e){Bt(this);var t=[];if("string"==typeof e)Kt(this,e)&&(t=I(t,this.g.get(Wt(this,e))));else{e=this.g.R();for(var i=0;i<e.length;i++)t=I(t,e[i])}return t},n.set=function(e,t){return Bt(this),this.i=null,Kt(this,e=Wt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),i=0;i<t.length;i++){var n=t[i],r=encodeURIComponent(String(n));n=this.R(n);for(var s=0;s<n.length;s++){var o=r;""!==n[s]&&(o+="="+encodeURIComponent(String(n[s]))),e.push(o)}}return this.i=e.join("&")};var qt=class{constructor(e,t){this.h=e,this.g=t}};function Xt(e){this.l=e||Jt,a.PerformanceNavigationTiming?e=0<(e=a.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jt=10;function Yt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Qt(e){return e.h?1:e.g?e.g.size:0}function Zt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function ei(e,t){e.g?e.g.add(t):e.h=t}function ti(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ii(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const i of e.g.values())t=t.concat(i.D);return t}return T(e.i)}function ni(){}function ri(e,t,i){const n=i||"";try{_t(e,function(e,i){let r=e;c(e)&&(r=_e(e)),t.push(n+i+"="+encodeURIComponent(r))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}function si(e,t,i,n,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(n)}catch(e){}}function oi(e){this.l=e.$b||null,this.j=e.ib||!1}function ai(e,t){ye.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=li,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xt.prototype.cancel=function(){if(this.i=ii(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},ni.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},ni.prototype.parse=function(e){return a.JSON.parse(e,void 0)},v(oi,Ye),oi.prototype.g=function(){return new ai(this.l,this.j)},oi.prototype.i=function(e){return function(){return e}}({}),v(ai,ye);var li=0;function hi(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function ci(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ui(e)}function ui(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(n=ai.prototype).open=function(e,t){if(this.readyState!=li)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ui(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},n.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ci(this)),this.readyState=li},n.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hi(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},n.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ci(this):ui(this),3==this.readyState&&hi(this)}},n.Ua=function(e){this.g&&(this.response=this.responseText=e,ci(this))},n.Ta=function(e){this.g&&(this.response=e,ci(this))},n.ha=function(){this.g&&ci(this)},n.setRequestHeader=function(e,t){this.v.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var i=t.next();!i.done;)i=i.value,e.push(i[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(ai.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var di=a.JSON.parse;function fi(e){ye.call(this),this.headers=new It,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pi,this.K=this.L=!1}v(fi,ye);var pi="",gi=/^https?$/i,mi=["POST","PUT"];function vi(e){return"content-type"==e.toLowerCase()}function yi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,wi(e),_i(e)}function wi(e){e.D||(e.D=!0,we(e,"complete"),we(e,"error"))}function bi(e){if(e.h&&void 0!==o&&(!e.C[1]||4!=Ti(e)||2!=e.ba()))if(e.v&&4==Ti(e))Ne(e.Fa,0,e);else if(we(e,"readystatechange"),4==Ti(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var i;if(!(i=t)){var n;if(n=0===o){var r=String(e.H).match(kt)[1]||null;if(!r&&a.self&&a.self.location){var s=a.self.location.protocol;r=s.substr(0,s.length-1)}n=!gi.test(r?r.toLowerCase():"")}i=n}if(i)we(e,"complete"),we(e,"success");else{e.m=6;try{var l=2<Ti(e)?e.g.statusText:""}catch(e){l=""}e.j=l+" ["+e.ba()+"]",wi(e)}}finally{_i(e)}}}function _i(e,t){if(e.g){Ii(e);const i=e.g,n=e.C[0]?l:null;e.g=null,e.C=null,t||we(e,"ready");try{i.onreadystatechange=n}catch(e){}}}function Ii(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Ti(e){return e.g?e.g.readyState:0}function Ei(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case pi:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ki(e,t,i){e:{for(n in i){var n=!1;break e}n=!0}n||(i=function(e){let t="";return L(e,function(e,i){t+=i,t+=":",t+=e,t+="\r\n"}),t}(i),"string"==typeof e?null!=i&&encodeURIComponent(String(i)):Nt(e,t,i))}function Si(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function Oi(e){this.za=0,this.l=[],this.h=new xe,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Si("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Si("baseRetryDelayMs",5e3,e),this.$a=Si("retryDelaySeedMs",1e4,e),this.Ya=Si("forwardChannelMaxRetries",2,e),this.ra=Si("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Xt(e&&e.concurrentRequestLimit),this.Ca=new function(){this.g=new ni},this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Ri(e){if(Ci(e),3==e.G){var t=e.V++,i=Ot(e.F);Nt(i,"SID",e.J),Nt(i,"RID",t),Nt(i,"TYPE","terminate"),Di(e,i),(t=new st(e,e.h,t,void 0)).K=2,t.v=Pt(Ot(i)),i=!1,a.navigator&&a.navigator.sendBeacon&&(i=a.navigator.sendBeacon(t.v.toString(),"")),!i&&a.Image&&((new Image).src=t.v,i=!0),i||(t.g=Gi(t.l,null),t.g.ea(t.v)),t.F=Date.now(),gt(t)}$i(e)}function Ai(e){e.g&&(xi(e),e.g.cancel(),e.g=null)}function Ci(e){Ai(e),e.u&&(a.clearTimeout(e.u),e.u=null),Hi(e),e.i.cancel(),e.m&&("number"==typeof e.m&&a.clearTimeout(e.m),e.m=null)}function Li(e,t){e.l.push(new qt(e.Za++,t)),3==e.G&&Ni(e)}function Ni(e){Yt(e.i)||e.m||(e.m=!0,Se(e.Ha,e),e.C=0)}function Pi(e,t){var i;i=t?t.m:e.V++;const n=Ot(e.F);Nt(n,"SID",e.J),Nt(n,"RID",i),Nt(n,"AID",e.U),Di(e,n),e.o&&e.s&&ki(n,e.o,e.s),i=new st(e,e.h,i,e.C+1),null===e.o&&(i.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Mi(e,i,1e3),i.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),ei(e.i,i),ct(i,n,t)}function Di(e,t){e.j&&_t({},function(e,i){Nt(t,i,e)})}function Mi(e,t,i){i=Math.min(e.l.length,i);var n=e.j?g(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+i];-1==t?0<i?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<i;o++){let i=r[o].h;const a=r[o].g;if(0>(i-=t))t=Math.max(0,r[o].h-100),s=!1;else try{ri(a,e,"req"+i+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.l.splice(0,i),t.D=e,n}function ji(e){e.g||e.u||(e.Y=1,Se(e.Ga,e),e.A=0)}function Ui(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=qe(g(e.Ga,e),Vi(e,e.A)),e.A++,!0)}function xi(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function Fi(e){e.g=new st(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Ot(e.oa);Nt(t,"RID","rpc"),Nt(t,"SID",e.J),Nt(t,"CI",e.N?"0":"1"),Nt(t,"AID",e.U),Di(e,t),Nt(t,"TYPE","xmlhttp"),e.o&&e.s&&ki(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var i=e.g;e=e.la,i.K=1,i.v=Pt(Ot(t)),i.s=null,i.U=!0,ut(i,e)}function Hi(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function zi(e,t){var i=null;if(e.g==t){Hi(e),xi(e),e.g=null;var n=2}else{if(!Zt(e.i,t))return;i=t.D,ti(e.i,t),n=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==n){i=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;we(n=Ve(),new We(n,i,t,r)),Ni(e)}else ji(e);else if(3==(r=t.o)||0==r&&0<e.I||!(1==n&&function(e,t){return!(Qt(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=qe(g(e.Ha,e,t),Vi(e,e.C)),e.C++,0)))}(e,t)||2==n&&Ui(e)))switch(i&&0<i.length&&(t=e.i,t.i=t.i.concat(i)),r){case 1:Bi(e,5);break;case 4:Bi(e,10);break;case 3:Bi(e,6);break;default:Bi(e,2)}}function Vi(e,t){let i=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(i*=2),i*t}function Bi(e,t){if(e.h.info("Error code "+t),2==t){var i=null;e.j&&(i=null);var n=g(e.jb,e);i||(i=new St("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Rt(i,"https"),Pt(i)),function(e,t){const i=new xe;if(a.Image){const n=new Image;n.onload=m(si,i,n,"TestLoadImage: loaded",!0,t),n.onerror=m(si,i,n,"TestLoadImage: error",!1,t),n.onabort=m(si,i,n,"TestLoadImage: abort",!1,t),n.ontimeout=m(si,i,n,"TestLoadImage: timeout",!1,t),a.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(i.toString(),n)}else Ge(2);e.G=0,e.j&&e.j.va(t),$i(e),Ci(e)}function $i(e){e.G=0,e.I=-1,e.j&&(0==ii(e.i).length&&0==e.l.length||(e.i.i.length=0,T(e.l),e.l.length=0),e.j.ua())}function Ki(e,t,i){let n=function(e){return e instanceof St?Ot(e):new St(e,void 0)}(i);if(""!=n.i)t&&At(n,t+"."+n.i),Ct(n,n.m);else{const e=a.location;n=function(e,t,i,n){var r=new St(null,void 0);return e&&Rt(r,e),t&&At(r,t),i&&Ct(r,i),n&&(r.l=n),r}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,i)}return e.aa&&L(e.aa,function(e,t){Nt(n,t,e)}),t=e.D,i=e.sa,t&&i&&Nt(n,t,i),Nt(n,"VER",e.ma),Di(e,n),n}function Gi(e,t,i){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=i&&e.Ba&&!e.qa?new fi(new oi({ib:!0})):new fi(e.qa)).L=e.H,t}function Wi(){}function qi(){if(x&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function Xi(e,t){ye.call(this),this.g=new Oi(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!E(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!E(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Qi(this)}function Ji(e){it.call(this);var t=e.__sm__;if(t){e:{for(const i in t){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Yi(){nt.call(this),this.status=1}function Qi(e){this.g=e}(n=fi.prototype).ea=function(e,t,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():et.g(),this.C=this.u?Qe(this.u):Qe(et),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void yi(this,e)}e=i||"";const r=new It(this.headers);n&&_t(n,function(e,t){r.set(t,e)}),n=function(e){e:{var t=vi;const i=e.length,n="string"==typeof e?e.split(""):e;for(let r=0;r<i;r++)if(r in n&&t.call(void 0,n[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(r.T()),i=a.FormData&&e instanceof a.FormData,!(0<=b(mi,t))||n||i||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(e,t){this.g.setRequestHeader(t,e)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ii(this),0<this.B&&((this.K=function(e){return x&&X()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=Ne(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){yi(this,e)}},n.pa=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,we(this,"complete"),we(this,"abort"),_i(this))},n.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_i(this,!0)),fi.Z.M.call(this)},n.Fa=function(){this.s||(this.F||this.v||this.l?bi(this):this.cb())},n.cb=function(){bi(this)},n.ba=function(){try{return 2<Ti(this)?this.g.status:-1}catch(e){return-1}},n.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),di(t)}},n.Da=function(){return this.m},n.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(n=Oi.prototype).ma=8,n.G=1,n.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},n.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new st(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?D(s=N(s),this.P):s=this.P),null===this.o&&(r.H=s),this.ja)e:{for(var t=0,i=0;i<this.l.length;i++){var n=this.l[i];if(void 0===(n="__data__"in n.g&&"string"==typeof(n=n.g.__data__)?n.length:void 0))break;if(4096<(t+=n)){t=i;break e}if(4096===t||i===this.l.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=Mi(this,r,t),Nt(i=Ot(this.F),"RID",e),Nt(i,"CVER",22),this.D&&Nt(i,"X-HTTP-Session-Id",this.D),Di(this,i),this.o&&s&&ki(i,this.o,s),ei(this.i,r),this.Ra&&Nt(i,"TYPE","init"),this.ja?(Nt(i,"$req",t),Nt(i,"SID","null"),r.$=!0,ct(r,i,null)):ct(r,i,t),this.G=2}}else 3==this.G&&(e?Pi(this,e):0==this.l.length||Yt(this.i)||Pi(this))},n.Ga=function(){if(this.u=null,Fi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=qe(g(this.bb,this),e)}},n.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ge(10),Ai(this),Fi(this))},n.ab=function(){null!=this.v&&(this.v=null,Ai(this),Ui(this),Ge(19))},n.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Ge(2)):(this.h.info("Failed to ping google.com"),Ge(1))},(n=Wi.prototype).xa=function(){},n.wa=function(){},n.va=function(){},n.ua=function(){},n.Oa=function(){},qi.prototype.g=function(e,t){return new Xi(e,t)},v(Xi,ye),Xi.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,i=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Se(g(e.hb,e,t))),Ge(0),e.W=t,e.aa=i||{},e.N=e.X,e.F=Ki(e,null,e.W),Ni(e)},Xi.prototype.close=function(){Ri(this.g)},Xi.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Li(this.g,t)}else this.v?((t={}).__data__=_e(e),Li(this.g,t)):Li(this.g,e)},Xi.prototype.M=function(){this.g.j=null,delete this.j,Ri(this.g),delete this.g,Xi.Z.M.call(this)},v(Ji,it),v(Yi,nt),v(Qi,Wi),Qi.prototype.xa=function(){we(this.g,"a")},Qi.prototype.wa=function(e){we(this.g,new Ji(e))},Qi.prototype.va=function(e){we(this.g,new Yi(e))},Qi.prototype.ua=function(){we(this.g,"b")},qi.prototype.createWebChannel=qi.prototype.g,Xi.prototype.send=Xi.prototype.u,Xi.prototype.open=Xi.prototype.m,Xi.prototype.close=Xi.prototype.close,Xe.NO_ERROR=0,Xe.TIMEOUT=8,Xe.HTTP_ERROR=6,Je.COMPLETE="complete",Ze.EventType=tt,tt.OPEN="a",tt.CLOSE="b",tt.ERROR="c",tt.MESSAGE="d",ye.prototype.listen=ye.prototype.N,fi.prototype.listenOnce=fi.prototype.O,fi.prototype.getLastError=fi.prototype.La,fi.prototype.getLastErrorCode=fi.prototype.Da,fi.prototype.getStatus=fi.prototype.ba,fi.prototype.getResponseJson=fi.prototype.Qa,fi.prototype.getResponseText=fi.prototype.ga,fi.prototype.send=fi.prototype.ea;var Zi=s.createWebChannelTransport=function(){return new qi},en=s.getStatEventTarget=function(){return Ve()},tn=s.ErrorCode=Xe,nn=s.EventType=Je,rn=s.Event=He,sn=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},on=s.FetchXmlHttpFactory=oi,an=s.WebChannel=Ze,ln=s.XhrIo=fi}).call(this,i(6))},function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return a});var n=i(0);class r{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new n.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[e,t]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var i;const n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:function(e){return e===s?void 0:e}(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}return i||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,i){"use strict";(function(e){i.d(t,"a",function(){return ae});var n=i(1),r=i(4),s=i(2),o=i(0);i(3);const a="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c=new s.b("@firebase/firestore");function u(e,...t){if(c.logLevel<=s.a.DEBUG){const i=t.map(f);c.debug(`Firestore (${h}): ${e}`,...i)}}function d(e,...t){if(c.logLevel<=s.a.ERROR){const i=t.map(f);c.error(`Firestore (${h}): ${e}`,...i)}}function f(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e="Unexpected state"){const t=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+e;throw d(t),new Error(t)}function g(e,t){e||p()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends o.c{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=(()=>`${this.name}: [code=${this.code}]: ${this.message}`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(l.UNAUTHENTICATED))}shutdown(){}}class _{constructor(e,t,i){this.type="FirstParty",this.user=l.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const n=e.auth.getAuthHeaderValueForFirstParty([]);n&&this.headers.set("Authorization",n),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class I{constructor(e,t,i){this.h=e,this.l=t,this.m=i}getToken(){return Promise.resolve(new _(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(l.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class T{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=(e=>this.I(e)),this.T=(e=>t.writeSequenceNumber(e)))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let t=0;t<e;t++)i[t]=Math.floor(256*Math.random());return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */E.A=-1;class S{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const n=k(40);for(let r=0;r<n.length;++r)i.length<20&&n[r]<t&&(i+=e.charAt(n[r]%e.length))}return i}}function O(e,t){return e<t?-1:e>t?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e,t,i){void 0===t?t=0:t>e.length&&p(),void 0===i?i=e.length-t:i>e.length-t&&p(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return 0===R.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof R?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let n=0;n<i;n++){const i=e.get(n),r=t.get(n);if(i<r)return-1;if(i>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class A extends R{construct(e,t,i){return new A(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new v(m.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(e=>e.length>0))}return new A(t)}static emptyPath(){return new A([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new C(t)}static fromUint8Array(e){const t=function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e);return new C(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}C.EMPTY_BYTE_STRING=new C("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function L(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function N(e){return"string"==typeof e?C.fromBase64String(e):C.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(e,t,i,n,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class D{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new D("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof D&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{constructor(e){this.path=e}static fromPath(e){return new j(A.fromString(e))}static fromName(e){return new j(A.fromString(e).popFirst(5))}static empty(){return new j(A.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===A.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return A.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new A(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}class x{constructor(e,t,i,n){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=n}}x.UNKNOWN_ID=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var F,H;(H=F||(F={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(e,t){this.comparator=e,this.root=t||B.EMPTY}insert(e,t){return new z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,B.BLACK,null,null))}remove(e){return new z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,B.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(0===i)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(e,i.key);if(0===n)return t+i.left.size;n<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new V(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new V(this.root,e,this.comparator,!1)}getReverseIterator(){return new V(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new V(this.root,e,this.comparator,!0)}}class V{constructor(e,t,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class B{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:B.RED,this.left=null!=n?n:B.EMPTY,this.right=null!=r?r:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,n,r){return new B(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let n=this;const r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let i,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return B.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw p();if(this.right.isRed())throw p();const e=this.left.check();if(e!==this.right.check())throw p();return e+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1,B.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(e,t,i,n,r){return this}insert(e,t,i){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(e){this.comparator=e,this.data=new z(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let i;for(i=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new K(this.data.getIterator())}getIteratorFrom(e){return new K(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof $))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,n=i.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $(this.comparator);return t.data=e,t}}class K{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new z(j.comparator);new z(j.comparator);new z(j.comparator),new $(j.comparator);new $(O);const G=[...[...[...[...["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments"],"clientMetadata"],"remoteDocumentGlobal"],"collectionParents"],"bundles","namedQueries"],W=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(L(e.integerValue));else if("doubleValue"in e){const i=L(e.doubleValue);isNaN(i)?this.ne(t,13):(this.ne(t,15),M(i)?t.se(0):t.se(i))}else if("timestampValue"in e){const i=e.timestampValue;this.ne(t,20),"string"==typeof i?t.ie(i):(t.ie(`${i.seconds||""}`),t.se(i.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(N(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.ne(t,45),t.se(i.latitude||0),t.se(i.longitude||0)}else"mapValue"in e?U(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):p()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const i=e.fields||{};this.ne(t,55);for(const e of Object.keys(i))this.re(e,t),this.te(i[e],t)}he(e,t){const i=e.values||[];this.ne(t,50);for(const e of i)this.te(e,t)}ae(e,t){this.ne(t,37),j.fromName(e).path.forEach(e=>{this.ne(t,60),this.le(e,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}X.fe=new X;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class J{constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new J(e,J.DEFAULT_COLLECTION_PERCENTILE,J.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */J.DEFAULT_COLLECTION_PERCENTILE=10,J.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,J.DEFAULT=new J(41943040,J.DEFAULT_COLLECTION_PERCENTILE,J.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),J.DISABLED=new J(-1,0,0);function Y(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,i=1e3,n=1.5,r=6e4){this.Yn=e,this.timerId=t,this.fo=i,this._o=n,this.wo=r,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const t=Math.floor(this.mo+this.Eo()),i=Math.max(0,Date.now()-this.po),n=Math.max(0,t-i);n>0&&u("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.mo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,n,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(e,t,i,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new y,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,i,n,r){const s=Date.now()+i,o=new Z(e,t,s,n,r);return o.start(i),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new v(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ee(e,t){if(d("AsyncQueue",`${t}: ${e}`),q(e))return new v(m.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te{constructor(e,t,i,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=n,this.user=l.UNAUTHENTICATED,this.clientId=S.R(),this.authCredentialListener=(()=>Promise.resolve()),this.appCheckCredentialListener=(()=>Promise.resolve()),this.authCredentials.start(i,async e=>{u("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(i,e=>(u("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new y;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=ee(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}const ie=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new v(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new v(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,i,n){if(!0===t&&!0===n)throw new v(m.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,i){this._authCredentials=t,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ne({}),this._settingsFrozen=!1,e instanceof D?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new v(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new D(e.options.projectId)}(e))}get app(){if(!this._app)throw new v(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new v(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ne(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new b;switch(e.type){case"gapi":const t=e.client;return g(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new I(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new v(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ie.get(e);t&&(u("ComponentProvider","Removing Datastore"),ie.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Q(this,"async_queue_retry"),this.qa=(()=>{const e=Y();e&&u("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Do.Ao()});const e=Y();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const t=Y();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const t=new y;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!q(e))throw e;u("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const t=this.ka.then(()=>(this.Ba=!0,e().catch(e=>{throw this.$a=e,this.Ba=!1,d("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e}).then(e=>(this.Ba=!1,e))));return this.ka=t,t}enqueueAfterDelay(e,t,i){this.Ka(),this.Ua.indexOf(e)>-1&&(t=0);const n=Z.createAndSchedule(this,e,t,i,e=>this.ja(e));return this.Fa.push(n),n}Ka(){this.$a&&p()}verifyOperationInProgress(){}async Wa(){let e;do{e=this.ka,await e}while(e!==this.ka)}za(e){for(const t of this.Fa)if(t.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Fa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const t=this.Fa.indexOf(e);this.Fa.splice(t,1)}}class oe extends re{constructor(e,t,i){super(e,t,i),this.type="firestore",this._queue=new se,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||le(this),this._firestoreClient.terminate()}}function ae(e=Object(n.e)()){return Object(n.b)(e,"firestore").getImmediate()}function le(e){var t;const i=e._freezeSettings(),n=function(e,t,i,n){return new P(e,t,i,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new te(e._authCredentials,e._appCheckCredentials,e._queue,n)}new RegExp("[~\\*/\\[\\]]");!function(e,t=!0){!function(e){h=e}(n.a),Object(n.c)(new r.a("firestore",(e,{options:i})=>{const n=e.getProvider("app").getImmediate(),r=new oe(n,new class{constructor(e){this.t=e,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const n=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve();let r=new y;this.o=(()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new y,e.enqueueRetryable(()=>n(this.currentUser))});const s=()=>{const t=r;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{u("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(u("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new y)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(u("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(g("string"==typeof t.accessToken),new w(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return g(null===e||"string"==typeof e),new l(e)}}(e.getProvider("auth-internal")),new class{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const i=e=>{null!=e.error&&u("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const i=e.token!==this.p;return this.p=e.token,u("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=(t=>{e.enqueueRetryable(()=>i(t))});const n=e=>{u("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):u("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(g("string"==typeof e.token),this.p=e.token,new T(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}(e.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r},"PUBLIC")),Object(n.g)(a,"3.4.8",void 0),Object(n.g)(a,"3.4.8","esm2017")}()}).call(this,i(8))},function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";i.r(t);var n=i(1);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(n.g)("firebase","9.7.0","app");var r=i(5),s=i(0);function o(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}Object.create;Object.create;var a=i(2),l=i(4);function h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=h,u=new s.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new a.b("@firebase/auth");function f(e,...t){d.logLevel<=a.a.ERROR&&d.error(`Auth (${n.a}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw v(e,...t)}function g(e,...t){return v(e,...t)}function m(e,t,i){const n=Object.assign(Object.assign({},c()),{[t]:i});return new s.b("auth","Firebase",n).create(t,{appName:e.name})}function v(e,...t){if("string"!=typeof e){const i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return u.create(e,...t)}function y(e,t,...i){if(!e)throw v(t,...i)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function b(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function I(e){b(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(s.q)()||Object(s.r)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(E()||Object(s.l)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){b(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},C=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function N(e,t,i,n,r={}){return P(e,r,async()=>{let r={},o={};n&&("GET"===t?o=n:r={body:JSON.stringify(n)});const a=Object(s.v)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),R.fetch()(M(e,e.config.apiHost,i,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},r))})}async function P(e,t,i){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},A),t);try{const t=new j(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw U(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[i,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw U(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===i)throw U(e,"email-already-in-use",o);const a=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);p(e,a)}}catch(t){if(t instanceof s.c)throw t;p(e,"network-request-failed")}}async function D(e,t,i,n,r={}){const s=await N(e,t,i,n,r);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function M(e,t,i,n){const r=`${t}${i}?${n}`;return e.config.emulator?O(e.config,r):`${e.config.apiScheme}://${r}`}class j{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(g(this.auth,"network-request-failed")),C.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,i){const n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const r=g(e,t,n);return r.customData._tokenResponse=i,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return 1e3*Number(e)}function H(e){const[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(s.d)(i);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(e){return f("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function z(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof s.c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class V{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=x(this.lastLoginAt),this.creationTime=x(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e){var t;const i=e.auth,n=await e.getIdToken(),r=await z(e,async function(e,t){return N(e,"POST","/v1/accounts:lookup",t)}(i,{idToken:n}));y(null===r||void 0===r?void 0:r.users.length,i,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?function(e){return e.map(e=>{var{providerId:t}=e,i=o(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(s.providerUserInfo):[],l=function(e,t){return[...e.filter(e=>!t.some(t=>t.providerId===e.providerId)),...t]}(e.providerData,a),h=e.isAnonymous,c=!(e.email&&s.passwordHash||(null===l||void 0===l?void 0:l.length)),u=!!h&&c,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new B(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=H(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:n,expiresIn:r}=await async function(e,t){const i=await P(e,{},async()=>{const i=Object(s.v)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,o=M(e,n,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){const{refreshToken:i,accessToken:n,expirationTime:r}=t,s=new K;return i&&(y("string"==typeof i,"internal-error",{appName:e}),s.refreshToken=i),n&&(y("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),r&&(y("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new K,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class W{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new B(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await z(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const i=Object(s.j)(e),n=await i.getIdToken(t),r=H(n);y(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,a=null===o||void 0===o?void 0:o.sign_in_provider;return{claims:r,token:n,authTime:x(F(r.auth_time)),issuedAtTime:x(F(r.iat)),expirationTime:x(F(r.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Object(s.j)(e);await $(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new W(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await $(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await z(this,async function(e,t){return N(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,s,o,a,l,h;const c=null!==(i=t.displayName)&&void 0!==i?i:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:I,stsTokenManager:T}=t;y(w&&T,e,"internal-error");const E=K.fromJSON(this.name,T);y("string"==typeof w,e,"internal-error"),G(c,e.name),G(u,e.name),y("boolean"==typeof b,e,"internal-error"),y("boolean"==typeof _,e,"internal-error"),G(d,e.name),G(f,e.name),G(p,e.name),G(g,e.name),G(m,e.name),G(v,e.name);const k=new W({uid:w,auth:e,email:u,emailVerified:b,displayName:c,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:v});return I&&Array.isArray(I)&&(k.providerData=I.map(e=>Object.assign({},e))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(e,t,i=!1){const n=new K;n.updateFromServerResponse(t);const r=new W({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await $(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}q.type="NONE";const X=q;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t,i){return`firebase:${e}:${t}:${i}`}class Y{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:n,name:r}=this.auth;this.fullUserKey=J(this.userKey,n.apiKey,r),this.fullPersistenceKey=J("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?W._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Y(I(X),e,i);const n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=n[0]||I(X);const s=J(i,e.config.apiKey,e.name);let o=null;for(const i of t)try{const t=await i._get(s);if(t){const n=W._fromJSON(e,t);i!==r&&(o=n),r=i;break}}catch(e){}const a=n.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(e){}})),new Y(r,e,i)):new Y(r,e,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ie(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Z(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(re(t))return"Blackberry";if(se(t))return"Webos";if(ee(t))return"Safari";if((t.includes("chrome/")||te(t))&&!t.includes("edge/"))return"Chrome";if(ne(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(t);if(2===(null===i||void 0===i?void 0:i.length))return i[1]}return"Other"}function Z(e=Object(s.k)()){return/firefox\//i.test(e)}function ee(e=Object(s.k)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function te(e=Object(s.k)()){return/crios\//i.test(e)}function ie(e=Object(s.k)()){return/iemobile/i.test(e)}function ne(e=Object(s.k)()){return/android/i.test(e)}function re(e=Object(s.k)()){return/blackberry/i.test(e)}function se(e=Object(s.k)()){return/webos/i.test(e)}function oe(e=Object(s.k)()){return/iphone|ipad|ipod/i.test(e)}function ae(e=Object(s.k)()){return oe(e)||ne(e)||se(e)||re(e)||/windows phone/i.test(e)||ie(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e,t=[]){let i;switch(e){case"Browser":i=Q(Object(s.k)());break;case"Worker":i=`${Q(Object(s.k)())}-${e}`;break;default:i=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${n.a}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ue(this),this.idTokenSubscription=new ue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=I(t)),this._initializationPromise=this.queue(async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await Y.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||null===s||void 0===s||!s.user||(i=s.user)}return i?i._redirectEventId?(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(s.j)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(I(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new s.b("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&I(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[I(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"==typeof t?e.addObserver(t,i,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=le(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function ce(e){return Object(s.j)(e)}class ue{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(s.g)(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(e,t){return N(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends de{constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new pe(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new pe(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return fe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ge(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="http://localhost";class ve extends de{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=o(t,["providerId","signInMethod"]);if(!i||!n)return null;const s=new ve(i,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return ge(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ge(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ge(e,t)}buildRequest(){const e={requestUri:me,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Object(s.v)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends de{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new we({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new we({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const i=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(i.temporaryProof)throw U(e,"account-exists-with-different-credential",i);return i}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ye)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new we({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){var t,i,n,r,o,a;const l=Object(s.w)(Object(s.i)(e)),h=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(i=l.oobCode)&&void 0!==i?i:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);y(h&&c&&u,"argument-error"),this.apiKey=h,this.operation=u,this.code=c,this.continueUrl=null!==(r=l.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=Object(s.w)(Object(s.i)(e)).link,i=t?Object(s.w)(Object(s.i)(t)).deep_link_id:null,n=Object(s.w)(Object(s.i)(e)).deep_link_id;return(n?Object(s.w)(Object(s.i)(n)).link:null)||n||i||t||e}(e);try{return new be(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e{constructor(){this.providerId=_e.PROVIDER_ID}static credential(e,t){return pe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=be.parseLink(t);return y(i,"argument-error"),pe._fromEmailAndCode(e,i.code,i.tenantId)}}_e.PROVIDER_ID="password",_e.EMAIL_PASSWORD_SIGN_IN_METHOD="password",_e.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Ie{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee extends Te{constructor(){super("facebook.com")}static credential(e){return ve._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!(e&&"oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch(e){return null}}}Ee.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ee.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke extends Te{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ve._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ke.credential(t,i)}catch(e){return null}}}ke.GOOGLE_SIGN_IN_METHOD="google.com",ke.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends Te{constructor(){super("github.com")}static credential(e){return ve._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!(e&&"oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch(e){return null}}}Se.GITHUB_SIGN_IN_METHOD="github.com",Se.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe extends Te{constructor(){super("twitter.com")}static credential(e,t){return ve._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Oe.credential(t,i)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(e,t){return D(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe.TWITTER_SIGN_IN_METHOD="twitter.com",Oe.PROVIDER_ID="twitter.com";class Ae{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){const r=await W._fromIdTokenResponse(e,i,n),s=Ce(i);return new Ae({user:r,providerId:s,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const n=Ce(i);return new Ae({user:e,providerId:n,_tokenResponse:i,operationType:t})}}function Ce(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le extends s.c{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,Le.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new Le(e,t,i,n)}}function Ne(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw Le._fromErrorAndOperation(e,i,t,n);throw i})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t,i=!1){const n=await z(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return Ae._forOperation(e,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function De(e,t,i=!1){const{auth:n}=e;try{const r=await z(e,Ne(n,"reauthenticate",t,e),i);y(r.idToken,n,"internal-error");const s=H(r.idToken);y(s,n,"internal-error");const{sub:o}=s;return y(e.uid===o,n,"user-mismatch"),Ae._forOperation(e,"reauthenticate",r)}catch(e){throw"auth/user-not-found"===(null===e||void 0===e?void 0:e.code)&&p(n,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t,i=!1){const n=await Ne(e,"signIn",t),r=await Ae._fromIdTokenResponse(e,"signIn",n);return i||await e._updateCurrentUser(r.user),r}async function je(e,t,i){const n=ce(e),r=await Re(n,{returnSecureToken:!0,email:t,password:i}),s=await Ae._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}new WeakMap;const Ue="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ue,"1"),this.storage.removeItem(Ue),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=1e3,He=10;class ze extends xe{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=((e,t)=>this.onStorageEvent(e,t)),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Object(s.k)();return ee(e)||oe(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,i)=>{this.notifyListeners(e,i)});const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);Object(s.o)()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,He):n()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Fe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ze.type="LOCAL";const Ve=ze;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends xe{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Be.type="SESSION";const $e=Be;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const i=new Ke(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:n,data:r}=t.data,s=this.handlersMap[n];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const o=Array.from(s).map(async e=>e(t.origin,r)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke.receivers=[];class We{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const l=Ge("",20);n.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},i);s={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(h),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xe(){return void 0!==qe().WorkerGlobalScope&&"function"==typeof qe().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je="firebaseLocalStorageDb",Ye=1,Qe="firebaseLocalStorage",Ze="fbase_key";class et{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tt(e,t){return e.transaction([Qe],t?"readwrite":"readonly").objectStore(Qe)}function it(){const e=indexedDB.open(Je,Ye);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Qe,{keyPath:Ze})}catch(e){i(e)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(Qe)?t(i):(i.close(),await function(){const e=indexedDB.deleteDatabase(Je);return new et(e).toPromise()}(),t(await it()))})})}async function nt(e,t,i){const n=tt(e,!0).put({[Ze]:t,value:i});return new et(n).toPromise()}function rt(e,t){const i=tt(e,!0).delete(t);return new et(i).toPromise()}const st=800,ot=3;class at{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await it(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(e){if(t++>ot)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ke._getInstance(Xe()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{return{keyProcessed:(await this._poll()).includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new We(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await it();return await nt(e,Ue,"1"),await rt(e,Ue),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>nt(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>(async function(e,t){const i=tt(e,!1).get(t),n=await new et(i).toPromise();return void 0===n?null:n.value})(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=tt(e,!1).getAll();return new et(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],i=new Set;for(const{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),st)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}at.type="LOCAL";const lt=at;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){return new Promise((t,i)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=(e=>{const t=g("internal-error");t.customData=e,i(t)}),n.type="text/javascript",n.charset="UTF-8",
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(n)})}function ct(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ct("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ut="recaptcha";async function dt(e,t,i){var n;const r=await i.verify();try{let s;if(y("string"==typeof r,e,"argument-error"),y(i.type===ut,e,"argument-error"),"session"in(s="string"==typeof t?{phoneNumber:t}:t)){const t=s.session;if("phoneNumber"in s){return y("enroll"===t.type,e,"internal-error"),(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const i=(null===(n=s.multiFactorHint)||void 0===n?void 0:n.uid)||s.multiFactorUid;return y(i,e,"missing-multi-factor-info"),(await function(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return N(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{i._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(e){this.providerId=ft.PROVIDER_ID,this.auth=ce(e)}verifyPhoneNumber(e,t){return dt(this.auth,e,Object(s.j)(t))}static credential(e,t){return we._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ft.credentialFromTaggedObject(t)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?we._fromTokenResponse(t,i):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pt(e,t){return t?I(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.PROVIDER_ID="phone",ft.PHONE_SIGN_IN_METHOD="phone";class gt extends de{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ge(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ge(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mt(e){return Me(e.auth,new gt(e),e.bypassAuthState)}function vt(e){const{auth:t,user:i}=e;return y(i,t,"internal-error"),De(i,new gt(e),e.bypassAuthState)}async function yt(e){const{auth:t,user:i}=e;return y(i,t,"internal-error"),Pe(i,new gt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mt;case"linkViaPopup":case"linkViaRedirect":return yt;case"reauthViaPopup":case"reauthViaRedirect":return vt;default:p(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new S(2e3,1e4);class _t extends wt{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,_t.currentPopupAction&&_t.currentPopupAction.cancel(),_t.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Ge();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_t.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;null!==(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)&&void 0!==i&&i.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,bt.get())};e()}}_t.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const It="pendingRedirect",Tt=new Map;class Et extends wt{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Tt.get(this.auth._key());if(!e){try{const t=await async function(e,t){const i=St(t),n=kt(e);if(!await n._isAvailable())return!1;const r="true"===await n._get(i);return await n._remove(i),r}(this.resolver,this.auth)?await super.execute():null;e=(()=>Promise.resolve(t))}catch(t){e=(()=>Promise.reject(t))}Tt.set(this.auth._key(),e)}return this.bypassAuthState||Tt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function kt(e){return I(e._redirectPersistence)}function St(e){return J(It,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,i=!1){const n=ce(e),r=pt(n,t),s=new Et(n,r,i),o=await s.execute();return o&&!i&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rt=6e5;class At{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?t:(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0),t)}sendToConsumer(e,t){var i;if(e.error&&!Lt(e)){const n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(g(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rt&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ct(e))}saveEventToCache(e){this.cachedEventUids.add(Ct(e)),this.lastProcessedEventTime=Date.now()}}function Ct(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Lt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pt=/^https?/;async function Dt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return N(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Mt(e))return}catch(e){}p(e,"unauthorized-domain")}function Mt(e){const t=T(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!Pt.test(i))return!1;if(Nt.test(e))return n===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new S(3e4,6e4);function Ut(){const e=qe().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let xt=null;function Ft(e){return xt=xt||function(e){return new Promise((t,i)=>{var n,r,s;function o(){Ut(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ut(),i(g(e,"network-request-failed"))},timeout:jt.get()})}if(null===(r=null===(n=qe().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(null===(s=qe().gapi)||void 0===s||!s.load){const t=ct("iframefcb");return qe()[t]=(()=>{gapi.load?o():i(g(e,"network-request-failed"))}),ht(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>i(e))}o()}}).catch(e=>{throw xt=null,e})}(e)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new S(5e3,15e3),zt="__/auth/iframe",Vt="emulator/auth/iframe",Bt={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$t=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function Kt(e){const t=await Ft(e),i=qe().gapi;return y(i,e,"internal-error"),t.open({where:document.body,url:function(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const i=t.emulator?O(t,Vt):`https://${e.config.authDomain}/${zt}`,r={apiKey:t.apiKey,appName:e.name,v:n.a},o=$t.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${i}?${Object(s.v)(r).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bt,dontclear:!0},t=>new Promise(async(i,n)=>{await t.restyle({setHideOnLeave:!1});const r=g(e,"network-request-failed"),s=qe().setTimeout(()=>{n(r)},Ht.get());function o(){qe().clearTimeout(s),i(t)}t.ping(o).then(o,()=>{n(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wt=500,qt=600,Xt="_blank",Jt="http://localhost";class Yt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Qt(e,t,i,n=Wt,r=qt){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const h=Object.assign(Object.assign({},Gt),{width:n.toString(),height:r.toString(),top:o,left:a}),c=Object(s.k)().toLowerCase();i&&(l=te(c)?Xt:i),Z(c)&&(t=t||Jt,h.scrollbars="yes");const u=Object.entries(h).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=Object(s.k)()){var t;return oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){const i=document.createElement("a");i.href=e,i.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",l),new Yt(null);const d=window.open(t||"",l,u);y(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Yt(d)}const Zt="__/auth/handler",ei="emulator/auth/handler";function ti(e,t,i,r,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:r,v:n.a,eventId:o};if(t instanceof Ie){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",Object(s.n)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Te){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const h=l;for(const e of Object.keys(h))void 0===h[e]&&delete h[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Zt}`;return O(e,ei)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Object(s.v)(h).slice(1)}`}const ii="webStorageSupport";const ni=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$e,this._completeRedirectFn=Ot}async _openPopup(e,t,i,n){var r;return b(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()"),Qt(e,ti(e,t,i,T(),n),Ge())}async _openRedirect(e,t,i,n){return await this._originValidation(e),function(e){qe().location.href=e}(ti(e,t,i,T(),n)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(b(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Kt(e),i=new At(e);return t.register("authEvent",t=>(y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event"),{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ii,{type:ii},i=>{var n;const r=null===(n=null===i||void 0===i?void 0:i[0])||void 0===n?void 0:n[ii];void 0!==r&&t(!!r),p(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ae()||ee()||oe()}};class ri{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class si extends ri{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new si(e)}_finalizeEnroll(e,t,i){return function(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}(class{constructor(){}static assertion(e){return si._fromCredential(e)}}).FACTOR_ID="phone";var oi="@firebase/auth",ai="0.19.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var i;e((null===(i=t)||void 0===i?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){Object(n.c)(new l.a("auth",(t,{options:i})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=n.options;return((t,n)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:le(e)},a=new he(t,n,r);return function(e,t){const i=(null===t||void 0===t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(I);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null===t||void 0===t?void 0:t.popupRedirectResolver)}(a,i),a})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Object(n.c)(new l.a("auth-internal",e=>(e=>new li(e))(ce(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(n.g)(oi,ai,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(e)),Object(n.g)(oi,ai,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */("Browser");var hi=Object(n.f)({apiKey:"AIzaSyCS5E0sntq5dN0g7FlW0B69dhwJp_3f-b8",authDomain:"pineapplespanish-ff90a.firebaseapp.com",projectId:"pineapplespanish-ff90a",storageBucket:"pineapplespanish-ff90a.appspot.com",messagingSenderId:"237714081439",appId:"1:237714081439:web:2d1130801f978c4fe8c4aa",measurementId:"G-T0PYJE03ZZ"}),ci=function(e=Object(n.e)()){const t=Object(n.b)(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const i=Object(n.b)(e,"auth");if(i.isInitialized()){const e=i.getImmediate(),n=i.getOptions();if(Object(s.h)(n,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:ni,persistence:[lt,Ve,$e]})}(hi),ui=(Object(r.a)(hi),window.location.pathname);window.addEventListener("DOMContentLoaded",function(){"/docs/index.html"===ui?function(e,t){var i=document.querySelector(".signup");i.addEventListener("submit",function(n){n.preventDefault();var r=i.email.value,s=i.password.value;e(t,r,s).then(function(e){return console.log("user created:",e.user)}).catch(function(e){return console.log(e.message)})})}(je,ci):"/docs/verbs.html"===ui&&(console.log("VERBS LOADED"),function(){var e=document.querySelector(".leftboy"),t=document.querySelector(".rightboy");e.addEventListener("click",function(e){e.target.classList.contains("pres_reg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Vu0BdYuRbCM" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_hirreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/7O1bNIFc8qM" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_ei")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/6IElBxdOsfs" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_oue")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/SHvNTP7LyIo" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_eie")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/bxiKM_VjiMU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_reg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/8931a0534b184dbe910d14af3c076405" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_hirreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/r9ZLr3SQUH4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_stem")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/1aTeq7IG7Hw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_ei")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/omaBhfYiAjE" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_ducir")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/jG3PfYPSZSY" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_weird")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/eG2cCS7C90g" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_synth")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/M6W2LkvCwLA" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("voy_a")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/QGJQpRlLrV0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("reflex_reg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/TteNDBPUFqg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("reflex_irreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/uXGKrCuoDtg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("gustar")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/1xsS_7QJPGw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("gerreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Z5cBoyKzTyE" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("gerirreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Yqmh-GY0lYs" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("tengoque")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/YK_H4OsXg5Y" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pretvimperf")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/5e379b68782d4c2dabc2427d4475b506" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imperf_reg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/ffd76d3a011e4f5a94671adb0bbb43b3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imperf_irreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/5083e0761e0347e4a0d230ec801bf030" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("dop1")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/az3Nd-uB2JA" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("dop2")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/-LlPNvO3Frc" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("dop3")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/8eZg8bDGiDU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("iop1")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/jO9CR9y8qyU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_perf")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/RuTuY7ZeIt0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_perf_irreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/vfEDC8fTRX8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("past_perf")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/AaJCbuII82k" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imptv_af_tu")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/O6zs-vR9nig" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imptv_af_ud")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/-4zy05jRDnc" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imptv_ng_tuud")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/AQ4g82x1lh8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imptv_nos")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Hi7tzvPUP9U" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imptv_uds")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/ap9SVKDjQuU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("fut_reg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/YDrbnH8c24U" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("fut_irreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/ExmU5Bf_vZQ" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("fut_perf")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/op0Ei3yx6PY" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("cond")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/qFF7wqKu_XM" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("subj_pres")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/16C5WoornhY" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("what_is_subj")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/8kOeglNbC9s" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("subj_irreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/N163epReBhQ" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("subj_trig")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/ofB7cfCMKcs" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("subj_impf")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/uwtFPFzEz4k" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("subj_perf")&&(t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/wMe1AqKuAyg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>')})}())})},function(e,t){var i,n,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(i===setTimeout)return setTimeout(e,0);if((i===s||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:s}catch(e){i=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,h=[],c=!1,u=-1;function d(){c&&l&&(c=!1,l.length?h=l.concat(h):u=-1,h.length&&f())}function f(){if(!c){var e=a(d);c=!0;for(var t=h.length;t;){for(l=h,h=[];++u<t;)l&&l[u].run();u=-1,t=h.length}l=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];h.push(new p(e,t)),1!==h.length||c||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}]);