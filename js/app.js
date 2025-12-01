const data = [
            {
                id: 1,
                name: 'Library-Catalog-Demo',
                description: 'A staic verison of my React library catalog project that uses mock data. If you want to see the code for the real project then click here "https://github.com/jmscoding100/libraryProject2 " ',
                languages: ['HTML', 'Bootstrap', 'CSS', 'React', 'Node.js', 'Express.js'],
                image: 'library_Cat.png',
                code: 'https://github.com/jmscoding100/library-catalog-demo/tree/gh-pages',
                live_page: 'https://jmscoding100.github.io/library-catalog-demo/'
            },
            {
                id: 1,
                name: 'Movies',
                description: 'A simple javascript project where you use the sort button to se which movies belong in a certain genre.',
                languages: ['HTML', 'Bootstrap', 'Javascript'],
                image: 'movies.png',
                code: 'https://github.com/jmscoding100/movies',
                live_page: 'https://jmscoding100.github.io/movies/'
            },
            {
                id: 2,
                name: 'Box-game',
                description: 'A javascript project I did in the MS Coding Academy where the goal is to get all the boxes to match a certain color.',
                languages: ['HTML', 'Bootstrap', 'CSS', 'Javascript'],
                image: 'bg.png',
                code: 'https://github.com/jmscoding100/boxGame/tree/main/js',
                live_page: 'https://jmscoding100.github.io/boxGame/'
            },
            {
                id: 3,
                name: 'Dice-game',
                description: 'A small game project where if you get a 7 or 11 on the first roll you win but if you get a snake eyes instead you lose. If you don\'t you have to get what ever you rolled to win except a 7, 11, or snake eyes.',
                languages: ['HTML', 'Bootstrap', 'CSS', 'Javascript'],
                image: 'dg.png',
                code: 'https://github.com/jmscoding100/dice-game/tree/main/js',
                live_page: 'https://jmscoding100.github.io/dice-game/'
            },
            {
                id: 4,
                name: 'Calculator',
                description: 'A simple calculator made in javascript. It lets you add, subtract, multiply, and divide.',
                languages: ['HTML', 'Bootstrap', 'CSS', 'Javascript'],
                image: 'cal.png',
                code: 'https://github.com/jmscoding100/calculator/tree/main/js',
                live_page: 'https://jmscoding100.github.io/calculator/'
            },
            {
                id: 5,
                name: 'Snake',
                description: 'A classic game of snake where you use the arrow keys to move.',
                languages: ['HTML', 'Bootstrap', 'CSS', 'Javascript'],
                image: 'snake.png',
                code: 'https://github.com/jmscoding100/snake/tree/main/js',
                live_page: 'https://jmscoding100.github.io/snake/'
            },
            {
                id: 6,
                name: 'Registration Form',
                description: 'A simple non-functional form that I did on free code camp.',
                languages: ['HTML', 'CSS'],
                image: 'rg_form.png',
                code: 'https://github.com/jmscoding100/Registration-Form/tree/main',
                live_page: 'https://jmscoding100.github.io/Registration-Form/'
            },
            {
                id: 7,
                name: 'Cafe Menu',
                description: 'A simple cafe menu I did on free code camp.',
                languages: ['HTML', 'Bootstrap', 'CSS'],
                image: 'menu.png',
                code: 'https://github.com/jmscoding100/cafe-menu',
                live_page: 'https://jmscoding100.github.io/cafe-menu/'
            },
    ]

console.log(data)

const row = document.getElementById('cardRow')

function makeList(ulEl, languages) {
    const items = Array.isArray(languages)
        ? languages
        : Object.values(languages);

    items.forEach(lang => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = lang;
        ulEl.appendChild(li);
    });
}


const buildCards =(obj)=>{


    const column = document.createElement('div')
    column.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card', 'h-100')
    card.setAttribute('id', `card-${obj.id}`)

    const img = document.createElement('img');
    img.src = `images/${obj.image}`;
    img.classList.add('card-img-top');
    img.alt = obj.name;
    


    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')

    const name = document.createElement('h4')
    name.classList.add('text-capitalize')
    name.innerText = obj.name

    let desc = document.createElement('p')
    desc.classList.add('p1')
    desc.innerText= obj.description

    const lang = document.createElement('h5')
    lang.classList.add('p1')
    lang.innerText = 'Languages'

    const langList = document.createElement('ul')
    langList.classList.add('uppercase', 'list-group', 'list-group-flush')

    if(typeof(obj.languages) == 'object'){
        makeList(langList, obj.languages)
    }


    const cardFooter = document.createElement('div')
    cardFooter.classList.add('card-footer')

    cardFooter.innerHTML = `
    <ul class="nav links list-unstyled d-flex justify-content-evenly">
        <li class="link-items">
            <a href=${obj.code} class="nav-items website" target="_blank">
                <span class="code">
                    Code
                </span>
            </a>
        </li>
        <li class="link-items">
            <a href=${obj.live_page} class="nav-items website" target="_blank">
                <span class="live">
                    Live Page
                </span>
            </a>
        </li>
    </ul> 
    `

    cardHeader.appendChild(name)


    cardBody.appendChild(desc)
    cardBody.appendChild(lang)
    cardBody.appendChild(langList)
    

    card.appendChild(cardHeader)
    card.appendChild(img)
    card.appendChild(cardBody)
    card.appendChild(cardFooter)
    column.appendChild(card)

    row.appendChild(column)
}


data.forEach(buildCards)