import Link from '../models/link.js'


const shortCodeGen = (length) => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let shortCode = '';
    for (let i = 0; i < length; i++) {
        shortCode += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return shortCode;
}

// API to shorten a URL
const shrunkURL = async (req, res) => {
    const { link } = req.body;
    try {
        let exist = await Link.findOne({ link: link })

        if (exist) {
            let shortCode = exist.shortCode
            return res.json({ success: true, uRL: `${process.env.BASE_URL}/link/${shortCode}` })
        }
        const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+([a-zA-Z]{2,})(\/.*)?$/;
        if (!urlPattern.test(link)) {
            return res.status(400).json({ success: false, message: "Invalid URL" });
        }

        let shortCode;
        let duplicate;

        do {
            shortCode = shortCodeGen(8)
            duplicate = await Link.findOne({ shortCode: shortCode })
        } while (duplicate);

        await Link.create({ link, shortCode })
        let uRL = `${process.env.BASE_URL}/link/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa${shortCode}`
        res.json({ success: true, uRL: uRL })
    }
    catch (error) {
        res.json({ success: false, error: error.message })
    }
}


// API to redirect to the shortURL

const redirect = async (req, res) => {

    const shortCode = req.params.shortCode;

    try {
        let URL = await Link.findOne({ shortCode: shortCode })


        if (URL) {
            await Link.findOneAndUpdate({ shortCode: shortCode }, {
                $inc: { clicks: 1 }
            })
            return res.redirect(URL.link)
        }


        res.json({ success: true, message: "URL doesn't exist" })
    }
    catch (error) {
        res.json({ success: false, error: error.message })
        console.log(error);

    }
}

export { shrunkURL, redirect }