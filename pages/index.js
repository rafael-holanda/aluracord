import appConfig from '../config.json';
import React from 'react';
import {useRouter} from 'next/router';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

function Title(props) {
	// "props" é a propriedade de Title (vai pegar o que estiver dentro de <Title></Title>)
	const Tag = props.tag || 'h1';
	return (
		<>
			<Tag>{props.children}</Tag>
			<style jsx>{`
				${Tag}{
					color: ${appConfig.theme.colors.neutrals['000']};
					font-size: 24px;
					font-height: 600;
				}
			`}</style>
		</>
	);
}

// backgroundColor: appConfig.theme.colors.primary[500],

export default function HomePage() {
	// const username = 'rafael-holanda';
	const [username, setUsername] = React.useState('rafael-holanda');
	// console.log('stateDoReact', stateDoReact);
	const routing = useRouter();
	// console.log(routing);

	return(
		<>
			<Box
				styleSheet={{
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					backgroundImage: 'url(https://images.pexels.com/photos/2346594/pexels-photo-2346594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
					backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
				}}
			>
				<Box
					styleSheet={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexDirection: {
							xs: 'column',
							sm: 'row',
						},
						width: '100%', maxWidth: '700px',
						borderRadius: '5px', padding: '32px', margin: '16px',
						boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
						backgroundColor: appConfig.theme.colors.neutrals[700],
					}}
				>
					{/* Formulário */}
					<Box
						as="form"
						onSubmit={function(eventInfos){
							eventInfos.preventDefault();
							console.log("Alguém submeteu o form");
							// window.location.href = '/chat';
							routing.push(`/chat?username=${username}`);
						}}
						styleSheet={{
							display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
							width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
						}}
					>
						<Title tag="h2">Boas vindas de volta!</Title>
						<Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
							{appConfig.name}
						</Text>

						
						<TextField
							input
								type="text"
								value={username}
								onChange={function(event){
									console.log("O usuário digitou", event.target.value)
									// Onde tá o valor?
									const valor = event.target.value;
									// Trocar o valor da variável
									// Através do React
									setUsername(valor);
								}}
							fullWidth
							textFieldColors={{
								neutral: {
									textColor: appConfig.theme.colors.neutrals[200],
									mainColor: appConfig.theme.colors.neutrals[900],
									mainColorHighlight: appConfig.theme.colors.primary[500],
									backgroundColor: appConfig.theme.colors.neutrals[800],
								},
							}}
						/>
						<Button
							type='submit'
							label='Entrar'
							fullWidth
							buttonColors={{
								contrastColor: appConfig.theme.colors.neutrals["000"],
								mainColor: appConfig.theme.colors.primary[500],
								mainColorLight: appConfig.theme.colors.primary[400],
								mainColorStrong: appConfig.theme.colors.primary[600],
							}}
						/>
					</Box>
					{/* Formulário */}


					{/* Photo Area */}
					<Box
						styleSheet={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							maxWidth: '200px',
							padding: '16px',
							backgroundColor: appConfig.theme.colors.neutrals[800],
							border: '1px solid',
							borderColor: appConfig.theme.colors.neutrals[999],
							borderRadius: '10px',
							flex: 1,
							minHeight: '240px',
						}}
					>
						<Image
							styleSheet={{
								borderRadius: '50%',
								marginBottom: '16px',
							}}
							src={`https://github.com/${username}.png`}
						/>
						<Text
							variant="body4"
							styleSheet={{
								color: appConfig.theme.colors.neutrals[200],
								backgroundColor: appConfig.theme.colors.neutrals[900],
								padding: '3px 10px',
								borderRadius: '1000px'
							}}
						>
							{username}
						</Text>
					</Box>
					{/* Photo Area */}
				</Box>
			</Box>
		</>
	);
}

