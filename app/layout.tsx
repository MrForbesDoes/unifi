import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/src/components/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Unifi',
  description: 'Unifi website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">
          <PageTransition>
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
