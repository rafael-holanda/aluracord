import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import {useRouter} from 'next/router';
import {createClient} from '@supabase/supabase-js';
import { ButtonSendSticker } from '../src/components/ButtonSendSticker.js';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ2NzA4MywiZXhwIjoxOTU5MDQzMDgzfQ.DbnKXZzN5lXRNIlXD2cAlPetDonbqGQUhfSYFNdqAmw';
const SUPABASE_URL = 'https://rmfupwtajnwivlurwcav.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

function realTimeMessages(){
	return supabaseClient
		.from('mensagens')
		.on('INSERT', (liveInsert) => {
			adicionaMensagem(liveInsert.new);
		})
		.subscribe();
}

export default function ChatPage() {
	const routing = useRouter();
	const usuarioLogado = routing.query.username;
	//console.log('routing.query',routing.query);
	//console.log('usuarioLogado', usuarioLogado);
	const [mensagem, setMensagem] = React.useState('');
	const [listaDeMensagens, setListaDeMensagens] = React.useState([
		/*{
			id: 1,
			de: 'omariosouto',
			texto: ':sticker: https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png'
		},
		{
			id: 2,
			de: 'omariosouto',
			texto: 'teste'
		}*/
	]);

	// Sua lógica vai aqui
	// Usuário
	// - usuário digita no campo 'textarea'
	// - aperta enter para enviar
	// - tem que adicionar o texto na listagem

	// Dev
	// [x] Campo Criado
	// [ ] Vamos usar o onChange usa o useState (ter if pra caso seja enter para limpar a variável)
	// [ ] Lista de mensagens
	// ./Sua lógica vai aqui

	React.useEffect(() => {
		supabaseClient
			.from('mensagens')
			.select('*')
			.order('id', {ascending: false})
			.then(({data}) => {
				//console.log('Dados da consulta: ', data);
				setListaDeMensagens(data);
			});
		realTimeMessages((novaMensagem) => {
			console.log('Nova mensagem: ', novaMensagem);
			setListaDeMensagens([
				data[0],
				...listaDeMensagens,			
			]);*/
		});
	}, []);
	
	
	function handleNovaMensagem(novaMensagem) {
		const mensagem = {
			// id: listaDeMensagens.length + 1,
			de: usuarioLogado,
			texto: novaMensagem
		};

		supabaseClient
			.from('mensagens')
			.insert([
				mensagem
			])
			// .then(({data}) => {
				// console.log('Criando mensagem: ', data);
			// });

		
		setMensagem('');
	}

	return (
		<Box
			styleSheet={{
				display: 'flex', alignItems: 'center', justifyContent: 'center',
				backgroundImage: `url(https://images.pexels.com/photos/2346594/pexels-photo-2346594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
				backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
				color: appConfig.theme.colors.neutrals['000']
			}}
		>
			<Box
				styleSheet={{
					display: 'flex',
					flexDirection: 'column',
					flex: 1,
					boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
					borderRadius: '5px',
					backgroundColor: appConfig.theme.colors.neutrals[700],
					height: '100%',
					maxWidth: '95%',
					maxHeight: '95vh',
					padding: '32px',
				}}
			>
				<Header />
				<Box
					styleSheet={{
						position: 'relative',
						display: 'flex',
						flex: 1,
						height: '80%',
						backgroundColor: appConfig.theme.colors.neutrals[600],
						flexDirection: 'column',
						borderRadius: '5px',
						padding: '16px',
					}}
				>

					<MessageList mensagens={listaDeMensagens} />
					{/*{listaDeMensagens.map((mensagemAtual) => {
						console.log(mensagemAtual);
						return(
							<li key={mensagemAtual.id}>
								{mensagemAtual.de}: {mensagemAtual.texto}
							</li>
						)
					})}*/}
					<Box
						as="form"
						styleSheet={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<TextField
							value={mensagem}
							onChange={(event) => {
								// console.log(event);
								const valor = event.target.value;
								setMensagem(valor);
							}}
							onKeyPress={(event) => {
								if (event.key === 'Enter') {
									event.preventDefault();
									handleNovaMensagem(mensagem);
								}
							}}
							placeholder="Insira sua mensagem aqui..."
							type="textarea"
							styleSheet={{
								width: '100%',
								border: '0',
								resize: 'none',
								borderRadius: '5px',
								padding: '6px 8px',
								backgroundColor: appConfig.theme.colors.neutrals[800],
								marginRight: '12px',
								color: appConfig.theme.colors.neutrals[200],
							}}
						/>
						{/*Callback*/}
						<ButtonSendSticker 
							onStickerClick={(sticker) => {
								//console.log('[USANDO O COMPONENTE] Salva esse sticker no banco');
								handleNovaMensagem(':sticker:' + sticker);
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

function Header() {
	return (
		<>
			<Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
				<Text variant='heading5'>
					Chat
                </Text>
				<Button
					variant='tertiary'
					colorVariant='neutral'
					label='Logout'
					href="/"
				/>
			</Box>
		</>
	)
}

function MessageList(props) {
	console.log(props.listaDeMensagens);
	return (
		<Box
			tag="ul"
			styleSheet={{
				overflow: 'scroll',
				display: 'flex',
				flexDirection: 'column-reverse',
				flex: 1,
				color: appConfig.theme.colors.neutrals["000"],
				marginBottom: '16px',
			}}
		>
			{props.mensagens.map((mensagem) => {
				return (
					<Text
						key={mensagem.id}
						tag="li"
						styleSheet={{
							borderRadius: '5px',
							padding: '6px',
							marginBottom: '12px',
							hover: {
								backgroundColor: appConfig.theme.colors.neutrals[700],
							}
						}}
					>
						<Box
							styleSheet={{
								marginBottom: '8px',
							}}
						>
							<Image
								styleSheet={{
									width: '20px',
									height: '20px',
									borderRadius: '50%',
									display: 'inline-block',
									marginRight: '8px',
								}}
								src={`https://github.com/${mensagem.de}.png`}
							/>
							<Text tag="strong">
								{mensagem.de}
							</Text>
							<Text
								styleSheet={{
									fontSize: '10px',
									marginLeft: '8px',
									color: appConfig.theme.colors.neutrals[300],
								}}
								tag="span"
							>
								{(new Date().toLocaleDateString())}
							</Text>
						</Box>
						{/*Condicional: {mensagem.texto.startsWith(':sticker:').toString()}*/}
						{mensagem.texto.startsWith(':sticker:') 
							? (
								<Image src={mensagem.texto.replace(':sticker:', '')}/>
							) : (
								mensagem.texto
							)}
							{/*{mensagem.texto}*/}
					</Text>
				);
			})}

		</Box>
	)
}
