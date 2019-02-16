const SearchWord = (word) => {
    let reqURL = 'http://lephamhuycuong.000webhostapp.com/crawl.php?word=' + word;
    return fetch(reqURL)
        .then(res => res.json()); 
};
export default SearchWord; 