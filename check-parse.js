const fs = require('fs');
const parser = require('@babel/parser');
const html = fs.readFileSync('index.html', 'utf8');
const startTag = '<script type="text/babel">';
const start = html.indexOf(startTag);
const end = html.indexOf('</script>', start);
if (start < 0 || end < 0) {
  console.log('script block not found');
  process.exit(1);
}
const code = html.slice(start + startTag.length, end);
try {
  parser.parse(code, { sourceType: 'script', plugins: ['jsx'] });
  console.log('PARSE_OK');
} catch (e) {
  console.log(`PARSE_ERR line=${e.loc.line} col=${e.loc.column} msg=${e.message}`);
}
