import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from '../actions'



class Cats extends Component {

  componentDidMount() {

    this.props.fetchCats()


  }

  render() {
    // const { cats } = this.state;
    // const cats = this.state.cats;
    return (
      <div>
        <ul>
          {this.props.cats.map(cat => (
            <li key={cat.id}>{cat.name} <img src={cat.url} alt="" /></li>
          ))}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  cats: state.cats.list
})

const mapDispatchToProps = dispatch => ({
  fetchCats: () => dispatch(fetchCats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cats);
