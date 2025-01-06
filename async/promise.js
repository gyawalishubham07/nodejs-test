import fs from 'fs/promises'
import { json } from 'stream/consumers';

fs.readFile('../data/user.json','utf-8')
.then((data)=>{
    const users=JSON.parse(data);

    fs.readFile('../data/post.json','utf-8')
    .then((data1)=>{
        const posts=JSON.parse(data1);

        const result=users.map((user)=>{
            return posts.filter((post)=> post.userid===user.id);
        })
        console.log(result);
    })
    .catch(error1=>console.log(error1))
})
.catch(error=> console.log(error))