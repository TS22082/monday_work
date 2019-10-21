$(document).ready(function() {
  const myName = 'Thomas Smith';

  document.cookie = `username=${myName}; expires=Mon, 25 Oct 2019 12:00:00 PST; path=/`;

  let x = document.cookie;
  console.log(x);
});
