import './Gig.css'
function Gig(props) {
	return (
		<div className="gig-container">
			<h3 className="band-name"> {props.bandName}</h3>
			<img src={props.src} alt={props.alt} />

			<div className='meta-container'>
				<span className="meta"> Description </span>
				<p className='meta-info'> {props.description}  </p>
			</div>

			<div className='meta-container'>
				<span className="meta"> Location </span>
				<p className='meta-info'> {props.location} </p>
			</div>

			<div className='meta-container'>
				<span className="meta"> Date and Time </span>
				<p className='meta-info'> {props.date} </p>
			</div>


		</div>
	)
}

export default Gig
