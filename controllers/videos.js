import mongoose from 'mongoose';

import PostVideo from '../models/postVideos.js';

//async function
export const getVideos = async (request, response) => {
    try {
        //async because finding stuff in database takes time
        const postVideos = await PostVideo.find();

        //if success, response with postVideos
        response.status(200).json(postVideos);
    } catch (error) {
        //response with error if failed
        response.status(404).json({ message: error.message });
    }
}

export const createVideo = async (request, response) => {
    const { _id, id, title, videoLink, videoDescription } = request.body;

    const newPost = new PostVideo({ _id, id, title, videoLink, videoDescription });

    try {
        await newPost.save();

        response.status(201).json(newPost);
    } catch (error) {

        response.status(409).json({ message: error.message });
    }
}

export const deleteVideo = async (request, response) => {
    const { id } = request.params;

    //Not sure what is this for???
    //if (!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send(`No post with id: ${id}`);

    await PostVideo.findByIdAndRemove(id);

    response.json({ message: "Post deleted successfully." });
}