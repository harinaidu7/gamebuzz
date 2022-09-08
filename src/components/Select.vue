<template>
    <div>
        <div>
            <br/>
        </div>

        <div style="background:#333; color:#fff">
            <h2>Categories:{{this.title}}</h2>
        </div>

        <div class="container-fluid top-stories-main">
            <div class="row">
                <div class="col-3 gallery" v-for="opt in select" :key="opt.id">
                    <!-- <div class="col-3 gallery" v-for="list in topStories" v-bind:key="list.id"> -->

                    <div>
                        <a :href=" 'https://www.livescore.com/en/native/news/' + '-' +  opt.seo.slug  + '-' + opt.id " target="_blank">
                         <img :src="opt.image.data.urls.uploaded.thumbnail" alt=""/>   
                        </a>  
                        <div class="decs">
                               <!-- <img :src="types.mainMedia.thumbnail.url"/> -->
                               <div>{{opt.title}}</div> 
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
  name: "Select",
  data() {
    return {
      select: [],
      title: "",
    };
  },
  async mounted() {
    let id1 = this.$route.params.id;
    let result = await axios.get(
      "https://livescore6.p.rapidapi.com/news/v2/list-by-sport",
      {
        headers: {
          "X-RapidAPI-Key":
            '21072ee344mshb713c007cd94c3fp189b06jsn6444bc28c7e9',
          "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
        },
        params: { category: id1, page: "1" },
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
    this.select = result.data.data;
    this.title = result.data.data[0].category.title;
  },
};
</script>

<style scoped>
header {
  background-color: #333;
  text-align: left;
  color: aliceblue;
  padding: 7px;
}
.gallery {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 212px;
    height: 253px;
    cursor: pointer;

}
.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
    width: 150px;
    height: 120px;
}

.decs {
  padding: 15px;
  text-align: center;
}
</style>