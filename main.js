document.addEventListener('DOMContentLoaded',()=>{
    const avatar = document.querySelector('#avatar')
    const name = document.querySelector('#name')
    const userName = document.querySelector('#userName')
    const repository = document.querySelector('#repository')
    const follower = document.querySelector('#follower')
    const following = document.querySelector('#following')
    const link = document.querySelector('#link')

    const endpoint = `https://api.github.com/users/Luan-LopS`

    try{
        fetch(endpoint)
            .then(function(e){
                return e.json()
            }).then(function(json){
                console.log(json)
                avatar.src = json.avatar_url
                name.innerText = json.name
                userName.innerText = '@'+json.login
                repository.innerText = json.public_repos
                follower.innerText = json.followers
                following.innerText = json.following
                link.href = json.html_url
            })
    }catch(error){
        throw new error('Não encontrado!!')
    }
        

})