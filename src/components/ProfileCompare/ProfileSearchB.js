import React, { Component } from 'react';
import ProfileResultB from './ProfileResultB'
import './ProfileCompare.css';


class ProfileSearchB extends Component {

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
          equipe: 'Los Angeles Lakers',
          taille: '2.03m',
          experience: 14,
          age: 34,
          stat1: 10,
          stat2: 20,
          stat3: 30,
          stat4: 40,
          stat5: 50,
          stat6: 60,
          stat7: 70,
          stat8: 80,
          rO: 75,
          rD: 50,
          rT: 125,
          twoPoint: 15,
          threePoint: 41,
          totalPaniers: 56
        },
        {
          name: "Dwyane Wade",
          firstname: "Dwyane",
          lastname: "Wade",
          poste: 'Meneur',
          poids: '98kg',
          equipe: 'Miami Heat',
          taille: '1.98m',
          experience: 15,
          age: 36,
          stat1: 70,
          stat2: 50,
          stat3: 90,
          stat4: 5,
          stat5: 8,
          stat6: 98,
          stat7: 12,
          stat8: 56,
          rO: 50,
          rD: 75,
          rT: 270,
          twoPoint: 30,
          threePoint: 26,
          totalPaniers: 90
        },
      ],
      ProfileResult: false,
      items: [],
      updateItemB: [],
      value: "2018-2019",
      opacity: 1
    }
    this.filterList = this.filterList.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }
  componentWillMount() {
    this.setState({ items: this.state.initialItems.map(item => (item.name)) })
  }
  componentDidMount() {
    document.querySelector('.PlayerB ul').style.visibility = "hidden"
  }
  filterList(event) {
    if (event.target.value !== "") {
      var updatedList = this.state.initialItems.map(item => (item.name))
      updatedList = updatedList.filter(function (item) {
        return item.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({ items: updatedList });
      console.log(this.state.value);
      document.querySelector('.PlayerB ul').style.visibility = "visible"
    }
    else {
      document.querySelector('.PlayerB ul').style.visibility = "hidden"
    }
  }
  onChangeUpdateItemB(newItem) {
    this.setState({ updateItemB: newItem })
  }

  onSelectChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    if (this.state.ProfileResult === false) {
      return (
        <div className="Player-container">
          <h2 className="Player-title">
            Joueur B
          </h2>
          <p className="description">Choississez le joueur ou l’équipe que vous souhaitez comparez, si vous souhaitez seulement analyser un joueur glissez le rond vers la droite.</p>
          {this.renderSearch()}
        </div>
      );
    }
    else {
      return (
        <ProfileResultB renderSearch={this.renderSearch()} updateItemB={this.state.updateItemB} onChangeUpdateItemB={this.onChangeUpdateItemB.bind(this)} />
      );
    }
  }

  renderSearch() {
    return (
      <div className="Search-all-container">
        <div className="Search-container">
          <input type="text" placeholder="Recherche ..." onChange={this.filterList} />
          <select onChange={this.onSelectChange} value={this.state.value}>
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

              return <li className="list-group-item" style={{ backgroundImage: "url(" + "https://tsnimages.tsn.ca/ImageProvider/PlayerHeadshot?seoId=" + item.replace(' ', '-').toLowerCase() + ")" }}
                onMouseOver={(e) => { var list = document.querySelectorAll('.PlayerB ul li'); list[i].textContent = item; list[i].style.opacity = 0.5 }}
                onMouseOut={() => { var list = document.querySelectorAll('.PlayerB ul li'); list[i].textContent = ""; list[i].style.opacity = 1 }}
                onClick={(event) => { const Players = this.state.initialItems.filter(player => player.name === event.currentTarget.dataset.category); this.setState({ updateItemB: Players[0], ProfileResult: true }); var inputValue = document.querySelector('.PlayerB .Search-all-container input'); inputValue.value = Players[0].name }}
                data-category={item} key={item}></li>
            })}
        </ul>
      </div>
    )
  }
}

export default ProfileSearchB;