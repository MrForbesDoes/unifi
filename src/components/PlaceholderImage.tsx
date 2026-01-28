import Image from 'next/image';

import { pickUnifiPlaceholder, type PlaceholderKind } from '@/src/content/unifiAssets';

type PlaceholderImageProps = {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  kind?: PlaceholderKind;
  seed?: string;
};

export default function PlaceholderImage({
  src,
  alt = '',
  className = '',
  priority = false,
  kind = 'hero',
  seed = 'default',
}: PlaceholderImageProps) {
  const resolvedSrc = src ?? pickUnifiPlaceholder(kind, seed);
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 ${className}`.trim()}
      aria-hidden={alt === ''}
    >
      <Image
        src={resolvedSrc}
        alt={alt}
        width={1200}
        height={800}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
