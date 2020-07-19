const card = ({ Title, Year, imdbID, Poster }, myPanel, isfavorite) => {
    let classFasv = myPanel ? "removefavorite" : "switchfavorite"
    classFasv = isfavorite ? `${classFasv} favorite` : classFasv;

    return (`
        <div class="card" id="${imdbID}">
            <div class="poster">
                ${Poster!=='N/A' ? `<img src="${Poster}" alt="poster"></img>` : '<div></div>'}
                <a class="${classFasv}">
                    <i class="material-icons">${myPanel ? "clear" : "favorite"}</i>
                </a>
            </div>
            <div class="info">
                <span>${Title} (${Year})</span>
            </div>
        </div>     
    `)
};

export default card;
