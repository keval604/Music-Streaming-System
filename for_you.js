var for_you = angular.module('for_you', []);
for_you.controller('for_you_control', function ($scope) {
   $scope.for_you = [{
      image_url: './img/bom.png',
      name: 'Bom Diggy Diggy',
      artist: 'Zack Knight, Jasmin Walia',
      song_url: './songs/bom.mp3'
   }, {
      image_url: './img/akh.png',
      name: 'Akh Lad Jaave ',
      artist: 'Tanishk_ Bagchi',
      song_url: './songs/akh.mp3'
   }, {
      image_url: './img/illegal.png',
      name: 'Illegal Weapon',
      artist: 'Garry S',
      song_url: './songs/illegal.mp3'
   }, {
      image_url: './img/nach.png',
      name: 'Nach Meri Rani',
      artist: 'Guru Randhawa',
      song_url: './songs/nach.mp3'
   }, {
      image_url: './img/genda.png',
      name: 'Genda Phool',
      artist: 'Badshah',
      song_url: './songs/genda.mp3'
   },];
});

function change_song(msc) {
   let track = document.getElementById('player');
   track.src = msc;
   track.play();
}
function change_image(img) {
   let track = document.getElementById('cur_image');
   track.src = img;
}