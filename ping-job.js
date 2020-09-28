const axios = require('axios')


const ping = async () => {
  try {
    await axios.get("https://strapi-portfolio-kb.herokuapp.com/pages")
  } catch (err) {
    console.log(err)
  }
 
}
ping()