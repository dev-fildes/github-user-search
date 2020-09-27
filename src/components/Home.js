/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { Octokit } from "@octokit/rest";

import UserCard from './UserCard.js';
import Pagination from './Pagination.js';
import ErrorList from './ErrorList'

const Home = () => {
  const octokit = new Octokit({ 
    auth: process.env.PRIVATE_KEY,
    userAgent: 'userSearch v0' });
  const parse = require('parse-link-header');

  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState('');
  
  const [last, setLast] = useState('');
  const [error, setError] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  const onChangeInput = (e) => {
   const searchUser = e.target.value;
   setSearchQuery(searchUser)
 };

 const onSubmit = (e) => {
  e.preventDefault();
  getUserList();
};

const isFirstRun = useRef(true);
useEffect(() => {
  if(isFirstRun.current) {
    isFirstRun.current = false;
    return;
  }
  getUserList();
}, [currentPage]);

const getUserList = () => { 
  if(searchQuery === "") {
   let errors = "Error: Please input a username."
   setError(errors)
 } else {
  setError('')
  octokit.search.users({
    q: `${searchQuery}`,
    page: `${currentPage}`,
    per_page: 5
  })
  .then(response => {
    let parsed = parse(response.headers.link)
    setLoading(false)
    setTotal(response.data.total_count)
    if(parsed !== null) {
      if(parsed.next !== null) {
        setNextPage(prevState => parsed.next.page)
        setLast(parsed.last.page)
      }
      if(parsed.prev && parsed.prev !== null) {
        setPrevPage(parsed.prev.page)
      }
    }
    setUsers(response.data.items.map(acct => {
      return(
        <UserCard
        key={acct.id}
        account={acct}
        />)
    }));
  })
  .catch(e => console.log(e))
}};

if(loading > (3)) return "Loading.."

  const gotoNextPage = () => {
    setCurrentPage(prevState => nextPage)
  };

  const gotoPrevPage = () => {
    setCurrentPage(prevState => prevPage)
  };

  let total_users ;
  if(total !== '') {
    total_users = <div className="count-total">
    {total} users in total.
    </div>  
  };

  let page_total;
  if(nextPage) {
    page_total = <span className="total_pages">Page {currentPage} of {last}</span>
  };

  return(
    <div className="main">
        <div className="search-header">

            <div className="github-logo">
                <i className="fab fa-github fa-10x"></i>
            </div>

            <h1>Search Github Users</h1>

            <form onSubmit={onSubmit}>
                <label>
                    <input
                    type="text"
                    value={searchQuery}
                    onChange={onChangeInput}
                    className="search"
                    placeholder="Search Users.."
                    required
                    />
                </label>

                <button 
                type="submit"
                className="fas fa-search"
                id="submit-button"
                />
            </form>

            <br/>

            {error !== undefined ? <ErrorList errors={error} /> : null}

        </div>

        <div className="returned-info">
            {total_users}

            {users}

            {page_total}
            <Pagination
            gotoNextPage={nextPage ? gotoNextPage : null}
            gotoPrevPage={prevPage ? gotoPrevPage : null}
            />
        </div>
    </div>
    )
};
export default Home