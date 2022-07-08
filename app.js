const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline cirle');
    const video = document.querySelector('.vid-container video')

    //Sounds
    const sounds = document.querySelectorAll('.sound-picker button');

    //Time Display
    const timeDisplay = document.querySelector('.time-display');
    //Get the length of the outline
    const outlineLength = outline.getTotalLength();
    //Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outlinke.style.strokeDashoffset = outlineLength;

    //Play sound
    play.addEventListener('click', () => {
        song.play();
    })

    //create a function specific to stop and play the sounds
    if(song.paused){
        
    };
};

app();