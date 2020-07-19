const apiKey = "b040ba33";
export const urlBase = `http://www.omdbapi.com/?apikey=${apiKey}`;

export default {
    search: (value, page, callback) => {
        fetch(`${urlBase}&type=movie&s=${value}&page=${page}`)
        .then(response => response.json())
        .then(({ Error, Search }) => callback(Error, Search))
        .catch(({ Error }) => callback(Error, []))
    },
    details: (value, callback) => {
        fetch(`${urlBase}&i=${value}`)
        .then(response => response.json())
        .then((movie) => callback(false, movie))
        .catch(({ Error }) => callback(Error, {}))
    },
};