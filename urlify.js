const urlify = (url) => {
    console.log( url
    .trim()
    .split(' ')
    .join('%20'));
}
urlify('mr. fox had a nice day     ')