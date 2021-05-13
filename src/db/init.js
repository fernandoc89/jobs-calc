// configurações iniciais do db, que vai rodar apenas uma vez para criar o banco

const Database = require('./config');

// async fala que dentro da estrutura existem awaits | await espera uma coisa ser executada para ir para a proxima
const initDb = {
  async init() {

    const db = await Database();

    await db.exec(`CREATE TABLE profile(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      monthly_budget INT,
      days_per_week INT,
      hours_per_day INT,
      vacation_per_year INT,
      value_hour INT
    )`);

    await db.exec(`CREATE TABLE jobs(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      daily_hours INT,
      total_hours INT,
      created_at DATETIME
    )`);

    await db.run(`INSERT INTO profile(
      name,
      avatar, 
      monthly_budget,
      days_per_week,
      hours_per_day,
      vacation_per_year,
      value_hour
    ) VALUES (
      "Fernando Cardoso",
      "http://github.com/fernandoc89.png",
      3000,
      5,
      5,
      4,
      70
    )`);

        await db.run(`INSERT INTO jobs(
      name,
      daily_hours,
      total_hours,
      created_at
    ) VALUES (
      "Pizzaria Guloso",
      2,
      1,
      1617514376018
    )`);

        await db.run(`INSERT INTO jobs(
      name,
      daily_hours,
      total_hours,
      created_at
    ) VALUES (
      "OneTwo Projects",
      3,
      47,
      1617514376018
    )`);

    await db.close();

  }
};

initDb.init();