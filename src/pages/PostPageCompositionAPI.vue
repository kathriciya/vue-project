<template>
  <div>
    <h1>{{ likes }}</h1>
    <button @click="addLike">add like</button>
    <!-- <h1>Страница с постами</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Поиск ..." />
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка постов ...</div>
    <div v-intersection="loadMorePosts" class="observer"></div> -->
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import MyButton from '@/components/UI/MyButton.vue';
import MyDialog from '@/components/UI/MyDialog.vue';
import { ref } from 'vue';
export default {
  components: {
    PostList,
    PostForm,
    MyDialog,
    MyButton,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержанию' },
      ],
    };
  },
  setup(props) {
    const likes = ref(0);
    console.log('likes: ', likes);
    const addLike = () => {
      likes.value += 1;
    };
    return {
      likes,
      addLike,
    };
  },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current__page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: teal;
}
</style>
