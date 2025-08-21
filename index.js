require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// User Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    maxlength: 100
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100
  },
  displayName: {
    type: String,
    trim: true,
    maxlength: 50
  },
  location: {
    type: String,
    trim: true,
    maxlength: 100
  },
  country: {
    type: String,
    trim: true,
    maxlength: 50
  },
  biography: {
    type: String,
    trim: true,
    maxlength: 500
  },
  socialLinks: {
    facebook: { type: String, trim: true },
    twitter: { type: String, trim: true },
    instagram: { type: String, trim: true },
    youtube: { type: String, trim: true },
    linkedin: { type: String, trim: true },
    website: { type: String, trim: true }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

// Track Schema
const trackSchema = new mongoose.Schema({
  trackName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  trackId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  bpm: {
    type: Number,
    min: 1,
    max: 300
  },
  trackKey: {
    type: String,
    trim: true
  },
  trackPrice: {
    type: Number,
    min: 0,
    default: 0
  },
  musician: {
    type: String,
    trim: true,
    maxlength: 100
  },
  trackType: {
    type: String,
    required: true,
    trim: true
  },
  moodType: {
    type: String,
    trim: true
  },
  energyType: {
    type: String,
    trim: true
  },
  instrument: {
    type: String,
    trim: true
  },
  generatedTrackPlatform: {
    type: String,
    trim: true
  },
  trackImage: {
    type: String,
    trim: true
  },
  trackFile: {
    type: String,
    trim: true
  },
  about: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  publish: {
    type: String,
    default: 'Private',
    trim: true
  },
  genreCategory: {
    type: String,
    trim: true
  },
  beatCategory: {
    type: String,
    trim: true
  },
  trackTags: {
    type: String,
    trim: true
  },
  seoTitle: {
    type: String,
    trim: true,
    maxlength: 200
  },
  metaKeyword: {
    type: String,
    trim: true,
    maxlength: 500
  },
  metaDescription: {
    type: String,
    trim: true,
    maxlength: 500
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Track = mongoose.model('Track', trackSchema);

// Genre Schema
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 100
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500
  },
  color: {
    type: String,
    trim: true,
    default: '#7ED7FF'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Genre = mongoose.model('Genre', genreSchema);

// Beat Schema
const beatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 100
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500
  },
  color: {
    type: String,
    trim: true,
    default: '#E100FF'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Beat = mongoose.model('Beat', beatSchema);

// Tag Schema
const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 100
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500
  },
  color: {
    type: String,
    trim: true,
    default: '#FF6B35'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Tag = mongoose.model('Tag', tagSchema);

// Sound Kit Schema
const soundKitSchema = new mongoose.Schema({
  kitName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  kitId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  category: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    min: 0,
    default: 0
  },
  producer: {
    type: String,
    trim: true,
    maxlength: 100
  },
  kitType: {
    type: String,
    trim: true
  },
  bpm: {
    type: Number,
    min: 1,
    max: 300
  },
  key: {
    type: String,
    trim: true
  },
  kitImage: {
    type: String,
    trim: true
  },
  kitFile: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  publish: {
    type: String,
    enum: ['Private', 'Public'],
    default: 'Private'
  },
  seoTitle: {
    type: String,
    trim: true,
    maxlength: 200
  },
  metaKeyword: {
    type: String,
    trim: true,
    maxlength: 500
  },
  metaDescription: {
    type: String,
    trim: true,
    maxlength: 500
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const SoundKit = mongoose.model('SoundKit', soundKitSchema);

// Sound Kit Category Schema
const soundKitCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500
  },
  color: {
    type: String,
    default: '#E100FF',
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const SoundKitCategory = mongoose.model('SoundKitCategory', soundKitCategorySchema);

// Sound Kit Tag Schema
const soundKitTagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500
  },
  color: {
    type: String,
    default: '#FF6B35',
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const SoundKitTag = mongoose.model('SoundKitTag', soundKitTagSchema);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.post('/api/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ 
                success: false, 
                message: 'User with this email already exists' 
            });
        }
        
        // Create new user
        const user = new User({ 
            firstName, 
            lastName, 
            email, 
            password // Note: In production, you should hash the password
        });
        
        await user.save();
        
        res.status(201).json({ 
            success: true, 
            message: 'User created successfully',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                displayName: user.displayName || '',
                location: user.location || '',
                country: user.country || '',
                biography: user.biography || '',
                socialLinks: user.socialLinks || {
                    facebook: '',
                    twitter: '',
                    instagram: '',
                    youtube: '',
                    linkedin: '',
                    website: ''
                }
            }
        });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

app.post('/api/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid email or password' 
            });
        }
        
        // Check password (in production, you should compare hashed passwords)
        if (user.password !== password) {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid email or password' 
            });
        }
        
        res.json({ 
            success: true, 
            message: 'Login successful',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                displayName: user.displayName || '',
                location: user.location || '',
                country: user.country || '',
                biography: user.biography || '',
                socialLinks: user.socialLinks || {
                    facebook: '',
                    twitter: '',
                    instagram: '',
                    youtube: '',
                    linkedin: '',
                    website: ''
                }
            }
        });
    } catch (error) {
        console.error('Signin error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

app.put('/api/profile/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const { firstName, lastName, displayName, location, country, biography, socialLinks } = req.body;
        
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }
        
        // Update user profile
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.displayName = displayName || user.displayName;
        user.location = location || user.location;
        user.country = country || user.country;
        user.biography = biography || user.biography;
        user.socialLinks = socialLinks || user.socialLinks;
        
        await user.save();
        
        res.json({ 
            success: true, 
            message: 'Profile updated successfully',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                displayName: user.displayName,
                location: user.location,
                country: user.country,
                biography: user.biography,
                socialLinks: user.socialLinks
            }
        });
    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

// Track creation endpoint
app.post('/api/tracks', async (req, res) => {
    try {
        console.log('Received track data:', req.body);
        
        const {
            trackName,
            trackId,
            bpm,
            trackKey,
            trackPrice,
            musician,
            trackType,
            moodType,
            energyType,
            instrument,
            generatedTrackPlatform,
            trackImage,
            trackFile,
            about,
            publish,
            genreCategory,
            beatCategory,
            trackTags,
            seoTitle,
            metaKeyword,
            metaDescription
        } = req.body;

        // Check if track with same trackId already exists
        const existingTrack = await Track.findOne({ trackId });
        if (existingTrack) {
            return res.status(400).json({
                success: false,
                message: 'Track with this ID already exists'
            });
        }

        // Create new track with proper data validation
        const trackData = {
            trackName: trackName || '',
            trackId: trackId || '',
            trackType: trackType || '',
            bpm: bpm && !isNaN(parseInt(bpm)) ? parseInt(bpm) : undefined,
            trackKey: trackKey || '',
            trackPrice: trackPrice && !isNaN(parseFloat(trackPrice)) ? parseFloat(trackPrice) : 0,
            musician: musician || '',
            moodType: moodType || '',
            energyType: energyType || '',
            instrument: instrument || '',
            generatedTrackPlatform: generatedTrackPlatform || '',
            trackImage: trackImage || '',
            trackFile: trackFile || '',
            about: about || '',
            publish: publish || 'Private',
            genreCategory: genreCategory || '',
            beatCategory: beatCategory || '',
            trackTags: trackTags || '',
            seoTitle: seoTitle || '',
            metaKeyword: metaKeyword || '',
            metaDescription: metaDescription || ''
        };

        console.log('Creating track with data:', trackData);
        
        const track = new Track(trackData);

        await track.save();

        res.status(201).json({
            success: true,
            message: 'Track created successfully',
            track: {
                id: track._id,
                trackName: track.trackName,
                trackId: track.trackId,
                bpm: track.bpm,
                trackKey: track.trackKey,
                trackPrice: track.trackPrice,
                musician: track.musician,
                trackType: track.trackType,
                moodType: track.moodType,
                energyType: track.energyType,
                instrument: track.instrument,
                generatedTrackPlatform: track.generatedTrackPlatform,
                trackImage: track.trackImage,
                trackFile: track.trackFile,
                about: track.about,
                publish: track.publish,
                genreCategory: track.genreCategory,
                beatCategory: track.beatCategory,
                trackTags: track.trackTags,
                seoTitle: track.seoTitle,
                metaKeyword: track.metaKeyword,
                metaDescription: track.metaDescription,
                createdAt: track.createdAt
            }
        });
    } catch (error) {
        console.error('Track creation error:', error);
        console.error('Error details:', {
            name: error.name,
            message: error.message,
            code: error.code,
            errors: error.errors
        });
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            details: error.message
        });
    }
});

