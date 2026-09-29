import { cp, mkdir, rm } from 'node:fs/promises';

await rm('build', { recursive: true, force: true });
await mkdir('build', { recursive: true });
await Promise.all([
  cp('index.html', 'build/index.html'),
  cp('jszip.min.js', 'build/jszip.min.js'),
]);

console.log('Static site prepared in build/');
