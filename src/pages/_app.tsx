import { NextPage } from 'next';
import '../styles/globals.css'
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {  // Con el & indica que adicionalmente va a tener ....
  getLayout?: (page: ReactElement)=>ReactNode //En vez de ReactNode Tambien puede ser JSX.ELEMENT
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  
  const getLayout = Component.getLayout || ((page) => page)
  

  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />);
}
