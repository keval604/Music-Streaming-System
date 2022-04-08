$(".main").hide();
$(".home").show();

$(".links label").click(function () {
     var page = this.getAttribute("for");
     $(".main").hide();
     $("." + page).show();
})

var music = angular.module('music', []);
music.controller('music_control', function ($scope) {
     $scope.shortcuts = [{
          image_url: './img/belive.png',
          name: 'Beliver',
          artist: 'When chai met tosat',
          song_url : './songs/song1.mp3'
     },{
          image_url: './img/perfect.png',
          name: 'Perfect',
          artist: 'Ed Sheeran',
          song_url: './songs/song3.mp3'
     },{
          image_url: './img/memories.png',
          name: 'Memories',
          artist: 'Maroon 5',
          song_url: './songs/song31.mp3'
     },{
          image_url: './img/my_way.png',
          name: 'On My Way',
          artist: 'Alan Walkar',
          song_url: './songs/song41.mp3'
     },{
          image_url: './img/Love_me.png',
          name: 'Love Me Like You Do ',
          artist: 'Ellie Goulding',
          song_url: './songs/song5.mp3'
     }
     ];
     
     $scope.recents = [{
          image_url: './img/teri_mitti.png',
          name: 'Teri Mitti',
          artist: 'Arko',
          song_url: './songs/teri_mitti.mp3'
     },{
          image_url: './img/tere_sang.png',
          name: "Tere Sang Yaara",
          artist: 'Atif Aslam',
          song_url: './songs/song21.mp3'
     },{
          image_url: './img/dil_meri.png',
          name: 'Dil Meri Na Sune ',
          artist: 'Atif Aslam',
          song_url : './songs/dil_meri.mp3'
     },{
          image_url: './img/behati_hawa.png',
          name: 'Behti Hawa Sa Tha Woh',
          artist: 'Sharman Joshi',
          song_url: './songs/behti_hawa.mp3'
     },{
          image_url: './img/qaafirana.png',
          name: 'Qaafirana',
          artist: 'Amit Trivedi',
          song_url: './songs/qaafirana.mp3'
     },];
     
     $scope.new_songs = [{
          image_url: './img/malang.png',
          name: 'Malanag',
          artist: 'Draft Punk',
          song_url : './songs/song1.mp3'
     },{
          image_url: './img/wishlist.png',
          name: 'wishlist',
          artist: 'someone Punk',
          song_url : './songs/song2.mp3'
     },{
          image_url: './img/broken.png',
          name: 'Bitches Broken Heart',
          artist: 'Bellie Eilish',
          song_url : './songs/song2.mp3'
     },{
          image_url: './img/nayan.png',
          name: 'Nayan',
          artist: 'Dhvani Bhanushali',
          song_url: './songs/song4.mp3'
     },{
          image_url: './img/rustom.png',
          name: 'Dekha Hazaro Dafaa',
          artist: 'Arijit Shingh, Palak Muchhal',
          song_url: './songs/song5.mp3'
     },];
     
     $scope.top_albums = [{
      image_url: './img/paniyon.png',
      name: 'Paniyon Sa',
      artist: 'Atif Aslam, Tulsi Kumar',
      song_url: './songs/paniyon.mp3'
     },{
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
      artist: 'Dhavani Bhanushali',
      song_url: './songs/leja.mp3'
   }, {
      image_url: './img/chogada.png',
      name: 'Chogada',
      artist: 'Aayush Sharma',
      song_url: './songs/chogada.mp3'
     },];
     
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
     track.nextSibling()
}
function change_image(img, name, url) {
     console.log(name);
     document.getElementById('curr_song').innerHTML = name;
     console.log(url);
     let track_img = document.getElementById('cur_image');
     track_img.src = img;
}