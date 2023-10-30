const repos = document.querySelector('.github')

/*requisitando API com a função usando o fetch */
function getAPIGithub(){
     fetch('https://api.github.com/users/Heitors09/repos?per_page=2')
     //acessa API
     .then(async res=>{
        //se eu não(!) conseguir a resposta de async( se ela não for "ok")
          if(!res.ok){
             throw new Error(res.status)

          }
          //essa condição é caso não recebe resposta da API arrow function se não for ok new error resposta status
        let data = await res.json(); 
        console.log(data)
        //caso receba, a variavel data irá aguardar(await) a res(parametro) async da função e transformar em json()
        //nova arrow function para iterar o recebido da variavél data
        data.map(item => {
            let project = document.createElement('div')
            //cria uma variavel que recebe a criação de uma div
            //interpolação com o innerHTML
            project.innerHTML = `<div class="github1">
                    <h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>${item.name}</h4>
                    <p>${item.description}</p>
                <div class="giticon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>${item.stargazers_count}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>${item.watchers_count}
                </div>
            </div>
            `
            //e põe no HTML
            repos.appendChild(project);
            //passa um append filho recebido da variavel project na variavel repos que é a div(github1 no html)
        })
        })
     //assincrona, pegou como parametro a resposta
     
}

getAPIGithub()

async function getRecent(){
  const response = await fetch('https://api.github.com/users/Heitors09/repos?per_page=1&sort=created')
  const repos = await response.json()
       
  const repository = repos[0]
  
  
  const element = document.querySelector('.getrecent')
  
  element.innerHTML = `
  <img src="./assets/eu.jpg" alt="">
  <h2>${repository.name}</h2>
  <p> criado em: ${repository.created_at}</p>
  <footer>${repository.description}</p>`

   return repository

}

 getRecent();

