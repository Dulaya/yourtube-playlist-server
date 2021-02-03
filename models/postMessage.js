import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    _id: String,
    id: String,
    title: String,
    selectedFile: String,
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;