import { useState, useEffect } from "react"
import axios from "axios"
import User from "./User"

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
			<h2 className="my-3">Fetching Fake Users </h2>
			{users.map(user => {
				return (
					<div key={user.id}>
						<User user={user} />
					</div>
				)
			})}
		</div>
	)
}

export default Users
