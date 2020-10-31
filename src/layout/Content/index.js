import React from 'react';

import { Layout } from 'antd';

const { Content } = Layout;


export default function ContentCustom({ children }) {
	return <Content style={{ padding: '0 50px' }}>{children}</Content>;
}
