import type { NextPage } from 'next';
import React from 'react';
import WebView from '../modules/webView';
import 'katex/dist/katex.min.css';

const Home: NextPage = () => {
  return (
    <div>
      {/* <MobileHeader></MobileHeader> */}
      <WebView />
    </div>
  );
};

export default Home;
