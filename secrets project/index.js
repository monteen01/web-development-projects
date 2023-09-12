import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;
app.use(express.static("public"));
const web_rul = "https://secrets-api.appbrewery.com/random";
app.get("/",async (req, res) =>{
try {
    const result = await axios.get(web_rul);
    res.render('index.ejs', {
        secret : result.data.secret,
        user : result.data.username,
    });
} catch (error) {
    console.log(error.response.data);
    res.status(500);
}
});

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
});
