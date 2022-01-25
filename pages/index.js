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
			<Title tag="h2">Boas vindas!!</Title>
			<h2>Discord - Alura Matrix</h2>
		</div>
	)
}

export default HomePage

// BEM CSS