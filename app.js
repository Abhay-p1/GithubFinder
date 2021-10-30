const githubobj = new GitHub(); // Intantiate GitHub
const UIobj = new UI(); // Intantiate UI
// Search input
const Searchuser = document.getElementById('searchUser');
// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text entered
    const userentered = document.getElementById('searchUser').value; // or e.target.value
    if (userentered != '') {
        //make HTTp call to GitHub
        githubobj.getUser(userentered).then(data => { // data is object with two promises[userprofiledata and userRepos]
            console.log(data);
            if (data.userprofiledata.message === 'Not Found') {
                // show an alert user not Found
                // alert('User not found');
                UIobj.showAlert('User Not Found', 'alert alert-danger');
            } else {
                // show user profile
                UIobj.showProfile(data.userprofiledata);
                UIobj.showRepos(data.userrepos);
            }
        });
    } else { // userentered = ''
        // Clear profile
        UIobj.clearProfile();
    }
});