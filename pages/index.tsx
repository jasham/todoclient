import type { NextPage } from 'next';
import React from 'react';
import WebView from '../src/modules/webView';
const Home: NextPage = () => {
  return (
    <div>
      {/* <MobileHeader></MobileHeader> */}
      <WebView />
    </div>
  );
};

export default Home;
