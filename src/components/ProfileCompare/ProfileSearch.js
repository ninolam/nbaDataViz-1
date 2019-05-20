import React, { Component } from 'react';
import {ProfileCompare} from './ProfileCompare'
import ProfileResult from './ProfileResult'
import './ProfileCompare.css';


class ProfileSearch extends Component {

  constructor() {
    super()
    this.state = {
      initialItems: [
        {
          name: "Lebron James",
          firstname: "Lebron",
          lastname: "James",
          poste: 'Arriere',
          poids: '113kg',
          equipe:'Los Angeles Lakers',
          taille:'2.03m',
          experience:14,
          age:34
        },
        {
          name: "Dwyane Wade",
          firstname: "Dwyane",
          lastname: "Wade",
          poste: 'Meneur',
          poids: '98kg',
          equipe:'Miami Heat',
          taille:'1.98m',
          experience:15,
          age:36
        },
      ],
      ProfileResult: false,
      items: [],
      updateItem: [],
      anotherItem: []
    }
    this.filterList = this.filterList.bind(this);
  }


  componentWillMount() {
    this.setState({ items: this.state.initialItems.map(item => (item.name)) })
  }
  filterList(event) {
    var updatedList = this.state.initialItems.map(item => (item.name))
    updatedList = updatedList.filter(function (item) {
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  }
  onChangeUpdateItem(newItem){
    this.setState({ updateItem: newItem})
  }


  render() {
    if (this.state.ProfileResult === false) {
    return (
      <div className="Player-container">
        <h2 className="Player-title">
          Joueur 1
              {/* {this.state.PlayerId} */}
        </h2>
        <p className="description">Choississez le joueur ou l’équipe que vous souhaitez comparez, si vous souhaitez seulement analyser un joueur glissez le rond vers la droite.</p>
        <div className="Search-container">
          <input type="text" placeholder="Recherche ..." onChange={this.filterList} />
          <select>
            <option value="2018-2019">2018-2019</option>
            <option value="2017-2018">2017-2018</option>
            <option value="2016-2017">2016-2017</option>
            <option value="2015-2016">2015-2016</option>
            <option value="2014-2015">2014-2015</option>
            <option value="2013-2014">2013-2014</option>
            <option value="2012-2013">2012-2013</option>
            <option value="2011-2012">2011-2012</option>
            <option value="2010-2011">2010-2011</option>
          </select>
        </div>
        <ul className="list-group">
          {
            this.state.items.map((item, i) => {
              return <li className="list-group-item" onClick={(event) => {
                const Players = this.state.initialItems.filter(player => player.name == event.currentTarget.dataset.category);
                this.setState({ updateItem: Players[0], ProfileResult:true })
                  }
                }
               data-category={item} key={item}>{item} </li>
            })
          }
        </ul>
      </div>
    );
        }
        else{
          return (
          <ProfileResult updateItem={this.state.updateItem} onChangeUpdateItem={this.onChangeUpdateItem.bind(this)}/>
          );
        }
  }
}



export default ProfileSearch;