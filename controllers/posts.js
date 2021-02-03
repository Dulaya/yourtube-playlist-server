import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

//async function
export const getPosts = async (request, response) => {
    try {
        //async because finding stuff in database takes time
        const postMessages = await PostMessage.find();

        //if success, response with postMessages
        response.status(200).json(postMessages);
    } catch (error) {
        //response with error if failed
        response.status(404).json({ message: error.message });
    }
}

export const createPost = async (request, response) => {
    const { _id, id, title, selectedFile } = request.body;

    const newPost = new PostMessage({ _id, id, title, selectedFile });

    try {
        await newPost.save();

        response.status(201).json(newPost);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

export const deletePost = async (request, response) => {
    const { id } = request.params;

    //Not sure what is this for???
    //if (!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    response.json({ message: "Post deleted successfully." });
}