import { elements } from "../base";

export const backToTop=()=>{
    window.scrollTo({top:0,behavior:"smooth"});
}

export const closeDetails=()=>{
    elements.movieDetailsContainer.classList.remove('d-block');
}

export const displayMovie=movie=>{
    let html='<div class="row">';

    let genres="";
    movie.genres.forEach(genre => {
        genres+=`<span class="badge badge-primary ml-1">${genre.name}</span>`;
    });
    html+=`
        <div class="col-md-4">
            <img src="https://www.themoviedb.org/t/p/w500/${movie.poster_path}" onerror="this.src='https://placehold.jp/92x138.png';" class="mr-3 img-fluid" alt="${movie.title}">
        </div>
        <div class="col-md-8">
            <div>
                <h5>${movie.original_title}</h5>
                <p>${movie.overview}</p>
                <p><small class="badge badge-primary">${movie.vote_average}</small></p>
                <hr>
                ${genres}
            </div>
        </div>
    `;

    html+='</div>';
    elements.movieDetailsContainer.classList.add('d-block');
    elements.movieDetails.innerHTML=html;

};