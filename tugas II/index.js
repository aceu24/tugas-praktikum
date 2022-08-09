//const {createApp, ref} = Vue;
//const app = createApp({
  //setup(){
    //const dataCovid = ref ({});
    //const orangSembuh = ref("");
    //const url ="https://data.covid19.go.id/public/api/update.json";

    //const getDataCovid = async () => {
      //const res = await axios.get(url);
      //dataCovid.value = res.data.update;
      //orangSembuh.value = dataCovid.value.penambahan.jumlah_sembuh;
     // return res;
   // }

  //onMounted(async() => {
    //await getDataCovid();
  //});
  //return {
    //getDataCovid,
    //dataCovid,
    //orangSembuh,

  //}
  //}
//})
const {createApp, ref} = Vue;
const App = createApp({
  setup(){
    const url ="https://randomuser.me/api/";
    const profileUser = ref("");
    const nameUser  = ref("");
    const name = ref ("");

    const generateUser = async () => {
      const resUser = await axios.get(url);
      nameUser.value = resUser.data.results[0].name.first;
      name.value = resUser.data.results[0].name.last;
      profileUser.value = resUser.data.results[0].picture.large;
    }
    return{
      profileUser,
      nameUser,
      generateUser,
      name,
    }
  }
})

App.mount("#app");