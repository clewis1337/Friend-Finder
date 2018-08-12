//DATA

var peopleArray = [
  {
    "name":"Steve Irwin",
    "photo":"https://pmcvariety.files.wordpress.com/2018/04/steve-irwin.jpg?w=1000&h=562&crop=1",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"Billy Mays",
    "photo":"http://teaching.monster.com/nfs/teaching/attachment_images/0007/9789/alg_billy_mays_crop380w.jpg?1253109834",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"Bob Ross",
    "photo":"https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Bob_at_Easel.jpg/220px-Bob_at_Easel.jpg",
    "scores":[
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = peopleArray;
