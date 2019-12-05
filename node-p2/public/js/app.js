(() => {
    const root = document.getElementById('root');
    const renderNews = ({id, title, content, author}) => (
        `<div class="news" data-id="${id}">
            <div class="news--title">
                ${title}
            </div>
            <div class="news--content">
                ${content}
            </div>
            <div class="news--author">
                ${author}
            </div>
            <div class="news--control-panel">
                <button class="control-panel--delete">
                    delete
                </button>
            </div>
        </div>`
    );

    fetch('/news')
        .then(data => data.json())
        .then(data => root.insertAdjacentHTML('beforeend', data.map(renderNews).join('')));


    root.addEventListener('click', ({target}) => {
        if(!target.classList.contains('control-panel--delete')){
            return;
        }
        const currentNews = target.closest('.news');
        const currentNewsId = currentNews.dataset.id;
        fetch(`/news/${currentNewsId}`,{
            method: 'DELETE'
        }).then(data => {
            if(data.status === 401){
                location.href = '/login';
            }
            if(data.status === 200){
                currentNews.remove();
            }
        })
    })
})();
