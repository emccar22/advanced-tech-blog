const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    description: 'wasdwasdwasdwasd',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    description: 'wasdwasdwasdwasd',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    description: 'wasdwasdwasdwasd',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    description: 'wasdwasdwasdwasd',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    description: 'wasdwasdwasdwasd',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    description: 'wasdwasdwasdwasd',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    description: 'wasdwasdwasdwasd',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    description: 'wasdwasdwasdwasd',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    description: 'wasdwasdwasdwasd',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    description: 'wasdwasdwasdwasd',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    description: 'wasdwasdwasdwasd',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    description: 'wasdwasdwasdwasd',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    description: 'wasdwasdwasdwasd',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    description: 'wasdwasdwasdwasd',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    description: 'wasdwasdwasdwasd',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    description: 'wasdwasdwasdwasd',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    description: 'wasdwasdwasdwasd',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    description: 'wasdwasdwasdwasd',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    description: 'wasdwasdwasdwasd',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    description: 'wasdwasdwasdwasd',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
