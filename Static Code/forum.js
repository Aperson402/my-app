document.getElementById('new-post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let title = document.getElementById('post-title').value;
    let content = document.getElementById('post-content').value;

    let newPost = document.createElement('div');
    newPost.className = 'post';

    let postTitle = document.createElement('h2');
    postTitle.className = 'post-title';
    postTitle.innerText = title;

    let postContent = document.createElement('p');
    postContent.className = 'post-content';
    postContent.innerText = content;

    newPost.appendChild(postTitle);
    newPost.appendChild(postContent);

    document.querySelector('.forum').appendChild(newPost);

    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
});
