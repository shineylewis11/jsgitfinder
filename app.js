(function(){
    const search=document.getElementById('search-user');
    const profile=document.getElementById('profile');
    const url="https://api.github.com/users";
    const client_id='d1cf79e1e73e51f88970';
    const client_secret='e26aaf54c8271ce98eab8d3918dc8355561fb2c';

    async function getUser(user){
        const profileResponse=await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);
        
        const profile=profileResponse.json();
        return profile;
        console.log(profile);
    }

    function showprofile(user){
        console.log(user);
    profile.innerHTML=`<div class="row">
    <div class='col-md-4'>
        <div class="card">
            <img class="card-img-top" src="${user.avatar_url}"/>
            <ul class="list-group list-group-flush">
                <li>Repository--<span>${user.public_repos}</span></li>
                <li>followers--<span>${user.followers}</span></li>
                <li>following--<span>${user.following}</span></li>
             	</ul>
	<ul class="list-group">
                                <li class="list-group-item">Company: ${user.company}</li>
                                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                <li class="list-group-item">Location: ${user.location}</li>
                                <li class="list-group-item">Member Since: ${user.created_at}</li>
                            </ul>	
                
            </div>
        </div>
        <div class="card-body">
                    <a href="${user.html_url}">more</a>
                </div>
        <div class="col-md-8"><div id="repos"></div></div>
        </div>`;
    }
search.addEventListener('keyup',e=>{
    const user=e.target.value;

    if(user.length>0){
        getUser(user).then(res=>showprofile(res));
    }

});
})();