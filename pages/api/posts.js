import { generatePostsData } from '../../utils/data';

export default async (req, res) => {
  const {
    query: { page }
  } = req;
  const data = await generatePostsData(20, page);

  res.status(200).json({ data });
};
