"use strict";

const { parse, serialize } = require("../utils/json");
var escape = require("escape-html");

const jsonDbPath = __dirname + "/../data/jeux.json";

const defaultJeux = [
  {
    id: 1,
    name: "New World",
    age_ratings: 16,
    category: "MMORPG",
    cover:
      "https://images.ctfassets.net/j95d1p8hsuun/6gC9WvAePBYvVW3b4LHMTI/24f791f3de9d6e332a73ad8f82639f60/NW_TWITTERSHARE_600x300.jpg",
    first_release_date: "28 septembre 2021 ",
    involved_companies: " Amazon Game Studios",
    keywords: " MMO",
    multiplayer_modes: "oui",
    platforms: "PC",
    rating: 11,
    screenshots: false,
    summary:
      " Parcourez un MMO en monde ouvert palpitant plein de dangers et d’opportunités dans lequel vous vous forgerez une nouvelle destinée en tant qu’aventurier échoué sur l’île surnaturelle d’Aeternum. Des opportunités infinies de combattre, de rassembler des ressources et de fabriquer des objets vous attendent dans les contrées sauvages et les ruines de l’île. Exploitez des forces surnaturelles et maniez des armes d’une extrême précision dans un système de combat en temps réel et sans classes. Jouez en solitaire, en petite équipe ou au sein d’une énorme armée lors de combats en JcE et JcJ : le choix vous appartient.",
    url: " https://www.newworld.com/fr-fr/",
    videos: false,
  },
  {
    id: 2,
    name: "Forza Horizon 5",
    age_ratings: 7,
    category: "course",
    cover: "https://picfiles.alphacoders.com/478/478026.jpg",
    first_release_date: " 04 novembre 2021 ",
    involved_companies: " Playground Games",
    keywords: " course ",
    multiplayer_modes: "oui",
    platforms: "PC- XBOX SERIE X- XBOX ONE ",
    rating: 15.1,
    screenshots: false,
    summary:
      "Forza Horizon 5 est un jeu de course en monde ouvert développé par Playground Games. Il prend place dans les villes et magnifiques décors du Mexique. Le jeu propose aussi bien des courses solo que des épreuves compétitives et collaboratives en ligne.",
    url: "https://www.xbox.com/fr-BE/games/store/forza-horizon-5-edition-standard/9NKX70BBCDRN",
    videos: false,
  },

  {
    id: 3,
    name: "Battlefield 2042",
    age_ratings: 18,
    category: "FPS, Aventure, Action",
    cover: "https://picfiles.alphacoders.com/453/453967.jpg",
    first_release_date: " 19 novembre 2021 ",
    involved_companies: " DICE",
    keywords: "FPS ",
    multiplayer_modes: "oui",
    platforms: "PC- XBOX SERIE X- XBOX ONE, PS4, PS5 ",
    rating: 6,
    screenshots: false,
    summary:
      "Battlefield 2042 est un jeu de tir à la première personne multijoueur ancré dans un futur dystopique. Deux nations mènent une guerre totale, les Etats-Unis et la Russie.",
    url: "https://www.ea.com/fr-fr/games/battlefield/battlefield-2042",
    videos: false,
  },

  {
    id: 4,
    name: "It Takes Two",
    age_ratings: 12,
    category: "Aventure",
    cover: "https://picfiles.alphacoders.com/469/469565.jpg",
    first_release_date: "  26 mars 2021 ",
    involved_companies: " Electronic Arts",
    keywords: "Aventure ",
    multiplayer_modes: "oui multi local",
    platforms: "PC- XBOX SERIE X- XBOX ONE, PS4, PS5 ",
    rating: 18,
    screenshots: false,
    summary:
      "It Takes Two est un jeu de plateforme, d'action et de coopération sur PC. Au coeur d'une famille qui se déchire, vous incarnez les deux poupées qui prennent vie, représentant les parents qui vont devoir passer des épreuves dans l'imaginaire de leur fille.",
    url: "https://www.ea.com/fr-fr/games/it-takes-two",
    videos: false,
  },

  {
    id: 5,
    name: "NieR Replicant",
    age_ratings: 18,
    category: "Action, RPG",
    cover: "https://picfiles.alphacoders.com/129/129453.jpg",
    first_release_date: "  23 avril 2021 ",
    involved_companies: "Square Enix ",
    keywords: "Action, RPG",
    multiplayer_modes: "non",
    platforms: "PC- XBOX SERIE X- XBOX ONE, PS4, PS5 ",
    rating: 17.6,
    screenshots: false,
    summary:
      "Nier Automata est un jeu d'action de type RPG jouable en solo. Le titre amène le joueur dans un futur lointain où la Terre a été envahie par des formes extra-terrestres armées de bio-machines. Après s'être réfugiée sur la lune, l'humanité envoie sur leur planète natale des androïdes capable de lutter avec les extra-terrestres et reconquérir la planète.",
    url: "https://store.steampowered.com/agecheck/app/524220/",
    videos: false,
  },
];

class Jeux {
  constructor(dbPath = jsonDbPath, defaultItems = defaultJeux) {
    this.jsonDbPath = dbPath;
    this.defaultJeux = defaultItems;
  }

