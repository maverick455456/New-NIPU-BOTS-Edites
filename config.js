require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'MONEY-HEIST-MD-lKecVxiSAJMf6uw-DILALK',
  OWNER_NUMBER: process.env.OWNER_NUMBER || '94727255904',
  PREFIX: process.env.PREFIX || '.',
  PORT: process.env.PORT || 8000,
  BOT_NAME: process.env.BOT_NAME || 'MoneyHeistBot'
};
