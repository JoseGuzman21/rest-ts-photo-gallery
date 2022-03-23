import { Request, Response } from 'express';
import Photo from './../models/Photo';
import path from 'path';
import fs from 'fs-extra'

export const getPhotos = async (req: Request, res: Response): Promise<Response> => {
    try {
        const photos = await Photo.find();
        return res.status(201).json({ message: 'Product get sucessgel', data: photos });
    } catch (err: any) {
        return res.json({ statusCode: 500, message: err.message });
    }
}

export const getPhoto = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { photoId } = req.params;

        const photos = await Photo.findById(photoId);

        if (!photos) return res.json({ statusCode: 500, message: 'No he comido hoy' });

        return res.status(201).json({ message: 'Product get sucessgel', data: photos });

    } catch (err: any) {
        return res.json({ statusCode: 500, message: err.message });
    }

}

export const createPhoto = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { title, description } = req.body;

        console.log(title);
        console.log(description);

        const newPhoto = {
            title, description, imagePath: req.file?.path || ''
        }

        const addedPhoto = new Photo(newPhoto);

        const savedPhoto = await addedPhoto.save();

        return res.json({ message: 'Added photo', data: savedPhoto });
    } catch (err: any) {
        return res.json({ statusCode: 500, message: err.message });
    }
}

export const updatePhoto = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { photoId } = req.params;
        const { title, description } = req.body;

        const photoUpdated = await Photo.findByIdAndUpdate(photoId, {
            title, description
        }, { new: true })

        return res.json({ message: 'Updated photo', data: photoUpdated });
    } catch (err: any) {
        return res.json({ statusCode: 500, message: err.message });
    }
}

export const deletedPhoto = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { photoId } = req.params;

        const deletedUser = await Photo.findByIdAndRemove(photoId);

        if (deletedUser) {
            fs.unlink(path.resolve(deletedUser.imagePath));
        }

        return res.json({ message: 'Deleted photo', data: deletedUser });

    } catch (err: any) {
        return res.json({ statusCode: 500, message: err.message });
    }
}