  getNextId() {
    const jeux = parse(this.jsonDbPath, this.defaulJeux);
    let nextId;
    if (jeux.length === 0) nextId = 1;
    else nextId = jeux[jeux.length - 1].id + 1;

    return nextId;
  }

  /**
   * Returns all games
   */
  getAll(filterPredicate) {
    let jeux;
    jeux = parse(this.jsonDbPath, this.defaultJeux);
    if (filterPredicate) return jeux.filter(filterPredicate);
    else return jeux;
  }
  /**
   * Returns the game identified by id
   */

  /**
   * Returns the game identified by name
   */

   getOneByid() {
     let id =  Math.floor(Math.random() * 10)
    const jeux = parse(this.jsonDbPath, this.defaultJeux);
    const foundIndex = jeux.findIndex((jeu) => jeu.id == id);
    if (foundIndex < 0) return;
    return jeux[foundIndex];
  }
  getOneByName(name) {
    const jeux = parse(this.jsonDbPath, this.defaultJeux);
    const foundIndex = jeux.findIndex((jeu) => jeu.name == name);
    if (foundIndex < 0) return;
    return jeux[foundIndex];
  }
  /*
  getOneByCategory(category) {
    const jeux = parse(this.jsonDbPath, this.defaultJeux);
    const foundIndex = jeux.findIndex((jeu) => jeu.category == category);
    if (foundIndex < 0) return;
    return jeux[foundIndex];
  }
  */
  getOneByCategory(category) {
    const jeux = parse(this.jsonDbPath, this.defaultJeux);
    const foundIndex = jeux.filter((jeu) => jeu.category == category);
    return foundIndex;
  }
  /**
   * Add a game in the DB and returns the added game (containing a new id)
   */

  addOne(body) {
    const jeux = parse(this.jsonDbPath, this.defaultJeux);

    // add new game
    const newJeu = {
      id: this.getNextId(),
      name: escape(body.name),
      age_ratings: escape(body.age_ratings),
      category: escape(body.category),
      cover: escape(body.cover),
      first_release_date: escape(body.first_release_date),
      involved_companies: escape(body.involved_companies),
      keywords: escape(body.keywords),
      multiplayer_modes: escape(body.multiplayer_modes),
      platforms: escape(body.platforms),   
      summary: escape(body.summary),
      url: escape(body.url),
    };
    jeux.push(newJeu);
    serialize(this.jsonDbPath, jeux);
    return newJeu;
  }

  /**
   * Delete a game in the DB and return the deleted game
   */
  deleteOne(id) {
    const jeux = parse(this.jsonDbPath, this.defaultJeux);
    const foundIndex = jeux.findIndex((jeu) => jeu.id == id);
    if (foundIndex < 0) return;
    const itemRemoved = jeux.splice(foundIndex, 1);
    serialize(this.jsonDbPath, jeux);

    return itemRemoved[0];
  }

  /**
   * Update a game in the DB and return the updated game
   */
  updateOne(id, body) {
    const jeux = parse(this.jsonDbPath, this.defaultJeux);
    const foundIndex = jeux.findIndex((jeu) => jeu.id == id);
    if (foundIndex < 0) return;
    const updatedJeu = { ...jeux[foundIndex], ...body };

    jeux[foundIndex] = updatedJeu;

    serialize(this.jsonDbPath, jeux);
    return updatedJeu;
  }

  updateRating(id, body) {
    const jeux = parse(this.jsonDbPath, this.defaultJeux);
    const foundIndex = jeux.findIndex((jeu) => jeu.id == id);
    if (foundIndex < 0) return;
    const updatedJeu = { ...jeux[foundIndex], ...body };

    jeux[foundIndex] = updatedJeu;

    serialize(this.jsonDbPath, jeux);
    return updatedJeu;
  }

  getBestGames(){
    const jeux = parse(this.jsonDbPath, this.defaultJeux);
    const tab = jeux.sort((a,b)=>b.rating-a.rating);
    
    return tab;
  }
}

/* 
var name;
var age_ratings;//PEGI RATING 
var category;
var cover; //Difference avec artwork ? 
var first_release_date; //date de sortie 
var involved_companies;//tableau 
var keywords;//referencement ? tableau 
var multiplayer_modes;//Renvoie tableau des differents mode 
var platforms; // Plateforme sur le quel le jeu est sortie 
var rating;// Par rapport a la db
var screenshots;
var summary;//Description du jeu
var url; // lien du site du jeu ? 
var videos;
*/

/*

class jeu{
    constructor(name,age_ratings,category,cover,first_release_date,involved_companies,keywords,multiplayer_modes,
        platforms,rating,screenshots,summary,url,videos){
            
    this.name = name;
    this.age_ratings= age_ratings;
    this.category = category;
   
    this.cover = cover;
    this.first_release_date = first_release_date;
    
    
   
    
    this.involved_companies = involved_companies;
    this.keywords = keywords;
    this.multiplayer_modes = multiplayer_modes;
    this.platforms = platforms;
    this.rating = rating;
    
    this.screenshots = screenshots;
    
    
    
    this.summary = summary;
   
    this.url = url;
    this.videos = videos;
    }
}

*/

module.exports = { Jeux };
