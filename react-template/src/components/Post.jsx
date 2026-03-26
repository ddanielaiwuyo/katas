function Post(props) {
	return (
		<div className="post">
			<p>{props.post}</p>
			<p className="posted-at">Posted last week, by <span className="posted-by">{props.postedBy}</span></p>
		</div>
	)
}

export default Post
