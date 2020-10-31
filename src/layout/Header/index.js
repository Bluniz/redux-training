import React from 'react';
// import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';

import { Layout, Menu } from 'antd';


import './styles.css';

const { Header } = Layout;

export default function HeaderCustom() {
	return (
		// <nav className="l-header navbar navbar-expand-lg navbar-dark bg-primary">
		<Header>

			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
				<Menu.Item key="1">
					<NavLink to="/list">
						Shopping-Car
					</NavLink>
				</Menu.Item>

				<Menu.Item key="2">
					<NavLink to="/list" >
						Listar
					</NavLink>
				</Menu.Item>
				<Menu.Item key="3">
					<NavLink to="/add" >
						Adicionar
					</NavLink>
				</Menu.Item>
				<Menu.Item key="4" style={{
					position: 'absolute',
					right: 13,
					top: 7,
				}}>
					<NavLink to="/cart" >
						<i className="fa fa-shopping-cart fa-3x" aria-hidden="true">
							<span className="fa-counter">0</span>
						</i>
					</NavLink>
				</Menu.Item>
			</Menu>

		</Header>
	);
}
