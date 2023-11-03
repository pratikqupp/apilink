import DatabaseLinks from '../models/LinkModel.js';

export const getLinks = async (req, res) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const users = await DatabaseLinks.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createLink = async (req, res) => {
    const { appName, playstoreUrl, applestoreUrl } = req.body;
    try {
        const createdLink = await DatabaseLinks.create({ appName, playstoreUrl, applestoreUrl });
        res.status(201).json(createdLink);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern.appName) {
            res.status(409).json({ message: 'The app name must be unique' });
        } else {
            res.status(400).json({ message: error.message });
        }
    }
};


export const getLink = async (req, res) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const appName = req.params.id; // Get the link ID from the request parameters


        const link = await DatabaseLinks.findOne({ appName: appName });

        if (!link) {
            return res.status(404).json({ message: 'Link not found' });
        } else {
            res.status(200).json(link);

        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteLink = async (req, res) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const user = await DatabaseLinks.findByIdAndDelete(req.params.id);

        res.status(204).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateLink = async (req, res) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const user = req.body;

    try {
        const newUser = await DatabaseLinks.findByIdAndUpdate(req.params.id, user);

        res.status(204).json(newUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};