import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    _id: String,
    id: String,
    title: String,
    videoLink: String,
    videoDescription: String,
});

var PostVideo = mongoose.model('PostVideo', postSchema);

export default PostVideo;