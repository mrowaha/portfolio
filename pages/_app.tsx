import * as React from "react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider } from "jotai";

import { MuiThemeProvider} from '@/theme';
import {Layout} from "@/layout";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider>
      <MuiThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiThemeProvider>
    </Provider>
  )
}
