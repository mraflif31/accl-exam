import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class Home extends Component {
  render ()
    {
      return (
        // <div className="Home">
        //   <p>
        //     Terima kasih, datang kembali.
        //   </p>
        // </div>
        <ul>
          {this.props.articles.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      );
    }
}

Home.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = state => {
  return { articles: state.articles };
};

export default connect(mapStateToProps)(Home);
