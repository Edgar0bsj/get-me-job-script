const rioVagasCore = require("../services/jobsTodayService/core");

async function jobsToday(req, res) {

    try {
        const urls = "https://riovagas.com.br/category/riovagas/"
        const result = await rioVagasCore(urls)
        
        res.json(result)
        
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar dados" });
    }


}


module.exports = jobsToday;