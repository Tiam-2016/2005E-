<template>
  <div class="about">
    <my-header class="about_header">
      <span>图书商城</span>
      <span class="my_books" @click="goMyBooks">我的书架</span>
    </my-header>
    <my-input class="search" placeholder="输入书名搜索" v-model="content"></my-input>
    <ul class="book_list">
      <my-card class="my_book" v-for="item in books" :key="item.id">
        <div class="book_top_info">
          <img class="book_img" :src="item.img" alt="">
          <p class="book_desc">{{item.desc}}</p>
        </div>
        <div class="book_bottom_info">
          <h3 :style="{
            color: $store.state.backColor
          }">{{item.name}}</h3>
          <span class="book_add" @click="addMyBox(item)" v-back="$store.state.backColor">+</span>
        </div>
      </my-card>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import myInput from '@/components/myInput/myInput'
import myCard from '@/components/myCard/myCard'
import myHeader from '@/components/myHeader/myHeader'
export default {
  name: 'About',
  components: {
    myInput,
    myCard,
    myHeader
  },
  data() {
    return {
      books: [],
      content: '',
      $books: null
    }
  },
  created() {
    this.getBooks()
  },

  methods: {
    getBooks() {
      axios.get('data.json').then(res => {
        this.books = res.data
        this.$books = JSON.stringify(res.data)
      })
    },

    addMyBox(val) {
      this.$store.commit('changeMyBooks', val)
    },

    goMyBooks() {
      this.$router.push('/mybooks')
    }
  },

  watch: {
    content(to, from) {
      this.books = JSON.parse(this.$books).filter(item => {
        return item.name.includes(to)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .book_img {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .about_header {
    position: relative;
  }
  .about_header .my_books {
    font-size: 14px;
    color: cornflowerblue;
    position: absolute;
    right: 10px;
    top: 0;
  }
  .search {
    width: 100%;
    height: 40px;
    border: none;
    background-color: #ccc;
    color: #333;
    font-size: 18px;
    outline: none;
    padding-left: 15px;
  }
  .book_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  .book_list .my_book {
    flex-basis: 50%;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .book_top_info {
    width: 100%;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 220px;
  }
  .book_desc {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: 16px;
    text-indent: 2em;
    color: #ccc;
  }
  .book_bottom_info {
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: space-between;
  }
  h3 {
    font-size: 16px;
  }
  .book_add {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    color: #fff;
    border-radius: 50%;
  }
</style>
