<template>
    <div>
        <div id="top-stories">
            Top Stories
        </div>
        <!-- <div v-for="list in topStories" v-bind:key="list.id">
            {{list.title}}
        </div> -->
        <div class="gallery" v-for="list in topStories" v-bind:key="list.id">
            <a :href="`https://www.livescore.com/`+list.url">
                <img :src="list.mainMedia.thumbnail.url"/>
            </a>  
            <div class="decs">{{list.title}}</div>          
        </div>

        
        <div id="featured">
            Featured
        </div>
        <div class="gallery" v-for="data in featuredArticles" :key="data.id">
            <a :href="`https://www.livescore.com/`+data.url">
                <img :src="data.mainMedia.thumbnail.url"/>
            </a>  
            <div class="decs">{{data.title}}</div>
            
        </div>
    <!-- <div class="gallery">
            <a href="#">
                <img src=""/>
            </a> 
            <div class="decs">Add a description</div>            
        </div>
        <div class="gallery">
            <a href="#">
                <img src=""/>
            </a>  
            <div class="decs">Add a description</div>           
        </div>
        <div class="gallery">
            <a href="#">
                <img src=""/>
            </a>  
            <div class="decs">Add a description</div>           
        </div>
        <div class="gallery">
            <a href="#">
                <img src=""/>
            </a> 
            <div class="decs">Add a description</div>            
        </div>
        <div class="gallery">
            <a href="#">
                <img src=""/>
            </a>  
            <div class="decs">Add a description</div>           
        </div>
        <div class="gallery">
            <a href="#">
                <img src=""/>
            </a>  
            <div class="decs">Add a description</div>           
        </div> -->
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TopStories",
  data() {
    return {
        topStories:[],
        featuredArticles:[]
    };
  },
  mounted(){
    this.getData();
  },

  methods: {
   async getData() {
      let result  = await axios.get("https://livescore6.p.rapidapi.com/news/v2/list",{
        headers: {
          "X-RapidAPI-Key":"2aa4c180a5msh4f3138b3ab5ddd2p19169ejsn9d3fe5173899",
          "X-RapidAPI-Host": "livescore6.p.rapidapi.com"
        }
    }
      );

      
      //   axios
      //     .request(options)
      //     .then(function(response) {
          //       console.log(response.data);
    //     })
    //     .catch(function(error) {
        //       console.error(error);
        //     });
        console.log(result.data)
        this.topStories= result.data.topStories
        this.featuredArticles= result.data.featuredArticles
    }
  }
}

</script>

<style scoped>
#top-stories {
  background-color:#333;
  text-align: left;
  color: aliceblue;
  padding: 7px
}
.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
  height: 210px;
  cursor: pointer;
}
.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

.decs {
  padding: 15px;
  text-align: center;
}
#featured{
  background-color:#333;
  text-align: left;
  color: aliceblue;
  padding: 7px
}

</style>