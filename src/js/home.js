import '../css/styles.scss';
import { LANDING } from './constants/routes';
import { api, storage, validations } from './services';
import { card, detailsModal } from './templates';

const movieCacheKey = "movies_cache";
const search = document.getElementById("search");
const submit = document.getElementById("submit");
const movies = document.getElementById("movies");
const cardlist = movies.lastElementChild
const back = movies.firstElementChild.firstElementChild;
const span = movies.firstElementChild.children[1]; 
const center = movies.firstElementChild.children[2]
const forward = movies.firstElementChild.lastElementChild;
const modal = document.getElementById("modal");
const logout = document.getElementById("logout");

let user;
let page = 1;

const init = () => {
    viewFavorites();
    document.addEventListener("DOMContentLoaded", app);
}

const app = (e) => {
    e.preventDefault();
    search.addEventListener("keyup", onSearch);
    submit.addEventListener("click", onSearch);
    movies.addEventListener("click", onMovie);
    modal.addEventListener("click", onModal);
    logout.addEventListener("click", onLogout)
};

const onSearch = function(e){
    e.preventDefault();
    if((e.code !== "Enter" && e.type !== 'click') || !validations.search(search.value)) return;
    const value = search.value.replace(/ /gi, "+");
    resetHead();
    span.textContent = "Buscando..."
    api.search(value, page, (error, data) => {       
        span.classList.add("hide");
        center.classList.remove("hide");
        if(error) return center.firstElementChild.textContent = "No se econtró resultados";
        if(page > 1) back.classList.remove("hide");
        if(data.length >= 10 || page == 100) forward.classList.remove("hide");
        storage.data.set(movieCacheKey, data);
        const myfavorites = [...storage.data.get(user)];
        addCards(false, data, cardlist, myfavorites);
    });
};

const onMovie = function(e){
    e.preventDefault();
    let elements = e.path.slice(0, e.path.length - 5);
    for (const element of elements) {
        if(element.classList.contains('removefavorite')){
            const card = element.parentElement.parentElement;
            removeFavorite(card.id);
            return card.remove();
        }else if(element.classList.contains('switchfavorite')){
            const card = element.parentElement.parentElement;
            if(element.classList.contains('favorite')){
                removeFavorite(card.id);
                return element.classList.remove("favorite");
            }else{
                addFavorite(card.id);
                return element.classList.add("favorite");
            }
        }else if(element.classList.contains('card')){
            return viewDetails(element);
        }else if(element.classList.contains('goback')){
            page -= 1;
            if(page < 0) page = 0;
            return onSearch(e);
        }else if(element.classList.contains('gofavorites')){
            resetHead();
            return viewFavorites();
        }else if(element.classList.contains('goforward')){
            page += 1;
            if(page > 100) page = 100;
            return onSearch(e);
        }
    }
};

const onModal = function(e){
    e.preventDefault();
    let elements = e.path.slice(0, e.path.length - 5);
    for (const element of elements) {
        if(element.classList.contains('switchfavorite')){
            const detailsModal = modal.firstElementChild;
            if(detailsModal.classList.contains('favorite')){
                removeFavorite(detailsModal.id);
            }else{
                addFavorite(detailsModal.id);
            }
            if(modal.classList.contains('athome')){
                resetHead();
                viewFavorites();
            }else{
                const cache = [...storage.data.get(movieCacheKey)];
                const myfavorites = [...storage.data.get(user)];
                cardlist.innerHTML = "";
                addCards(false, cache, cardlist, myfavorites);
            }
            modal.textContent = "";
            return modal.classList.add("hide");
        }else if(element.classList.contains('cancel')){
            modal.textContent = "";
            return modal.classList.add("hide");
        }
    }
};

const viewDetails = function (card) {
    modal.innerHTML = 'Cargando...'
    const favorite = card.firstElementChild.lastElementChild.classList.contains('favorite');
    const home = card.firstElementChild.lastElementChild.classList.contains('removefavorite');
    if(home){
        modal.classList.add("athome");
    }else{
        modal.classList.remove("athome");
    }
    modal.classList.remove("hide");
    api.details(card.id, (error, data) => {       
        if(error) return modal.classList.add("hide");
        modal.innerHTML = detailsModal(data, favorite); 
    });
}

const resetHead = () => {
    back.classList.add("hide");
    center.classList.add("hide");
    forward.classList.add("hide");
    span.classList.remove("hide");
    cardlist.innerHTML = "";
    span.textContent = "Mis películas favoritas"
};

const viewFavorites = () => {
    const { username=null, password=null } = {...storage.session.get()};
    if(!username || !password){
       return location.replace(LANDING);
    }
    const favorites = getFavorite(username, password);
    addCards(true, favorites, movies.lastElementChild);
};

const addCards = (myPanel, data, root, myfavorites=null) => {
    data.forEach(item => {
        const favorite = myfavorites ? myfavorites.findIndex(favorite => favorite.imdbID === item.imdbID) : 0;
        root.innerHTML += card(item, myPanel, favorite !== -1); 
    });
};

const removeFavorite = (id) => {
    let favorites = [...storage.data.get(user)];
    favorites.findIndex
    favorites = favorites.filter(favorite => favorite.imdbID !== id)
    storage.data.set(user, favorites);
}

const addFavorite = (id) => {
    let favorites = [...storage.data.get(user)];
    let cache = [...storage.data.get(movieCacheKey)];
    const favorite = cache.find(movie => movie.imdbID === id);
    if(favorite){
        favorites.push(favorite)
        storage.data.set(user, favorites);
    }
}

const getFavorite = (username, password) => {
    user = `${username.replace(/ /gi, "_")}@${password}`;
    const favorites = storage.data.get(user);
    if(!favorites){
        storage.data.set(user, []);
        return [];
    }
    return favorites;
};

const onLogout = function (e) {
    storage.session.remove();
    return location.replace(LANDING);
} 

init();