// Get all tracks endpoint
app.get('/api/tracks', async (req, res) => {
    try {
        const tracks = await Track.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            tracks: tracks
        });
    } catch (error) {
        console.error('Get tracks error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Genre API endpoints
app.post('/api/genres', async (req, res) => {
    try {
        console.log('Received genre data:', req.body);
        
        const { name, description, color } = req.body;

        // Check if genre with same name already exists
        const existingGenre = await Genre.findOne({ name: name.trim() });
        if (existingGenre) {
            return res.status(400).json({
                success: false,
                message: 'Genre with this name already exists'
            });
        }

        // Create new genre
        const genre = new Genre({
            name: name.trim(),
            description: description || '',
            color: color || '#7ED7FF'
        });

        await genre.save();

        res.status(201).json({
            success: true,
            message: 'Genre created successfully',
            genre: {
                id: genre._id,
                name: genre.name,
                description: genre.description,
                color: genre.color,
                isActive: genre.isActive,
                createdAt: genre.createdAt
            }
        });
    } catch (error) {
        console.error('Genre creation error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            details: error.message
        });
    }
});

// Get all genres endpoint
app.get('/api/genres', async (req, res) => {
    try {
        const genres = await Genre.find({ isActive: true }).sort({ name: 1 });
        res.json({
            success: true,
            genres: genres
        });
    } catch (error) {
        console.error('Get genres error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Update genre endpoint
app.put('/api/genres/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, color, isActive } = req.body;

        const genre = await Genre.findById(id);
        if (!genre) {
            return res.status(404).json({
                success: false,
                message: 'Genre not found'
            });
        }

        // Check if name is being changed and if it conflicts with existing genre
        if (name && name.trim() !== genre.name) {
            const existingGenre = await Genre.findOne({ name: name.trim(), _id: { $ne: id } });
            if (existingGenre) {
                return res.status(400).json({
                    success: false,
                    message: 'Genre with this name already exists'
                });
            }
        }

        // Update genre
        genre.name = name ? name.trim() : genre.name;
        genre.description = description !== undefined ? description : genre.description;
        genre.color = color || genre.color;
        genre.isActive = isActive !== undefined ? isActive : genre.isActive;
        genre.updatedAt = new Date();

        await genre.save();

        res.json({
            success: true,
            message: 'Genre updated successfully',
            genre: {
                id: genre._id,
                name: genre.name,
                description: genre.description,
                color: genre.color,
                isActive: genre.isActive,
                updatedAt: genre.updatedAt
            }
        });
    } catch (error) {
        console.error('Genre update error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            details: error.message
        });
    }
});

// Delete genre endpoint (soft delete)
app.delete('/api/genres/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const genre = await Genre.findById(id);
        if (!genre) {
            return res.status(404).json({
                success: false,
                message: 'Genre not found'
            });
        }

        // Soft delete by setting isActive to false
        genre.isActive = false;
        genre.updatedAt = new Date();
        await genre.save();

        res.json({
            success: true,
            message: 'Genre deleted successfully'
        });
    } catch (error) {
        console.error('Genre delete error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            details: error.message
        });
    }
});

