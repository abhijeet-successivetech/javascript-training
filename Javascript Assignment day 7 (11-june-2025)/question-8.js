//8. Create a function that fetches data from multiple APIs in parallel 
// and then performs some operation on the combined data, using async/await.

const fetchPost = async () => {

  try {
    const link = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await link.json();
    return data.slice(0,5);
  }
  catch (error) {
    console.log("Error in execution");
  }
};

const fetchAlbum = async () => {
  try {
    const link = await fetch("https://jsonplaceholder.typicode.com/albums");
    const comment = await link.json();
    return comment.slice(0,5);
  }
  catch (error) {
    console.log("Error in fetching album");
  }
};

const fetchUser = async () => {
  try {
    const link = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await link.json();
    return users.slice(0,5);
  }
  catch (error) {
    console.log("Error in fetching user");
  }
};

const fetchDetail = async () => {
  try {
    const postDetails = fetchPost();
    const albumDetails = fetchAlbum();
    const userDetails = fetchUser();
    const [post,album,user] = await Promise.all([postDetails, albumDetails, userDetails]);
    const list = post.concat(album,user);
    console.log(list);
  }
  catch(error){
    console.log("Error while fetching");
  }
}
fetchDetail();