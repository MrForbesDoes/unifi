import Image from 'next/image';

import { pickUnifiPlaceholder, type PlaceholderKind } from '@/src/content/unifiAssets';

type PlaceholderImageProps = {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  kind?: PlaceholderKind;
  seed?: string;
  label?: string;
};

export default function PlaceholderImage({
  src,
  alt = '',
  className = '',
  priority = false,
  kind = 'hero',
  seed = 'default',
  label,
}: PlaceholderImageProps) {
  const resolvedSrc = src ?? pickUnifiPlaceholder(kind, seed);
  const resolvedAlt = alt || label || '';
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 ${className}`.trim()}
      aria-hidden={resolvedAlt === ''}
    >
      <Image
        src={resolvedSrc}
        alt={resolvedAlt}
        width={1200}
        height={800}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
