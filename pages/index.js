function GlobalStyle(){
	return(
		<style global jsx>{`
			*{
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				background: #a1a1a1;
			}
			body{
				font-family: sans-serif;
			}
		`}</style>
	)
}

function Title(props){
	// "props" é a propriedade de Title (vai pegar o que estiver dentro de <Title></Title>)
	const Tag = props.tag;
	return(
		<>
			<Tag>{props.children}</Tag>
			<style jsx>{`
				${Tag}{
					color: red;
					font-size: 24px;
					font-height: 600;
				}
			`}</style>
		</>
	);
}

// Componente React
function HomePage(){
	// JSX
    return(
		<div>
			<GlobalStyle />
			{/*Tag para criar estilo geral para a página*/}
			<Title tag="h2">Boas vindas!!</Title>
			<h2>Discord - Alura Matrix</h2>
		</div>
	)
}

export default HomePage

// BEM CSS