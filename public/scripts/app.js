const state = {
  user: null,
}

verifyUser();
//   .then(updateUser)
//   .catch(err => console.log(err));
//
// function updateUser(userCheck) {
//   if (userCheck.status === 200) {
//     state.user = userCheck.currentUser._id;
//   }
//   else {
//     state.user = null;
//   }
// }