const models = require("../models");

async function test(req, res, next) {
  // There are three types of relationship
  // 1. one to one (1:1): eg. a user has one address or and the address belongs to one user. => (hasone)
  // 2. one to many (1:M): eg. a user has many posts. => (hasMany)
  // 3. many to many (M:M): eg. a post belongs to many categories. => (belongsToMany)

  // one to one relation ------------------------------------
//   const user = await models.User.findByPk(12, {
//     include: [models.Address],
//   });

//   const address = await models.Address.findByPk(1, {
//     include:[models.User]
//   })

//   if (address) {
//     res.status(200).json({
//       message: "Success",
//       address: address,
//     });
//   }

// one to many relationship ------------------------------------
//   const user = await models.User.findByPk(1, {
//     include:[models.Post]
//   })
//   if (user) {
//     res.status(200).json({
//       message: "Success",
//       user: user,
//     });
//   }

//   const post = await models.Post.findByPk(1, {
//     include:[models.User]
//   })
//   if (post) {
//     res.status(200).json({
//       message: "Success",
//       post: post,
//     });
//   }

// many to many relationship ------------------------------------

const post = await models.Post.findByPk(1, {
    include:[models.Category]
})
  
  if (post) {
    res.status(200).json({
      message: "Success",
      post: post,
    });
  }
}


module.exports = {
  test,
};
