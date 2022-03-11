var album = angular.module('search', []);
let found = false;
album.controller('Search_control', function ($scope) {
   $scope.songs = [{
      image_url: './img/paniyon.png',
      name: 'Paniyon Sa',
      artist: 'Atif Aslam, Tulsi Kumar',
      song_url: './songs/paniyon.mp3'
   }, {
      image_url: './img/makhna.png',
      name: 'Makhna',
      artist: 'Tanishk Bagchi',
      song_url: './songs/Makhna.mp3'
   }, {
      image_url: './img/taare.png',
      name: 'Taare Gin',
      artist: 'A.R. Rahman',
      song_url: './songs/taare.mp3'
   }, {
      image_url: './img/leja.png',
      name: 'Leja Re',
      artist: 'Dhavani Bhanushali, Tanishk Bagchi',
      song_url: './songs/leja.mp3'
   }, {
      image_url: './img/chogada.png',
      name: 'Chogada',
      artist: 'Aayush Sharma',
      song_url: './songs/chogada.mp3'
      }
   ];

   $scope.playlist = [{
      image_url: './img/leja.png',
      name: 'Leja Re',
      artist: 'Dhavani Bhanushali, Tanishk Bagchi',
      song_url: './songs/leja.mp3'
   }, {
      image_url: './img/chogada.png',
      name: 'Chogada',
      artist: 'Aayush Sharma',
      song_url: './songs/chogada.mp3'
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

function addtoPlaylist(song){
   alert("hello");
}

album.directive('random', function() {
   return function(scope, element, attrs) {
     
     if (scope.$last){
       console.log("im the last!");
     }
   };
 })