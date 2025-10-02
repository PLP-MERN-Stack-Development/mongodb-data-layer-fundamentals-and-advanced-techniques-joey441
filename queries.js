plp_bookstore
// find all books in a specific genre
db.books.find({genre:'Fiction'})
db.books.find({genre:'Adventure'})
db.books.find({genre:'Political Satire'})
db.books.find({genre:'Fantasy'})
db.books.find({genre:'Gothic Fiction'})
db.books.find({genre:'Romance'})
db.books.find({genre:'Dystopian'})

// find books published after a certain year
db.books.find({
    published_year:{
      $gt:1900
    }
})

// find books by a specific author
db.books.find({author:'George Orwell'})

// update the price of a specific book
db.books.updateOne({
    title:'Animal Farm'
  },{
    $set:{
      price:10
    }
})

// delete a book by title
db.books.deleteOne({
    title:'1984'
})

// query to find books that are in stock and published after 2010
db.books.find({
    in_stock:'true',
    published_year:{
      $gt:2010
    }
})

// projection to return only title, author, and price of all books
db.books.find({},{
    title:1,
    author:1,
    price:1,
    _id:0
})

// implenenting sorting 
db.books.find().sort({
    price:1
})
db.books.find().sort({price:-1})

// pagination
db.books.find().limit(5).skip(0)
db.books.find().limit(5).skip(5)

// aggregation to find average price of books in each genre
db.books.aggregate([{
    $group:{
      _id:'$genre',
      averagePrice:{
        $avg:'$price'
      },
      totalBooks:{
        $sum:1
      }
    }
  }
])

// aggregation to find the author with the most books
db.books.aggregate([{
    $group:{
      _id:'$author',
      bookcount:{
        $sum:1
      }
    }
  },{
    $sort:{
      bookcount:-1
    }
  },{
    $limit:1
  }
])

// aggregation to find the number of books published each decade
db.books.aggregate([{
    $group: {
        _id: {
            $multiply: [ 
                {
                    $floor: {
                        $divide: ["$published_year", 10]
                    }
                },
                10
            ]
        },
        count: {
            $sum: 1
        },
        titles: {
            $push: "$title"
        } 
    }
}, {
    $sort: {
        _id: 1
    }
}])

// creating indexes 
db.books.createIndex({
  title:1
})

// compound index
db.books.createIndex({
  author:1,
  published_year:-1
})

// explain plan for a query
db.books.find({
  author:'George Orwell',
  published_year:{
    $lt:1945
  }
}).explain('executionStats')


