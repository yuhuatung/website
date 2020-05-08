<template>
  <div class="jobs">
    <span>This is a jobs page</span>
    <JobCard />
  </div>
</template>

<script>
// @ is an alias to /src
import json from '@/assets/json/jobs.json'
// import Logo from '@/assets/svg/logo.svg';
import JobCard from '@/components/JobCard.vue'

export default {
  name: 'Jobs',
  components: {
    JobCard
  },
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
<style lang="scss">
.jobs{
  margin: -56px auto;
  width: 1243px;
  height: 800px;
}
</style>
