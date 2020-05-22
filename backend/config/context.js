module.exports = async ({ req }) => {
  // Em desenvolvimento
  await require('./simularUsuarioLogado')(req)
  
  const auth = req.headers.authorization
}