// Beat API endpoints
app.post('/api/beats', async (req, res) => {
    try {
        console.log('Received beat data:', req.body);
        
        const { name, description, color } = req.body;

        // Check if beat with same name already exists
        const existingBeat = await Beat.findOne({ name: name.trim() });
        if (existingBeat) {
            return res.status(400).json({
                success: false,
                message: 'Beat with this name already exists'
            });
        }

        // Create new beat
        const beat = new Beat({
            name: name.trim(),
            description: description || '',
            color: color || '#E100FF'
        });

        await beat.save();

        res.status(201).json({
            success: true,
            message: 'Beat created successfully',
            beat: {
                id: beat._id,
                name: beat.name,
                description: beat.description,
                color: beat.color,
                isActive: beat.isActive,
                createdAt: beat.createdAt
            }
        });
    } catch (error) {
        console.error('Beat creation error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            details: error.message
        });
    }
});

// Get all beats endpoint
app.get('/api/beats', async (req, res) => {
    try {
        const beats = await Beat.find({ isActive: true }).sort({ name: 1 });
        res.json({
            success: true,
            beats: beats
        });
    } catch (error) {
        console.error('Get beats error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Update beat endpoint
app.put('/api/beats/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, color, isActive } = req.body;

        const beat = await Beat.findById(id);
        if (!beat) {
            return res.status(404).json({
                success: false,
                message: 'Beat not found'
            });
        }

        // Check if name is being changed and if it conflicts with existing beat
        if (name && name.trim() !== beat.name) {
            const existingBeat = await Beat.findOne({ name: name.trim(), _id: { $ne: id } });
            if (existingBeat) {
                return res.status(400).json({
                    success: false,
                    message: 'Beat with this name already exists'
                });
            }
        }

        // Update beat
        beat.name = name ? name.trim() : beat.name;
        beat.description = description !== undefined ? description : beat.description;
        beat.color = color || beat.color;
        beat.isActive = isActive !== undefined ? isActive : beat.isActive;
        beat.updatedAt = new Date();

        await beat.save();

        res.json({
            success: true,
            message: 'Beat updated successfully',
            beat: {
                id: beat._id,
                name: beat.name,
                description: beat.description,
                color: beat.color,
                isActive: beat.isActive,
                updatedAt: beat.updatedAt
            }
        });
    } catch (error) {
        console.error('Beat update error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            details: error.message
        });
    }
});

// Delete beat endpoint (soft delete)
app.delete('/api/beats/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const beat = await Beat.findById(id);
        if (!beat) {
            return res.status(404).json({
                success: false,
                message: 'Beat not found'
            });
        }

        // Soft delete by setting isActive to false
        beat.isActive = false;
        beat.updatedAt = new Date();
        await beat.save();

        res.json({
            success: true,
            message: 'Beat deleted successfully'
        });
    } catch (error) {
        console.error('Beat delete error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            details: error.message
        });
    }
});

