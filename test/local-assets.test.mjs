import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));

test('production build serves image assets from the project instead of the protected storage host', () => {
  execFileSync(process.execPath, ['node_modules/vite/bin/vite.js', 'build'], {
    cwd: projectRoot,
    stdio: 'pipe',
  });

  const assetsDirectory = join(projectRoot, 'build', 'assets');
  const bundleName = readdirSync(assetsDirectory).find((file) => /^index-.*\.js$/.test(file));
  assert.ok(bundleName, 'the production build should contain a JavaScript bundle');
  const bundleContents = readFileSync(join(assetsDirectory, bundleName), 'utf8');

  assert.doesNotMatch(bundleContents, /prd-shared-services\.firebasestorage\.app/);

  const localImagePaths = [...bundleContents.matchAll(/\/images\/([a-z0-9-]+\.(?:jpg|png))/gi)].map(
    (match) => match[1],
  );

  assert.ok(localImagePaths.length > 0, 'the build should reference local project images');
  localImagePaths.forEach((imagePath) => {
    assert.ok(existsSync(join(projectRoot, 'build', 'images', imagePath)), `missing image: ${imagePath}`);
  });
});
