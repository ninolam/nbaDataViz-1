import React, { Component, createRef } from 'react';
import ProfileResultB from './ProfileResultB'
import api from '../helpers/api'
import './ProfileCompare.css';


class ProfileSearchB extends Component {

  constructor() {
    super()
    this.state = {
      ProfileResult: false,
      updateItemB: [],
      updateItemMoreB: [],
      value: "2018-19",
      opacity: 1,
      items: [],
      error: false,
      inputValue: ""
    }
    this.filterList = this.filterList.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  searchInput = createRef();

  toto() {
    this.setState({
      profileResult: false
    });
  }


  async filterList(event){
    
    console.log(event.target.value, this.searchInput.current.value);
    
    if (this.searchInput.current.value !== "") {
      var data = await api.getCategories(this.searchInput.current.value, this.state.value);      
        if (data.status === "Not Found") {
          this.setState({ error: true });
        } else {
          //let tmpProfileResult = true;
          this.setState({ items: data, error: false, profileResult: false});
        }
    }
    //this.setState({
      //    inputValue: event.target.value
        // })
  }
  onChangeupdateItemB(newItem) {
    this.setState({ 
      updateItemB: newItem,
      updateItemMoreB: newItem 
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
          <p className="description mb-10">Choississez le joueur ou l’équipe que vous souhaitez comparez, si vous souhaitez seulement analyser un joueur glissez le rond vers la droite.</p>
          {this.renderSearch()}
        </div>
      );
    }
    else {
      return (
        <ProfileResultB toto={() => this.toto()} renderSearch={this.renderSearch()} updateItemMoreB={this.state.updateItemMoreB} updateItemB={this.state.updateItemB} onChangeupdateItemB={this.onChangeupdateItemB.bind(this)} />
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
        <ul className={this.state.profileResult ? "hidden" : "list-group"}>
          
          {
            this.state.items.map((item, i) => {
                  if (this.state.error === false) {
                    return (<li className="list-group-item mb-10" 
                                style={{ backgroundImage: "url(" + "https://tsnimages.tsn.ca/ImageProvider/PlayerHeadshot?seoId=" + item.name.replace(' ', '-') + ")" }}
                                onMouseOver={(e) => { var list = document.querySelectorAll('.PlayerB ul li'); list[i].textContent = item.name; list[i].style.opacity = 0.5 }}
                                onMouseOut={() => { var list = document.querySelectorAll('.PlayerB ul li'); list[i].textContent = ""; list[i].style.opacity = 1 }}
                                onClick={async (event) => { const Players = this.state.items.filter(player => player.name === event.currentTarget.dataset.category);
                                  var dataMore = await api.getCategoriesStats(item.id_player_stat);    
                                  this.setState({updateItemMoreB: dataMore, updateItemB: Players[0], ProfileResult: true }); var inputValue = document.querySelector('.PlayerB .Search-all-container input'); inputValue.value = Players[0].name }}
                                data-category={item.name}></li>);
                  }  
              
            })} 
        </ul>
      </div>
    )
  }
}

export default ProfileSearchB;