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
    commentElement.classList.add('comment');

    const avatarSection = document.createElement('section');
    avatarSection.classList.add('comments__feed-avatar');
    const avatarPlaceholder = document.createElement('div');
    avatarPlaceholder.classList.add('avatar-placeholder');
    avatarSection.appendChild(avatarPlaceholder);

    const contentSection = document.createElement('section');
    contentSection.classList.add('comments__feed-content');

    const authorDateContainer = document.createElement('div');
    authorDateContainer.classList.add('comments__feed-authorDate');

    const authorTxt = document.createElement('p');
    authorTxt.innerText = comment.author;

    const dateDT = document.createElement('p');
    dateDT.innerText = comment.date;

    authorDateContainer.appendChild(authorTxt);
    authorDateContainer.appendChild(dateDT);

    const contentTxt = document.createElement('p');
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

    const nameInput = event.target.fullName.value;
    const commentInput = event.target.comment.value;

    const newComment = {
        author: nameInput,
        date: new Date().toLocaleDateString(),
        content: commentInput
    };

    comments.push(newComment);
    renderCommentCard();

    nameInput.value = '';
    commentInput.value = '';
}

commentForm.addEventListener('submit', handleFormSubmit);
renderCommentCard();
createImageElements(9);
