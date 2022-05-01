const BASE_URL = 'https://thatcopy.pw/catapi/rest/';


async function getCats() {
    try{
  fetch(BASE_URL)
    .then(res => {
        return res.json();
    })
    .then(res => {
        document.body.style.backgroundImage = `url(${res.webpurl})`;
        url= res.webpurl;
        return res.webpurl;
    });
    } catch(err) {
        console.log(err);
    }
}
document.getElementById('change').addEventListener('click', getCats);
getCats();
