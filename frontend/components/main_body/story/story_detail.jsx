import React from 'react';
import { withRouter, Link } from 'react-router';
import CommentsContainer from './comments_container';
import LikesContainer from './likes_container';
import FollowsContainer from '../author/follows_container';


class Story extends React.Component {
  constructor(props){
    super(props);
    this.comments = this.comments.bind(this);

  }

  componentDidMount(){
    this.props.fetchStory(this.props.params.id);
    this.props.fetchAllLikes(this.props.params.id);
  }

  comments(id){
    if (this.props.currentUser) {
      return ;
    } else {
      return <h2>You must be logged in to see comments</h2>;
    }
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  signedInCheck(){
    if (this.props.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  render(){
    const id = this.props.location.pathname.slice(1);
    const author = this.props.details.author;
    const title = this.props.details.title;
    const body = this.props.details.body;
    const imageUrl = this.props.details.image_url;
    const avatarUrl = this.props.details.avatar_url;
    const description = this.props.details.description;
    const comments = this.props.details.comments;
    const authorId = this.props.details.author_id;
    const subtitle = this.props.details.subtitle;
    let commentSection;
    if (comments) {
      commentSection = comments.map(comment => (comment.comment));
    }

    return (
      <div className="background">
        <div className='story'>
          <section className="author">
            <img className="avatar" src={avatarUrl}></img>
            <div className="info">
              <div className="author-follow">
                <h2 className="name"><Link to={`/authors/${authorId}`}>{author}</Link></h2>
                <FollowsContainer />
              </div>
              <h3 className="description">{description}</h3>
            </div>
          </section>

          <section className="body">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img className="header-image" src={imageUrl} />
            <p>{body}</p>
          </section>

          <section className="likes">
            <LikesContainer />
          </section>
        </div>

        <div className="responses">

        </div>

          <CommentsContainer storyId={id}/>
          {this.props.children}
      </div>
    );
  }

}

export default withRouter(Story);
