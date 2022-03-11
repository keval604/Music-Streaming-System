var podcast = angular.module('podcast', []);
podcast.controller('podcast_control', function ($scope) {
   $scope.top_podcasts = [{
      image_url: './img/simple.png',
      name: 'Simple ken',
      artist: 'By Kenny Sebastian',
      song_url: './songs/song1.mp3'
   }, {
      image_url: './img/science.png',
      name: 'Science Vs',
      artist: 'By Gimlet',
      song_url: './songs/song2.mp3'
   }, {
      image_url: './img/mission.png',
      name: 'Mission ISRO',
      artist: 'By Harsha Bhogle',
      song_url: './songs/song3.mp3'
   }, {
      image_url: './img/get.png',
      name: 'Get Sleepy',
      artist: 'By get sleepy',
      song_url: './songs/song4.mp3'
   }, {
      image_url: './img/future.png',
      name: 'The Alux.com Podcast',
      artist: 'By alux.com',
      song_url: './songs/song5.mp3'
   },];
   $scope.educational = [{
      image_url: './img/purpose.png',
      name: 'On Purpose',
      artist: 'by jay shetty',
      song_url: './songs/song1.mp3'
   }, {
      image_url: './img/mindset.png',
      name: 'The Mindset Mentor',
      artist: 'Rob Dial and Kast Media',
      song_url: './songs/song2.mp3'
   }, {
      image_url: './img/think.png',
      name: 'Think fast, Talk smart',
      artist: 'Draft Punk',
      song_url: './songs/song3.mp3'
   }, {
      image_url: './img/knowladge.png',
      name: 'The Knowladge Podcast',
      artist: 'The Knowladge',
      song_url: './songs/song4.mp3'
   }, {
      image_url: './img/motivation.png',
      name: 'Motivation Daily',
      artist: 'Motivercity',
      song_url: './songs/song5.mp3'
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