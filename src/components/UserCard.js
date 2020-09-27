/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Octokit } from "@octokit/rest";

const UserCard = (props) => {
	const octokit = new Octokit({ 
		auth: process.env.PRIVATE_KEY,
		userAgent: 'userSearch v0' });
	const user = props.account;
	const [profileInfo, setProfileInfo] = useState([]);
	const [followers, setFollowers] = useState(null);
	const [stars, setStars] = useState(null);
	const [error, setError] = useState([]);
	const [repos, setRepos] = useState(0);


	useEffect(() => {
		const rate_limit = async() => {
			let response = await octokit.request('GET /rate_limit')
			if (response.data.rate.remaining === 0) {
				let errors = "Error: Github API rate-limit exceeded, please try back in 30 minutes."
				setError(errors)
			} else {
				octokit.request(`GET /users/${props.account.login}`, {
					username: props.account.login,
				}).then(response => {
					if(response.data.bio !== null) {
						setProfileInfo(response.data.bio)
					} 
				});
				octokit.repos.listForUser({
					username: props.account.login
				})
				.then(response => {
					setRepos(response.data.length);
				});
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
		rate_limit();
	}, []);

	let biohtml;
	if(profileInfo.length > 0) {
		biohtml = <div className="profileInfo">
		{profileInfo}
		</div>

	}
	return(
        <a href={user.html_url}>
            <div className="usercard-main">
                <img src={user.avatar_url} alt="user's icon" className="userimg" width="100px"/>
                <div id="userlink">
                    {user.login}
                </div>
                <div className="statistics">
                    <div className="repos">
                        <i className="fas fa-code"></i>   
                        {repos}
                    </div>                      
                    <div className="followers" title="Followers" alt="followers">
                        
                     <i class="fas fa-people-arrows"></i>
                     {followers}
                 </div>
                 <div className="stars" title="stars" alt="stars">
                    <i className="fas fa-star"></i>
                    {stars}
                </div>
                   </div>
                {biohtml}
         
        </div>
    </a>
		)
}
export default UserCard;