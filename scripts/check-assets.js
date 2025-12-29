const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'src');

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full);
    else if (full.endsWith('.js') || full.endsWith('.jsx')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/from\s+['"].*assets[\\/].*['"]/g);
      if (matches && matches.length) {
        console.warn(`Possible static asset import in ${path.relative(process.cwd(), full)}:`);
        matches.forEach(m => console.warn('  ', m));
      }
    }
  });
}

console.log('Scanning src for static asset imports that may break the build...');
walk(root);
console.log('Scan complete. If any files were listed, replace static imports with runtime /assets/ paths.');
