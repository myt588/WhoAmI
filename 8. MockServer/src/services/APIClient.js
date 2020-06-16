class APIClient {
  constructor() {
    this.blogs = [
      'DOM is so fun',
      'Javascript Rocks',
      "You Don't Know JS",
      'Why is JS so weird',
    ];
  }

  getBlogs() {
    return fetch('http://localhost:3000/blogs').then(response => response.json())
  }

  createBlog(blog) {
    return fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: blog })
    })
  }

  deleteBlog(blogId) {
    return fetch(`http://localhost:3000/blogs/${blogId}`, { method: 'DELETE' })
  }
}

export default APIClient;
