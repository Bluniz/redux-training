import React from 'react';

import { Layout } from 'antd';

const { Footer } = Layout;

export default () => <Footer style={{
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxSizing: 'border-box'
}}>Shopping-Car &copy; {new Date().getFullYear()}</Footer>;
