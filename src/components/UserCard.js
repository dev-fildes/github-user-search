/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Octokit } from "@octokit/rest";

const UserCard = (props) => {
	const octokit = new Octokit({ 
		auth: process.env.PRIVATE_KEY,
		userAgent: 'userSearch v0' });
	const user = props.account;
	const [followers, setFollowers] = useState(null);
	const [stars, setStars] = useState(null);

	useEffect(() => {
		const rate_limit = async() => {
			let response = await octokit.request('GET /rate_limit')
			if (response.data.rate.remaining === 0) {
				let errors = "Error: Github API Rate-limit exceeded, please try back in 30 minutes."
				setError(errors)
			} else {
				octokit.users.listFollowersForUser({
					username: user.login,
				}).then(response => {
					setFollowers(response.data.length);
				});
				octokit.request(`GET /users/${user.login}/starred`)
				.then(response => {
					setStars(response.data.length);
				})
			}
		};

	}, []);
	

	return(
        <Link to={"/github-user-search/profile/" + user.login}>
        <div className="usercard-main">
            <img src={user.avatar_url} alt="user's icon" className="userimg" width="100px"/>
            <div id="userlink">
                {user.login}
            </div>
            <div className="statistics">
                <div className="followers" title="Followers" alt="followers">
                    <i className="fas fa-user-friends"></i>
                    {followers}
                </div>
                <div className="stars" title="stars" alt="stars">
                    <i className="fas fa-star"></i>
                    {stars}
                </div>
            </div>
        </div>
    </Link>
		)
}
export default UserCard;