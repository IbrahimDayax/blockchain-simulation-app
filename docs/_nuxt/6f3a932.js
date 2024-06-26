(window.webpackJsonp=window.webpackJsonp||[]).push([[14,7,8,10],{302:function(t,e,n){"use strict";n.r(e);var r=n(62),o=Object(r.c)({props:{text:{type:String,default:""}},setup:function(){}}),c=n(61),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",attrs:{type:"button"}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(302).default})},304:function(t,e,n){var r=n(310),o=[],c=[],l={add:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];o.push(e),c.forEach((function(t){return t.apply(void 0,e)}))},addListener:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};c.push(t),o.forEach((function(e){t.apply(void 0,r(e))}))}};t.exports=l},305:function(t,e,n){var r=n(214),o=n(215);n(14),n(74);var c=n(313),l=n(216),h=n(306).SignatureGenerator,d=function(){"use strict";function t(e,n,o){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l();r(this,t),this.fromAddress=e,this.toAddress=n,this.amount=parseInt(o),this.timestamp=l(c).unix()}return o(t,[{key:"calculateHash",value:function(){var pattern=this.fromAddress+this.toAddress+this.amount;return c(pattern).toString()}},{key:"sign",value:function(t){var e=new h(t).fromPrivate(t);if(e.getAddress()!==this.fromAddress)throw new Error("Invalid signing key");return this.signature=e.generate(this.calculateHash()),this}},{key:"isValid",value:function(){return!(!this.fromAddress||!this.toAddress)&&(!!this.signature&&(!!(new h).fromPublic(this.fromAddress).verify(this.calculateHash(),this.signature)||(console.log({hash:this.calculateHash(),signature:this.signature}),!1)))}}]),t}();t.exports=d},306:function(t,e,n){var r=n(214),o=n(215),c=n(318),l=function(){"use strict";function t(){r(this,t)}return o(t,[{key:"generate",value:function(){var t=new c.ec("secp256k1").genKeyPair();return{privateKey:t.getPrivate("hex"),publicKey:t.getPublic("hex")}}}]),t}(),h=function(){"use strict";function t(){r(this,t),this.key=void 0}return o(t,[{key:"fromPrivate",value:function(t){return this.key=new c.ec("secp256k1").keyFromPrivate(t,"hex"),this}},{key:"fromPublic",value:function(t){return this.key=new c.ec("secp256k1").keyFromPublic(t,"hex"),this}},{key:"getAddress",value:function(){return this.key?this.key.getPublic("hex"):void 0}},{key:"generate",value:function(t){return this.key.sign(t,"base64").toDER("hex")}},{key:"verify",value:function(t,e){return this.key.verify(t,e)}}]),t}();e.KeyGenerator=l,e.SignatureGenerator=h},309:function(t,e,n){var r=n(214),o=n(215);n(14),n(74),n(34),n(217),n(50);var c=n(313),l=n(216),h=n(304),d=function(){"use strict";function t(data,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r(this,t),this.data=data,this.timestamp=l(e).unix(),this.hash=void 0,this.previousHash=n,this.hash=this.calculateHash(),this.nonce=0,this.options={log:!0}}return o(t,[{key:"calculateHash",value:function(){var t=JSON.stringify(this.data),pattern=this.previousHash+this.timestamp+this.nonce+t;return c(pattern).toString()}},{key:"mine",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return new Promise((function(n,r){for(var o=Date.now();t.hash.slice(0,e)!=="0".repeat(e);){var c=Date.now();t.nonce++,t.hash=t.calculateHash();var l=Math.floor((c-o)/1e3);t.options.log&&console.log("[Block] Mining Block - generate hash and found ".concat(t.hash," | ").concat(l,"s | nonce ").concat(t.nonce))}var time=(Date.now()-o)/1e3;t.options.log&&(console.log("[Block] Mining Block - Success in ".concat(time,"s with nonce ").concat(t.nonce)),h.add("[Block] Mining Block - Success in ".concat(time,"s with nonce ").concat(t.nonce))),n(t)}))}}]),t}();t.exports=d},310:function(t,e,n){var r=n(311),o=n(219),c=n(147),l=n(312);t.exports=function(t){return r(t)||o(t)||c(t)||l()},t.exports.default=t.exports,t.exports.__esModule=!0},311:function(t,e,n){var r=n(218);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.default=t.exports,t.exports.__esModule=!0},312:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},316:function(t,e,n){var content=n(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("4973ea79",content,!0,{sourceMap:!1})},317:function(t,e){},319:function(t,e){},320:function(t,e){},328:function(t,e,n){"use strict";n(316)},329:function(t,e,n){var r=n(64)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.panel-log div[data-v-7235048f]:first-child{\n  cursor:ns-resize;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none\n}\n.panel-log div:first-child span[data-v-7235048f]{\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},337:function(t,e,n){"use strict";n.r(e);n(323);var r=n(62),o=Object(r.c)({props:{tabs:{type:Array,required:!0},activeTab:{type:Number,required:!0}},setup:function(t,e){var n=e.emit;return{select:function(i){return n("onTabClick",i)}}}}),c=n(61),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4 flex flex-col sm:flex-row md:flex-row md:inline-flex overflow-hidden rounded shadow-lg"},t._l(t.tabs,(function(e,i){return n("button",{key:i,staticClass:"flex-1 md:flex-auto bg-gray-100 hover:bg-gray-300 text-gray-500 font-bold py-2 px-4",class:{"bg-gray-300 text-gray-700":i===t.activeTab},on:{click:function(e){return t.select(i)}}},[t._v("\n    "+t._s(e.label)+"\n  ")])})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(302).default})},338:function(t,e,n){"use strict";n.r(e);n(63);var r=n(62),o=n(304),c=n.n(o);var l=Object(r.c)({setup:function(){var t=function(){var t,e,n,r=function(){setTimeout((function(){e=document.querySelector(".panel-log-header"),n=document.querySelector(".panel-log-body"),t=0,e.addEventListener("mousedown",c),document.addEventListener("mouseup",l)}),500)},o=function(element,t){var e=!!element[t="vertical"===t?"scrollTop":"scrollLeft"];return e||(element[t]=1,e=!!element[t],element[t]=0),e},c=function(e){o(document.querySelector(".screen"),"vertical")||(t=e.x,document.addEventListener("mousemove",h,!1))},l=function(){document.removeEventListener("mousemove",h,!1)},h=function(e){var r=t-e.y;if(t=e.y,n&&n instanceof HTMLElement){var o=parseInt(getComputedStyle(n,"").height)+r;o<60&&(o=60),n.style.height=o+"px"}};return{initDragable:r,checkScrollBar:o}}(),e=t.initDragable,n=Object(r.g)([]);return c.a.addListener((function(t){n.push(t),setTimeout((function(){var body=document.querySelector(".panel-log-body");body.scrollTop=body.scrollHeight}))})),Object(r.f)(e),{logs:n}}}),h=(n(328),n(61)),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-log flex flex-col bg-gray-700"},[t._m(0),t._v(" "),n("div",{staticClass:"panel-log-body max-h-full overflow-y-auto px-4 py-2 text-sm text-gray-200",staticStyle:{height:"60px"}},t._l(t.logs,(function(e,i){return n("div",{key:i},[t._v("\n      "+t._s(e)+"\n    ")])})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-4 panel-log-header bg-gray-800 text-gray-100"},[n("span",[t._v("Log")])])}],!1,null,"7235048f",null);e.default=component.exports},339:function(t,e,n){"use strict";n.r(e);var r=n(61),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between items-center px-4 py-2 text-lg text-gray-100 bg-gray-600"},[n("div",[t._v("\n    Blockchain Simulation\n  ")]),t._v(" "),n("div",{staticClass:"flex space-x-2"},[n("a",{staticClass:"rounded px-2 py-1 text-xs bg-gray-100 text-gray-600 hover:bg-gray-300",attrs:{href:"https://facebook.com/viandwi24"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),t._v(" "),n("a",{staticClass:"rounded px-2 py-1 text-xs bg-gray-100 text-gray-600 hover:bg-gray-300",attrs:{href:"https://instagram.com/viandwi_24"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),t._v(" "),n("a",{staticClass:"rounded px-2 py-1 text-xs bg-gray-100 text-gray-600 hover:bg-gray-300",attrs:{href:"https://github.com/viandwi24/blockchain-simulation"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])])}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,n){var r=n(214),o=n(215);n(14);var c=n(216),l=n(304),h=n(309),d=n(305),f=n(306).KeyGenerator,v=function(){"use strict";function t(){r(this,t),l.add("[Blockchain] Init"),this.blockProofOfWorkDifficulty=2,this.blockMineReward=1,this.chain=[],this.pendingTransactions=[],l.add("[Blockchain] Generating key for system"),this.system=(new f).generate(),l.add("[Blockchain] Generate complete",this.system),l.add("[Blockchain] Generate genesis block"),this.chain.push(new h([],c().toDate(),"0"))}return o(t,[{key:"getLastBlock",value:function(){return this.chain[this.chain.length-1]}},{key:"addBlock",value:function(t){t.previousHash=this.getLastBlock().hash,t.hash=t.calculateHash(),this.chain.push(t)}},{key:"addTransaction",value:function(t){l.add("[Blockchain] Adding new transaction",t),this.pendingTransactions.push(t)}},{key:"mine",value:function(t){var e=this;return l.add("[Blockchain] Starting mining with miner ".concat(t)),new Promise((function(n,r){e.addTransaction(new d(e.system.publicKey,t,e.blockMineReward).sign(e.system.privateKey));var o=new h(e.pendingTransactions,c().toDate());o.previousHash=e.getLastBlock().hash,o.mine(e.blockProofOfWorkDifficulty).then((function(){e.chain.push(o),e.pendingTransactions=[],l.add("[Blockchain] Mining complete"),n(e)}))}))}},{key:"isValid",value:function(){for(var i=1;i<this.chain.length;i++){var t=this.chain[i],e=this.chain[i-1];if(t.previousHash!==e.hash)return!1;if(t.hash!==t.calculateHash())return!1;for(var n=1;n<this.chain.length;n++)for(var r=this.chain[n].data,o=0;o<r.length;o++)if(!r[o].isValid())return!1}return!0}},{key:"getBalance",value:function(address){for(var t=0,i=0;i<this.chain.length;i++)for(var e=this.chain[i],n=0;n<e.data.length;n++){var r=e.data[n];r.fromAddress===address&&(t-=r.amount),r.toAddress===address&&(t+=r.amount)}return t}},{key:"print",value:function(){}}]),t}();t.exports=v},372:function(t,e,n){"use strict";n.r(e);n(63),n(50),n(14),n(26),n(29);var r=n(62),o=n(340),c=n.n(o),l=n(305),h=n.n(l),d=n(309),f=n.n(d),v=n(306),x=n(148);var m=n(6);n(49);function k(t){var e=t.onTabClick,n=Object(r.j)(),o=n.$sleep,c=n.$t,l=[],h=function(t){var e=[l[0]];return e.push(t),e},d=function(t){return function(t){var e=t.$t,n=t.$sleep,r=t.tour,o=t.defaultButtons,c=t.withDefaultButton,l=t.onTabClick;r.addStep({title:e("tour.steps.group1[0].title"),text:e("tour.steps.group1[0].text"),buttons:[{text:e("tour.steps.group1[0].prev"),classes:"shepherd-button-secondary",action:function(){return this.hide()}},{action:function(){return this.next()},text:e("tour.steps.group1[0].next")}]}),r.addStep({title:e("tour.steps.group1[1].title"),text:e("tour.steps.group1[1].text"),buttons:o}),r.addStep({title:e("tour.steps.group1[2].title"),text:e("tour.steps.group1[2].text"),attachTo:{element:".panel-blocks",on:"bottom"},buttons:o}),r.addStep({title:e("tour.steps.group1[3].title"),text:e("tour.steps.group1[3].text"),attachTo:{element:".panel-blocks > div:nth-child(3) > span",on:"right"},buttons:o}),r.addStep({title:e("tour.steps.group1[4].title"),text:e("tour.steps.group1[4].text"),attachTo:{element:".block-chain:nth-child(1)",on:"right"},buttons:o}),r.addStep({title:e("tour.steps.group1[5].title"),text:e("tour.steps.group1[5].text"),attachTo:{element:".block-chain:nth-child(2) div:nth-child(2) div:nth-child(1)",on:"right"},buttons:o}),r.addStep({title:e("tour.steps.group1[6].title"),text:e("tour.steps.group1[6].text"),attachTo:{element:".block-chain:nth-child(2) > div:nth-child(2) > div:nth-child(2)",on:"right"},buttons:o}),r.addStep({title:e("tour.steps.group1[7].title"),text:e("tour.steps.group1[7].text"),attachTo:{element:".block-chain:nth-child(1) > div:nth-child(2) > div:nth-child(1)",on:"right"},buttons:c({text:e("tour.button.next"),action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(1),t.hide(),e.next=4,n(500);case 4:return e.abrupt("return",t.next());case 5:case"end":return e.stop()}}),e)})))()}})})}({$t:c,$sleep:o,tour:t,defaultButtons:l,withDefaultButton:h,onTabClick:e}),function(t){var e=t.$t,n=t.$sleep,r=t.tour,o=(t.defaultButtons,t.withDefaultButton),c=t.onTabClick;r.addStep({title:e("tour.steps.group2[0].title"),text:e("tour.steps.group2[0].text"),attachTo:{element:".panel-wallet",on:"top"},buttons:[{action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(0),t.hide(),e.next=4,n(500);case 4:return e.abrupt("return",t.back());case 5:case"end":return e.stop()}}),e)})))()},classes:"shepherd-button-secondary",text:e("tour.button.prev")},{text:e("tour.button.next"),action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(1),t.hide(),e.next=4,n(500);case 4:return e.abrupt("return",t.next());case 5:case"end":return e.stop()}}),e)})))()}}]}),r.addStep({title:e("tour.steps.group2[1].title"),text:e("tour.steps.group2[1].text"),attachTo:{element:".panel-wallet > div:nth-child(1) > div:nth-child(2)",on:"left"},buttons:o({text:e("tour.button.next"),action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector(".panel-wallet > div:nth-child(1) > div:nth-child(2) > button").click(),t.hide(),e.next=5,n(500);case 5:return e.abrupt("return",t.next());case 6:case"end":return e.stop()}}),e)})))()}})}),r.addStep({title:e("tour.steps.group2[2].title"),text:e("tour.steps.group2[2].text"),attachTo:{element:".panel-wallet-action > div:nth-child(2) > form > div:nth-child(1)",on:"top"},buttons:o({text:e("tour.button.next"),action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var input,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.hide(),(input=document.querySelector(".panel-wallet-action > div:nth-child(2) > form > div:nth-child(1) > div:nth-child(2) > input")).setAttribute("value","John Doe"),r=new Event("input"),input.dispatchEvent(r),e.next=7,n(500);case 7:return document.querySelector(".panel-wallet-action > div:nth-child(2) > form > div:nth-child(3) > div:nth-child(2) > button").click(),e.next=11,n(1e3);case 11:return document.querySelector(".panel-wallet > div:nth-child(2) > span > div:nth-child(2)").click(),e.next=15,n(500);case 15:return e.abrupt("return",t.next());case 16:case"end":return e.stop()}}),e)})))()}})}),r.addStep({title:e("tour.steps.group2[3].title"),text:e("tour.steps.group2[3].text"),attachTo:{element:".panel-wallet > div:nth-child(2) > span > div:nth-child(2)",on:"left"},buttons:o({text:e("tour.button.next"),action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(3),t.hide(),e.next=4,n(500);case 4:return e.abrupt("return",t.next());case 5:case"end":return e.stop()}}),e)})))()}})})}({$t:c,$sleep:o,tour:t,defaultButtons:l,withDefaultButton:h,onTabClick:e}),function(t){var e=t.$t,n=t.$sleep,r=t.tour,o=(t.defaultButtons,t.withDefaultButton),c=t.onTabClick;r.addStep({title:e("tour.steps.group3[0].title"),text:e("tour.steps.group3[0].text"),attachTo:{element:".panel-transaction",on:"top"},buttons:[{action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(1),t.hide(),e.next=4,n(500);case 4:return e.abrupt("return",t.back());case 5:case"end":return e.stop()}}),e)})))()},classes:"shepherd-button-secondary",text:e("tour.button.prev")},{text:e("tour.button.next"),action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var select,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(select=document.querySelector(".panel-transaction > div > div:nth-child(3) > form > div:nth-child(2) > div:nth-child(2) > select")).setAttribute("value",0),select.querySelector("option:nth-child(1)").setAttribute("selected","selected"),r=new Event("input"),select.dispatchEvent(r),"createEvent"in document?((o=document.createEvent("HTMLEvents")).initEvent("change",!1,!0),select.dispatchEvent(o)):select.fireEvent("onchange"),t.hide(),e.next=9,n(500);case 9:return e.abrupt("return",t.next());case 10:case"end":return e.stop()}}),e)})))()}}]}),r.addStep({title:e("tour.steps.group3[1].title"),text:e("tour.steps.group3[1].text"),attachTo:{element:".panel-transaction > div > div:nth-child(3) > form > div:nth-child(2) > div:nth-child(2)",on:"top"},buttons:o({text:e("tour.button.next"),action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector(".panel-transaction > div > div:nth-child(3) > form > div:nth-child(4) > div:nth-child(2) > button").click(),t.hide(),e.next=5,n(500);case 5:return e.abrupt("return",t.next());case 6:case"end":return e.stop()}}),e)})))()}})})}({$t:c,$sleep:o,tour:t,defaultButtons:l,withDefaultButton:h,onTabClick:e}),function(t){var e=t.$t,n=t.$sleep,r=t.tour,o=(t.defaultButtons,t.withDefaultButton),c=t.onTabClick;r.addStep({title:e("tour.steps.group4[0].title"),text:e("tour.steps.group4[0].text"),attachTo:{element:".panel-pending-transaction",on:"top"},buttons:[{action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var select,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(3),t.hide(),e.next=4,n(300);case 4:return(select=document.querySelector(".panel-transaction > div > div:nth-child(3) > form > div:nth-child(2) > div:nth-child(2) > select")).setAttribute("value",0),select.querySelector("option:nth-child(1)").setAttribute("selected","selected"),r=new Event("input"),select.dispatchEvent(r),"createEvent"in document?((o=document.createEvent("HTMLEvents")).initEvent("change",!1,!0),select.dispatchEvent(o)):select.fireEvent("onchange"),e.abrupt("return",t.back());case 11:case"end":return e.stop()}}),e)})))()},classes:"shepherd-button-secondary",text:"Back"},{text:"Next",action:function(){return this.next()}}]}),r.addStep({title:e("tour.steps.group4[1].title"),text:e("tour.steps.group4[1].text"),buttons:o({text:"Next",action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.hide(),document.querySelector(".panel-pending-transaction > div:nth-child(1) > div:nth-child(3) > button").click(),console.log("Tour listening navigating to panel blocks");case 4:if("1"!==document.querySelector(".panel-pending-transaction").getAttribute("mining")){e.next=7;break}return e.abrupt("break",11);case 7:return e.next=9,n(100);case 9:e.next=4;break;case 11:return c(0),e.next=14,n(500);case 14:return e.abrupt("return",t.next());case 15:case"end":return e.stop()}}),e)})))()}})}),r.addStep({title:e("tour.steps.group4[2].title"),text:e("tour.steps.group4[2].text"),attachTo:{element:".block-chain:nth-child(3)",on:"right"},buttons:o({text:"Next",action:function(){return this.next()}})}),r.addStep({title:e("tour.steps.group4[3].title"),text:e("tour.steps.group4[3].text"),attachTo:{element:".block-chain:nth-child(3) > div:nth-child(2) > div:nth-child(1)",on:"right"},buttons:o({text:"Next",action:function(){return this.next()}})}),r.addStep({title:e("tour.steps.group4[4].title"),text:e("tour.steps.group4[4].text"),attachTo:{element:".block-chain:nth-child(3) > div:nth-child(2) > div:nth-child(2)",on:"right"},buttons:o({text:"Next",action:function(){return this.next()}})}),r.addStep({title:e("tour.steps.group4[5].title"),text:e("tour.steps.group4[5].text"),attachTo:{element:".block-chain:nth-child(3) > div:nth-child(3) > div:nth-child(2)",on:"right"},buttons:o({text:"Next",action:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector(".block-chain:nth-child(3)").click(),t.hide(),e.next=5,n(500);case 5:return e.abrupt("return",t.next());case 6:case"end":return e.stop()}}),e)})))()}})}),r.addStep({title:e("tour.steps.group4[6].title"),text:e("tour.steps.group4[6].text"),attachTo:{element:".panel-block-detail > div:nth-child(2) > div:nth-child(1)",on:"top"},buttons:o({text:"Next",action:function(){return this.next()}})}),r.addStep({title:e("tour.steps.group4[7].title"),text:e("tour.steps.group4[7].text"),attachTo:{element:".panel-block-detail > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5)",on:"top"},buttons:o({text:"Next",action:function(){return this.next()}})}),r.addStep({title:e("tour.steps.group4[8].title"),text:e("tour.steps.group4[8].text"),attachTo:{element:".panel-block-detail > div:nth-child(2) > div:nth-child(2)",on:"top"},buttons:o({text:"Next",action:function(){return this.next()}})}),r.addStep({title:e("tour.steps.group4[9].title"),text:e("tour.steps.group4[9].text"),buttons:o({text:"Finish",action:function(){return this.hide()}})})}({$t:c,$sleep:o,tour:t,defaultButtons:l,withDefaultButton:h,onTabClick:e}),t};return{startTour:function(){l=[{action:function(){return this.back()},classes:"shepherd-button-secondary",text:c("tour.button.prev")},{action:function(){return this.next()},text:c("tour.button.next")}];var t=new x.a.Tour({useModalOverlay:!0,defaultStepOptions:{cancelIcon:{enabled:!0},classes:"shepherd-theme-square",scrollTo:{behavior:"smooth",block:"center"}}});d(t),t.start()}}}var y=Object(r.c)({setup:function(){var t,e=Object(r.g)(new c.a),o=Object(r.g)([]),l=Object(r.h)(!0),d=function(t){var e=t.blockchain,o=t.wallets,c=Object(r.j)().$t,l=Object(r.a)((function(){var t=e.chain.length,n=o.length,r=e.pendingTransactions.length;return[{label:"".concat(c("menu.blocks")," (").concat(t,")")},{label:"".concat(c("menu.wallets")," (").concat(n,")")},{label:"".concat(c("menu.pending")," (").concat(r,")")},{label:"".concat(c("menu.newTransaction"))},{label:"".concat(c("menu.setting"))}]})),h=Object(r.h)(0),d=function(i){h.value=i},f=Object(r.a)((function(){var component=null;switch(h.value){case 1:component=Object(r.b)((function(){return n.e(20).then(n.bind(null,369))}));break;case 2:component=Object(r.b)((function(){return n.e(18).then(n.bind(null,367))}));break;case 3:component=Object(r.b)((function(){return n.e(19).then(n.bind(null,368))}));break;case 4:component=Object(r.b)((function(){return n.e(2).then(n.bind(null,373))}));break;default:component=Object(r.b)((function(){return n.e(17).then(n.bind(null,366))}))}return component}));return{tabs:l,activeTab:h,onTabClick:d,componentTab:f}}({blockchain:e,wallets:o}),m=d.tabs,y=d.activeTab,w=d.componentTab,A=d.onTabClick,j=(t=Object(r.j)().i18n,{startSelectLanguage:function(){return new Promise((function(e){var n=new x.a.Tour({useModalOverlay:!0,defaultStepOptions:{classes:"shepherd-theme-square"}});n.addStep({title:"Language",text:"Select your language want to use!",buttons:[{text:'\n            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n              <g clip-path="url(#clip0_2:20)">\n              <rect width="24" height="16" fill="white"/>\n              <rect width="30" height="16" fill="url(#pattern0)"/>\n              </g>\n              <defs>\n              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">\n              <use xlink:href="#image0_2:20" transform="translate(-0.00715746) scale(0.00327198 0.00613497)"/>\n              </pattern>\n              <clipPath id="clip0_2:20">\n              <rect width="24" height="16" fill="white"/>\n              </clipPath>\n              <image id="image0_2:20" width="310" height="163" xlink:href="data:image/png;base64,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"/>\n              </defs>\n            </svg>\n            <span>English</span>\n          ',action:function(){t.setLocale("en"),this.hide(),e()}},{text:'\n          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <g clip-path="url(#clip0_2:13)">\n            <rect width="24" height="16" fill="white"/>\n            <path d="M0 0H32V8H0V0Z" fill="#FF1010"/>\n            <path d="M0 8H32V16H0V8Z" fill="white"/>\n            </g>\n            <defs>\n            <clipPath id="clip0_2:13">\n            <rect width="24" height="16" fill="white"/>\n            </clipPath>\n          </defs>\n          </svg>\n          <span>Indonesian</span>\n          ',action:function(){t.setLocale("id"),this.hide(),e()}}]}),n.start()}))}}).startSelectLanguage,R=k({onTabClick:A}).startTour,E=function(){!function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(new v.KeyGenerator).generate(),c=r.publicKey,l=r.privateKey;if(o.push({name:t,publicKey:c,privateKey:l}),n>0){var d=new h.a(e.system.publicKey,c,n).sign(e.system.privateKey),x=new f.a([d]);x.previousHash=e.getLastBlock().hash,x.mine(2),e.chain.push(x),e.blockProofOfWorkDifficulty=3}}("My Wallet",1e6),setTimeout((function(){return j().then((function(){return setTimeout(R,500)}))}),500)};return Object(r.f)((function(){setTimeout((function(){l.value=!1,E()}),9e3)})),{blockchain:e,wallets:o,tabs:m,activeTab:y,componentTab:w,onTabClick:A,loading:l}},head:function(){return{title:"Blockchain Simulation"}}});var w=y,A=n(61),j=Object(A.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("Loader"):n("div",{staticClass:"screen flex flex-col min-h-screen max-h-screen overflow-x-hidden shadow-xl"},[n("Navbar"),t._v(" "),n("div",{staticClass:"flex-1 flex flex-col max-h-full overflow-y-auto overflow-x-hidden bg-blue-500"},[n("div",{staticClass:"flex-1 container p-4 mx-auto flex flex-col justify-center"},[n("Menu",{attrs:{tabs:t.tabs,"active-tab":t.activeTab},on:{"update:tabs":function(e){t.tabs=e},"update:activeTab":function(e){t.activeTab=e},"update:active-tab":function(e){t.activeTab=e},onTabClick:t.onTabClick}}),t._v(" "),n(t.componentTab,{tag:"component",attrs:{blockchain:t.blockchain,wallets:t.wallets},on:{"update:blockchain":function(e){t.blockchain=e},"update:wallets":function(e){t.wallets=e},changeTab:t.onTabClick}})],1)]),t._v(" "),n("Log")],1)],1)}),[],!1,null,null,null);e.default=j.exports;installComponents(j,{Navbar:n(339).default,Menu:n(337).default,Log:n(338).default,Loader:n(365).default})}}]);