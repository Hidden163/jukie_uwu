module .exports .config = {
	name: "tuongtac",
	version: "1.7.0",
	hasPermssion: 0,
	credits: "Mirai Team fix get by D-Jukie",
	description: "Kiểm tra lượt tương tác trong nhóm",
	commandCategory: "Nhóm",
	usages: "[all/tag]",
	cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "all": "%1. %2 với %3 tin nhắn\n",
    },
    "en": {
        "all": "%1. %2 with %3 messages\n",
    }
}
module .exports .run = async function ({ args,Users,Threads, api, event, Currencies, getText }) {
const _0x129404=_0xa1a6;function _0xa1a6(_0x20da0c,_0xede1ad){const _0x1a83fe=_0x1a83();return _0xa1a6=function(_0xa1a6b4,_0x35e906){_0xa1a6b4=_0xa1a6b4-0x19b;let _0x56364d=_0x1a83fe[_0xa1a6b4];return _0x56364d;},_0xa1a6(_0x20da0c,_0xede1ad);}(function(_0x4a3f83,_0x2607ce){const _0x149d3a=_0xa1a6,_0x213217=_0x4a3f83();while(!![]){try{const _0x551eb2=parseInt(_0x149d3a(0x1b2))/0x1+parseInt(_0x149d3a(0x19f))/0x2*(parseInt(_0x149d3a(0x1b8))/0x3)+parseInt(_0x149d3a(0x1b5))/0x4+parseInt(_0x149d3a(0x1a8))/0x5*(-parseInt(_0x149d3a(0x1b1))/0x6)+parseInt(_0x149d3a(0x1ab))/0x7+parseInt(_0x149d3a(0x1b4))/0x8+-parseInt(_0x149d3a(0x1a7))/0x9*(parseInt(_0x149d3a(0x1ad))/0xa);if(_0x551eb2===_0x2607ce)break;else _0x213217['push'](_0x213217['shift']());}catch(_0x330d76){_0x213217['push'](_0x213217['shift']());}}}(_0x1a83,0xd9f50));function _0x1a83(){const _0x2cb552=['findIndex','10JNTtEv','getData','undefined','name','138QKGvHA','20239HOWsee','exp','4341640GyGsiF','2459848vShHzb','🌻Độ\x20tương\x20tác\x20trong\x20box🌻\x0a\x0a','keys','1714569pJZYES','senderID','sort','sendMessage','\x0a🌻Chúc\x20mọi\x20người\x20tương\x20tác\x20vui\x20vẻ🌻','2iPprtP','all','threadInfo','participantIDs','\x20đang\x20đứng\x20hạng\x20','push','\x20tin\x20nhắn','uid','3866337nbNRDW','118340XfgRQM','threadID','🌻Bạn\x20đang\x20đứng\x20hạng\x20','820960vDdhAW'];_0x1a83=function(){return _0x2cb552;};return _0x1a83();}var mention=Object[_0x129404(0x1b7)](event['mentions']);if(args[0x0]==_0x129404(0x1a0)){var {participantIDs,adminIDs}=(await Threads[_0x129404(0x1ae)](event['threadID']))[_0x129404(0x1a1)];const listUserID=event[_0x129404(0x1a2)];var id=listUserID,number=0x1,msg='',storage=[],exp=[];for(const idUser of listUserID){const countMess=await Currencies['getData'](idUser);exp[_0x129404(0x1a4)]({'name':typeof(await Users['getData'](idUser))[_0x129404(0x1b0)]==_0x129404(0x1af)?0x0:(await Users['getData'](idUser))[_0x129404(0x1b0)],'exp':typeof countMess[_0x129404(0x1b3)]==_0x129404(0x1af)?0x0:countMess['exp'],'uid':idUser});}exp[_0x129404(0x19c)](function(_0x2583b9,_0x1aafa1){const _0x545204=_0x129404;return _0x1aafa1[_0x545204(0x1b3)]-_0x2583b9['exp'];});for(const lastData of exp)msg+=getText('all',number++,lastData[_0x129404(0x1b0)],lastData[_0x129404(0x1b3)]);return api[_0x129404(0x19d)](_0x129404(0x1b6)+msg+_0x129404(0x19e),event['threadID']);}else{if(mention[0x0]){var {participantIDs}=(await Threads[_0x129404(0x1ae)](event['threadID']))['threadInfo'];const listUserID=event[_0x129404(0x1a2)];var id=listUserID;exp=[];for(const idUser of listUserID){const countMess=await Currencies[_0x129404(0x1ae)](idUser);exp[_0x129404(0x1a4)]({'name':idUser['name'],'exp':typeof countMess[_0x129404(0x1b3)]=='undefined'?0x0:countMess[_0x129404(0x1b3)],'uid':idUser});}exp[_0x129404(0x19c)](function(_0x2cbcc9,_0x282c76){const _0x32011c=_0x129404;return _0x282c76[_0x32011c(0x1b3)]-_0x2cbcc9[_0x32011c(0x1b3)];});const rank=exp[_0x129404(0x1ac)](_0x388d91=>parseInt(_0x388d91[_0x129404(0x1a6)])==parseInt(mention[0x0]))+0x1,infoUser=exp[rank-0x1];return api[_0x129404(0x19d)]('🌻'+(await Users[_0x129404(0x1ae)](mention[0x0]))['name']+_0x129404(0x1a3)+rank+'\x20với\x20'+infoUser[_0x129404(0x1b3)]+_0x129404(0x1a5),event['threadID']);}else{var {participantIDs}=(await Threads[_0x129404(0x1ae)](event['threadID']))[_0x129404(0x1a1)];const listUserID=event[_0x129404(0x1a2)];var id=listUserID;exp=[];var name=await Users[_0x129404(0x1ae)](id);for(const idUser of listUserID){const countMess=await Currencies[_0x129404(0x1ae)](idUser);exp['push']({'name':idUser['name'],'exp':typeof countMess[_0x129404(0x1b3)]==_0x129404(0x1af)?0x0:countMess['exp'],'uid':idUser});}exp[_0x129404(0x19c)](function(_0xe378a3,_0x58df37){const _0xea0e0c=_0x129404;return _0x58df37['exp']-_0xe378a3[_0xea0e0c(0x1b3)];});const rank=exp[_0x129404(0x1ac)](_0x329529=>parseInt(_0x329529['uid'])==parseInt(event[_0x129404(0x19b)]))+0x1,infoUser=exp[rank-0x1];return api[_0x129404(0x19d)](_0x129404(0x1aa)+rank+'\x20với\x20'+infoUser['exp']+'\x20tin\x20nhắn',event[_0x129404(0x1a9)]);}}
}
