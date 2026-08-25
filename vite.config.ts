
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tailwindcss from '@tailwindcss/vite';
  import path from 'path';

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

const photoAssets: Record<string, string> = {
  '323f47f0d426d31d8a4ad5fe3abfb0a6eeb2ec7d': '/images/hero-living-room.png',
  'f850d048ed178d4ff8556a96ab85c61030757f22': '/images/kitchen-renovation.png',
  '53f49198507ede30b59f88e974e65001e0c6a3c5': '/images/bathroom-renovation.png',
  'f830f37a67558f9fedda082fed1b4a749f4e753f': '/images/exterior-renovation.png',
  '72816adf3c92df9fecd2c20d77f857ce1f372f57': '/images/hero-living-room.png',
  'c1d24e0802b76ff5ab0cfe579931eaba8c205c9b': '/images/kitchen-renovation.png',
  '5a49c4c45f323d3b16009476349dcf2166199398': '/images/bathroom-renovation.png',
  '9e5e6f7393994da90d5710576618db685649470f': '/images/kitchen-renovation.png',
  '6f2fccf29533035046cbc7c30d55b00055d617d4': '/images/exterior-renovation.png',
  '54ae58565a9c1eb424be5dc7d1d003c77ca53b32': '/images/bathroom-renovation.png',
  'd05506a688efc782c3c85a32f0c964df6a3682ee': '/images/hero-living-room.png',
  '2ab1db1b12077d32981be1fdba59f27980d1d206': '/images/kitchen-renovation.png',
  'e055c28bfbc554b7294a2c56ad26a22a909466f2': '/images/exterior-renovation.png',
  '2235406ccdb57725c3ee804c0c8f0604f90434ab': '/images/bathroom-renovation.png',
  '3c77b8f0e7d94af1fe2abc0e7ac26b04144d7835': '/images/hero-living-room.png',
};

function localAssetPath(url: string) {
  const assetId = url.match(/h2m-assets%2F([a-f0-9]+)/i)?.[1];

  if (!/\.svg(?:\?|$)/i.test(url)) {
    return photoAssets[assetId ?? ''] ?? '/images/hero-living-room.png';
  }

  if (assetId === '3d3c5d03fdc110ca1423062360bb8b2841a97ada' || assetId === '9e00b5e6f057b1797357942436c55c9bf8d3ef5b') {
    return '/images/icon-star.svg';
  }

  if (assetId === '250bfdc17f4ef4ab6b8506f3de17f0261ee32483') {
    return '/images/icon-arrow.svg';
  }

  if (assetId === '4927985d605e8a43b002b782b51592067840c8f4' || assetId === '591de0794d7a563024b4e39379d89a07a1e7f75c') {
    return '/images/icon-quote.svg';
  }

  return '/images/icon-detail.svg';
}

function protectedAssetFallback() {
  const protectedAssetUrl = /https:\/\/storage\.googleapis\.com\/download\/storage\/v1\/b\/prd-shared-services\.firebasestorage\.app\/o\/h2m-assets%2F[^'"\s]+/g;

  return {
    name: 'protected-asset-fallback',
    transform(code: string, id: string) {
      if (!/[/\\]src[/\\]/.test(id) || !protectedAssetUrl.test(code)) {
        return null;
      }

      protectedAssetUrl.lastIndex = 0;
      return code.replace(protectedAssetUrl, localAssetPath);
    },
  };
}

  export default defineConfig({
    plugins: [react(), tailwindcss(), figmaAssetResolver(), protectedAssetFallback()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });
