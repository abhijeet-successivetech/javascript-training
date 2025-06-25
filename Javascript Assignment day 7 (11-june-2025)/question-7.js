//Q7. Create a function that performs multiple asynchronous operations in parallel using async/await 
// and waits for all of them to complete before returning the results.

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

    const ans = await Promise.all([postDetails, albumDetails, userDetails]);
    console.log(ans);
  }
  catch(error){
    console.log("Error while fetching");
  }
}
fetchDetail();