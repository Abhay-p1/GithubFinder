class UI {
    constructor() {
        this.Profile = document.getElementById('profile');
        this.Repos = document.getElementById('repos');
    }
    showProfile(user) { // Profile is div element
        this.Profile.innerHTML = `
        <div class="card card-body mb-3"> 
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2"src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary m-2">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-warning m-2">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success m-2">Followers: ${user.followers}</span>
        <span class="badge badge-info m-2">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
        <li class="list-group-item">Company: ${user.company}</li>
        <li class="list-group-item">Website: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Company: ${user.created_at}</li>
        </ul>
        </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `

    }
    showRepos(repos) { // repos is an array of latest 5 repos
        // console.log(repos);
        let output = ''; // or sim do it like we have done for profile
        if (repos.length > 0) {
            repos.forEach(function(repo) {
                output += `<div class="card card-body mb-2">
            <div class="row"> 
            <div class='col-md-6'>
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="md-6">
            <span class="badge badge-info m-2">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-danger m-2">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success m-2">Forks: ${repo.forks}</span>
            </div>
            </div>
            </div>`;
            });
            this.Repos.innerHTML = output;

        } else {
            this.Repos.innerHTML = '<div class="norepo alert alert-secondary">No Repositories</div>';
        }
    }
    showAlert(msg, classname) {
        // Clear Alert if any already present
        this.ClearAlert();
        const divele = document.createElement('div');
        divele.className = classname;
        divele.appendChild(document.createTextNode(msg));
        // Get parent
        const containerpar = document.querySelector('.searchContainer');
        // Get div with search 
        const firstchild = document.querySelector('.search');
        containerpar.insertBefore(divele, firstchild); // insert in ele with class searchContiner before search box
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000);
    }
    ClearAlert() {
        const currAlert = document.querySelector('.alert');
        if (currAlert != null) {
            currAlert.remove();
        }
    }
    clearProfile() {
        this.Profile.innerHTML = '';
        this.Repos.innerHTML = '';
    }
}