const comments = [
    {
        "author": "Victor Pinto",
        "date": "11/02/2023",
        "content": "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        "author": "Christina Cabrera",
        "date": "10/28/2023",
        "content": "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        "author": "Isaac Tadesse",
        "date": "10/20/2023",
        "content": "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }];


function createImageElement(idx) {
    const img = document.createElement('img');
    img.className = `photo-gallery-${idx}`;
    img.alt = `Photo Gallery ${idx}`;
    return img;
}

function createImageElements(ctr) {
    const gallery = document.getElementById('photo-gallery');
    gallery.innerHTML = '';

    for (let i = 1; i <= ctr; i++) {
        const img = createImageElement(i);
        gallery.appendChild(img);
    }
}

const commentForm = document.getElementById('comment-form');
const commentsFeed = document.getElementById('comments-feed');

function createCommentCard(comment) {
    const commentElement = document.createElement('article');
    commentElement.classList.add('comments-feed');

    const avatarSection = document.createElement('label');
    avatarSection.classList.add('comments__feed-avatar');
    avatarSection.innerText = comment.author.charAt(0).toUpperCase();

    const contentSection = document.createElement('section');
    contentSection.classList.add('comments__feed-content');

    const authorDateContainer = document.createElement('div');
    authorDateContainer.classList.add('comments__feed-authorDate');

    const spanTxt = document.createElement('span');
    spanTxt.classList.add('body');
    const strong = document.createElement('strong');
    strong.innerText = comment.author;
    spanTxt.appendChild(strong);

    const dateDT = document.createElement('label');
    dateDT.classList.add('body');
    dateDT.innerText = comment.date;

    authorDateContainer.appendChild(spanTxt);
    authorDateContainer.appendChild(dateDT);

    const contentTxt = document.createElement('p');
    contentTxt.classList.add('body');
    contentTxt.innerText = comment.content;

    contentSection.appendChild(authorDateContainer);
    contentSection.appendChild(contentTxt);

    commentElement.appendChild(avatarSection);
    commentElement.appendChild(contentSection);


    return commentElement;
}

function renderCommentCard() {
    commentsFeed.innerHTML = '';
    comments.forEach(comment => {
        const commentCard = createCommentCard(comment);
        commentsFeed.appendChild(commentCard);
    });
}



function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = event.target.fullName;
    const commentInput = event.target.comment;

    const newComment = {
        author: nameInput.value,
        date: new Date().toLocaleDateString(),
        content: commentInput.value
    };

    comments.unshift(newComment);
    renderCommentCard();

    nameInput.value = '';
    commentInput.value = '';
}

function validateNameInput(event) {
    const nameInput = event.target;
    const regex = /^[A-Za-z\s]*$/;

    if (!regex.test(nameInput.value)) {
        alert("Invalid name");
        nameInput.classList.add('error');
        return;
    } else {
        nameInput.classList.remove('error');
    }
}

document.querySelector('input[name="fullName"]').addEventListener('input', validateNameInput);

commentForm.addEventListener('submit', handleFormSubmit);
renderCommentCard();
createImageElements(9);
