document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
    const postList = document.getElementById("post-list");

    const fetchUsers = () => {
        fetch('http://localhost:3000/list-users')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    userList.innerHTML = ''; 
                    data.forEach(username => {
                        const li = document.createElement('li');
                        li.textContent = username;
                        userList.appendChild(li);
                    });
                } else {
                    userList.innerHTML = 'Error retrieving user list.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                userList.innerHTML = 'Failed to fetch users.';
            });
    };

    const fetchPosts = () => {
        fetch('http://localhost:3000/list-posts')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    postList.innerHTML = ''; 
                    data.forEach(post => {
                        const li = document.createElement('li');
                        li.textContent = post.title; 

                        const deleteButton = document.createElement('button');
                        deleteButton.textContent = 'Delete';
                        deleteButton.addEventListener('click', () => deletePost(post.id)); 

                        li.appendChild(deleteButton);
                        postList.appendChild(li);
                    });
                } else {
                    postList.innerHTML = 'Error retrieving post list.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                postList.innerHTML = 'Failed to fetch posts.';
            });
    };

    const deletePost = (postId) => {
        fetch(`http://localhost:3000/delete-post/${postId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Post deleted successfully.');
                fetchPosts(); 
            } else {
                alert('Failed to delete post.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to delete post.');
        });
    };


    document.getElementById('clear-users-button').addEventListener('click', () => {
        fetch('http://localhost:3000/clear-users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: 'admin', password: 'adminpassword' }) 
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('All users have been cleared.');
                userList.innerHTML = ''; 
            } else {
                alert('Failed to clear users.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to clear users.');
        });
    });

    document.getElementById('clear-posts-button').addEventListener('click', () => {
        fetch('http://localhost:3000/clear-posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: 'admin', password: 'adminpassword' }) 
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('All posts have been cleared.');
                postList.innerHTML = ''; 
            } else {
                alert('Failed to clear posts.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to clear posts.');
        });
    });

 
    fetchUsers();
    fetchPosts();
});
