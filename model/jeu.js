//certains sont des tableaux !! 
var name;
var age_ratings;//PEGI RATING 
var category;
var collection;
var cover; //Difference avec artwork ? 
var first_release_date; //date de sortie 
var follows; //nbr de gens qui suivent le jeu ? 
var franchise;
var game_modes;// plutot utiliser genre ? 
var genres;
var involved_companies;//tableau 
var keywords;//referencement ? tableau 
var multiplayer_modes;//Renvoie tableau des differents mode 
var platforms; // Plateforme sur le quel le jeu est sortie 
var rating;// Par rapport a la db
var rating_count;// le nmbr 
var screenshots;
var similar_games;
var slug;//Version safe du nom pour l'url 
var storyline;//Courte description du jeu 
var summary;//Description du jeu
var tags;
var themes;
var url; // lien du site du jeu ? 
var videos;

class jeu{
    constructor(name,age_ratings,category,collection,cover,first_release_date,follows,franchise,game_modes,genres,involved_companies,keywords,multiplayer_modes,
        platforms,rating,rating_count,screenshots,similar_games,slug,storyline,summary,tags,themes,url,videos){
            
    this.name = name;
    this.age_ratings= age_ratings;
    this.category = category;
    this.collection = collection;
    this.cover = cover;
    this.first_release_date = first_release_date;
    this.follows = follows;
    this.franchise = franchise;
    this.game_modes = game_modes;
    this.genres = genres;
    this.involved_companies = involved_companies;
    this.keywords = keywords;
    this.multiplayer_modes = multiplayer_modes;
    this.platforms = platforms;
    this.rating = rating;
    this.rating_count = rating_count;
    this.screenshots = screenshots;
    this.similar_games = similar_games;
    this.slug = slug;
    this.storyline = storyline;
    this.summary = summary;
    this.tags = tags;
    this.themes = themes;
    this.url = url;
    this.videos = videos;
    }
}

module.exports = { jeu };
