<template>
    <div>
      <div>
        <div class="lds-ring" v-if="loading"><div></div><div></div><div></div><div></div></div>
      </div>


            <div v-if="!loading" class="top-stories-header" style="background:#333; color:#fff">
                <h2>Top Stories</h2>
            </div>
            <div class="container-fluid top-stories-main">
                <div class="row">
                    <div class="col-3" v-for="list in topStories" :key="list.id">
                        <!-- <div class="col-3 gallery" v-for="list in topStories" v-bind:key="list.id"> -->

                        <div>
                            <!-- <a :href="`https://www.livescore.com/`+list.url"> -->
                                <img :src="list.mainMedia.thumbnail.url"/>
                            <!-- </a>   -->
                            <div class="decs">
                                {{list.title}}
                            </div>          
                        </div>
                    </div>

                </div>
            </div>

            <!-- featured stories -->
          <div v-if="!loading" style="background:#333; color:#fff">
              <h2>Featured</h2>
          </div>

           <div class="container-fluid top-stories-main">
            <div class="row">
                <div class="col-3" v-for="data in featuredArticles" :key="data.id">
                    <!-- <div class="col-3 gallery" v-for="list in topStories" v-bind:key="list.id"> -->

                    <div>
                        <!-- <a :href="`https://www.livescore.com/`+data.url"> -->
                            <img :src="data.mainMedia.thumbnail.url"/>
                        <!-- </a>   -->
                        <div class="decs">
                            {{data.title}}
                        </div>          
                    </div>
                 </div>

            </div>
           </div>

           <!-- categories -->

          <div v-if="!loading" style="background:#333; color:#fff">
            <h2>Categories</h2>
          </div>

          <div class="container-fluid top-stories-main">
            <div class="row">
                <div class="col-3" v-for="types in categories" :key="types.id">
                    <!-- <div class="col-3 gallery" v-for="list in topStories" v-bind:key="list.id"> -->

                    <div>
                        <!-- <a :href="`https://www.livescore.com/`+types.url">
                            <img :src="types.mainMedia.thumbnail.url"/>
                        </a>   -->
                        <div class="decs">
                            <a :href=" `/select/`+ types.id +`/` + `1`" >
                                <!-- <div v-for="opt in categoriesList" :key="opt.id">
                                    <div>{{Opt.id}}</div>
                                </div> -->
                               <img src='../assets/fallback.jpg' style="height:200px; width:180px"/>
                               <div>{{types.title}}</div> 
                            </a>
                        </div>          
                    </div>
                </div>

            </div>
          </div>






            <!-- <div class="gallery" v-for="list in topStories" v-bind:key="list.id">
                <div>
                    <a :href="`https://www.livescore.com/`+list.url">
                        <img :src="list.mainMedia.thumbnail.url"/>
                    </a>  
                    <div class="decs">
                        {{list.title}}
                    </div>          
                </div>
            </div> -->

    </div>
</template>

<script>  
import axios from "axios";
export default {
  name: "TopStories",
  data() {
    return {
      topStories: [],
      featuredArticles: [],
      categories: [],
      categoriesList:[],
      loading: false
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      this.loading = true
      let result = await axios.get(
        "https://livescore6.p.rapidapi.com/news/v2/list",
        {
          headers: {
            "X-RapidAPI-Key":
            '21072ee344mshb713c007cd94c3fp189b06jsn6444bc28c7e9',
            "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
          },
        }
      );

      // axios
      //   .request(options)
      //   .then(function(response) {
      //     console.log(response.data);
      //   })
      //   .catch(function(error) {
      //     console.error(error);
      //   });
      console.log(result.data);
      this.topStories = result.data.topStories;
      this.featuredArticles = result.data.featuredArticles;
      this.categories = result.data.categories;
      this.loading = false; 
    },
  },
};
</script>

<style scoped>
header{
  background-color: #333;
  text-align: left;
  color: aliceblue;
  padding: 7px;
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
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid rgb(255, 255, 255);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(7, 3, 3) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>