import app from './app.js';

async function main() {
  try {
    app.listen(4200);
    console.log('Server is listening on port', 4200);
  } catch (error) {
    console.log('Unable to connect to database: ', error);
  }
}

main();

