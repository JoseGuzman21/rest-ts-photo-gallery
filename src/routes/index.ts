import { Router } from 'express';
import { createPhoto, deletedPhoto, getPhotos, getPhoto, updatePhoto } from '../controllers/photo.controller';
import multer from '../libs/multer';

const router = Router();

router.route('/').get(getPhotos)

router.route('/:photoId').get(getPhoto)

router.route('/').post(multer.single('image'), createPhoto)

router.route('/:photoId').put(updatePhoto)

router.route('/:photoId').delete(deletedPhoto)

export default router;