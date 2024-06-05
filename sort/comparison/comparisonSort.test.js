const { Movie, sortByYearDescending, sortByTitle, ignoreArticlesRegex } = require('./comparisonSort');

describe('Sorting functions', () => {
    test('sortByYearDescending should correctly sort movies by year descending', () => {
        const movies = [
            new Movie("The Shawshank Redemption", 1994, ["Drama"]),
            new Movie("The Godfather", 1972, ["Crime", "Drama"]),
            new Movie("The Dark Knight", 2008, ["Action", "Crime", "Drama"]),
            new Movie("Pulp Fiction", 1994, ["Crime", "Drama"]),
        ];
        const sortedMovies = sortByYearDescending(movies);
        expect(sortedMovies[0].year).toBe(2008);
        expect(sortedMovies[1].year).toBe(1994);
        expect(sortedMovies[2].year).toBe(1994);
        expect(sortedMovies[3].year).toBe(1972);
    });

    test('sortByTitle should correctly sort movies alphabetically by title', () => {
        const movies = [
            new Movie("Pulp Fiction", 1994, ["Crime", "Drama"]),
            new Movie("The Godfather", 1972, ["Crime", "Drama"]),
            new Movie("The Shawshank Redemption", 1994, ["Drama"]),
            new Movie("The Dark Knight", 2008, ["Action", "Crime", "Drama"]),
        ];
        const sortedMovies = sortByTitle(movies);
        expect(sortedMovies[0].title).toBe("The Dark Knight");
        expect(sortedMovies[1].title).toBe("The Godfather");
        expect(sortedMovies[2].title).toBe("Pulp Fiction");
        expect(sortedMovies[3].title).toBe("The Shawshank Redemption");
    });
});
