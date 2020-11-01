import React from 'react';
import { Form, Input, Button } from 'antd';

export default function Add() {

	const onFinish = values => {
		console.log({ values });
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			<Form
				name="basic"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				className="container mt-5"
				style={{ margin: 'auto' }}
				layout="vertical"
			>
				<Form.Item
					label="Nome"
					name="name"
					rules={[{ required: true, message: 'Insira o nome!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name={'url'} label="Url:" rules={[{ required: true, message: 'Insira a imagem!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Adicionar
  					</Button>
				</Form.Item>
			</Form>
		</>
	);
}
