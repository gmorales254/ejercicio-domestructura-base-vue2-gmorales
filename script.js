new Vue({
  el: '#app',
  
  data () {
    return {
      courses: [],
      title: "",
      time: 0,
    }
  },
  
  computed: {
    totalTime(){
      let total = 0;
      this.courses.forEach(element => {
        total += element.time
      });
      return total
    }
  },
  
  methods: {
    addCourse(){
      this.courses.push({
        title: this.title ? this.title : "curso de ...(no definido)",
        time: Number(this.time)
      })
    }
  }
})