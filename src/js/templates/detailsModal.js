const detailsModal = (movie, favorite) => (`
    <div class="${favorite ? 'panel favorite' : 'panel'}" id="${movie.imdbID}">
        <div class="aside">
            <div class="poster">
                <img src="${movie.Poster}">
            </div>
            <div>
                <span><strong>Año:</strong> ${movie.Year}</span>
                <span><strong>Clasificación:</strong> ${movie.Rated}</span>
                <span><strong>Duración:</strong> ${movie.Runtime}</span>
                <span><strong>Pais:</strong> ${movie.Country}</span>
                <span><strong>Productora:</strong> ${movie.Production}</span>
            </div>
        </div>
        <div class="main">
            <div>
                <span><strong>Titulo:</strong> ${movie.Title}</span>
                <span><strong>Genero:</strong> ${movie.Genre}</span>
                <span><strong>Escritor(a):</strong> ${movie.Writer}</span>
                <span><strong>Director(a):</strong> ${movie.Director}</span>
                <span><strong>Reparto:</strong> ${movie.Actors}</span>
                <span><strong>Premios:</strong> ${movie.Awards}</span>
                <span><strong>Resumen:</strong> ${movie.Plot}</span>
            </div>
            <div class="btns">
                <button class="cancel">Cerrar</button>
                <button class="switchfavorite">${favorite ? 'Remover de favorito' : 'Añadir a favorito'}</button>
            </div>
        </div>
    </div>      
`);

export default detailsModal;