/* TODO: Implement the resolvers for Mutation

Remember the resolver function signature:
fieldName: (obj, args, context, info) => result;

You will need to implement the resolver for Mutation.toggleLike.
Check the data sources for the data fetching functions you'll need to complete the exercise.
Hint: Only authenticated users can like movies. You will need to access the user from somewhere in your resolver.
Try throwing an error if the user is not logged in!
*/

module.exports = {
  Mutation: {
    toggleLike: () => null,
    login: (_, { email }) => new Buffer(email).toString('base64'),
  },
};