// Tag API endpoints
app.post('/api/tags', async (req, res) => {
    try {
        console.log('Received tag data:', req.body);
        
        const { name, description, color } = req.body;

        // Check if tag with same name already exists
        const existingTag = await Tag.findOne({ name: name.trim() });
        if (existingTag) {
            return res.status(400).json({
                success: false,
                message: 'Tag with this name already exists'
            });
        }

        // Create new tag
        const tag = new Tag({
            name: name.trim(),
            description: description || '',
            color: color || '#FF6B35'
        });

        await tag.save();

        res.status(201).json({
            success: true,
            message: 'Tag created successfully',
            tag: {
                id: tag._id,
                name: tag.name,
                description: tag.description,
                color: tag.color,
                isActive: tag.isActive,
                createdAt: tag.createdAt
            }
        });
    } catch (error) {
        console.error('Tag creation error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            details: error.message
        });
    }
});

// Get all tags endpoint
app.get('/api/tags', async (req, res) => {
    try {
        const tags = await Tag.find({ isActive: true }).sort({ name: 1 });
        res.json({
            success: true,
            tags: tags
        });
    } catch (error) {
        console.error('Get tags error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Update tag endpoint
app.put('/api/tags/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, color, isActive } = req.body;

        const tag = await Tag.findById(id);
        if (!tag) {
            return res.status(404).json({
                success: false,
                message: 'Tag not found'
            });
        }

        // Check if name is being changed and if it conflicts with existing tag
        if (name && name.trim() !== tag.name) {
            const existingTag = await Tag.findOne({ name: name.trim(), _id: { $ne: id } });
            if (existingTag) {
                return res.status(400).json({
                    success: false,
                    message: 'Tag with this name already exists'
                });
            }
        }

        // Update tag
        tag.name = name ? name.trim() : tag.name;
        tag.description = description !== undefined ? description : tag.description;
        tag.color = color || tag.color;
        tag.isActive = isActive !== undefined ? isActive : tag.isActive;
        tag.updatedAt = new Date();

        await tag.save();

        res.json({
            success: true,
            message: 'Tag updated successfully',
            tag: {
                id: tag._id,
                name: tag.name,
                description: tag.description,
                color: tag.color,
                isActive: tag.isActive,
                updatedAt: tag.updatedAt
            }
        });
    } catch (error) {
        console.error('Tag update error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            details: error.message
        });
    }
});

// Delete tag endpoint (soft delete)
app.delete('/api/tags/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const tag = await Tag.findById(id);
        if (!tag) {
            return res.status(404).json({
                success: false,
                message: 'Tag not found'
            });
        }

        // Soft delete by setting isActive to false
        tag.isActive = false;
        tag.updatedAt = new Date();
        await tag.save();

        res.json({
            success: true,
            message: 'Tag deleted successfully'
        });
    } catch (error) {
        console.error('Tag delete error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            details: error.message
        });
    }
});

