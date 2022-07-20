const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let likedPosts = [];

posts.forEach((post) => {
    let containerDom = document.getElementById('container'); // MAIN CONTAINER

    let postWrapper = document.createElement('div')
    postWrapper.classList.add('post'); // POST --->

    let postHeader = document.createElement('div')
    postHeader.classList.add('post__header'); //POST-HEADER ->
    postWrapper.append(postHeader);//-> APPESO A POST

    let postMeta = document.createElement('div');
    postMeta.classList.add('post-meta'); //POST-META ->
    postHeader.append(postMeta); //-> APPESO A POST-HEADER

    let postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta__icon');//POST-META-ICON --> 

    let postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');//POST-META-DATA -->

    postMeta.append(postMetaIcon, postMetaData);//--> APPESI A POST-META

    let profilePic = document.createElement('img');
    profilePic.classList.add('profile-pic'); //PROFILE-PIC ->
        profilePic.src = post.author.image;

    postMetaIcon.append(profilePic);// -> APPESA A POST-META-ICON

    let postMetaAuthor = document.createElement('div');
    postMetaAuthor.classList.add('post-meta__author'); //AUTORE-->
        postMetaAuthor.innerText = post.author.name;

    let postMetaTime = document.createElement('div'); 
    postMetaTime.classList.add('post-meta__time'); //DATA-->
        postMetaTime.innerText = post.created;
    
    postMetaData.append(postMetaAuthor, postMetaTime);//--> APPESI A POST-META-TIME
    //FINE HEADER

    let postText = document.createElement('div');
    postText.classList.add('post__text'); //POST TEXT-->
        postText.innerText = post.content;

    let postImage = document.createElement('div');
    postImage.classList.add('post__image');//POST IMAGE WRAPPER-->

    postWrapper.append(postText, postImage);//--> APPESI A POST
    
    let postImageInnerImg = document.createElement('img');//POST IMAGE
        postImageInnerImg.src = post.media;

    postImage.append(postImageInnerImg);

    let postFooter = document.createElement('div');
    postFooter.classList.add('post__footer'); //FOOTER->

    postWrapper.append(postFooter);//-> APPESO A POST

    let likes = document.createElement('div');
    likes.classList.add('likes', 'js-likes');

    postFooter.append(likes);

    let likesCta = document.createElement('div');
    likesCta.classList.add('likes__cta');

    let likesCounter = document.createElement('div');
    likesCounter.classList.add('likes__counter');
        likesCounter.innerHTML = `Piace a <b id='like-counter-${post.id}' class='js-likes-counter'>${post.likes}</b> persone`;

    likes.append(likesCta, likesCounter);

    let likeButton = document.createElement('a');
    likeButton.classList.add('like-button', 'js-like-button');
    likeButton.href = '#';
    likeButton.setAttribute('data-postid', post.id);
        likeButton.addEventListener('click', 
            function (event) {
                event.preventDefault();
                let attribute = likeButton.getAttribute('data-postid');
                if (!likedPosts.includes(attribute)) {
                    this.classList.add('like-button--liked');
                    likesCounter.innerHTML = `Piace a <b id='like-counter-${post.id}' class='js-likes-counter'>${post.likes + 1}</b> persone`;
                    likedPosts.push(attribute);
                } else {
                    this.classList.remove('like-button--liked');
                    likesCounter.innerHTML = `Piace a <b id='like-counter-${post.id}' class='js-likes-counter'>${post.likes}</b> persone`;
                    likedPosts.pop(attribute);
                }

            });


    likesCta.append(likeButton);

    let icon = document.createElement('i');
    icon.classList.add('like-button__icon', 'fas', 'fa-thumbs-up');
    icon.ariaHidden = 'true';

    let likeButtonLabel = document.createElement('span');
    likeButtonLabel.classList.add('like-button__label');
        likeButtonLabel.innerText = 'Mi piace';

    likeButton.append(icon, likeButtonLabel);


    containerDom.append(postWrapper);// ---> APPESO AL MAIN CONTAINER
}); 
