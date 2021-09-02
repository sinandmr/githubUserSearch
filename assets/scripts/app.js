'use strict';
const searchInput = document.querySelector('#searchfield');
const searchBtn = document.querySelector('#go');
const avatarImg = document.querySelector('#avatarimg');
const userName = document.querySelector('.user');
const userNick = document.querySelector('.usernick');
const joinedDate = document.querySelector('.joined');
const bio = document.querySelector('.bio');
const repos = document.querySelector('#repos');
const followers = document.querySelector('#followers');
const following = document.querySelector('#following');
const userLocation = document.querySelector('#location');
const twitter = document.querySelector('.twitterId');
const website = document.querySelector('.site');
const company = document.querySelector('#company');

const getUserData = async user => {
  const apiURL = `https://api.github.com/users/${user}`;
  const fetchData = await fetch(apiURL);
  if (fetchData.status === 404) return;
  const data = await fetchData.json();

  // Let's put the information in the interface.
  const createdDate = new Date(data.created_at);
  avatarImg.src = data.avatar_url;
  userName.textContent = data.name;
  userName.href = data.html_url;
  userNick.textContent = `@${data.login}`;
  joinedDate.textContent = `Joined ${new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format(createdDate)}`;
  bio.textContent = data.bio || 'no biography';
  repos.textContent = data.public_repos;
  followers.textContent = data.followers;
  following.textContent = data.following;
  userLocation.textContent = data.location || 'no location';
  company.textContent = data.company || 'no company';

  if (data.twitter_username) {
    twitter.textContent = data.twitter_username;
    twitter.href = data.twitter_username
      ? `https://twitter.com/${data.twitter_username}`
      : '#';
    twitter.style.pointerEvents = 'visible';
  } else {
    twitter.textContent = 'no twitter';
    twitter.style.pointerEvents = 'none';
  }

  if (data.blog) {
    website.textContent = data.blog;
    website.href = data.blog.startsWith('http')
      ? data.blog
      : `https://${data.blog}`;
    website.style.pointerEvents = 'visible';
  } else {
    website.textContent = 'no website';
    website.style.pointerEvents = 'none';
  }
  // If the avatar is clicked, the large version will open.
  avatarImg.addEventListener('click', () => {
    window.open(data.avatar_url, '_blank');
  });
};

searchBtn.addEventListener('click', e => {
  e.preventDefault();
  getUserData(searchInput.value);
  searchInput.value = '';
});
window.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    getUserData(searchInput.value);
    searchInput.value = '';
  }
});
