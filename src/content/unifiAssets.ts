export const unifiAssets = {
  logo: '/unifi-assets/logo.png',
  icons: [
    '/unifi-assets/cropped-icon-Transparent-small--180x180.png',
    '/unifi-assets/cropped-icon-Transparent-small--192x192.png',
    '/unifi-assets/cropped-icon-Transparent-small--270x270.png',
    '/unifi-assets/cropped-icon-Transparent-small--32x32.png',
  ],
  photos: [
    '/unifi-assets/edu1.jpg',
    '/unifi-assets/hosp1.jpg',
    '/unifi-assets/smart1-1536x864.jpg',
    '/unifi-assets/CANARY-WHARF.png',
    '/unifi-assets/L39.png',
  ],
  misc: [
    '/unifi-assets/Picture6.png',
    '/unifi-assets/frontBESPOKE-copy.png',
    '/unifi-assets/deloiteee.png',
    '/unifi-assets/2foraINOVATE-copy.png',
  ],
};

export type PlaceholderKind = 'hero' | 'card' | 'logo';

export function pickUnifiPlaceholder(kind: PlaceholderKind, seed: string = 'default') {
  if (kind === 'logo') return unifiAssets.logo;

  const pool = kind === 'hero' ? unifiAssets.photos : [...unifiAssets.photos, ...unifiAssets.misc];
  const s = hash(seed);
  return pool[s % pool.length];
}

function hash(input: string) {
  // tiny deterministic hash
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}
