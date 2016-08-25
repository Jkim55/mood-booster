var express = require('express');
var router = express.Router();


var quotes = [
  {
    text: "You're the Best!",
    url: "https://hd.unsplash.com/photo-1415125721330-116ba2f81152"
  },
  {
    text: "Keep your face to the sunshine and you cannot see a shadow.",
    url: "https://hd.unsplash.com/photo-1470472304068-4398a9daab00"
  },
  {
    text: "Yesterday is not ours to recover, but tomorrow is ours to win or lose",
    url: "https://hd.unsplash.com/photo-1470376619031-a6791e534bf0"
  },
  {
    text: "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
    url: "https://hd.unsplash.com/photo-1444583791700-0bd8d26df657"
  },
  {
    text: "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
    url: "https://hd.unsplash.com/photo-1442366469206-a5360d1ef961"
  },{
    text: "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
    url: "https://hd.unsplash.com/reserve/YEc7WB6ASDydBTw6GDlF_antalya-beach-lulu.jpg"
  },
  {
    text: "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
    url: "https://hd.unsplash.com/photo-1470653503930-01819ee7ec83 "
  },
  {
    text: "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
    url: "https://hd.unsplash.com/photo-1429277158984-614d155e0017"
  }
]

/* GET home page. */

router.get('/page1', function(req, res, next) {
  res.render('page1', { quotes: quotes[1] });
});
router.get('/page2', function(req, res, next) {
  res.render('page2', { quotes: quotes[2] });
});
router.get('/page3', function(req, res, next) {
  res.render('page3', { quotes: quotes[3] });
});
router.get('/page4', function(req, res, next) {
  res.render('page4', { quotes: quotes[4] });
});
router.get('/page5', function(req, res, next) {
  res.render('page5', { quotes: quotes[5] });
});
router.get('/page6', function(req, res, next) {
  res.render('page6', { quotes: quotes[0] });
});
router.get('/page7', function(req, res, next) {
  res.render('page7', { quotes: quotes[6] });
});
router.get('/page8', function(req, res, next) {
  res.render('page8', { quotes: quotes[7] });
});

module.exports = router;
