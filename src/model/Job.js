const Database = require('../db/config');

module.exports = {
  async get() {
    const db = await Database();

    //.all traz todos os registros
    const jobs = await db.all(`SELECT * FROM jobs`);

    await db.close();

    // Normalização
    // map pega os itens do array e retorno em um novo array | job é a variável referente a cada item
    return jobs.map((job) => ({
      id: job.id,
      name: job.name,
      "daily-hours": job.daily_hours,
      "total-hours": job.total_hours,
      created_at: job.created_at
    }));
  },

  async update(updatedJob, jobId) {
    const db = await Database();

    await db.run(`UPDATE jobs SET 
        name = "${updatedJob.name}",
        daily_hours = ${updatedJob["daily-hours"]},
        total_hours = ${updatedJob["total-hours"]}
        WHERE id = ${jobId}
    `);

    await db.close();
  },

  async delete(id) {
    const db = await Database();

    db.run(`DELETE FROM jobs WHERE id = ${id}`)

    await db.close();
  },

  async create(newJob) {
    const db = await Database();

    await db.run(`INSERT INTO jobs (
      name,
      daily_hours,
      total_hours,
      created_at
    ) VALUES (
      "${newJob.name}",
      ${newJob["daily-hours"]},
      ${newJob["total-hours"]},
      ${newJob.created_at}
    )`);

    await db.close();

  }
}