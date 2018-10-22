const fetchArticles = (siteName) => {
    return fetch(`https://infinite-fjord-69137.herokuapp.com/${siteName.name}`, {
        headers: {
            Accept: 'application/json',
        },
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }

        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    });
};


export { fetchArticles };
