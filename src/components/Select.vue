<template>
    <div>
        <div v-if="loading">
          <div class="lds-ring" v-if="loading"><div></div><div></div><div></div><div></div></div>
        </div>
        <div>
            <br/>
        </div>

        <div v-if="!loading" style="background:#333; color:#fff">
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

        <!-- paginatin -->

        <div v-if="!loading" class="overflow-auto">
          <nav class="pagination" aria-label="...">
              <ul class="pagination">
                  <li class="page-item">
                      <a class="page-link" :href=" `/select/` + this.id + '/' + this.pageNum" @click="previous">Previous</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" :href=" `/select/` + this.id + '/' + '1'">1</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" :href=" `/select/` + this.id + '/' + '2'">2</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" :href=" `/select/` + this.id + '/' + '3'">3</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" :href=" `/select/` + this.id + '/' + this.pageNum" @click="next">Next</a>
                  </li>
              </ul>
          </nav>
          <p class="mt-3">Current Page: {{ currentPage }}</p>
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
      loading: false,
      pageNum: '',
      totalPages: 3,
      currentPage: 1,
      per_page: '',
      id: '',
      page: '',
      totalItems: 8,
    };
  },
  methods: {
        next() {
            let a = parseInt(this.$route.params.page)
            let b = a + 1
            this.pageNum = b
        },
        previous() {
            let c = parseInt(this.$route.params.page)
            let d = c - 1
            this.pageNum = d
        }
    },
  async mounted() {
    this.loading = true
     var id1 = (this.$route.params.id).toString()
     var page1 = (this.$route.params.page).toString()
     var result = await axios.get(
      "https://livescore6.p.rapidapi.com/news/v2/list-by-sport",
      {
        headers: {
          "X-RapidAPI-Key":
            '21072ee344mshb713c007cd94c3fp189b06jsn6444bc28c7e9',
          "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
        },
        params: { category: id1, page: page1 },
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
    this.loading= false;
    this.id = id1;
    this.page = page1;
    this.currentPage = result.data.meta.pagination.current_page;
    this.per_page = result.data.meta.pagination.per_page;
    this.count = result.data.meta.pagination.count;
    this.total_pages = result.data.meta.pagination.total_pages;
    this.total = result.data.meta.pagination.total;
  
    
  },
  computed: {
        rows() {
            return this.data.length
        }
    }
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
  border: 8px solid rgb(12, 4, 4);
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