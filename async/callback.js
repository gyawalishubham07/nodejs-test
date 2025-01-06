import fs from 'fs';

// fs.readFile('../data/user.json','utf-8',(error,data)=>{
//     if(error) console.log(error);
    
//     const user=JSON.parse(data);
//     console.log(user);
// });

// fs.readFile('../data/post.json','utf-8',(error1,data1)=>{
//     if(error1) console.log(error1)

//     const post=JSON.parse(data1);
//     console.log(post);
// })

// //display posts of each user
// fs.readFile('../data/user.json','utf-8',(error,data)=>{
//     if(error) console.log(error);
    
//     const users=JSON.parse(data);
//     fs.readFile('../data/post.json','utf-8',(error1,data1)=>{
//         if(error1) console.log(error1)
    
//         const posts=JSON.parse(data1);

//         const result=users.map((user)=>{
//             return posts.filter((post)=> post.userid===user.id);
//           })
//           console.log(result);
     
//     })
 
// });

//comments of each post
fs.readFile('../data/post.json','utf-8',(error,data)=>{
    if(error) console.log(error); 

    const posts=JSON.parse(data);   //JSON.parse=>Converts a JSON string back into a JavaScript object or array

    fs.readFile('../data/comments.json','utf-8',(error1,data1)=>{
        if(error1) console.log(error1);

        const comments=JSON.parse(data1);

        const result1=posts.map((post)=>{
            return comments.filter((comment)=>  comment.postid===post.id);
        })
        console.log(result1);
    })
})
