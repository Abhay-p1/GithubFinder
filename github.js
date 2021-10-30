class GitHub {
    constructor() {
        this.client_id = 'a1f40635020b60eeb436';
        this.client_secret = '3101b0351ecdca32c7b76080e917e598b81c74ed';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user) {
        // get user itself
        const profileresp = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // console.log(profileresp);
        const userprofiledata = await profileresp.json(); // promise
        // console.log(userprofiledata);

        // Get user repos
        const reposresp = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const userrepos = await reposresp.json();
        return { // return object (conv to promise by async)
            userprofiledata, // json response (promise)
            userrepos
        }
        // get user repos
    }
}