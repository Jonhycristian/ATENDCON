const fs = require('fs');
let c = fs.readFileSync('src/App.jsx', 'utf8');
c = c.replace(/https:\/\/wa\.me\/5531983858280/g, 'https://api.whatsapp.com/send/?phone=5531983858280');
c = c.replace(/\?text=/g, '&text=');
c = c.replace(/encodeURIComponent\((.*?)\)/g, 'encodeURIComponent($1) + "&type=phone_number&app_absent=0"');
c = c.replace(/href=\{WHATSAPP_LINK\}/g, 'href={`${WHATSAPP_LINK}&type=phone_number&app_absent=0`}');
fs.writeFileSync('src/App.jsx', c);
