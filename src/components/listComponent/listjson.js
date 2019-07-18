import React from 'react';

class Listjson extends React.Component {
  state = {
    isLoading: true,
    posts: [],
    error: null
  };

  fetchPosts() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          posts: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }



  componentDidMount() {
    this.fetchPosts();
  }

  shuffleArray(posts) {
    let i = 0;
    for (; i < 5; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = posts[i];
      posts[i] = posts[j];
      posts[j] = temp;
    }
    return posts;
  }

  render() {
    const { isLoading, posts, error } = this.state;
    return (
      <React.Fragment>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          posts.map(post => {
            const { title, id,  } = post;
            return (
              <div className="list-item" key={post}>
                <p>{title}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

export default Listjson;