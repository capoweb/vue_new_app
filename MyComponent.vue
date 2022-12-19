<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
<div class="user-card">
  <h1>Научу зарабатывать 50к евро в год</h1>
  <div class="main-inform">
  <img class="pic1" src="../assets/crypto-riches-ethereum-shutterstock_786039952.jpg" alt="pic">
 <h2><strong>{{ getAuthor }}</strong></h2>
<p> Бизнес-коуч</p>
<p>
  Если этот феномен проходил и в прошлом столетии, тогда Солнце,
  которое мы видим сейчас на 800 км меньше, чем то, которое видели
  наши предки. Возможно, это солнечное сжатие является частью долговременного
  колебания, которое помогает стабилизировать громадный выброс энергии.
</p>
      </div>
  <p>Участников:0</p>
  <ul>
    <li
      v-for="(user,index) in users"
      :key="index"
      >
      {{ getFullName(user) }}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'MyComponent',
  data () {
    return {
      firstName: 'Иван',
      secondName: 'Иванов',
      lastName: 'Иванович',
      users: [
        {
          firstName: 'Илья',
          secondName: 'Иванов',
          lastName: 'Иванович'
        },
        {
          firstName: 'Алекс',
          secondName: 'Иванов',
          lastName: 'Иванович'
        },
        {
          firstName: 'Матвей',
          secondName: 'Иванов',
          lastName: 'Иванович'
        }
      ]
    }
  },
  computed: {
    getAuthor () {
      return this.firstName + ' ' + this.secondName
    }
  },
  methods: {
    getFullName (user) {
      return user.firstName + ' ' + user.secondName
    }
  }
}
</script>

<style>

big{
  margin-left: 20px;
}
.pic1{
  height: 200px;
  width: 300px;
}
</style>

<!-- <template>
<div class="first">
<div>Количество лайков </div>
<button v-on:click="addlike" class="btn1">+</button>
  <input
  type="number"
  :value="likes"
  @input="likesInput($event.target.value)"
  >
  <button v-on:click="addislike" class="btn2">-</button>
</div>

</template>

<script>
export default {
  name: 'MyComponent',
  data () {
    return {
      likes: 0,
      dislikes: 0
    }
  },
  methods: {
    addlike () {
      if (parseInt(this.likes) < 10) {
        this.likes += 1
      }
    },
    addislike () {
      if (parseInt(this.likes) > 1) {
        this.likes -= 1
      }
    }
  }
}

</script>

<style>
.first{
  margin-left: 20px;
  margin-top: 15px;
}

</style> -->
