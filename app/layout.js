import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Gradient from './components/common/Gradient';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Crypto homepage',
  description: 'crypto whitepaper',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-[#161730]'}>
        <Gradient />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
