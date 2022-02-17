// import './generics.scss'
import { Link } from 	'react-router-dom'
const stepOne = (props) => {
	
	if (props?.isLogged === false) return <div>yep</div>
	else return (
		<>
			<div className={props.name === 'vitor' ? 'teste' : ``}>
				<p className={`name-${props.color}`}>
					{ props?.name}
				</p>
			</div>
			<button onClick={props.onClick}>Click me</button>
			<Link to="/ariba">Home</Link>


			{
				props.numbers
					.map((n,index) => {
						return (
							<p key={index}>{n}</p>
						)
					})
			}
		</>
	)
	
}

export default stepOne