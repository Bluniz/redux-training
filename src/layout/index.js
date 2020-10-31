import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import { Layout } from 'antd';

import './styles.css';

export default ({ children }) => (
	<Layout className="layout">
		<Header />
		<Content>{children}</Content>
		<Footer />
	</Layout>
);
