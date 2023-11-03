import express from 'express';

import { getLinks, createLink, getLink, deleteLink, updateLink } from '../controllers/users.js';

const router = express.Router();

router.get('/', getLinks);
router.post('/', createLink);
router.get('/:id', getLink);
router.delete('/:id', deleteLink);
router.patch('/:id', updateLink);

export default router;