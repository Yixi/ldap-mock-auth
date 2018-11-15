const ldap = require('ldapjs')

const server = ldap.createServer();

const users = [
    {username: 'cn=user1', pwd: '123456'},
    {username: 'cn=user2', pwd: '123456'},
    {username: 'cn=user3', pwd: '123456'},
    {username: 'cn=user4', pwd: '123456'},
    {username: 'cn=user5', pwd: '123456'}
]

users.forEach(user => {
    server.bind(user.username, function(req, res, next) {
        if (req.dn.toString() !== user.username || req.credentials !== user.pwd) {
            return next(new ldap.InvalidCredentialsError());
        }
    
        res.end();
        return next()
    })
})


server.listen(1389, function() {
    console.log('LDAP server up at: %s', server.url)
})