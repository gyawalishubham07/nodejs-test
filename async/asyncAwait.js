import fs from 'fs/promises'

async function getposts(){
    const rawUsers=await fs.readFile('../data/user.json','utf-8');
    const rawPosts=await fs.readFile('../data/post.json',"utf-8");

    const users=JSON.parse(rawUsers);
    const posts=JSON.parse(rawPosts);

    const result=users.map((user)=>{
        return posts.filter(post=>post.userid===user.id);
    })
    console.log(result);
}
getposts();