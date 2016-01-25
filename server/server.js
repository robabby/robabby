var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 4500;
var mongoose = require('mongoose');
var dbURI = 'mongodb://rabby:root@ds030827.mongolab.com:30827/robabby';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}

var ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.connect(dbURI);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

var postSchema = new mongoose.Schema({
	title: String,
	content: String,
  author: String,
  date: { type: Date, default: Date.now }
});

var PostModel = mongoose.model('post', postSchema);
var test = new PostModel({
  title: 'Test', content: 'Lorem Ipsum', author: 'Rob Abby', date: Date.now()
});
// View the blog with all posts
app.get('/api/posts', function(req,res) {
  test.save(function(err, test) {
    console.log('Attempting to save \'test\'');
    if (err) {
      return console.log('There was an error: ', err);
    }
    console.log('\'test\' was saved!');
  });
  PostModel.find({},function(err, docs) {
		if(err) {
			res.send(err);
		}
		else {
			res.send(docs);
		}
	});
});

// View a single post
app.get('/api/posts/:id', function (req, res){
  return PostModel.findById(req.params.id, function (err, post) {
    if (!err) {
      return res.send(post);
    } else {
      return console.log(err);
    }
  });
});

// Create a new post
app.post('/api/posts/create', function (req, res){
  var post;
  console.log("POST: ");
  console.log(req.body);
  post = new PostModel({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: req.body.date
  });
  post.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(post);
});

// Update a post
app.put('/api/posts/:id', function (req, res){
  return PostModel.findById(req.params.id, function (err, post) {
    post.title = req.body.title;
    post.description = req.body.description;
    post.style = req.body.style;
    return post.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(post);
    });
  });
});

// Delete a post
app.delete('/api/posts/:id', function (req, res){
  return PostModel.findById(req.params.id, function (err, post) {
    return post.remove(function (err) {
      if (!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
});

app.listen('4500');
