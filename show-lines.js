const fs = require('fs');
const html = fs.readFileSync('index.html','utf8');
const startTag = '<script type="text/babel">';
const start = html.indexOf(startTag) + startTag.length;
const end = html.indexOf('</script>', start);
const code = html.slice(start, end);
const lines = code.split(/\r?\n/);
for (let i=500;i<=516;i++) {
  console.log(String(i).padStart(4,' ')+': '+(lines[i-1]||''));
}
