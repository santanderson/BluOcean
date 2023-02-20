const Songs = require('../models/SongModel');

const SongsController = {
    
    create: async (req, res) => {
        const {name, url, songUserId} = req.body

        if(!name) return res.status(500).json({ message: 'Fill in the name field'})

        if(!url) return res.status(500).json({ message: 'Fill in the url field'})

        const song = {
            name,
            url,
            songUserId
        }

        try{
            await Songs.create(song)

            await res.status(201).json({ message: `Música adicionada com sucesso!` })
        }catch(error) {
            res.status(500).json({ erro: error })
        }
    },

    getting: async (req, res) => {
        try {
            const song = await Songs.find()

            res.status(200).json(song)
          } catch (error) {
            res.status(500).json({ erro: error })
          }
    },

    gettingByUser: async (req, res) => {
        const userId = req.body.userId

        try {
            const song = await Songs.find({songUserId: userId})
        
            res.status(200).json(song)
          } catch (error) {
            res.status(500).json({ erro: error })
          }
    },

    delete: async (req, res) => {
        const {userId, songId} = req.body

        try {
            const song = await Songs.findOne({_id: songId})

            if(song.songUserId !== userId) return res.status(422).json({msg: "Você não pode apagar a música selecionada!"})
        
            song.delete();
            res.status(200).json({msg: "Música apagada!"})
          } catch (error) {
            res.status(500).json({ erro: error })
          }
    }
}

module.exports = SongsController