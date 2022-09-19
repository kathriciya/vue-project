<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Поиск ..." />
    <div class="app__btns">
      <my-button>Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
    <div v-else>Идет загрузка постов ...</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import MyButton from '@/components/UI/MyButton.vue';
import MyDialog from '@/components/UI/MyDialog.vue';
import { usePosts } from '@/hooks/usePosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';
import useSortedPosts from '@/hooks/useSortedPosts';
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
    const { posts, isPostsLoading, totalPages } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    return {
      posts,
      isPostsLoading,
      totalPages,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts,
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
