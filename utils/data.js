import faker from 'faker';

const randomBoolean = () => Math.random() >= 0.5;
const randomTimeOut = () => Math.floor(Math.random() * 1000);

const generateNumString = num => {
  if (num >= 1000) return `${String(num).slice(0, 2).split('').join('.')}k`;

  return num;
};

const randomImage = () => {
  const min = 1;
  const max = 20;
  const int = Math.floor(Math.random() * (max - min + 1)) + min;

  return `/images/${int}.jpg`;
};

export const generatePostsData = (size = 0, page = 1) => {
  return new Promise(resolve => {
    if (!size) return resolve([]);

    setTimeout(() => {
      const posts = Array(size)
        .fill()
        .map((_, i) => {
          return {
            id: faker.random.uuid(),
            votes: generateNumString(faker.random.number()),
            avatar: faker.image.avatar(),
            title: faker.lorem.sentence(),
            subreddit: faker.lorem.word(),
            image: randomBoolean() ? randomImage() : null,
            comments: generateNumString(faker.random.number()),
            text: faker.lorem.paragraph(),
            userName: faker.internet.userName()
          };
        });

      resolve(posts);
    }, randomTimeOut());
  });
};
