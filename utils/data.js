import faker from 'faker';

const randomBoolean = () => Math.random() >= 0.5;
const randomTimeOut = () => Math.floor(Math.random() * 1000);
const generateVotesString = () => {
  const num = faker.random.number();

  if (num >= 1000) return `${String(num).slice(0, 2).split('').join('.')}k`;
};

export const generatePostsData = (size = 0, page = 1) => {
  return new Promise(resolve => {
    if (!size) return resolve([]);

    setTimeout(() => {
      const posts = Array(size)
        .fill()
        .map((_, i) => {
          return {
            id: i + 1,
            votes: generateVotesString(),
            avatar: faker.image.avatar(),
            title: faker.lorem.sentence(),
            subreddit: faker.lorem.word(),
            image: randomBoolean() ? faker.image.image() : null,
            comments: faker.random.number(),
            text: faker.lorem.paragraph(),
            userName: faker.internet.userName()
          };
        });

      resolve(posts);
    }, randomTimeOut());
  });
};