// Sound Kit API endpoints
app.post('/api/sound-kits', async (req, res) => {
    try {
        console.log('Received sound kit data:', req.body);
        
        const {
            kitName,
            kitId,
            description,
            category,
            price,
            producer,
            kitType,
            bpm,
            key,
            kitImage,
            kitFile,
            tags,
            publish,
            seoTitle,
            metaKeyword,
            metaDescription
        } = req.body;

        // Check if sound kit with same kitId already exists
        const existingSoundKit = await SoundKit.findOne({ kitId });
        if (existingSoundKit) {
            return res.status(400).json({
                success: false,
                message: 'Sound kit with this ID already exists'
            });
        }

        // Create new sound kit with proper data validation
        const soundKitData = {
            kitName: kitName || '',
            kitId: kitId || '',
            description: description || '',
            category: category || '',
            price: price && !isNaN(parseFloat(price)) ? parseFloat(price) : 0,
            producer: producer || '',
            kitType: kitType || '',
            bpm: bpm && !isNaN(parseInt(bpm)) ? parseInt(bpm) : undefined,
            key: key || '',
            kitImage: kitImage || '',
            kitFile: kitFile || '',
            tags: tags || [],
            publish: publish || 'Private',
            seoTitle: seoTitle || '',
            metaKeyword: metaKeyword || '',
            metaDescription: metaDescription || ''
        };

        console.log('Creating sound kit with data:', soundKitData);
        
        const soundKit = new SoundKit(soundKitData);

        await soundKit.save();

        res.status(201).json({
            success: true,
            message: 'Sound kit created successfully',
            soundKit: {
                id: soundKit._id,
                kitName: soundKit.kitName,
                kitId: soundKit.kitId,
                description: soundKit.description,
                category: soundKit.category,
                price: soundKit.price,
                producer: soundKit.producer,
                kitType: soundKit.kitType,
                bpm: soundKit.bpm,
                key: soundKit.key,
                kitImage: soundKit.kitImage,
                kitFile: soundKit.kitFile,
                tags: soundKit.tags,
                publish: soundKit.publish,
                seoTitle: soundKit.seoTitle,
                metaKeyword: soundKit.metaKeyword,
                metaDescription: soundKit.metaDescription,
                createdAt: soundKit.createdAt
            }
        });
    } catch (error) {
        console.error('Sound kit creation error:', error);
        console.error('Error details:', {
            name: error.name,
            message: error.message,
            code: error.code,
            errors: error.errors
        });
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            details: error.message
        });
    }
});

