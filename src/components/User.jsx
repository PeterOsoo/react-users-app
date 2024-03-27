const User = ({ user }) => {
	return (
		<div className="py-3">
			<h4>
				{" "}
				{user.id}. {user.name}{" "}
			</h4>
			<p>Username: {user.username} </p>
			<p>Email: {user.email} </p>
			<p>City: {user.address.city} </p>
		</div>
	)
}

export default User
