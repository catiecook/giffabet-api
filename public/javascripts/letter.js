function getLetter(letter) {
  var animateLetter = {
    container: document.getElementById('letter'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/letters/' + letter + '.json'
  };

    var anim = bodymovin.loadAnimation(animateLetter);
}
getLetter(letter);
