# Github API Demo
A management system that exposes apis for performing different operations on github handle data.

<h3> Prerequisite </h3> <hr>
Local mongo db instance url or deployment mongo instance url.<br />
Node JS

<h3> Installation </h3> <hr>
  git clone "project-url" <br />
  cd "project-directory" <br />
  cp .env-example .env <br />
  npm install <br />

<h3> Running the app </h3> <hr>

  npm run start
  
<h3>Endpoints </h3> <hr>
Get Repo List : <b>http://localhost:4000/repo/:repo</b> <br>
Get User Handle Detail: <b>http://localhost:4000/user/:username</b>
