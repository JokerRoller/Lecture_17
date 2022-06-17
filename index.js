const link = 'https://randomuser.me/api?results=50';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getinfo(link)

async function getinfo(url) {
    const res = await fetch (url)
    const data = await res.json()
    showinfo(data.results)
}

function showinfo(persons) {
    main.innerHTML = ''
    persons.forEach((person) => {
    const {picture, name, dob, phone, email} = person         

        const personEL = document.createElement('div')
        personEL.classList.add('person')

        personEL.innerHTML = `
        <div class="img">
            <img src="${picture.large}">
        </div>
        <div class="name">
            <h3>${name.first + ' ' + name.last}</h3>
            <p>Phone: ${phone}</p>
            <p>@: ${email}</p>
            <p class="${age(dob.age)}">age: ${dob.age}</p>
        </div>
        `
        main.appendChild(personEL)
    })
}

form.addEventListener('submit' , (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ' '){
        getinfo(link +searchTerm )  
        search.value = ' '
    }
    else{
        window.location.reload()
    }
})

function age(agetester) {
    if (agetester >= 60) {
        return 'green'
    }
    else if (agetester >= 30){
        return 'orange'
    }
    else{
        return 'red'
    }
}