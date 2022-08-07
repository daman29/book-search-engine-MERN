const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models/index.js");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async(parent, {username, email, password}) => {
        const user = await User.create({username, email, password});
    }
  }
};

module.exports = resolvers;
