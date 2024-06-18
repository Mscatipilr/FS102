let photoList = ['photo 1', 'photo 2', 'photo 3', 'photo 4', 'photo 5'];

let photoSlideShow = {
    photoList: photoList,
    currentPhotoIndex: 0,

    nextPhoto: function() {
        if (this.currentPhotoIndex !== this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of slideshow');
        }
    },
    prevPhoto: function() {
        if (this.currentPhotoIndex !== 0) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of slideshow');
        }
    },
    getCurrentPhoto: function() {
        console.log(this.photoList[this.currentPhotoIndex]);
    }
};

