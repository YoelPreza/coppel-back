const express = require('express');
const CommentsContoller = require('../controllers/commentsController');

class CommentsRoutes{
    constructor(){
        this.router =  express.Router();
        this.commentsContoller = new CommentsContoller();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.post('/', this.commentsContoller.createComment.bind(this.commentsContoller))
        this.router.get('/', this.commentsContoller.getComment.bind(this.commentsContoller))
        this.router.get('/:folio', this.commentsContoller.getCommentByFolio.bind(this.commentsContoller))
    }
    getRouter () {
        return this.router;
    }
}

module.exports = new CommentsRoutes().getRouter();