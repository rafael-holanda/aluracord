function Title(props){
	// "props" é a propriedade de Title (vai pegar o que estiver dentro de <Title></Title>)
	return(
		<>
			<h1>{props.children}</h1>
			<style jsx>{`
				h1{
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
			<Title>Boas vindas!!</Title>
			<h2>Discord - Alura Matrix</h2>
		</div>
	)
}

export default HomePage

// BEM CSS