// Get all sound kits endpoint
app.get('/api/sound-kits', async (req, res) => {
    try {
        const soundKits = await SoundKit.find({ isActive: true }).sort({ createdAt: -1 });
        res.json({
            success: true,
            soundKits: soundKits
        });
    } catch (error) {
        console.error('Get sound kits error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Sound Kit Category API endpoints
app.post('/api/sound-kit-categories', async (req, res) => {
    try {
        const { name, description, color } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'Category name is required'
            });
        }

        const category = new SoundKitCategory({
            name: name.trim(),
            description: description || '',
            color: color || '#00D4FF'
        });

        await category.save();

        res.status(201).json({
            success: true,
            message: 'Sound kit category created successfully',
            category: {
                id: category._id,
                name: category.name,
                description: category.description,
                color: category.color,
                isActive: category.isActive,
                createdAt: category.createdAt
            }
        });
    } catch (error) {
        console.error('Create sound kit category error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

app.get('/api/sound-kit-categories', async (req, res) => {
    try {
        const categories = await SoundKitCategory.find({ isActive: true }).sort({ createdAt: -1 });
        res.json({
            success: true,
            categories: categories
        });
    } catch (error) {
        console.error('Get sound kit categories error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

app.put('/api/sound-kit-categories/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, color, isActive } = req.body;

        const category = await SoundKitCategory.findById(id);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }

        if (name) category.name = name.trim();
        if (description !== undefined) category.description = description;
        if (color) category.color = color;
        if (isActive !== undefined) category.isActive = isActive;
        category.updatedAt = new Date();

        await category.save();

        res.json({
            success: true,
            message: 'Sound kit category updated successfully',
            category: {
                id: category._id,
                name: category.name,
                description: category.description,
                color: category.color,
                isActive: category.isActive,
                updatedAt: category.updatedAt
            }
        });
    } catch (error) {
        console.error('Update sound kit category error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

app.delete('/api/sound-kit-categories/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const category = await SoundKitCategory.findById(id);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }

        // Soft delete
        category.isActive = false;
        category.updatedAt = new Date();
        await category.save();

        res.json({
            success: true,
            message: 'Sound kit category deleted successfully'
        });
    } catch (error) {
        console.error('Delete sound kit category error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Sound Kit Tag API endpoints
app.post('/api/sound-kit-tags', async (req, res) => {
    try {
        const { name, description, color } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'Tag name is required'
            });
        }

        const tag = new SoundKitTag({
            name: name.trim(),
            description: description || '',
            color: color || '#FF6B35'
        });

        await tag.save();

        res.status(201).json({
            success: true,
            message: 'Sound kit tag created successfully',
            tag: {
                id: tag._id,
                name: tag.name,
                description: tag.description,
                color: tag.color,
                isActive: tag.isActive,
                createdAt: tag.createdAt
            }
        });
    } catch (error) {
        console.error('Create sound kit tag error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

app.get('/api/sound-kit-tags', async (req, res) => {
    try {
        const tags = await SoundKitTag.find({ isActive: true }).sort({ createdAt: -1 });
        res.json({
            success: true,
            tags: tags
        });
    } catch (error) {
        console.error('Get sound kit tags error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

app.put('/api/sound-kit-tags/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, color, isActive } = req.body;

        const tag = await SoundKitTag.findById(id);
        if (!tag) {
            return res.status(404).json({
                success: false,
                message: 'Tag not found'
            });
        }

        if (name) tag.name = name.trim();
        if (description !== undefined) tag.description = description;
        if (color) tag.color = color;
        if (isActive !== undefined) tag.isActive = isActive;
        tag.updatedAt = new Date();

        await tag.save();

        res.json({
            success: true,
            message: 'Sound kit tag updated successfully',
            tag: {
                id: tag._id,
                name: tag.name,
                description: tag.description,
                color: tag.color,
                isActive: tag.isActive,
                updatedAt: tag.updatedAt
            }
        });
    } catch (error) {
        console.error('Update sound kit tag error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

app.delete('/api/sound-kit-tags/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const tag = await SoundKitTag.findById(id);
        if (!tag) {
            return res.status(404).json({
                success: false,
                message: 'Tag not found'
            });
        }

        // Soft delete
        tag.isActive = false;
        tag.updatedAt = new Date();
        await tag.save();

        res.json({
            success: true,
            message: 'Sound kit tag deleted successfully'
        });
    } catch (error) {
        console.error('Delete sound kit tag error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});