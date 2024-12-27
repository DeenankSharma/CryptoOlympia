import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const agg = process.env.AGGREGATOR
const pub = process.env.PUBLISHER

async function uploadBLOB(data) {
    const store_url = `${agg}/v1/store`
    const response = await axios.put(
      store_url,
      data
    )
    return response.data
  }
  
async function downloadBLOB(blob_id) {
    const store_url = `${pub}/v1/${blob_id}`
    const response = await axios.get(
      store_url
    )
    return response.data
  }

export { uploadBLOB , downloadBLOB }
