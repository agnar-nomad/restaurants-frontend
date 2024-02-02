import '../styles.css';

import type { ReactNode } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import { ThemeProvider } from '../contexts/theme-provider.js';

type RootLayoutProps = { children: ReactNode };

export const RootLayout = async ({ children }: RootLayoutProps) => {
  const data = await getData();

  return (
    <div id="__waku" className="min-h-svh min-w-80 max-w-7xl mx-auto">
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <title>Obedy Profitak</title>
      {/* metadata */}
      
      <ThemeProvider>
        <Header />
        <main className="min-h-svh grid items-center min-w-80 p-4">
            {children}
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/lunch.png',
  };

  return data;
};
