const app = require('express')();
const supabase = require('./supabase');

app.get('/', (req,res) => res.send('Hello World'));

app.post('/github', async (req,res) => {
    const {user, session, error} = await supabase.auth.signIn({
        provider: 'github'
    })

    if(error) {
        return res.status(401).json(error);
    }

    return res.status(200).json(user);
})

module.exports = app;