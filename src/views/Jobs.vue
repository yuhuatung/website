<template>
  <div class="jobs">
    <h1>This is a jobs page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import json from '@/assets/json/jobs.json'

export default {
  name: 'Jobs',
  data(){
    return{
      myJson: json
    }
  },
  mounted(){
    console.log(this.myJson)
  }
}
</script>
