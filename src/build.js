const fs=require('fs');
const b64=(p,m)=>`data:${m};base64,`+fs.readFileSync(p).toString('base64');
let html=fs.readFileSync('template.html','utf8');
const subs={
  '__F_I4__':b64('fonts/Inter_400.woff2','font/woff2'),
  '__F_I5__':b64('fonts/Inter_500.woff2','font/woff2'),
  '__F_I6__':b64('fonts/Inter_600.woff2','font/woff2'),
  '__F_I7__':b64('fonts/Inter_700.woff2','font/woff2'),
  '__F_PF6__':b64('fonts/Playfair_600.woff2','font/woff2'),
  '__F_PF7__':b64('fonts/Playfair_700.woff2','font/woff2'),
  '__IMG_HOUSE__':b64('img/final_hero.jpg','image/jpeg'),
  '__IMG_KITCHEN__':b64('img/final_kitchen.jpg','image/jpeg'),
  '__IMG_LIVING__':b64('img/final_living.jpg','image/jpeg'),
  '__IMG_SOFA__':b64('img/final_sofa.jpg','image/jpeg'),
  '__IMG_NOOK__':b64('img/s_livingroom2.jpg','image/jpeg'),
  '__IMG_BED__':b64('img/q_apartment2.jpg','image/jpeg'),
};
for(const k of Object.keys(subs)) html=html.split(k).join(subs[k]);
fs.writeFileSync('dip-electric-mockup.html',html);
const i=html.indexOf('</style>')+'</style>'.length;
const head=html.slice(0,i), body=html.slice(i);
const doc='<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<meta name="robots" content="noindex, nofollow">\n<meta name="description" content="Licensed Sacramento residential electrician. Panel upgrades, dedicated circuits, remodel wiring, lighting, and repairs. Free estimates.">\n<meta name="theme-color" content="#2A343C">\n'+head+'\n</head>\n<body>\n'+body+'\n</body>\n</html>\n';
fs.mkdirSync('site',{recursive:true});
fs.writeFileSync('site/index.html',doc);
const leftover=[...new Set((html.match(/__[A-Z0-9_]+__/g)||[]))];
console.log('artifact bytes:',fs.statSync('dip-electric-mockup.html').size);
console.log('site bytes:',fs.statSync('site/index.html').size);
console.log('leftover tokens:',leftover);
