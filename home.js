var music = angular.module('music', []);
music.controller('music_control', function ($scope) {
     $scope.shortcuts = [{
          image_url: './img/belive.png',
          name: 'Beliver',
          artist: 'When chai met tosat',
          song_url : './songs/song1.mp3'
     },{
          image_url: './img/broken.png',
          name: 'Bitches Broken Heart',
          artist: 'Bellie Eilish',
          song_url : './songs/song2.mp3'
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
          image_url: './img/jaan.png',
          name: "Jaan 'Nisar",
          artist: 'Asses Kaur',
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
          image_url: './img/yaar.png',
          name: 'Tu Hi Yaar Mera',
          artist: 'Arijit Singh, Neha Kakkar',
          song_url: './songs/song3.mp3'
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
     $scope.top_podcast = [{
          image_url: './img/solar.png',
          name: 'Ved Sharma',
          artist: 'Draft Punk',
          song_url : './songs/song1.mp3'
     },{
          image_url: './img/solar.png',
          name: 'hello',
          artist: 'someone Punk',
          song_url : './songs/song2.mp3'
     },{
          image_url: './img/solar.png',
          name: 'Solar Sailer',
          artist: 'Draft Punk',
          song_url: './songs/song3.mp3'
     },{
          image_url: './img/solar.png',
          name: 'Solar Sailer',
          artist: 'Draft Punk',
          song_url: './songs/song4.mp3'
     },{
          image_url: './img/solar.png',
          name: 'Solar Sailer',
          artist: 'Draft Punk',
          song_url: './songs/song5.mp3'
     },];
});

function change_song(msc, playlist) {
     let track = document.getElementById('player');
     console.log(playlist)
     track.src = msc;
     track.play();
     track.nextSibling()
}
function change_image(img) {
     let track = document.getElementById('cur_image');
     track.src = img;
}