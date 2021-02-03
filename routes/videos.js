import express from 'express';

import { getVideos, createVideo, deleteVideo } from '../controllers/videos.js';

const router = express.Router();

router.get('/', getVideos);
router.post('/', createVideo);
router.delete('/:id', deleteVideo);

export default router;