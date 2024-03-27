import { useState, useEffect } from "react"
import axios from "axios"

const Users = () => {
	const [users, setUsers] = useState([])
	const url = "https://jsonplaceholder.typicode.com/users"

	const fetchUsers = () => {
		return axios.get(url).then(res => setUsers(res.data))
	}

	useEffect(() => {
		fetchUsers()

		return () => {
			console.log(users)
		}
	}, [])

	return (
		<div>
			<h2>Users </h2>
			{users.map((user, index) => {
				return (
					<div key={index}>
						<li>{user.name}</li>
					</div>
				)
			})}
		</div>
	)
}

export default Users
