import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { DictionaryContext } from '../lib/dictionary-context';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <DictionaryContext.Provider value={pageProps.dictionaryItems}>
      <header className="flex justify-center">
        <nav>
          <ul className="flex py-4 gap-x-4">
            <li>
              <Link
                className={`p-2 border ${
                  router.asPath === '/' ? 'border-orange-500' : ''
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`p-2 border ${
                  router.asPath === '/detail' ? 'border-orange-500' : ''
                }`}
                href="/detail"
              >
                Detailpage
              </Link>
            </li>
          </ul>
        </nav>
        <div className="fixed top-4 right-4">
          <Link
            className={`${
              router.locale === 'en' ? 'text-orange-500 font-bold' : ''
            }`}
            href={router.asPath}
            locale="en"
          >
            EN
          </Link>
          <Link
            className={`ml-2 ${
              router.locale === 'nl' ? 'text-orange-500 font-bold' : ''
            }`}
            href={router.asPath}
            locale="nl"
          >
            NL
          </Link>
        </div>
      </header>
      <main
        className={`${inter.className} h-[calc(100vh-56px)] flex justify-center items-center`}
      >
        <Component {...pageProps} />
      </main>
    </DictionaryContext.Provider>
  );
}
