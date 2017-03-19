import { connect } from 'react-redux';
import Main from './main';
import { fetchStory } from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => ({
  stories: state.stories
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchStory: id => dispatch(fetchStory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);