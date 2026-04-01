const CheckList = ({ items }) => {
	return (
		<ul style={{ listStyle: "none", fontFamily: "monospace" }}>
			{items.map((item, index) => (
				<li key={index}>
					{item.checked ? "[x]" : "[ ]"} {item.text}
				</li>
			))}
		</ul>
	);
};


export default CheckList
