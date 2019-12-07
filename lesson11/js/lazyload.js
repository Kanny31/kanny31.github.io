//get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]')
//parameters set for the IntersectionObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
        };
    };

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver ((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
          });
        }, imgOptions);
//loop through images, load if necessary
imagesToLoad.forEach((img) => {
    observer.observe(img);
});
}   else{ //load all images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

/* citation: Help from Mckenzie Lewsis and Johathan Lundquist */ 