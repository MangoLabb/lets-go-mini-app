import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/core/i18n/i18n.ts');

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'kqpgqvpgewlizelzqmah.supabase.co',
            pathname: '/storage/v1/object/public/**',
          },
        ],
      },
};

export default withNextIntl(nextConfig);
