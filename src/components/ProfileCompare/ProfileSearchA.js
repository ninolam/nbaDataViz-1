import React, { Component, createRef } from 'react';
import ProfileResultA from './ProfileResultA'
import api from '../helpers/api'
import './ProfileCompare.css';


class ProfileSearchA extends Component {

  constructor() {
    super()
    this.state = {
      ProfileResult: false,
      updateItemA: [],
      updateItemMoreA: [],
      value: "2018-19",
      opacity: 1,
      items: [],
      error: false,
      writing : false
    }
    this.filterList = this.filterList.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  searchInput = createRef();



  async filterList(event){
    
    console.log(event.target.value, this.searchInput.current.value);
    
    if (this.searchInput.current.value !== "") {
      var data = await api.getCategories(this.searchInput.current.value, this.state.value);      
        if (data.status === "Not Found") {
          this.setState({ error: true });
        } else {
          this.setState({ items: data, error: false, writing: true});
        }
    }
    else {
      this.setState({ writing: false});
    }

  }
  onChangeupdateItemA(newItem) {
    this.setState({ 
      updateItemA: newItem,
      updateItemMoreA: newItem 
     })
  }

  onSelectChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    
    if (this.state.ProfileResult === false) {
      
      return (
        <div className="Player-container">
          <h2 className="Player-title mb-10">
            Joueur A
          </h2>
          <p className="description mb-10">Choisissez le joueur que vous souhaitez comparez, si vous souhaitez seulement analyser un joueur faites glisser le rond vers la droite.</p>
          {this.renderSearch()}
        </div>
      );
    }
    else {
      return (
        <ProfileResultA ref={(ProfileResultA) => {window.ProfileResultA = ProfileResultA}} renderSearch={this.renderSearch()} updateItemMoreA={this.state.updateItemMoreA} updateItemA={this.state.updateItemA} onChangeupdateItemA={this.onChangeupdateItemA.bind(this)} />
      );
    }
  }
  renderSearch() {

    return (
      <div className="Search-all-container">
        <div className="Search-container">
          <input  type="text" placeholder="Recherche ..." onChange={this.filterList} ref={this.searchInput} />
          <select onChange={this.onSelectChange} value={this.state.value}>
            <option value="2018-19">2018-2019</option>
            <option value="2017-18">2017-2018</option>
            <option value="2016-17">2016-2017</option>
            <option value="2015-16">2015-2016</option>
            <option value="2014-15">2014-2015</option>
            <option value="2013-14">2013-2014</option>
            <option value="2012-13">2012-2013</option>
            <option value="2011-12">2011-2012</option>
            <option value="2010-11">2010-2011</option>
          </select>
        </div>
        <div className={this.state.ProfileResult && this.state.writing === false ? "hidden" : "list-group"}>
          
          {
            this.state.items.map((item) => {
                  if (this.state.error === false) {
                    return (<div className="list-group-item" 
                          onClick={async (event) => { const Players = this.state.items.filter(player => player.name === event.currentTarget.dataset.category);
                          var dataMore = await api.getCategoriesStats(item.id_player_stat);    
                          this.setState({updateItemMoreA: dataMore, updateItemA: Players[0], ProfileResult: true, writing: false });
                          this.searchInput.current.value = Players[0].name;
                          console.log(dataMore);
                        }}
                          lo
                          data-category={item.name}>
                            <img src={"https://tsnimages.tsn.ca/ImageProvider/PlayerHeadshot?seoId=" + item.name.replace(' ', '-')}/>
                            <p>{item.name}</p>
                            <img className="logo-team-player" src={item.logo}/>
                          </div>);
                  }  
              
            })} 
        </div>
      </div>
    )
  }
}

export default ProfileSearchA;