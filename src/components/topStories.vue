<template>
    <div>
            <div class="top-stories-header" style="background:#333; color:#fff">
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
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
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
</style>