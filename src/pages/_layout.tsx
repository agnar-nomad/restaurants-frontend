import '../styles.css';

import type { ReactNode } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import { ThemeProvider } from '../contexts/theme-provider.js';
import { Toaster } from "../components/ui/toaster.js"

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="min-h-svh min-w-80 max-w-7xl mx-auto scroll-smooth motion-reduce:scroll-auto">
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <title>Obědy Profitak</title>
      {/* metadata */}
      
      <ThemeProvider>
        <Header />
        <main className="min-h-svh grid items-center min-w-80 p-4">
            {children}
        </main>
        <Footer />
        <Toaster />
      </ThemeProvider>
    </div>
  );
};

const getData = async () => {
  const data = {
    description: 'An information portal for restaurant menus in the vicinity of Profitak workplace.',
    icon: '/images/lunch.png',
  };

  return data;
};

export const getConfig = async () => {
    return {
      render: 'static',
    };
};