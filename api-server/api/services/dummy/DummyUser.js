const faker = require('faker');
const THRESHOLD_DUMMY_USER = 100;

module.exports = {
  startDummyUsers
};

/**
 * @name startDummyUsers
 * @description
 * Dummy user based threshold.
 */
async function startDummyUsers() {
  sails.log.debug('Do:: startDummyUsers');

  let totalUser = await User.count();

  if(totalUser >= THRESHOLD_DUMMY_USER) {
    sails.log.debug('Touch to max threshold dummy user number.', THRESHOLD_DUMMY_USER);
    sails.log.debug('Done:: startDummyUsers');
    return true;
  }

  let users = getDummyUserList(THRESHOLD_DUMMY_USER - totalUser);

  for(let i in users) {
    await User.create(users[i]);
  }

  sails.log.debug('Done:: startDummyUsers');
}

function getDummyUserList(limit) {
  let users = [];

  while (limit > 0) {
    let user = {
      email: faker.internet.email(),
      username: faker.internet.userName() + faker.random.word(),
      fullName: faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"),
      aboutMe: faker.lorem.paragraphs(),
      profile: faker.lorem.paragraphs(),
      profileImage: faker.image.imageUrl(),
      profileCoverImage: faker.image.business(),
      password: faker.lorem.sentences(),
      isActive: true,
      roles: ['user']
    };

    users.push(user);
    limit--;
  }

  return users;
}


