<template>
    <div>
        <div style="background:#333; color:#fff">
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
                            <a :href=" `/select/`+ types.id " >
                                <!-- <div v-for="opt in categoriesList" :key="opt.id">
                                    <div>{{Opt.id}}</div>
                                </div> -->
                               <img src='../assets/load.png' style="height:200px; width:180px"/>
                               <div>{{types.title}}</div> 
                            </a>
                        </div>          
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
     import axios from "axios";
export default {
  name: "Categories",
  data() {
    return {
      categories: [],
      categoriesList:[]
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
      this.categories = result.data.categories;
    //   this.categoriesList= result.data.categories.id
    },
  },
};
</script>

<style scoped>

</style>