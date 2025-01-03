module.exports = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(403).json({ error: 'Acesso negado!' });
    }
  
    if (token !== 'seu-token-seguro') {
      return res.status(401).json({ error: 'Token invalido!' });
    }
  
    next();
  };
  