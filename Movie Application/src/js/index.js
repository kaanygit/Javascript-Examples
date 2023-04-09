
// model-view-controller

import Search from './models/Search';
import { elements,renderLoader,clearLoader } from './base';
import * as searchView from './views/searchView';
import * as movieView from './views/movieView';
import {Movie} from './models/Movie';


const state={

};

//search controller

const searchController=async ()=>{
    const keyword=elements.searchInput.value;
    if(keyword){
        state.search=new Search(keyword);
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.movieDetailsContainer);
        await state.search.getResults();
        searchView.displayResults(keyword,state.search.data);
        await clearLoader(elements.movieDetailsContainer);
    }else{
        alert('anahtar kelime giriniz!');
    }
}
elements.searchForm.addEventListener('submit',function(e){
    console.log('form submit');
    searchController();
    e.preventDefault();
});

//movie controller
const movieController=async ()=>{
    const id=window.location.hash.replace('#','');
    if(id){
        state.movie=new Movie(id);
        renderLoader(elements.movieDetailsContainer);
        await state.movie.getMovie();
        movieView.backToTop();
        movieView.displayMovie(state.movie.data);
        await clearLoader(elements.movieDetailsContainer);

    }
};
window.addEventListener('hashchange',movieController);
elements.movieDetailsClose.addEventListener('click',movieView.closeDetails);