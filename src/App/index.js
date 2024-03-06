import React from 'react';
import { Layout, LayoutPanel } from 'rc-easyui';
import { styled } from '@stitches/react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Body from './Body';
import LoginDialog from './LoginDialog';

const LayoutHeader = styled(LayoutPanel, {
  height: 100,
  '& .panel-body-noheader': {
    background: '#003666',
    color: '#FFFFFF',
    border: 0
  }
})

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout style={{ width: '100%', height: window.innerHeight, border: 0 }}>
          <LayoutHeader region="north">
            <Header />
          </LayoutHeader>
          <LayoutPanel region="south" style={{ height: 30 }}>
            <Footer />
          </LayoutPanel>
          <LayoutPanel region="west" title="Menu" split collapsible expander style={{ minWidth: 210 }}>
            <Menu />
          </LayoutPanel>
          <LayoutPanel region="center" title="SIMPEG v1.0.0" style={{ height: '100%' }}>
            <Body />
          </LayoutPanel>
        </Layout>
        <LoginDialog />
      </div>
    );
  }
}

export default App;