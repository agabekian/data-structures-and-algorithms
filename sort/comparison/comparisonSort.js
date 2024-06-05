class Movie {
    constructor(title, year, genres) {
        this.title = title;
        this.year = year;
        this.genres = genres;
    }
}

// Function to sort movies by most recent year first
function sortByYearDescending(movies) {
    return movies.sort((a, b) => b.year - a.year);
}

// Function to sort movies alphabetically by title, ignoring leading "A"s, "An"s, or "The"s
function sortByTitle(movies) {
    const ignoreArticles = /^(a|an|the)\s+/i; // Regular expression to match leading articles
    return movies.sort((a, b) => {
        const titleA = a.title.replace(ignoreArticles, ''); // Remove leading articles
        const titleB = b.title.replace(ignoreArticles, '');
        return titleA.localeCompare(titleB); // Alphabetical comparison of titles
    });
}

module.exports = { Movie, sortByYearDescending, sortByTitle };
