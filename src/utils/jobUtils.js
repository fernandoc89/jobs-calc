module.exports = {
  // função para calcular o tempo (dias)
  remainingDays(job) {

    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();   // pegado as hora totais e dividindo por horas diáris | toFixed serve para arredondar

    const createdDate = new Date(job.created_at); // pegando a data de criação
    const dueDay = createdDate.getDate() + Number(remainingDays); // calculando o dia do futuro
    const dueDateInMs = createdDate.setDate(dueDay)  // setando a data do futuro

    // tempo de diferença em milisegundos
    const timeDiffInMs = dueDateInMs - Date.now();

    // transformar milisegundos em dias
    const dayInMs = 1000 * 60 * 60 * 24

    // diferença em dias
    const dayDiff = Math.floor(timeDiffInMs / dayInMs);

    // restam x dias
    return dayDiff;
  },

  calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
}