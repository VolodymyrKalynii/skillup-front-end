export const getComments = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                id: 2,
                avatar: '..../',
                text: 'Привет мир',
                author: 'Ivan',
                isLiked: false
            },
            {
                id: 22,
                avatar: '..../',
                text: 'Аллоха',
                author: 'Антон',
                isLiked: true
            },
            {
                id: 52,
                avatar: '..../',
                text: 'Добрый вечер',
                author: 'Vova',
                isLiked: false
            }
        ]);
    }, 100);
});