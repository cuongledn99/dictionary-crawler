const SearchImage = (keyword) => {
    let reqURL = "https://www.googleapis.com/customsearch/v1?cx=000532003877336451454:hhumf1o9yyo&key=AIzaSyD0Nq83zHJAJwjInmBCs8AgmhEUXSXOnlo&num=6&searchType=image&q="+keyword;
    return fetch(reqURL)
        .then(res => res.json());
};
export default SearchImage;