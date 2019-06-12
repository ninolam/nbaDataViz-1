class api {
    async getCategories(Inputvalue, year) {
      const response = await fetch('http://18.184.166.182:8081/search/' + year + '/' + Inputvalue);
      const json = await response.json();
      return json;  
    }
    async getCategoriesStats(id) {
      const response = await fetch(`http://18.184.166.182:8081/player/` + id);
      const json = await response.json();
      return json;
    }
  }
  
  export default new api();