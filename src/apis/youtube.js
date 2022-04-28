import axios from "axios";

const KEY='AIzaSyBsBlfWcM44IZLOOYXJD4tzTAhyedx3sO0';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResult:5,
        key:KEY
    }
});