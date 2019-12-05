import Config from '../config';
const axios = require('axios');

const CAMPAIGN_ENDPOINT = `${Config.ServiceEndpoint}/campaign`;
export async function getAllCampaigns() {
    // return GetDummyCampaigns();

    let fetchedCampaigns = new Array();
    try {
        let response = await axios.get(CAMPAIGN_ENDPOINT);
        response.data.forEach((album: any) => {
            fetchedCampaigns.push(album);
        });
    } catch (error) {
        throw error;
    }
    return fetchedCampaigns;
}

export async function addCampaign(campaign: any) {

    try {
        var res = await axios.post(CAMPAIGN_ENDPOINT, campaign);
        return res.data;
    } catch (error) {
        throw error;
    }
}
export async function updateCampaign(campaign: any) {
    try {
        let endpoint = `${CAMPAIGN_ENDPOINT}/${campaign._id}`
        var res = await axios.put(endpoint, campaign);
        return res.data;
    } catch (error) {
        throw error;
    }
}
export async function deleteCampaign(campaign: any) {
    try {
        let endpoint = `${CAMPAIGN_ENDPOINT}/${campaign._id}`
        return await axios.delete(endpoint, campaign);
    } catch (error) {
        throw error;
    }
}