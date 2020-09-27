/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Octokit } from "@octokit/rest";
import { useHistory } from "react-router-dom";

const ProfileContainer = (props) => {
	const octokit = new Octokit({ 
		auth: process.env.PRIVATE_KEY,
		userAgent: 'userSearch v0' });
	const [user, setUser] = useState([]);
	let history = useHistory();
	const [repos, setRepos] = useState(0);

	useEffect(() => {
		octokit.request(`GET /users/${props.match.params.username}`, {
			username: props.match.params.username,
		}).then(response => {
			setUser(response.data)
		});

		octokit.repos.listForUser({
			username: props.match.params.username
		})
		.then(response => {
			setRepos(response.data.length);
})
	}, []);

	return(
        <div className="profileContainer">
            <img src={user.avatar_url} width="100px;" alt="User Icon"/>
            <h2>{user.login}</h2>
            <h3>{repos} Repos • {user.followers} Followers • {user.following} Followed</h3>
            <button onClick={() => history.goBack()} className="pagination-button-return">Back</button>
        </div>
		)
}
export default ProfileContainer;