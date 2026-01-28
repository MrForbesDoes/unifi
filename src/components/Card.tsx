import type { ReactNode } from 'react';

import PlaceholderImage from '@/src/components/PlaceholderImage';

type CardProps = {
  children: ReactNode;
  className?: string;
  withImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

export default function Card({
  children,
  className = '',
  withImage = true,
  imageSrc = '/unifi-assets/Picture6.png',
  imageAlt = '',
}: CardProps) {
  return (
    <div
      className={`group bg-white border border-gray-200 rounded-lg p-6 transition-all hover:-translate-y-0.5 hover:shadow-md ${className}`.trim()}
    >
      {withImage ? (
        <div className="overflow-hidden rounded-2xl">
          <PlaceholderImage
            src={imageSrc}
            alt={imageAlt}
            className="aspect-[16/9] mb-5 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ) : null}
      {children}
    </div>
  );
}
