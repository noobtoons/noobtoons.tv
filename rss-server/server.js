import Parser from 'rss-parser';
import cors from 'cors';
import express from 'express';

const parser = new Parser({
  customFields: {
    feed: ['foo', 'baz'],
    item: ['bar'],
  },
});
const website = [];

(async () => {
  const feed = await parser.parseURL('https://www.reddit.com/.rss');
  console.log(feed.title);

  feed.items.forEach(item => {
    website.push(item.title + ':' + item.link);
  });
})();

let app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send(website);
});

const rssServer = app.listen('1993', () => console.log('listening'));

export default rssServer;